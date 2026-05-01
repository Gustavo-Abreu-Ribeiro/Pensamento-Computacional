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
    id: "programacao",
    title: "Programação prática",
    description: "Pequenos desafios de código para transformar regras em soluções verificáveis.",
    target: "Alunos que precisam exercitar sintaxe, condições e funções",
    color: "cyan"
  },
  {
    id: "dados",
    title: "Dados e recomendação",
    description: "Coleta, leitura de histórico, métricas e decisão baseada em evidências.",
    target: "Alunos conectando dados a decisões pedagógicas",
    color: "pink"
  },
  {
    id: "escala",
    title: "Sistemas de larga escala",
    description: "Conceitos de desempenho, personalização, segurança e aplicações SaaS.",
    target: "Alunos conectando software a produtos reais",
    color: "orange"
  }
];

export const activities: Activity[] = [
  {
    id: 1,
    type: "quiz",
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
    type: "quiz",
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
    type: "quiz",
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
    type: "quiz",
    trailId: "algoritmos",
    title: "Ordem das instruções",
    topic: "Sequenciamento",
    difficulty: "iniciante",
    estimatedMinutes: 8,
    question: "Por que a ordem dos passos importa em um algoritmo?",
    options: [
      "Porque cada passo pode depender do resultado produzido antes dele",
      "Porque computadores ignoram passos fora de ordem",
      "Porque algoritmos sempre executam aleatoriamente"
    ],
    correctOption: 0
  },
  {
    id: 5,
    type: "quiz",
    trailId: "algoritmos",
    title: "Complexidade intuitiva",
    topic: "Eficiência",
    difficulty: "intermediario",
    estimatedMinutes: 14,
    question: "Se uma solução compara todos os pares de uma lista, qual risco aparece quando a lista cresce?",
    options: [
      "O número de comparações cresce muito rapidamente",
      "A solução passa a gastar memória zero",
      "A lista deixa de ter elementos repetidos"
    ],
    correctOption: 0
  },
  {
    id: 6,
    type: "quiz",
    trailId: "algoritmos",
    title: "Invariantes",
    topic: "Raciocínio algorítmico",
    difficulty: "avancado",
    estimatedMinutes: 18,
    question: "Em um algoritmo iterativo, o que é uma invariante?",
    options: [
      "Uma propriedade que permanece verdadeira ao longo das iterações",
      "Uma variável que nunca pode ser lida",
      "Uma exceção que interrompe o programa"
    ],
    correctOption: 0
  },

  {
    id: 7,
    type: "quiz",
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
    id: 8,
    type: "quiz",
    trailId: "padroes",
    title: "Abstração de entidades",
    topic: "Modelagem",
    difficulty: "intermediario",
    estimatedMinutes: 12,
    question: "Em modelagem de sistema, qual entidade representa uma resposta registrada?",
    options: ["Desempenho", "Cor da interface", "Nome do navegador"],
    correctOption: 0
  },
  {
    id: 9,
    type: "quiz",
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
    id: 10,
    type: "quiz",
    trailId: "padroes",
    title: "Generalização",
    topic: "Abstração",
    difficulty: "avancado",
    estimatedMinutes: 17,
    question: "Qual decisão mostra boa generalização em um sistema de trilhas?",
    options: [
      "Criar uma estrutura reutilizável de atividade em vez de uma tela fixa por questão",
      "Duplicar todo o código para cada pergunta nova",
      "Misturar dados, estilo e autenticação em uma única função"
    ],
    correctOption: 0
  },

  {
    id: 11,
    type: "code",
    trailId: "programacao",
    title: "Condição simples",
    topic: "Código",
    difficulty: "iniciante",
    estimatedMinutes: 12,
    question: "Complete uma função curta que classifica uma taxa de acerto.",
    prompt: "Escreva JavaScript para retornar 'avançar' quando accuracy for maior que 80; caso contrário, retorne 'praticar'.",
    starterCode: "function recomendar(accuracy) {\n  // seu código aqui\n}",
    expectedKeywords: ["function recomendar", "accuracy", "if", "> 80", "return", "avançar", "praticar"],
    forbiddenKeywords: ["alert(", "prompt("],
    sampleAnswer: "function recomendar(accuracy) {\n  if (accuracy > 80) {\n    return 'avançar';\n  }\n  return 'praticar';\n}"
  },
  {
    id: 12,
    type: "code",
    trailId: "programacao",
    title: "Média de tempos",
    topic: "Código",
    difficulty: "intermediario",
    estimatedMinutes: 18,
    question: "Crie uma função para calcular o tempo médio de resposta.",
    prompt: "Escreva uma função mediaTempo que receba um array tempos e retorne 0 se ele estiver vazio; caso contrário, retorne a média usando reduce.",
    starterCode: "function mediaTempo(tempos) {\n  // seu código aqui\n}",
    expectedKeywords: ["function mediaTempo", "tempos", "length", "0", "reduce", "return", "/"],
    sampleAnswer: "function mediaTempo(tempos) {\n  if (tempos.length === 0) return 0;\n  const total = tempos.reduce((soma, tempo) => soma + tempo, 0);\n  return total / tempos.length;\n}"
  },
  {
    id: 13,
    type: "code",
    trailId: "programacao",
    title: "Filtrar erros recentes",
    topic: "Código",
    difficulty: "intermediario",
    estimatedMinutes: 20,
    question: "Filtre registros incorretos para apoiar uma recomendação de revisão.",
    prompt: "Escreva uma função errosRecentes que recebe registros e retorna apenas itens em que correct seja false.",
    starterCode: "function errosRecentes(registros) {\n  // seu código aqui\n}",
    expectedKeywords: ["function errosRecentes", "registros", "filter", "correct", "false", "return"],
    sampleAnswer: "function errosRecentes(registros) {\n  return registros.filter((registro) => registro.correct === false);\n}"
  },
  {
    id: 14,
    type: "code",
    trailId: "programacao",
    title: "Decisão adaptativa completa",
    topic: "Código",
    difficulty: "avancado",
    estimatedMinutes: 28,
    question: "Implemente uma decisão adaptativa com duas regras.",
    prompt: "Escreva uma função decidir(accuracy, averageTime) que retorne 'avançar' se accuracy > 80, 'revisar' se accuracy < 50 ou averageTime > 45, e 'praticar' nos demais casos.",
    starterCode: "function decidir(accuracy, averageTime) {\n  // seu código aqui\n}",
    expectedKeywords: ["function decidir", "accuracy", "averageTime", "> 80", "< 50", "> 45", "return", "avançar", "revisar", "praticar"],
    sampleAnswer: "function decidir(accuracy, averageTime) {\n  if (accuracy > 80) return 'avançar';\n  if (accuracy < 50 || averageTime > 45) return 'revisar';\n  return 'praticar';\n}"
  },

  {
    id: 15,
    type: "quiz",
    trailId: "dados",
    title: "Ajuste de dificuldade",
    topic: "Recomendação",
    difficulty: "intermediario",
    estimatedMinutes: 12,
    question: "Se a taxa de acertos passa de 80%, o sistema deve:",
    options: ["Aumentar a dificuldade", "Apagar o histórico", "Encerrar a trilha"],
    correctOption: 0
  },
  {
    id: 16,
    type: "quiz",
    trailId: "dados",
    title: "Tempo médio alto",
    topic: "Análise de desempenho",
    difficulty: "intermediario",
    estimatedMinutes: 14,
    question: "Por que tempo médio alto pode gerar recomendação de revisão mesmo com alguns acertos?",
    options: [
      "Porque pode indicar esforço excessivo ou insegurança no conteúdo",
      "Porque tempo alto sempre significa cola",
      "Porque o tempo não tem relação com aprendizagem"
    ],
    correctOption: 0
  },
  {
    id: 17,
    type: "quiz",
    trailId: "dados",
    title: "Janela recente",
    topic: "Dados",
    difficulty: "avancado",
    estimatedMinutes: 18,
    question: "Por que usar apenas registros recentes pode ser melhor do que usar todo o histórico?",
    options: [
      "Porque reflete melhor o estado atual do aluno",
      "Porque elimina a necessidade de validação",
      "Porque impede qualquer mudança de nível"
    ],
    correctOption: 0
  },
  {
    id: 18,
    type: "code",
    trailId: "dados",
    title: "Taxa de acerto",
    topic: "Código e dados",
    difficulty: "avancado",
    estimatedMinutes: 24,
    question: "Calcule uma métrica essencial para a recomendação.",
    prompt: "Escreva uma função taxaAcerto que receba registros, conte os itens com correct true e retorne a porcentagem arredondada.",
    starterCode: "function taxaAcerto(registros) {\n  // seu código aqui\n}",
    expectedKeywords: ["function taxaAcerto", "registros", "filter", "correct", "length", "Math.round", "* 100", "return"],
    sampleAnswer: "function taxaAcerto(registros) {\n  if (registros.length === 0) return 0;\n  const acertos = registros.filter((registro) => registro.correct).length;\n  return Math.round((acertos / registros.length) * 100);\n}"
  },

  {
    id: 19,
    type: "quiz",
    trailId: "escala",
    title: "Escalabilidade",
    topic: "Larga escala",
    difficulty: "intermediario",
    estimatedMinutes: 14,
    question: "Qual desafio cresce quando há muitos usuários simultâneos?",
    options: [
      "Processar um grande volume de dados com rapidez",
      "Falta de acesso a internet em todos os dispositivos",
      "Redundancia de perguntas na interface"
    ],
    correctOption: 0
  },
  {
    id: 20,
    type: "quiz",
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
    id: 21,
    type: "quiz",
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
  },
  {
    id: 22,
    type: "quiz",
    trailId: "escala",
    title: "Multi-instituição",
    topic: "SaaS",
    difficulty: "avancado",
    estimatedMinutes: 20,
    question: "Em um SaaS educacional, qual cuidado é essencial ao atender várias instituições?",
    options: [
      "Separar dados e permissões por instituição",
      "Usar a mesma senha para todos os usuários",
      "Misturar relatórios de turmas diferentes"
    ],
    correctOption: 0
  }
];
