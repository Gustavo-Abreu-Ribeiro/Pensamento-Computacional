import type { Difficulty, PerformanceRecord, Recommendation } from "./types";

const difficultyOrder: Difficulty[] = ["iniciante", "intermediario", "avancado"];

export function calculateAccuracy(records: PerformanceRecord[]) {
  if (records.length === 0) {
    return 0;
  }

  const correct = records.filter((record) => record.correct).length;
  return Math.round((correct / records.length) * 100);
}

export function calculateAverageTime(records: PerformanceRecord[]) {
  if (records.length === 0) {
    return 0;
  }

  const total = records.reduce((sum, record) => sum + record.responseSeconds, 0);
  return Math.round(total / records.length);
}

export function recommendNextStep(
  currentDifficulty: Difficulty,
  records: PerformanceRecord[]
): Recommendation {
  if (records.length === 0) {
    return {
      nextDifficulty: currentDifficulty,
      action: "praticar",
      message: "Comece por uma atividade base para criar o primeiro histórico."
    };
  }

  const accuracy = calculateAccuracy(records);
  const averageTime = calculateAverageTime(records);
  const currentIndex = difficultyOrder.indexOf(currentDifficulty);

  if (accuracy > 80) {
    return {
      nextDifficulty: difficultyOrder[Math.min(currentIndex + 1, difficultyOrder.length - 1)],
      action: "avancar",
      message: "Bom desempenho. A trilha pode aumentar a dificuldade."
    };
  }

  if (accuracy < 50) {
    return {
      nextDifficulty: difficultyOrder[Math.max(currentIndex - 1, 0)],
      action: "revisar",
      message: "Muitos erros recentes. O ideal agora é revisar o conteúdo anterior."
    };
  }

  if (averageTime > 45) {
    return {
      nextDifficulty: currentDifficulty,
      action: "revisar",
      message: "O tempo médio está alto. Uma revisão curta pode destravar o progresso."
    };
  }

  return {
    nextDifficulty: currentDifficulty,
    action: "praticar",
    message: "Desempenho estável. Continue praticando neste nível."
  };
}
