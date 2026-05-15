import { ReactNode, useEffect, useMemo, useState } from "react";
import { activities, trails } from "./data";
import { calculateAccuracy, calculateAverageTime, recommendNextStep } from "./recommendation";
import type {
  Activity,
  LearningTrail,
  PerformanceRecord,
  Route,
  Student
} from "./types";

const initialWorkspace = {
  institution: "UDF",
  className: "Ciência da Computação",
  goal: "Reforçar algoritmos, abstração e sistemas de larga escala"
};

type Workspace = typeof initialWorkspace;
type AuthStatus = "signedIn" | "signedOut";

type AppProps = {
  authStatus?: AuthStatus;
  authLabel?: string;
  signInControl?: ReactNode;
  userControl?: ReactNode;
  userName?: string;
};

type SubmissionFeedback = {
  correct: boolean;
  title: string;
  trailId: string;
};

const initialStudent: Student = {
  name: "Aluno",
  level: "iniciante",
  streak: 0
};

const routeLabels: Record<Route, string> = {
  inicio: "Início",
  trilhas: "Trilhas",
  painel: "Painel",
  atividade: "Atividade",
  historico: "Histórico",
  configuracoes: "Configurações"
};

const difficultyLabels: Record<Student["level"], string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado"
};

const actionLabels: Record<"avancar" | "revisar" | "praticar", string> = {
  avancar: "Avançar",
  revisar: "Revisar",
  praticar: "Praticar"
};

const themes = [
  {
    id: "default",
    name: "Moderno",
    swatches: ["#315fd8", "#12b981", "#f5f7fb"]
  },
  {
    id: "dark",
    name: "Escuro",
    swatches: ["#0b1020", "#38bdf8", "#f59e0b"]
  },
  {
    id: "pastel",
    name: "Pastel",
    swatches: ["#f8a4c8", "#8bd3dd", "#fff8e7"]
  },
  {
    id: "earth",
    name: "Terroso",
    swatches: ["#2f4f3f", "#c26a38", "#f3e4c7"]
  },
  {
    id: "vibrant",
    name: "Vibrante",
    swatches: ["#0047ff", "#ff2e63", "#ffe600"]
  },
  {
    id: "strong",
    name: "Cores fortes",
    swatches: ["#231942", "#ff6b35", "#00d4ff"]
  },
  {
    id: "brutal",
    name: "Neo brutalism",
    swatches: ["#111111", "#ffcf24", "#57e389"]
  },
  {
    id: "editorial",
    name: "Editorial",
    swatches: ["#1f1a17", "#b3261e", "#f7f0df"]
  },
  {
    id: "aurora",
    name: "Aurora Glass",
    swatches: ["#0f172a", "#67e8f9", "#f0abfc"]
  }
] as const;

const officialReferences = [
  {
    label: "eMAG - acessibilidade digital",
    href: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/modelo-de-acessibilidade"
  },
  {
    label: "ANPD - dados pessoais para fins acadêmicos",
    href: "https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-lanca-guia-orientativo-sobre-tratamento-de-dados-pessoais-para-fins-academicos"
  },
  {
    label: "Governo Digital - privacidade e segurança",
    href: "https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/legislacao-federal/legislacao"
  }
];

type ThemeId = (typeof themes)[number]["id"];

const storageKeys = {
  records: "studyflow-records",
  student: "studyflow-student",
  theme: "studyflow-theme",
  workspace: "studyflow-workspace"
} as const;

function readStoredValue<T>(key: string, fallback: T, isValid: (value: unknown) => value is T): T {
  try {
    const savedValue = window.localStorage.getItem(key);
    if (!savedValue) {
      return fallback;
    }

    const parsedValue: unknown = JSON.parse(savedValue);
    return isValid(parsedValue) ? parsedValue : fallback;
  } catch {
    window.localStorage.removeItem(key);
    return fallback;
  }
}

function isThemeId(value: unknown): value is ThemeId {
  return typeof value === "string" && themes.some((item) => item.id === value);
}

function isStudent(value: unknown): value is Student {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Student;
  return (
    typeof candidate.name === "string" &&
    difficultyLabels[candidate.level] !== undefined &&
    typeof candidate.streak === "number"
  );
}

function isWorkspace(value: unknown): value is Workspace {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Workspace;
  return (
    typeof candidate.institution === "string" &&
    typeof candidate.className === "string" &&
    typeof candidate.goal === "string"
  );
}

function isPerformanceRecords(value: unknown): value is PerformanceRecord[] {
  return (
    Array.isArray(value) &&
    value.every((record) => {
      const candidate = record as PerformanceRecord;
      return (
        typeof candidate.activityId === "number" &&
        typeof candidate.trailId === "string" &&
        typeof candidate.topic === "string" &&
        typeof candidate.title === "string" &&
        typeof candidate.correct === "boolean" &&
        typeof candidate.responseSeconds === "number" &&
        difficultyLabels[candidate.difficulty] !== undefined
      );
    })
  );
}

function findNextActivity(
  records: PerformanceRecord[],
  nextDifficulty: Student["level"],
  trailActivities: Activity[]
): Activity {
  const completedIds = new Set(records.map((record) => record.activityId));
  return (
    trailActivities.find(
      (activity) => activity.difficulty === nextDifficulty && !completedIds.has(activity.id)
    ) ??
    trailActivities.find((activity) => !completedIds.has(activity.id)) ??
    trailActivities[0]
  );
}

function formatTimer(seconds: number) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function isCodeActivity(activity: Activity) {
  return activity.type === "code";
}

function normalizeCodeSnippet(value: string) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function assessCodeActivity(activity: Activity, answer: string) {
  if (!isCodeActivity(activity)) {
    return { blocked: [] as string[], matched: [] as string[], missing: [] as string[], score: 0 };
  }

  const normalizedAnswer = normalizeCodeSnippet(answer);
  const matched = activity.expectedKeywords.filter((keyword) =>
    normalizedAnswer.includes(normalizeCodeSnippet(keyword))
  );
  const missing = activity.expectedKeywords.filter((keyword) => !matched.includes(keyword));
  const blocked = (activity.forbiddenKeywords ?? []).filter((keyword) =>
    normalizedAnswer.includes(normalizeCodeSnippet(keyword))
  );
  const keywordScore =
    activity.expectedKeywords.length === 0
      ? 0
      : Math.round((matched.length / activity.expectedKeywords.length) * 100);
  const score = blocked.length > 0 ? Math.min(keywordScore, 45) : keywordScore;

  return { blocked, matched, missing, score };
}

function getTrailProgress(trail: LearningTrail, records: PerformanceRecord[]) {
  const total = activities.filter((activity) => activity.trailId === trail.id).length;
  const completed = new Set(
    records.filter((record) => record.trailId === trail.id).map((record) => record.activityId)
  ).size;
  return {
    completed,
    total,
    percent: total === 0 ? 0 : Math.round((completed / total) * 100)
  };
}

export default function App({
  authLabel = "Modo demonstração",
  authStatus = "signedIn",
  signInControl,
  userControl,
  userName = "Aluno"
}: AppProps) {
  const [route, setRoute] = useState<Route>("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeId>(() => {
    const savedTheme = window.localStorage.getItem(storageKeys.theme);
    return isThemeId(savedTheme) ? savedTheme : "default";
  });
  const [selectedTrailId, setSelectedTrailId] = useState(trails[0].id);
  const [student, setStudent] = useState<Student>(() => {
    return readStoredValue(storageKeys.student, { ...initialStudent, name: userName }, isStudent);
  });
  const [workspace, setWorkspace] = useState<Workspace>(() => {
    return readStoredValue(storageKeys.workspace, initialWorkspace, isWorkspace);
  });
  const [records, setRecords] = useState<PerformanceRecord[]>(() => {
    return readStoredValue(storageKeys.records, [], isPerformanceRecords);
  });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [activityStarted, setActivityStarted] = useState(false);
  const [codeAnswer, setCodeAnswer] = useState("");
  const [lastSubmission, setLastSubmission] = useState<SubmissionFeedback | null>(null);

  const selectedTrail = trails.find((trail) => trail.id === selectedTrailId) ?? trails[0];
  const trailActivities = activities.filter((activity) => activity.trailId === selectedTrail.id);
  const trailRecords = records.filter((record) => record.trailId === selectedTrail.id);
  const recommendation = useMemo(
    () => recommendNextStep(student.level, trailRecords.slice(-5)),
    [student.level, trailRecords]
  );
  const currentActivity = useMemo(
    () => findNextActivity(trailRecords, recommendation.nextDifficulty, trailActivities),
    [recommendation.nextDifficulty, trailActivities, trailRecords]
  );
  const codeAssessment = useMemo(
    () => assessCodeActivity(currentActivity, codeAnswer),
    [codeAnswer, currentActivity]
  );
  const accuracy = calculateAccuracy(records);
  const trailAccuracy = calculateAccuracy(trailRecords);
  const averageTime = calculateAverageTime(records);
  const trailAverageTime = calculateAverageTime(trailRecords);
  const completed = records.length;
  const currentProgress = getTrailProgress(selectedTrail, records);
  const completedTrails = trails.filter((trail) => getTrailProgress(trail, records).percent === 100).length;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKeys.theme, theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.student, JSON.stringify(student));
  }, [student]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.workspace, JSON.stringify(workspace));
  }, [workspace]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.records, JSON.stringify(records));
  }, [records]);

  useEffect(() => {
    if (!activityStarted || startedAt === null) {
      return;
    }

    const timer = window.setInterval(() => {
      setElapsedSeconds(Math.round((Date.now() - startedAt) / 1000));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [activityStarted, startedAt]);

  useEffect(() => {
    setActivityStarted(false);
    setStartedAt(null);
    setElapsedSeconds(0);
    setSelectedOption(null);
    setCodeAnswer(isCodeActivity(currentActivity) ? currentActivity.starterCode : "");
  }, [currentActivity.id]);

  function startActivity() {
    setActivityStarted(true);
    setLastSubmission(null);
    setSelectedOption(null);
    setCodeAnswer(isCodeActivity(currentActivity) ? currentActivity.starterCode : "");
    setStartedAt(Date.now());
    setElapsedSeconds(0);
  }

  function navigate(nextRoute: Route) {
    setRoute(nextRoute);
    setIsMobileMenuOpen(false);
  }

  function openTrail(trailId: string) {
    setSelectedTrailId(trailId);
    setLastSubmission(null);
    setRoute("atividade");
    setIsMobileMenuOpen(false);
  }

  function submitAnswer() {
    if (!activityStarted || startedAt === null) {
      return;
    }

    if (!isCodeActivity(currentActivity) && selectedOption === null) {
      return;
    }

    if (isCodeActivity(currentActivity) && codeAnswer.trim().length < 24) {
      return;
    }

    const responseSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
    const correct = isCodeActivity(currentActivity)
      ? codeAssessment.score >= 70 && codeAssessment.blocked.length === 0
      : selectedOption === currentActivity.correctOption;
    const nextRecords = [
      ...records,
      {
        activityId: currentActivity.id,
        trailId: currentActivity.trailId,
        topic: currentActivity.topic,
        title: currentActivity.title,
        correct,
        responseSeconds,
        difficulty: currentActivity.difficulty
      }
    ];
    const nextTrailRecords = nextRecords.filter((record) => record.trailId === selectedTrail.id);
    const nextRecommendation = recommendNextStep(student.level, nextTrailRecords.slice(-5));

    setRecords(nextRecords);
    setLastSubmission({
      correct,
      title: currentActivity.title,
      trailId: currentActivity.trailId
    });
    setStudent((current) => ({
      ...current,
      level: nextRecommendation.nextDifficulty,
      streak: correct ? current.streak + 1 : 0
    }));
    setSelectedOption(null);
    setCodeAnswer("");
    setActivityStarted(false);
    setStartedAt(null);
    setElapsedSeconds(0);
    setIsMobileMenuOpen(false);
  }

  function resetWorkspace() {
    setRoute("inicio");
    setSelectedTrailId(trails[0].id);
    setStudent({ ...initialStudent, name: userName });
    setWorkspace(initialWorkspace);
    setRecords([]);
    setSelectedOption(null);
    setCodeAnswer("");
    setActivityStarted(false);
    setStartedAt(null);
    setElapsedSeconds(0);
    setLastSubmission(null);
  }

  function renderLogin() {
    return (
      <main className="auth-shell">
        <section className="auth-hero">
          <span className="brand-mark">SF</span>
          <p className="eyebrow">Pensamento Computacional</p>
          <h1>Trilhas de aprendizagem que se adaptam ao seu ritmo.</h1>
          <p>
            Explore algoritmos, padrões, código prático e sistemas de larga escala. O sistema aprende com cada resposta e recomenda o próximo passo ideal para você.
          </p>
          <div className="auth-badges">
            <span>5 trilhas</span>
            <span>Recomendação ativa</span>
            <span>Tempo real</span>
          </div>
        </section>

        <section className="auth-card">
          <div>
            <p className="eyebrow">Acesso seguro</p>
            <h2>Entrar no StudyFlow</h2>
          </div>

          {signInControl ?? (
            <button className="primary-button" type="button" disabled>
              Login indisponível
            </button>
          )}

          <p className="auth-note">
            Autenticação real com Clerk: escolha entre e-mail, Google, GitHub ou outros provedores.
            Até 10.000 usuários ativos mensais no plano gratuito.
          </p>
        </section>
      </main>
    );
  }

  function renderMetrics() {
    return (
      <section className="metrics-grid" aria-label="Resumo do aluno">
        <article className="metric-card accent-blue">
          <span>Nível atual</span>
          <strong>{difficultyLabels[student.level]}</strong>
        </article>
        <article className="metric-card accent-green">
          <span>Taxa geral</span>
          <strong>{accuracy}%</strong>
        </article>
        <article className="metric-card accent-yellow">
          <span>Tempo médio</span>
          <strong>{averageTime}s</strong>
        </article>
        <article className="metric-card accent-pink">
          <span>Trilhas completas</span>
          <strong>{completedTrails}/{trails.length}</strong>
        </article>
      </section>
    );
  }

  function renderHome() {
    return (
      <>
        <section className="hero-panel">
          <div>
            <p className="eyebrow">Aprendizagem adaptativa</p>
            <h1>Um sistema inteligente que aprende com cada aluno.</h1>
            <p>
              Trilhas personalizadas que se ajustam em tempo real. Quanto mais o aluno interage, mais precisa fica a recomendação do próximo passo. Ideal para turmas de computação e pensamento lógico.
            </p>
          </div>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={() => navigate("trilhas")}>
              Selecionar trilha
            </button>
            <button className="ghost-button" type="button" onClick={() => navigate("painel")}>
              Abrir painel
            </button>
          </div>
        </section>

        {renderMetrics()}

        <section className="quick-grid" aria-label="Ações principais">
          <button className="quick-card" type="button" onClick={() => navigate("trilhas")}>
            <span>01</span>
            <strong>Selecionar trilha</strong>
            <p>Escolha um objetivo de aprendizagem antes de entrar no ambiente de atividade.</p>
          </button>
          <button className="quick-card" type="button" onClick={() => navigate("painel")}>
            <span>02</span>
            <strong>Acompanhar painel</strong>
            <p>Visualize progresso, desempenho recente e recomendação pedagógica.</p>
          </button>
        </section>
      </>
    );
  }

  function renderTrails() {
    return (
      <section className="page-stack">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Catálogo de trilhas</p>
            <h2>Escolha o foco antes de iniciar uma atividade</h2>
          </div>
          <button className="ghost-button" type="button" onClick={() => navigate("painel")}>
            Ver painel
          </button>
        </div>

        <div className="trail-grid">
          {trails.map((trail) => {
            const progress = getTrailProgress(trail, records);
            return (
              <article className={`trail-card ${trail.color}`} key={trail.id}>
                <span>{progress.percent}% concluído</span>
                <h3>{trail.title}</h3>
                <p>{trail.description}</p>
                <small>{trail.target}</small>
                <div className="progress-track" aria-label={`Progresso de ${trail.title}`}>
                  <div style={{ width: `${progress.percent}%` }} />
                </div>
                <button className="primary-button" type="button" onClick={() => openTrail(trail.id)}>
                  {progress.completed > 0 ? "Continuar trilha" : "Iniciar trilha"}
                </button>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  function renderDashboard() {
    return (
      <section className="page-stack">
        {renderMetrics()}

        <section className="setup-panel" aria-label="Configuração do aluno">
          <label>
            <span>Aluno</span>
            <input
              onChange={(event) => setStudent((current) => ({ ...current, name: event.target.value }))}
              value={student.name}
            />
          </label>
          <label>
            <span>Instituição</span>
            <input
              onChange={(event) =>
                setWorkspace((current) => ({ ...current, institution: event.target.value }))
              }
              value={workspace.institution}
            />
          </label>
          <label>
            <span>Curso/Turma</span>
            <input
              onChange={(event) =>
                setWorkspace((current) => ({ ...current, className: event.target.value }))
              }
              value={workspace.className}
            />
          </label>
        </section>

        <section className="dashboard-grid">
          <article className="activity-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Trilha ativa</p>
                <h2>{selectedTrail.title}</h2>
              </div>
              <span className="difficulty">{currentProgress.percent}%</span>
            </div>
            <p className="muted-text">{selectedTrail.description}</p>
            <div className="progress-track large">
              <div style={{ width: `${currentProgress.percent}%` }} />
            </div>
            <div className="live-row">
              <div>
                <span>Acerto na trilha</span>
                <strong>{trailAccuracy}%</strong>
              </div>
              <div>
                <span>Tempo médio</span>
                <strong>{trailAverageTime}s</strong>
              </div>
            </div>
            <button className="primary-button" type="button" onClick={() => navigate("atividade")}>
              Abrir ambiente da trilha
            </button>
          </article>

          <aside className="insights-panel">
            <div className={`recommendation ${recommendation.action}`}>
              <span>Próxima decisão</span>
              <strong>{actionLabels[recommendation.action]}</strong>
              <p>{recommendation.message}</p>
            </div>
            <div className="module-list">
              <h3>Plano da turma</h3>
              <p>{workspace.goal}</p>
              <ul>
                <li>Monitorar tempo real apenas após iniciar atividade</li>
                <li>Identificar erros recorrentes por conteúdo</li>
                <li>Ajustar dificuldade conforme desempenho recente</li>
              </ul>
            </div>
          </aside>
        </section>
      </section>
    );
  }

  function renderActivity() {
    return (
      <section className="content-grid">
        <article className="activity-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">{selectedTrail.title}</p>
              <h2>{activityStarted ? currentActivity.title : "Ambiente da trilha"}</h2>
            </div>
            <span className="difficulty">{difficultyLabels[currentActivity.difficulty]}</span>
          </div>

          {!activityStarted ? (
            <div className="activity-start">
              <p>
                Esta área não inicia a contagem automaticamente. Primeiro revise a trilha ativa,
                confira a próxima atividade sugerida e clique em iniciar quando estiver pronto.
              </p>
              <div className="activity-preview">
                <span>Próxima atividade</span>
                <strong>{currentActivity.title}</strong>
                <small>{currentActivity.topic} · estimativa de {currentActivity.estimatedMinutes} min</small>
              </div>
              {lastSubmission?.trailId === selectedTrail.id && (
                <div
                  className={lastSubmission.correct ? "result-notice success" : "result-notice warning"}
                  role="status"
                >
                  <strong>
                    {lastSubmission.correct ? "Resposta correta registrada" : "Resposta registrada para revisão"}
                  </strong>
                  <span>{lastSubmission.title}</span>
                </div>
              )}
              <div className="hero-actions">
                <button className="primary-button" type="button" onClick={startActivity}>
                  Iniciar atividade
                </button>
                <button className="ghost-button" type="button" onClick={() => navigate("trilhas")}>
                  Trocar trilha
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="live-row">
                <div>
                  <span>Tempo real</span>
                  <strong>{formatTimer(elapsedSeconds)}</strong>
                </div>
                <div>
                  <span>Meta da atividade</span>
                  <strong>{currentActivity.estimatedMinutes} min</strong>
                </div>
              </div>

              <p className="question">{currentActivity.question}</p>

              {isCodeActivity(currentActivity) ? (
                <div className="code-challenge">
                  <p>{currentActivity.prompt}</p>
                  <textarea
                    aria-label="Resposta em código"
                    onChange={(event) => setCodeAnswer(event.target.value)}
                    spellCheck={false}
                    value={codeAnswer}
                  />
                  <div className="code-feedback">
                    <div>
                      <span>Cobertura</span>
                      <strong>{codeAssessment.score}%</strong>
                    </div>
                    <p>
                      {codeAssessment.blocked.length > 0
                        ? `Evite: ${codeAssessment.blocked.join(", ")}.`
                        : codeAssessment.missing.length === 0
                          ? "A resposta cobre todos os pontos esperados."
                          : `Ainda falta: ${codeAssessment.missing.slice(0, 3).join(", ")}.`}
                    </p>
                  </div>
                  <details className="sample-answer">
                    <summary>Ver exemplo de solução</summary>
                    <pre>{currentActivity.sampleAnswer}</pre>
                  </details>
                </div>
              ) : (
                <div className="options-list">
                  {currentActivity.options.map((option, index) => (
                    <label className="option-item" key={option}>
                      <input
                        checked={selectedOption === index}
                        name="answer"
                        onChange={() => setSelectedOption(index)}
                        type="radio"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}

              <button
                className="primary-button"
                disabled={
                  isCodeActivity(currentActivity)
                    ? codeAnswer.trim().length < 24
                    : selectedOption === null
                }
                onClick={submitAnswer}
                type="button"
              >
                Enviar resposta
              </button>
            </>
          )}
        </article>

        <aside className="insights-panel">
          <div className={`recommendation ${recommendation.action}`}>
            <span>Recomendação atual</span>
            <strong>{actionLabels[recommendation.action]}</strong>
            <p>{recommendation.message}</p>
          </div>
          <div className="module-list">
            <h3>Progresso da trilha</h3>
            <p>
              {currentProgress.completed} de {currentProgress.total} atividades registradas.
            </p>
            <div className="progress-track">
              <div style={{ width: `${currentProgress.percent}%` }} />
            </div>
          </div>
        </aside>
      </section>
    );
  }

  function renderHistory() {
    return (
      <section className="history-section">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Dados reais da sessão</p>
            <h2>Histórico de desempenho</h2>
          </div>
          <span>{completed} registros</span>
        </div>

        <div className="history-table">
          {records.length === 0 ? (
            <p className="empty-state">Inicie uma trilha e responda uma atividade para gerar dados.</p>
          ) : (
            <table aria-label="Histórico de desempenho">
              <thead>
                <tr>
                  <th scope="col">Trilha</th>
                  <th scope="col">Conteúdo</th>
                  <th scope="col">Resultado</th>
                  <th scope="col">Tempo</th>
                  <th scope="col">Dificuldade</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => {
                  const trail = trails.find((item) => item.id === record.trailId);
                  return (
                    <tr key={`${record.activityId}-${index}`}>
                      <td>{trail?.title ?? "Trilha"}</td>
                      <td>{record.title}</td>
                      <td>{record.correct ? "Acerto" : "Erro"}</td>
                      <td>{record.responseSeconds}s</td>
                      <td>{difficultyLabels[record.difficulty]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </section>
    );
  }

  function renderSettings() {
    return (
      <section className="page-stack">
        <section className="settings-panel">
          <div>
            <p className="eyebrow">Personalização</p>
            <h2>Escolha a identidade visual do SaaS</h2>
            <p>
              Os temas ajudam a testar como o StudyFlow pode se adaptar a diferentes escolas,
              marcas ou preferências de uso sem alterar a lógica do sistema.
            </p>
          </div>
        </section>

        <section className="theme-grid" aria-label="Temas visuais">
          {themes.map((item) => (
            <button
              className={theme === item.id ? "theme-card selected" : "theme-card"}
              key={item.id}
              onClick={() => setTheme(item.id)}
              type="button"
              aria-pressed={theme === item.id}
            >
              <strong>{item.name}</strong>
              <div className="theme-swatches" aria-hidden="true">
                {item.swatches.map((color) => (
                  <i key={color} style={{ background: color }} />
                ))}
              </div>
            </button>
          ))}
        </section>

        <section className="references-panel" aria-label="Referências oficiais">
          <div>
            <p className="eyebrow">Sites oficiais e seguros</p>
            <h2>Referências usadas na revisão</h2>
          </div>
          <ul>
            {officialReferences.map((reference) => (
              <li key={reference.href}>
                <a href={reference.href} rel="noreferrer" target="_blank">
                  {reference.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    );
  }

  const pageTitle =
    route === "inicio"
      ? `Bem-vindo, ${student.name}`
      : route === "trilhas"
        ? "Trilhas de aprendizagem"
        : route === "painel"
          ? "Painel de acompanhamento"
          : route === "atividade"
            ? "Ambiente de atividade"
            : route === "historico"
              ? "Histórico e análise"
            : "Configurações";

  if (authStatus === "signedOut") {
    return renderLogin();
  }

  return (
        <main className="app-shell">
          <aside className={isMobileMenuOpen ? "sidebar open" : "sidebar"}>
            <div className="sidebar-header">
              <div className="brand">
                <span className="brand-mark">SF</span>
                <div>
                  <strong>StudyFlow</strong>
                  <span>SaaS adaptativo</span>
                </div>
              </div>

              <button
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                className="menu-toggle"
                onClick={() => setIsMobileMenuOpen((current) => !current)}
                type="button"
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            <div className="sidebar-panel">
              <nav className="nav-list" aria-label="Páginas do sistema">
                {(Object.keys(routeLabels) as Route[]).map((item) => (
                  <button
                    className={route === item ? "active" : ""}
                    key={item}
                    onClick={() => navigate(item)}
                    type="button"
                  >
                    {routeLabels[item]}
                  </button>
                ))}
              </nav>

              <div className="tenant-card">
                <span>Workspace</span>
                <strong>{workspace.institution}</strong>
                <small>{workspace.className}</small>
              </div>

              <div className="user-card">
                <span>Usuário autenticado</span>
                <strong>{userName}</strong>
                <small>{authLabel}</small>
                {userControl}
              </div>
            </div>
          </aside>

          <section className="workspace">
            <header className="topbar">
              <div>
                <p className="eyebrow">StudyFlow SaaS</p>
                <h1>{pageTitle}</h1>
              </div>
              <button className="ghost-button" type="button" onClick={resetWorkspace}>
                Reiniciar dados
              </button>
            </header>

            {route === "inicio" && renderHome()}
            {route === "trilhas" && renderTrails()}
            {route === "painel" && renderDashboard()}
            {route === "atividade" && renderActivity()}
            {route === "historico" && renderHistory()}
            {route === "configuracoes" && renderSettings()}

            <footer className="app-footer">
              <strong>StudyFlow</strong>
              <span>
                Projeto desenvolvido por Gustavo Ribeiro para a disciplina Pensamento Computacional,
                Ciência da Computação - UDF.
              </span>
            </footer>
          </section>
        </main>
  );
}
