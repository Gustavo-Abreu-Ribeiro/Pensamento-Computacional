# Design do Sistema - StudyFlow

## Visao Geral

O StudyFlow e um SaaS educacional de aprendizagem adaptativa. A aplicacao atual esta publicada em:

[https://pensamento-computacional-jet.vercel.app](https://pensamento-computacional-jet.vercel.app)

O design foi estruturado para demonstrar como um sistema de larga escala pode ser decomposto em modulos menores, com separacao clara entre autenticacao, trilhas, atividades, registros de desempenho, recomendacao e visualizacao de progresso.

## Modulos Principais

### Autenticacao

O acesso ao sistema e protegido por Clerk. O usuario precisa autenticar antes de visualizar a area interna do StudyFlow.

### Workspace Institucional

Representa o contexto da instituicao, curso ou turma. Na versao atual, a instituicao padrao e UDF, e as informacoes podem ser ajustadas na propria sessao.

### Perfil do Aluno

Mantem nome, nivel atual e sequencia de acertos. O nivel pode ser `iniciante`, `intermediario` ou `avancado`.

### Trilhas de Aprendizagem

O sistema possui cinco trilhas:

- Logica e algoritmos.
- Padroes e abstracao.
- Programacao pratica.
- Dados e recomendacao.
- Sistemas de larga escala.

Cada trilha agrupa atividades por objetivo educacional e permite acompanhar progresso.

### Ambiente de Atividade

O aluno escolhe uma trilha e abre uma atividade sugerida. O cronometro so comeca quando o aluno clica em iniciar, evitando contagem automatica apenas por abrir a pagina.

As atividades podem ser de multipla escolha ou de codigo curto. Nos desafios de codigo, o aluno escreve uma resposta em JavaScript e o app calcula uma porcentagem de cobertura com base em estruturas esperadas, palavras-chave e termos proibidos.

### Registro de Desempenho

Cada resposta gera um registro com:

- atividade;
- trilha;
- conteudo;
- resultado;
- tempo de resposta;
- dificuldade.

Na versao atual, esses dados ficam em `localStorage`.

### Recomendacao Adaptativa

O modulo `codigo/src/recommendation.ts` calcula taxa de acerto e tempo medio para recomendar uma das acoes:

- avancar;
- revisar;
- praticar.

### Painel e Historico

O painel mostra metricas gerais e da trilha ativa. O historico lista os registros de respostas da sessao.

### Configuracoes Visuais

A pagina de configuracoes permite alternar entre nove temas, incluindo temas que mudam apenas a paleta e temas que tambem alteram forma e linguagem visual, como Neo brutalism, Editorial e Aurora Glass.

## Fluxo de Funcionamento

1. O usuario acessa o deploy ou a versao local.
2. O usuario autentica pelo Clerk.
3. O sistema abre o workspace StudyFlow.
4. O aluno escolhe uma trilha.
5. O sistema sugere uma atividade conforme o desempenho recente.
6. O aluno clica em iniciar atividade.
7. O cronometro comeca.
8. O aluno responde a questao.
9. O sistema registra desempenho e tempo.
10. O algoritmo calcula a recomendacao.
11. O painel e o historico sao atualizados.
12. O sistema define a proxima atividade.

## Algoritmo de Recomendacao

As regras atuais sao:

- Sem historico: praticar no nivel atual.
- Taxa de acerto acima de 80%: avancar a dificuldade.
- Taxa de acerto abaixo de 50%: revisar.
- Tempo medio acima de 45 segundos: revisar.
- Caso contrario: continuar praticando.

Esse algoritmo tem baixo custo computacional e e adequado para demonstrar a logica antes de evoluir para modelos mais complexos.

## Escalabilidade e Evolucao

A versao atual demonstra o fluxo do produto. Para uma versao completa em producao, os proximos passos seriam:

- Persistir desempenho em banco de dados.
- Associar registros ao usuario autenticado no Clerk.
- Criar perfis de professor e administrador.
- Gerar relatorios por turma e instituicao.
- Processar recomendacoes em lote ou em servicos separados conforme o volume de uso.
- Adicionar observabilidade, auditoria e politicas de seguranca para dados educacionais.

## Diagramas

- `Diagrama.png`: visao modular atualizada.
- `Aula_Abstracoes_PensamentoComputacional/fluxograma.png`: fluxo da recomendacao adaptativa.
