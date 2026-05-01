# Aula - Abstrações em Pensamento Computacional

Esta pasta reúne os arquivos referentes à atividade da aula de abstração em Pensamento Computacional, aplicada ao sistema proposto no projeto principal: **StudyFlow - Plataforma de Aprendizagem Adaptativa**.

O objetivo da atividade é representar uma parte do sistema usando abstração, fluxo lógico e pseudocódigo, demonstrando como o pensamento computacional ajuda a transformar um problema real em uma solução organizada.

---

## Sistema utilizado

O sistema usado como base é o **StudyFlow**, um SaaS educacional que adapta trilhas de aprendizagem conforme o desempenho do aluno.

O fluxo considerado nesta atividade envolve:

1. O aluno acessa a plataforma.
2. O aluno escolhe uma trilha de aprendizagem.
3. O sistema apresenta uma atividade.
4. O aluno responde a questão.
5. O sistema mede automaticamente o tempo de resposta.
6. O sistema registra acerto, erro, tempo e dificuldade.
7. O algoritmo calcula desempenho recente.
8. O sistema recomenda avançar, praticar ou revisar.
9. A próxima atividade é definida conforme a recomendação.

Esse fluxo representa uma função central do sistema: **recomendação adaptativa baseada no desempenho do aluno**.

---

## Arquivos da atividade

### Etapa 2 - Fluxograma

Arquivo:

`Etapa_2_Fluxograma_Instrucoes.md`

Esta etapa não contém o fluxograma pronto. Em vez disso, contém instruções e um prompt completo para gerar o fluxograma em uma ferramenta de IA, como a Manus.

O fluxograma deve representar o fluxo principal do StudyFlow, desde o acesso do aluno até a recomendação da próxima atividade.

### Etapa 3 - Pseudocódigo

Arquivo:

`Etapa_3_Pseudocodigo_Recomendacao.md`

Esta etapa contém o pseudocódigo da função de recomendação adaptativa do sistema.

O pseudocódigo foi baseado na lógica já implementada no projeto, especialmente na função `recommendNextStep`, que analisa:

- taxa de acertos;
- quantidade de registros recentes;
- tempo médio de resposta;
- nível atual do aluno;
- decisão de avançar, revisar ou continuar praticando.

---

## Relação com abstração

A abstração aparece na atividade porque o sistema real possui muitos detalhes técnicos, como interface, rotas, estados, temas visuais e componentes React. Para a atividade, esses detalhes são simplificados em entidades e decisões principais:

- **Aluno**
- **Trilha**
- **Atividade**
- **Desempenho**
- **Recomendação**

Assim, é possível entender o funcionamento essencial do sistema sem depender da implementação completa.

