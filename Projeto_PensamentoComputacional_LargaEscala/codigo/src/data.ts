import type { Activity, LearningTrail } from "./types";

export const trails: LearningTrail[] = [
  {
    id: "algoritmos",
    title: "Lógica e algoritmos",
    description: "Base para decompor problemas, criar sequências de passos e avaliar soluções.",
    target: "Alunos iniciando o pensamento computacional",
    color: "blue"
  },
  {
    id: "padroes",
    title: "Padrões e abstração",
    description: "Atividades para reconhecer repetições, generalizar ideias e modelar informações.",
    target: "Turmas em transição para projetos maiores",
    color: "green"
  },
  {
    id: "escala",
    title: "Sistemas de larga escala",
    description: "Conceitos de desempenho, personalização, dados e recomendação em aplicações SaaS.",
    target: "Alunos conectando software a produtos reais",
    color: "orange"
  }
];

export const activities: Activity[] = [
  {
    id: 1,
    trailId: "algoritmos",
    title: "O que é um algoritmo?",
    topic: "Algoritmos",
    difficulty: "iniciante",
    estimatedMinutes: 8,
    question: "Qual alternativa define melhor um algoritmo?",
    options: [
      "Uma sequência finita de passos para resolver um problema",
      "Um programa que funciona somente com internet",
      "Uma ideia vaga sem regras claras"
    ],
    correctOption: 0
  },
  {
    id: 2,
    trailId: "algoritmos",
    title: "Estruturas condicionais",
    topic: "Algoritmos",
    difficulty: "iniciante",
    estimatedMinutes: 9,
    question: "Para que serve uma estrutura condicional em um algoritmo?",
    options: [
      "Escolher caminhos diferentes de acordo com uma condição",
      "Repetir um conjunto de passos infinitamente",
      "Guardar informações sobre o usuário"
    ],
    correctOption: 0
  },
  {
    id: 3,
    trailId: "algoritmos",
    title: "Repetição em algoritmos",
    topic: "Algoritmos",
    difficulty: "iniciante",
    estimatedMinutes: 10,
    question: "Qual é a finalidade de um laço de repetição?",
    options: [
      "Executar um conjunto de instruções várias vezes enquanto uma condição se mantém",
      "Descartar dados após cada execução",
      "Impedir que o algoritmo termine"
    ],
    correctOption: 0
  },
  {
    id: 4,
    trailId: "padroes",
    title: "Reconhecimento de padrões",
    topic: "Pensamento computacional",
    difficulty: "iniciante",
    estimatedMinutes: 10,
    question: "Qual informação ajuda a identificar dificuldades recorrentes em registros de aprendizado?",
    options: [
      "A frequência de erros por conteúdo",
      "A cor preferida do aluno",
      "O horário de acesso ao sistema"
    ],
    correctOption: 0
  },
  {
    id: 5,
    trailId: "padroes",
    title: "Abstração de entidades",
    topic: "Modelagem",
    difficulty: "intermediario",
    estimatedMinutes: 12,
    question: "Em modelagem de sistema, qual entidade representa uma resposta registrada?",
    options: [
      "Desempenho",
      "Cor da interface",
      "Nome do navegador"
    ],
    correctOption: 0
  },
  {
    id: 6,
    trailId: "padroes",
    title: "Abstração de informações",
    topic: "Modelagem",
    difficulty: "intermediario",
    estimatedMinutes: 12,
    question: "Qual é o principal propósito da abstração em sistemas de aprendizado?",
    options: [
      "Reduzir detalhes para representar apenas o que é relevante",
      "Aumentar a complexidade de cada função",
      "Guardar todos os dados possíveis sem classificação"
    ],
    correctOption: 0
  },
  {
    id: 7,
    trailId: "escala",
    title: "Ajuste de dificuldade",
    topic: "Recomendação",
    difficulty: "intermediario",
    estimatedMinutes: 12,
    question: "Se a taxa de acertos passa de 80%, o sistema deve:",
    options: [
      "Aumentar a dificuldade",
      "Apagar o histórico",
      "Encerrar a trilha"
    ],
    correctOption: 0
  },
  {
    id: 8,
    trailId: "escala",
    title: "Escalabilidade",
    topic: "Larga escala",
    difficulty: "intermediario",
    estimatedMinutes: 14,
    question: "Qual desafio cresce quando há muitos usuários simultâneos?",
    options: [
      "Processar um grande volume de dados com rapidez",
      "Falta de acesso à internet em todos os dispositivos",
      "Redundância de perguntas na interface"
    ],
    correctOption: 0
  },
  {
    id: 9,
    trailId: "escala",
    title: "Cold start",
    topic: "Personalização",
    difficulty: "avancado",
    estimatedMinutes: 16,
    question: "O que o sistema deve fazer para um aluno sem histórico?",
    options: [
      "Iniciar com conteúdo padrão e adaptar nas primeiras interações",
      "Bloquear recomendações permanentemente",
      "Levar o aluno diretamente ao conteúdo mais difícil"
    ],
    correctOption: 0
  },
  {
    id: 10,
    trailId: "escala",
    title: "Segurança de dados",
    topic: "Infraestrutura",
    difficulty: "avancado",
    estimatedMinutes: 14,
    question: "Por que é importante proteger os dados de desempenho do usuário?",
    options: [
      "Para garantir privacidade e evitar uso indevido de informações pessoais",
      "Para reduzir o tamanho do banco de dados",
      "Para impedir que o usuário acesse a própria trilha"
    ],
    correctOption: 0
  }
];
