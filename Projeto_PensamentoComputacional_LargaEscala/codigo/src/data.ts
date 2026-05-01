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
    title: "Soma simples",
    topic: "Código",
    difficulty: "iniciante",
    estimatedMinutes: 8,
    question: "Escreva uma função que soma dois números.",
    prompt: "Em Python, escreva uma função chamada somar que receba dois parâmetros (a e b) e retorne a soma deles.",
    starterCode: "def somar(a, b):\n    # seu código aqui\n    pass",
    expectedKeywords: ["def somar", "a", "b", "return", "+"],
    forbiddenKeywords: ["print", "input"],
    sampleAnswer: "def somar(a, b):\n    return a + b"
  },
  {
    id: 12,
    type: "code",
    trailId: "programacao",
    title: "Loop for simples",
    topic: "Código",
    difficulty: "intermediario",
    estimatedMinutes: 10,
    question: "Use um loop para somar todos os números de uma lista.",
    prompt: "Em Python, escreva uma função chamada somar_lista que receba uma lista de números e retorne a soma de todos eles usando um loop for.",
    starterCode: "def somar_lista(numeros):\n    total = 0\n    # seu código aqui\n    return total",
    expectedKeywords: ["def somar_lista", "for", "in", "return", "total"],
    sampleAnswer: "def somar_lista(numeros):\n    total = 0\n    for num in numeros:\n        total = total + num\n    return total"
  },
  {
    id: 13,
    type: "code",
    trailId: "programacao",
    title: "Contar com loop",
    topic: "Código",
    difficulty: "intermediario",
    estimatedMinutes: 10,
    question: "Conte quantos números pares existem em uma lista.",
    prompt: "Em Python, escreva uma função chamada contar_pares que receba uma lista de números e retorne quantos são pares usando um loop for.",
    starterCode: "def contar_pares(numeros):\n    contagem = 0\n    # seu código aqui\n    return contagem",
    expectedKeywords: ["def contar_pares", "for", "in", "return", "% 2", "contagem"],
    sampleAnswer: "def contar_pares(numeros):\n    contagem = 0\n    for num in numeros:\n        if num % 2 == 0:\n            contagem = contagem + 1\n    return contagem"
  },
  {
    id: 14,
    type: "code",
    trailId: "programacao",
    title: "Média com loop",
    topic: "Código",
    difficulty: "avancado",
    estimatedMinutes: 12,
    question: "Calcule a média aritmética de uma lista de números.",
    prompt: "Em Python, escreva uma função chamada calcular_media que receba uma lista de números e retorne a média usando um loop for. Retorne 0 se a lista estiver vazia.",
    starterCode: "def calcular_media(numeros):\n    if len(numeros) == 0:\n        return 0\n    total = 0\n    # seu código aqui\n    return total / len(numeros)",
    expectedKeywords: ["def calcular_media", "for", "in", "return", "len", "total", "/"],
    sampleAnswer: "def calcular_media(numeros):\n    if len(numeros) == 0:\n        return 0\n    total = 0\n    for num in numeros:\n        total = total + num\n    return total / len(numeros)"
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
    title: "Máximo e mínimo",
    topic: "Código e dados",
    difficulty: "avancado",
    estimatedMinutes: 12,
    question: "Encontre o maior e o menor número em uma lista.",
    prompt: "Em Python, escreva uma função chamada maior_e_menor que receba uma lista de números e retorne uma tupla com o maior e o menor valor. Use um loop for.",
    starterCode: "def maior_e_menor(numeros):\n    # seu código aqui\n    return (maior, menor)",
    expectedKeywords: ["def maior_e_menor", "for", "in", "return", "numeros[0]"],
    sampleAnswer: "def maior_e_menor(numeros):\n    maior = numeros[0]\n    menor = numeros[0]\n    for num in numeros:\n        if num > maior:\n            maior = num\n        if num < menor:\n            menor = num\n    return (maior, menor)"
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
