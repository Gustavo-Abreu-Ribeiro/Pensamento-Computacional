# Aula - Abstrações em Pensamento Computacional

Esta pasta reúne os arquivos referentes a atividade da aula de abstração em Pensamento Computacional, aplicada ao sistema **StudyFlow - Plataforma de Aprendizagem Adaptativa**.

O objetivo é representar uma parte do sistema usando abstração, fluxo lógico e pseudocódigo, demonstrando como o pensamento computacional ajuda a transformar um problema real em uma solução organizada.

## Sistema Utilizado

O sistema usado como base é o StudyFlow, um SaaS educacional publicado em:

[https://pensamento-computacional-jet.vercel.app](https://pensamento-computacional-jet.vercel.app)

A aplicação usa React, TypeScript, Vite e Clerk. O fluxo pedagógico da versão atual considera:

1. O aluno acessa a plataforma.
2. O aluno autentica pelo Clerk.
3. O aluno escolhe uma trilha de aprendizagem.
4. O sistema apresenta a próxima atividade sugerida.
5. O aluno inicia manualmente a atividade.
6. O cronômetro começa.
7. O aluno responde a questão.
8. O sistema registra acerto, erro, tempo e dificuldade.
9. O algoritmo calcula o desempenho recente.
10. O sistema recomenda avançar, praticar ou revisar.
11. O painel e o histórico são atualizados.

Esse fluxo representa uma função central do sistema: **recomendação adaptativa baseada no desempenho do aluno**.

## Arquivos da Atividade

### Fluxograma

Arquivo:

`fluxograma.png`

O fluxograma representa o fluxo principal da recomendação adaptativa, incluindo a etapa atual em que o aluno precisa clicar para iniciar a atividade antes de o cronômetro começar.

### Pseudocódigo

Arquivo:

`pseudocodigo.md`

O pseudocódigo foi baseado na função real `recommendNextStep`, implementada em `codigo/src/recommendation.ts`.

Ele considera:

- taxa de acerto;
- registros recentes;
- tempo médio de resposta;
- nível atual do aluno;
- decisão de avançar, revisar ou continuar praticando.

## Relação com Abstração

A abstração aparece porque o sistema real possui muitos detalhes técnicos, como interface, rotas, estados, autenticação, temas visuais e componentes React. Para a atividade, esses detalhes são simplificados em entidades e decisões principais:

- Aluno.
- Trilha.
- Atividade.
- Desempenho.
- Recomendação.

Assim, é possível entender o funcionamento essencial do sistema sem depender da implementação completa.
