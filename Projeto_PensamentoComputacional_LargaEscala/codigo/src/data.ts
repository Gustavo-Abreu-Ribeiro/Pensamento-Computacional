import type { Activity, LearningTrail } from "./types";

export const trails: LearningTrail[] = [
  {
    id: "algoritmos",
    title: "Logica e algoritmos",
    description: "Base para decompor problemas, criar sequencias de passos e avaliar solucoes.",
    target: "Alunos iniciando o pensamento computacional",
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
    id: "programacao",
    title: "Programacao pratica",
    description: "Pequenos desafios de codigo para transformar regras em solucoes verificaveis.",
    target: "Alunos que precisam exercitar sintaxe, condicoes e funcoes",
    color: "cyan"
  },
  {
    id: "dados",
    title: "Dados e recomendacao",
    description: "Coleta, leitura de historico, metricas e decisao baseada em evidencias.",
    target: "Alunos conectando dados a decisoes pedagogicas",
    color: "pink"
  },
  {
    id: "escala",
    title: "Sistemas de larga escala",
    description: "Conceitos de desempenho, personalizacao, seguranca e aplicacoes SaaS.",
    target: "Alunos conectando software a produtos reais",
    color: "orange"
  }
];

export const activities: Activity[] = [
  {
    id: 1,
    type: "quiz",
    trailId: "algoritmos",
    title: "O que e um algoritmo?",
    topic: "Algoritmos",
    difficulty: "iniciante",
    estimatedMinutes: 8,
    question: "Qual alternativa define melhor um algoritmo?",
    options: [
      "Uma sequencia finita de passos para resolver um problema",
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
      "Escolher caminhos diferentes de acordo com uma condicao",
      "Repetir um conjunto de passos infinitamente",
      "Guardar informacoes sobre o usuario"
    ],
    correctOption: 0
  },
  {
    id: 3,
    type: "quiz",
    trailId: "algoritmos",
    title: "Repeticao em algoritmos",
    topic: "Algoritmos",
    difficulty: "iniciante",
    estimatedMinutes: 10,
    question: "Qual e a finalidade de um laco de repeticao?",
    options: [
      "Executar um conjunto de instrucoes varias vezes enquanto uma condicao se mantem",
      "Descartar dados apos cada execucao",
      "Impedir que o algoritmo termine"
    ],
    correctOption: 0
  },
  {
    id: 4,
    type: "quiz",
    trailId: "algoritmos",
    title: "Ordem das instrucoes",
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
    topic: "Eficiencia",
    difficulty: "intermediario",
    estimatedMinutes: 14,
    question: "Se uma solucao compara todos os pares de uma lista, qual risco aparece quando a lista cresce?",
    options: [
      "O numero de comparacoes cresce muito rapidamente",
      "A solucao passa a gastar memoria zero",
      "A lista deixa de ter elementos repetidos"
    ],
    correctOption: 0
  },
  {
    id: 6,
    type: "quiz",
    trailId: "algoritmos",
    title: "Invariantes",
    topic: "Raciocinio algoritmico",
    difficulty: "avancado",
    estimatedMinutes: 18,
    question: "Em um algoritmo iterativo, o que e uma invariante?",
    options: [
      "Uma propriedade que permanece verdadeira ao longo das iteracoes",
      "Uma variavel que nunca pode ser lida",
      "Uma excecao que interrompe o programa"
    ],
    correctOption: 0
  },

  {
    id: 7,
    type: "quiz",
    trailId: "padroes",
    title: "Reconhecimento de padroes",
    topic: "Pensamento computacional",
    difficulty: "iniciante",
    estimatedMinutes: 10,
    question: "Qual informacao ajuda a identificar dificuldades recorrentes em registros de aprendizado?",
    options: [
      "A frequencia de erros por conteudo",
      "A cor preferida do aluno",
      "O horario de acesso ao sistema"
    ],
    correctOption: 0
  },
  {
    id: 8,
    type: "quiz",
    trailId: "padroes",
    title: "Abstracao de entidades",
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
    title: "Abstracao de informacoes",
    topic: "Modelagem",
    difficulty: "intermediario",
    estimatedMinutes: 12,
    question: "Qual e o principal proposito da abstracao em sistemas de aprendizado?",
    options: [
      "Reduzir detalhes para representar apenas o que e relevante",
      "Aumentar a complexidade de cada funcao",
      "Guardar todos os dados possiveis sem classificacao"
    ],
    correctOption: 0
  },
  {
    id: 10,
    type: "quiz",
    trailId: "padroes",
    title: "Generalizacao",
    topic: "Abstracao",
    difficulty: "avancado",
    estimatedMinutes: 17,
    question: "Qual decisao mostra boa generalizacao em um sistema de trilhas?",
    options: [
      "Criar uma estrutura reutilizavel de atividade em vez de uma tela fixa por questao",
      "Duplicar todo o codigo para cada pergunta nova",
      "Misturar dados, estilo e autenticacao em uma unica funcao"
    ],
    correctOption: 0
  },

  {
    id: 11,
    type: "code",
    trailId: "programacao",
    title: "Condicao simples",
    topic: "Codigo",
    difficulty: "iniciante",
    estimatedMinutes: 12,
    question: "Complete uma funcao curta que classifica uma taxa de acerto.",
    prompt: "Escreva JavaScript para retornar 'avancar' quando accuracy for maior que 80; caso contrario, retorne 'praticar'.",
    starterCode: "function recomendar(accuracy) {\n  // seu codigo aqui\n}",
    expectedKeywords: ["function recomendar", "accuracy", "if", "> 80", "return", "avancar", "praticar"],
    forbiddenKeywords: ["alert(", "prompt("],
    sampleAnswer: "function recomendar(accuracy) {\n  if (accuracy > 80) {\n    return 'avancar';\n  }\n  return 'praticar';\n}"
  },
  {
    id: 12,
    type: "code",
    trailId: "programacao",
    title: "Media de tempos",
    topic: "Codigo",
    difficulty: "intermediario",
    estimatedMinutes: 18,
    question: "Crie uma funcao para calcular o tempo medio de resposta.",
    prompt: "Escreva uma funcao mediaTempo que receba um array tempos e retorne 0 se ele estiver vazio; caso contrario, retorne a media usando reduce.",
    starterCode: "function mediaTempo(tempos) {\n  // seu codigo aqui\n}",
    expectedKeywords: ["function mediaTempo", "tempos", "length", "0", "reduce", "return", "/"],
    sampleAnswer: "function mediaTempo(tempos) {\n  if (tempos.length === 0) return 0;\n  const total = tempos.reduce((soma, tempo) => soma + tempo, 0);\n  return total / tempos.length;\n}"
  },
  {
    id: 13,
    type: "code",
    trailId: "programacao",
    title: "Filtrar erros recentes",
    topic: "Codigo",
    difficulty: "intermediario",
    estimatedMinutes: 20,
    question: "Filtre registros incorretos para apoiar uma recomendacao de revisao.",
    prompt: "Escreva uma funcao errosRecentes que recebe registros e retorna apenas itens em que correct seja false.",
    starterCode: "function errosRecentes(registros) {\n  // seu codigo aqui\n}",
    expectedKeywords: ["function errosRecentes", "registros", "filter", "correct", "false", "return"],
    sampleAnswer: "function errosRecentes(registros) {\n  return registros.filter((registro) => registro.correct === false);\n}"
  },
  {
    id: 14,
    type: "code",
    trailId: "programacao",
    title: "Decisao adaptativa completa",
    topic: "Codigo",
    difficulty: "avancado",
    estimatedMinutes: 28,
    question: "Implemente uma decisao adaptativa com duas regras.",
    prompt: "Escreva uma funcao decidir(accuracy, averageTime) que retorne 'avancar' se accuracy > 80, 'revisar' se accuracy < 50 ou averageTime > 45, e 'praticar' nos demais casos.",
    starterCode: "function decidir(accuracy, averageTime) {\n  // seu codigo aqui\n}",
    expectedKeywords: ["function decidir", "accuracy", "averageTime", "> 80", "< 50", "> 45", "return", "avancar", "revisar", "praticar"],
    sampleAnswer: "function decidir(accuracy, averageTime) {\n  if (accuracy > 80) return 'avancar';\n  if (accuracy < 50 || averageTime > 45) return 'revisar';\n  return 'praticar';\n}"
  },

  {
    id: 15,
    type: "quiz",
    trailId: "dados",
    title: "Ajuste de dificuldade",
    topic: "Recomendacao",
    difficulty: "intermediario",
    estimatedMinutes: 12,
    question: "Se a taxa de acertos passa de 80%, o sistema deve:",
    options: ["Aumentar a dificuldade", "Apagar o historico", "Encerrar a trilha"],
    correctOption: 0
  },
  {
    id: 16,
    type: "quiz",
    trailId: "dados",
    title: "Tempo medio alto",
    topic: "Analise de desempenho",
    difficulty: "intermediario",
    estimatedMinutes: 14,
    question: "Por que tempo medio alto pode gerar recomendacao de revisao mesmo com alguns acertos?",
    options: [
      "Porque pode indicar esforco excessivo ou inseguranca no conteudo",
      "Porque tempo alto sempre significa cola",
      "Porque o tempo nao tem relacao com aprendizagem"
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
    question: "Por que usar apenas registros recentes pode ser melhor do que usar todo o historico?",
    options: [
      "Porque reflete melhor o estado atual do aluno",
      "Porque elimina a necessidade de validacao",
      "Porque impede qualquer mudanca de nivel"
    ],
    correctOption: 0
  },
  {
    id: 18,
    type: "code",
    trailId: "dados",
    title: "Taxa de acerto",
    topic: "Codigo e dados",
    difficulty: "avancado",
    estimatedMinutes: 24,
    question: "Calcule uma metrica essencial para a recomendacao.",
    prompt: "Escreva uma funcao taxaAcerto que receba registros, conte os itens com correct true e retorne a porcentagem arredondada.",
    starterCode: "function taxaAcerto(registros) {\n  // seu codigo aqui\n}",
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
    question: "Qual desafio cresce quando ha muitos usuarios simultaneos?",
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
    topic: "Personalizacao",
    difficulty: "avancado",
    estimatedMinutes: 16,
    question: "O que o sistema deve fazer para um aluno sem historico?",
    options: [
      "Iniciar com conteudo padrao e adaptar nas primeiras interacoes",
      "Bloquear recomendacoes permanentemente",
      "Levar o aluno diretamente ao conteudo mais dificil"
    ],
    correctOption: 0
  },
  {
    id: 21,
    type: "quiz",
    trailId: "escala",
    title: "Seguranca de dados",
    topic: "Infraestrutura",
    difficulty: "avancado",
    estimatedMinutes: 14,
    question: "Por que e importante proteger os dados de desempenho do usuario?",
    options: [
      "Para garantir privacidade e evitar uso indevido de informacoes pessoais",
      "Para reduzir o tamanho do banco de dados",
      "Para impedir que o usuario acesse a propria trilha"
    ],
    correctOption: 0
  },
  {
    id: 22,
    type: "quiz",
    trailId: "escala",
    title: "Multi-instituicao",
    topic: "SaaS",
    difficulty: "avancado",
    estimatedMinutes: 20,
    question: "Em um SaaS educacional, qual cuidado e essencial ao atender varias instituicoes?",
    options: [
      "Separar dados e permissoes por instituicao",
      "Usar a mesma senha para todos os usuarios",
      "Misturar relatorios de turmas diferentes"
    ],
    correctOption: 0
  }
];
