# Aula - Abstracoes em Pensamento Computacional

Esta pasta reune os arquivos referentes a atividade da aula de abstracao em Pensamento Computacional, aplicada ao sistema **StudyFlow - Plataforma de Aprendizagem Adaptativa**.

O objetivo e representar uma parte do sistema usando abstracao, fluxo logico e pseudocodigo, demonstrando como o pensamento computacional ajuda a transformar um problema real em uma solucao organizada.

## Sistema Utilizado

O sistema usado como base e o StudyFlow, um SaaS educacional publicado em:

[https://pensamento-computacional-jet.vercel.app](https://pensamento-computacional-jet.vercel.app)

A aplicacao usa React, TypeScript, Vite e Clerk. O fluxo pedagogico da versao atual considera:

1. O aluno acessa a plataforma.
2. O aluno autentica pelo Clerk.
3. O aluno escolhe uma trilha de aprendizagem.
4. O sistema apresenta a proxima atividade sugerida.
5. O aluno inicia manualmente a atividade.
6. O cronometro comeca.
7. O aluno responde a questao.
8. O sistema registra acerto, erro, tempo e dificuldade.
9. O algoritmo calcula o desempenho recente.
10. O sistema recomenda avancar, praticar ou revisar.
11. O painel e o historico sao atualizados.

Esse fluxo representa uma funcao central do sistema: **recomendacao adaptativa baseada no desempenho do aluno**.

## Arquivos da Atividade

### Fluxograma

Arquivo:

`fluxograma.png`

O fluxograma representa o fluxo principal da recomendacao adaptativa, incluindo a etapa atual em que o aluno precisa clicar para iniciar a atividade antes de o cronometro comecar.

### Pseudocodigo

Arquivo:

`pseudocodigo.md`

O pseudocodigo foi baseado na funcao real `recommendNextStep`, implementada em `codigo/src/recommendation.ts`.

Ele considera:

- taxa de acerto;
- registros recentes;
- tempo medio de resposta;
- nivel atual do aluno;
- decisao de avancar, revisar ou continuar praticando.

## Relacao com Abstracao

A abstracao aparece porque o sistema real possui muitos detalhes tecnicos, como interface, rotas, estados, autenticacao, temas visuais e componentes React. Para a atividade, esses detalhes sao simplificados em entidades e decisoes principais:

- Aluno.
- Trilha.
- Atividade.
- Desempenho.
- Recomendacao.

Assim, e possivel entender o funcionamento essencial do sistema sem depender da implementacao completa.
