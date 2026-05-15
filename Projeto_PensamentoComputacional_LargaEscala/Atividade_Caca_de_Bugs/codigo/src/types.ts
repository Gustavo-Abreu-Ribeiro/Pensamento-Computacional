export type Difficulty = "iniciante" | "intermediario" | "avancado";

export type Route =
  | "inicio"
  | "trilhas"
  | "painel"
  | "atividade"
  | "historico"
  | "configuracoes";

export type AuthProvider = "email" | "google" | "microsoft" | "institucional";

export type AuthSession = {
  userName: string;
  email: string;
  provider: AuthProvider;
  role: "aluno" | "professor" | "admin";
};

export type Student = {
  name: string;
  level: Difficulty;
  streak: number;
};

export type LearningTrail = {
  id: string;
  title: string;
  description: string;
  target: string;
  color: "blue" | "green" | "orange" | "pink" | "cyan";
};

export type ActivityBase = {
  id: number;
  trailId: string;
  title: string;
  topic: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  question: string;
};

export type QuizActivity = ActivityBase & {
  type: "quiz";
  options: string[];
  correctOption: number;
};

export type CodeActivity = ActivityBase & {
  type: "code";
  prompt: string;
  starterCode: string;
  expectedKeywords: string[];
  forbiddenKeywords?: string[];
  sampleAnswer: string;
};

export type Activity = QuizActivity | CodeActivity;

export type PerformanceRecord = {
  activityId: number;
  trailId: string;
  topic: string;
  title: string;
  correct: boolean;
  responseSeconds: number;
  difficulty: Difficulty;
};

export type Recommendation = {
  nextDifficulty: Difficulty;
  action: "avancar" | "revisar" | "praticar";
  message: string;
};
