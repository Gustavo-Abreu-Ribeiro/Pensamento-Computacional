import type { Activity, LearningTrail } from "./types";

export const trails: LearningTrail[] = [
  {
    id: "algoritmos",
    title: "Logica e algoritmos",
    description: "Base para decompor problemas, criar sequencias de passos e avaliar solucoes.",
    target: "Alunos iniciando pensamento computacional",
    color: "blue"
  },
  {
    id: "padroes",
    title: "Padroes e abstracao",
    description: "Atividades para reconhecer repeticoes, generalizar ideias e modelar informacoes.",
    target: "Turmas em transicao para projetos maiores",
    color: "green"
  },
  {
    id: "escala",
    title: "Sistemas de larga escala",
    description: "Conceitos de desempenho, personalizacao, dados e recomendacao em aplicacoes SaaS.",
    target: "Alunos conectando software com produto real",
    color: "orange"
  }
];

export const activities: Activity[] = [
  {
    id: 1,
    trailId: "algoritmos",
    title: "Logica de algoritmos",
    topic: "Algoritmos",
    difficulty: "iniciante",
    estimatedMinutes: 8,
    question: "Qual alternativa representa melhor um algoritmo?",
    options: [
      "Uma sequencia finita de passos para resolver um problema",
      "Um programa que funciona apenas conectado a internet",
      "Um desenho sem regras definidas"
    ],
    correctOption: 0
  },
  {
    id: 2,
    trailId: "algoritmos",
    title: "Condicoes e decisoes",
    topic: "Algoritmos",
    difficulty: "iniciante",
    estimatedMinutes: 9,
    question: "Em um algoritmo, para que serve uma estrutura condicional?",
    options: [
      "Para repetir uma tela sem criterio",
      "Para escolher caminhos diferentes conforme uma regra",
      "Para eliminar todos os dados do usuario"
    ],
    correctOption: 1
  },
  {
    id: 3,
    trailId: "padroes",
    title: "Reconhecimento de padroes",
    topic: "Pensamento computacional",
    difficulty: "iniciante",
    estimatedMinutes: 10,
    question: "No StudyFlow, qual dado ajuda a encontrar dificuldade recorrente?",
    options: [
      "A cor preferida do aluno",
      "A frequencia de erros por conteudo",
      "O tamanho da tela usada no acesso"
    ],
    correctOption: 1
  },
  {
    id: 4,
    trailId: "padroes",
    title: "Abstracao de entidades",
    topic: "Modelagem",
    difficulty: "intermediario",
    estimatedMinutes: 12,
    question: "Ao modelar o StudyFlow, qual entidade representa uma resposta registrada?",
    options: ["Desempenho", "Cor da interface", "Nome do navegador"],
    correctOption: 0
  },
  {
    id: 5,
    trailId: "escala",
    title: "Ajuste de dificuldade",
    topic: "Recomendacao",
    difficulty: "intermediario",
    estimatedMinutes: 12,
    question: "Se a taxa de acertos passa de 80%, o sistema deve:",
    options: ["Aumentar a dificuldade", "Apagar o historico", "Encerrar a trilha"],
    correctOption: 0
  },
  {
    id: 6,
    trailId: "escala",
    title: "Escalabilidade",
    topic: "Larga escala",
    difficulty: "intermediario",
    estimatedMinutes: 14,
    question: "Qual desafio cresce com muitos usuarios simultaneos?",
    options: [
      "Processamento frequente de dados",
      "Ausencia total de dados",
      "Eliminacao da autenticacao"
    ],
    correctOption: 0
  },
  {
    id: 7,
    trailId: "escala",
    title: "Cold start",
    topic: "Personalizacao",
    difficulty: "avancado",
    estimatedMinutes: 16,
    question: "O que o sistema deve fazer com um aluno sem historico?",
    options: [
      "Bloquear recomendacoes permanentemente",
      "Iniciar com conteudo padrao e adaptar nas primeiras interacoes",
      "Aumentar sempre para o nivel maximo"
    ],
    correctOption: 1
  }
];
