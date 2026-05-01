# Design do Sistema - StudyFlow

## Visão Geral

O StudyFlow é um SaaS educacional de aprendizagem adaptativa. A aplicação atual está publicada em:

[https://pensamento-computacional-jet.vercel.app](https://pensamento-computacional-jet.vercel.app)

O design foi estruturado para demonstrar como um sistema de larga escala pode ser decomposto em módulos menores, com separação clara entre autenticação, trilhas, atividades, registros de desempenho, recomendação e visualização de progresso.

## Módulos Principais

### Autenticação

O acesso ao sistema é protegido por Clerk. O usuário precisa autenticar antes de visualizar a área interna do StudyFlow.

### Workspace Institucional

Representa o contexto da instituição, curso ou turma. Na versão atual, a instituição padrão é UDF, e as informações podem ser ajustadas na própria sessão.

### Perfil do Aluno

Mantém nome, nível atual e sequência de acertos. O nível pode ser `iniciante`, `intermediario` ou `avancado`.

### Trilhas de Aprendizagem

O sistema possui cinco trilhas:

- Lógica e algoritmos.
- Padrões e abstração.
- Programação prática.
- Dados e recomendação.
- Sistemas de larga escala.

Cada trilha agrupa atividades por objetivo educacional e permite acompanhar progresso.

### Ambiente de Atividade

O aluno escolhe uma trilha e abre uma atividade sugerida. O cronômetro só começa quando o aluno clica em iniciar, evitando contagem automática apenas por abrir a página.

As atividades podem ser de múltipla escolha ou de código curto. Nos desafios de código, o aluno escreve uma resposta em JavaScript e o app calcula uma porcentagem de cobertura com base em estruturas esperadas, palavras-chave e termos proibidos.

### Registro de Desempenho

Cada resposta gera um registro com:

- atividade;
- trilha;
- conteúdo;
- resultado;
- tempo de resposta;
- dificuldade.

Na versão atual, esses dados ficam em `localStorage`.

- Recomendação adaptativa

O módulo `codigo/src/recommendation.ts` calcula taxa de acerto e tempo médio para recomendar uma das ações:

- avancar;
- revisar;
- praticar.

### Painel e Histórico

O painel mostra métricas gerais e da trilha ativa. O histórico lista os registros de respostas da sessão.

### Configurações Visuais

A página de configurações permite alternar entre nove temas, incluindo temas que mudam apenas a paleta e temas que também alteram forma e linguagem visual, como Neo brutalism, Editorial e Aurora Glass.

## Fluxo de Funcionamento

1. O usuário acessa o deploy ou a versão local.
2. O usuário autentica pelo Clerk.
3. O sistema abre o workspace StudyFlow.
4. O aluno escolhe uma trilha.
5. O sistema sugere uma atividade conforme o desempenho recente.
6. O aluno clica em iniciar atividade.
7. O cronômetro começa.
8. O aluno responde a questão.
9. O sistema registra desempenho e tempo.
10. O algoritmo calcula a recomendação.
11. O painel e o histórico são atualizados.
12. O sistema define a próxima atividade.

## Algoritmo de Recomendação

As regras atuais são:

- Sem histórico: praticar no nível atual.
- Taxa de acerto acima de 80%: avançar a dificuldade.
- Taxa de acerto abaixo de 50%: revisar.
- Tempo médio acima de 45 segundos: revisar.
- Caso contrário: continuar praticando.

Esse algoritmo tem baixo custo computacional e é adequado para demonstrar a lógica antes de evoluir para modelos mais complexos.

## Escalabilidade e Evolução

A versão atual demonstra o fluxo do produto. Para uma versão completa em produção, os próximos passos seriam:

- Persistir desempenho em banco de dados.
- Associar registros ao usuário autenticado no Clerk.
- Criar perfis de professor e administrador.
- Gerar relatórios por turma e instituição.
- Processar recomendações em lote ou em serviços separados conforme o volume de uso.
- Adicionar observabilidade, auditoria e políticas de segurança para dados educacionais.

## Diagramas

- `Diagrama.png`: visão modular atualizada.
- `Aula_Abstracoes_PensamentoComputacional/fluxograma.png`: fluxo da recomendação adaptativa.
