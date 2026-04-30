export type Difficulty = "iniciante" | "intermediario" | "avancado";

export type Route = "inicio" | "trilhas" | "painel" | "atividade" | "historico" | "configuracoes";

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
  color: "blue" | "green" | "orange";
};

export type Activity = {
  id: number;
  trailId: string;
  title: string;
  topic: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  question: string;
  options: string[];
  correctOption: number;
};

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
