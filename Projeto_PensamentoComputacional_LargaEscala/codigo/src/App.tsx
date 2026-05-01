import { FormEvent, useEffect, useMemo, useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
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
  institution: "Centro Universitário Internacional Uninter",
  className: "Ciência da Computação",
  goal: "Reforçar algoritmos, abstração e sistemas de larga escala"
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
  implantacao: "Hospedagem",
  configuracoes: "Configurações"
};

const themes = [
  {
    id: "default",
    name: "Moderno",
    description: "Azul, verde suave e base clara para um SaaS educacional profissional.",
    swatches: ["#4677ff", "#31c7a9", "#f5f7fb"]
  },
  {
    id: "dark",
    name: "Escuro",
    description: "Grafite, azul eletrico e alto contraste para uso prolongado.",
    swatches: ["#111827", "#60a5fa", "#22c55e"]
  },
  {
    id: "pastel",
    name: "Pastel",
    description: "Cores suaves e amigaveis para uma experiencia leve.",
    swatches: ["#9db7ff", "#a8e6cf", "#fff1f2"]
  },
  {
    id: "earth",
    name: "Terroso",
    description: "Tons naturais, areia e verde oliva com aparencia acolhedora.",
    swatches: ["#8b5e34", "#6b8f71", "#f4ead8"]
  },
  {
    id: "vibrant",
    name: "Vibrante",
    description: "Energia visual com azul, rosa e amarelo em doses controladas.",
    swatches: ["#2563eb", "#f43f5e", "#facc15"]
  },
  {
    id: "strong",
    name: "Cores fortes",
    description: "Contraste marcante com roxo, ciano e fundo profundo.",
    swatches: ["#7c3aed", "#06b6d4", "#111827"]
  },
  {
    id: "brutal",
    name: "Neo brutalism",
    description: "Bordas mais duras, sombras fortes e cores diretas para personalidade.",
    swatches: ["#111111", "#ffcf24", "#57e389"]
  }
] as const;

type ThemeId = (typeof themes)[number]["id"];

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

export default function App() {
  const { user } = useUser();
  const [route, setRoute] = useState<Route>("inicio");
  const [theme, setTheme] = useState<ThemeId>(() => {
    const savedTheme = window.localStorage.getItem("studyflow-theme");
    return themes.some((item) => item.id === savedTheme) ? (savedTheme as ThemeId) : "default";
  });
  const [selectedTrailId, setSelectedTrailId] = useState(trails[0].id);
  const [student, setStudent] = useState<Student>(() => {
    const savedStudent = window.localStorage.getItem("studyflow-student");
    return savedStudent ? JSON.parse(savedStudent) : initialStudent;
  });
  const [workspace, setWorkspace] = useState(initialWorkspace);
  const [records, setRecords] = useState<PerformanceRecord[]>(() => {
    const savedRecords = window.localStorage.getItem("studyflow-records");
    return savedRecords ? JSON.parse(savedRecords) : [];
  });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [activityStarted, setActivityStarted] = useState(false);

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
  const accuracy = calculateAccuracy(records);
  const trailAccuracy = calculateAccuracy(trailRecords);
  const averageTime = calculateAverageTime(records);
  const trailAverageTime = calculateAverageTime(trailRecords);
  const completed = records.length;
  const activeStudents = Math.max(12, completed + 12);
  const currentProgress = getTrailProgress(selectedTrail, records);
  const completedTrails = trails.filter((trail) => getTrailProgress(trail, records).percent === 100).length;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("studyflow-theme", theme);
  }, [theme]);

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
  }, [currentActivity.id]);

  function startActivity() {
    setActivityStarted(true);
    setSelectedOption(null);
    setStartedAt(Date.now());
    setElapsedSeconds(0);
  }

  function navigate(nextRoute: Route) {
    setRoute(nextRoute);
  }

  function openTrail(trailId: string) {
    setSelectedTrailId(trailId);
    setRoute("atividade");
  }

  function logout() {
    // Clerk handles logout
  }

  function submitAnswer() {
    if (selectedOption === null || !activityStarted || startedAt === null) {
      return;
    }

    const responseSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
    const correct = selectedOption === currentActivity.correctOption;
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
    setStudent((current) => ({
      ...current,
      level: nextRecommendation.nextDifficulty,
      streak: correct ? current.streak + 1 : 0
    }));
    setSelectedOption(null);
    setActivityStarted(false);
    setStartedAt(null);
    setElapsedSeconds(0);
  }

  function resetWorkspace() {
    setRoute("inicio");
    setSelectedTrailId(trails[0].id);
    setStudent(user ? { ...initialStudent, name: user.firstName || user.username || "Aluno" } : initialStudent);
    setWorkspace(initialWorkspace);
    setRecords([]);
    setSelectedOption(null);
    setActivityStarted(false);
    setStartedAt(null);
    setElapsedSeconds(0);
  }

  function renderLogin() {
    return (
      <main className="auth-shell">
        <section className="auth-hero">
          <span className="brand-mark">SF</span>
          <p className="eyebrow">StudyFlow SaaS</p>
          <h1>Aprendizagem adaptativa para instituições de ensino.</h1>
          <p>
            Plataforma com trilhas, desempenho em tempo real, recomendação adaptativa, SSO e
            preparação para hospedagem em produção.
          </p>
          <div className="auth-badges">
            <span>Multi-instituição</span>
            <span>SSO ready</span>
            <span>Deploy web</span>
          </div>
        </section>

        <section className="auth-card">
          <div>
            <p className="eyebrow">Acesso seguro</p>
            <h2>Entrar no StudyFlow</h2>
          </div>

          <div className="sso-grid">
            <SignInButton mode="modal">
              <button type="button">SSO Institucional</button>
            </SignInButton>
            <SignInButton mode="modal">
              <button type="button">Google Workspace</button>
            </SignInButton>
            <SignInButton mode="modal">
              <button type="button">Microsoft Entra ID</button>
            </SignInButton>
          </div>

          <p className="auth-note">
            Autenticação real com Clerk: SSO gratuito para até 10.000 usuários ativos mensais.
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
          <strong>{student.level}</strong>
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
            <p className="eyebrow">Ambiente institucional</p>
            <h1>Gerencie trilhas, dados de desempenho e recomendações em um SaaS educacional.</h1>
            <p>
              O StudyFlow organiza turmas, mede tempo de resposta apenas quando a atividade é
              iniciada e transforma dados recentes em decisões pedagógicas.
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
          <button className="quick-card" type="button" onClick={() => navigate("implantacao")}>
            <span>03</span>
            <strong>Preparar hospedagem</strong>
            <p>Veja os passos para publicar a aplicação em um ambiente web real.</p>
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
              <strong>{recommendation.action}</strong>
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
            <span className="difficulty">{currentActivity.difficulty}</span>
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

              <button className="primary-button" disabled={selectedOption === null} onClick={submitAnswer}>
                Enviar resposta
              </button>
            </>
          )}
        </article>

        <aside className="insights-panel">
          <div className={`recommendation ${recommendation.action}`}>
            <span>Recomendação atual</span>
            <strong>{recommendation.action}</strong>
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

        <div className="history-table" role="table" aria-label="Histórico de desempenho">
          <div className="history-row header" role="row">
            <span>Trilha</span>
            <span>Conteúdo</span>
            <span>Resultado</span>
            <span>Tempo</span>
            <span>Dificuldade</span>
          </div>
          {records.length === 0 ? (
            <p className="empty-state">Inicie uma trilha e responda uma atividade para gerar dados.</p>
          ) : (
            records.map((record, index) => {
              const trail = trails.find((item) => item.id === record.trailId);
              return (
                <div className="history-row" key={`${record.activityId}-${index}`} role="row">
                  <span>{trail?.title ?? "Trilha"}</span>
                  <span>{record.title}</span>
                  <span>{record.correct ? "Acerto" : "Erro"}</span>
                  <span>{record.responseSeconds}s</span>
                  <span>{record.difficulty}</span>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  }

  function renderDeployment() {
    return (
      <section className="page-stack">
        <section className="settings-panel">
          <p className="eyebrow">Produção</p>
          <h2>Preparação para hospedagem real</h2>
          <p>
            O frontend já pode ser publicado como aplicação estática após `npm run build`.
            Em um SaaS real, autenticação SSO, banco de dados e APIs ficariam em serviços de backend.
          </p>
        </section>

        <section className="deployment-grid">
          <article className="deployment-card">
            <span>Frontend</span>
            <h3>Vercel, Netlify ou Cloudflare Pages</h3>
            <p>Publica a pasta `dist` gerada pelo Vite e fornece link HTTPS público.</p>
          </article>
          <article className="deployment-card">
            <span>Autenticação</span>
            <h3>OAuth/OIDC</h3>
            <p>Integra Google Workspace, Microsoft Entra ID ou provedor institucional.</p>
          </article>
          <article className="deployment-card">
            <span>Dados</span>
            <h3>Backend e banco</h3>
            <p>Persistência de alunos, trilhas, registros e relatórios em banco seguro.</p>
          </article>
        </section>

        <section className="module-list">
          <h3>Checklist de produção</h3>
          <ul>
            <li>Configurar domínio da instituição</li>
            <li>Gerar build com `npm run build`</li>
            <li>Publicar `codigo/dist` em hospedagem web</li>
            <li>Conectar SSO real via OAuth/OIDC</li>
            <li>Criar API para persistir desempenho e histórico</li>
            <li>Aplicar políticas de privacidade para dados educacionais</li>
          </ul>
        </section>
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
            >
              <span>{theme === item.id ? "Tema ativo" : "Tema disponível"}</span>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
              <div className="theme-swatches" aria-hidden="true">
                {item.swatches.map((color) => (
                  <i key={color} style={{ background: color }} />
                ))}
              </div>
            </button>
          ))}
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
              : route === "implantacao"
                ? "Hospedagem e SSO"
                : "Configurações";

  return (
    <>
      <SignedOut>
        {renderLogin()}
      </SignedOut>
      <SignedIn>
        <main className="app-shell">
          <aside className="sidebar">
            <div className="brand">
              <span className="brand-mark">SF</span>
              <div>
                <strong>StudyFlow</strong>
                <span>SaaS adaptativo</span>
              </div>
            </div>

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
              <strong>{user?.firstName || user?.username || "Usuário"}</strong>
              <small>Clerk SSO</small>
              <UserButton />
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
            {route === "implantacao" && renderDeployment()}
            {route === "configuracoes" && renderSettings()}

            <footer className="app-footer">
              <strong>StudyFlow</strong>
              <span>
                Projeto desenvolvido por Gustavo Ribeiro para a disciplina Pensamento Computacional,
                Ciência da Computação - Centro Universitário Internacional Uninter.
              </span>
            </footer>
          </section>
        </main>
      </SignedIn>
    </>
  );
}
