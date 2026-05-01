# Etapa 2 - Fluxograma do Sistema StudyFlow

Nesta etapa, o objetivo é criar um fluxograma que represente o fluxo principal do sistema **StudyFlow**, desde o acesso do aluno até a recomendação da próxima atividade.

O fluxograma deve mostrar como o sistema utiliza o desempenho do aluno para adaptar a trilha de aprendizagem.

---

## O que o fluxograma deve representar

O fluxo deve conter as seguintes partes:

1. Início do sistema
2. Acesso do aluno à plataforma
3. Seleção de uma trilha de aprendizagem
4. Exibição de uma atividade
5. Início da contagem do tempo de resposta
6. Resposta do aluno
7. Verificação da alternativa
8. Registro do desempenho
9. Cálculo da taxa de acertos
10. Cálculo do tempo médio de resposta
11. Decisão do sistema:
    - se a taxa de acerto for maior que 80%, avançar dificuldade;
    - se a taxa de acerto for menor que 50%, recomendar revisão;
    - se o tempo médio for maior que 45 segundos, recomendar revisão;
    - caso contrário, continuar praticando.
12. Definição da próxima atividade
13. Atualização do painel e histórico
14. Repetição do ciclo enquanto o aluno continuar estudando
15. Fim

---

## Prompt para gerar o fluxograma na Manus

Copie e cole o prompt abaixo na Manus para gerar o fluxograma completo:

```text
Crie um fluxograma completo, organizado e visualmente claro para o sistema StudyFlow, uma plataforma SaaS de aprendizagem adaptativa.

O fluxograma deve representar o fluxo principal do sistema, desde o acesso do aluno até a recomendação da próxima atividade.

Use símbolos adequados de fluxograma:
- oval para início e fim;
- retângulos para processos;
- paralelogramos para entrada e saída de dados;
- losangos para decisões;
- setas indicando a ordem do fluxo.

Contexto do sistema:
O StudyFlow é uma plataforma educacional que possui trilhas de aprendizagem. O aluno escolhe uma trilha, responde atividades, e o sistema registra acertos, erros, tempo de resposta e dificuldade. Com base nesses dados, o sistema recomenda se o aluno deve avançar, revisar ou continuar praticando.

Fluxo que deve aparecer no diagrama:

1. Início
2. Aluno acessa o StudyFlow
3. Sistema exibe menu inicial
4. Aluno escolhe uma trilha de aprendizagem
5. Sistema carrega a próxima atividade da trilha
6. Sistema inicia o cronômetro de resposta
7. Aluno lê a questão e seleciona uma alternativa
8. Aluno envia a resposta
9. Sistema para o cronômetro
10. Sistema verifica se a resposta está correta
11. Sistema registra o desempenho do aluno, incluindo:
    - trilha
    - atividade
    - acerto ou erro
    - tempo de resposta
    - dificuldade da atividade
12. Sistema calcula a taxa de acertos dos registros recentes
13. Sistema calcula o tempo médio de resposta dos registros recentes
14. Decisão: existem registros suficientes?
    - Se não existirem registros, recomendar "praticar" e manter a dificuldade atual
    - Se existirem registros, continuar análise
15. Decisão: taxa de acertos maior que 80%?
    - Se sim, recomendar "avançar" e aumentar a dificuldade
    - Se não, continuar análise
16. Decisão: taxa de acertos menor que 50%?
    - Se sim, recomendar "revisar" e reduzir a dificuldade
    - Se não, continuar análise
17. Decisão: tempo médio maior que 45 segundos?
    - Se sim, recomendar "revisar" e manter a dificuldade
    - Se não, recomendar "praticar" e manter a dificuldade
18. Sistema define a próxima atividade com base na recomendação
19. Sistema atualiza painel, histórico e progresso da trilha
20. Decisão: aluno deseja continuar estudando?
    - Se sim, retornar para "Sistema carrega a próxima atividade da trilha"
    - Se não, encerrar sessão
21. Fim

O fluxograma deve ter título: "Fluxograma do StudyFlow - Recomendação Adaptativa".

Organize o diagrama de forma vertical, com decisões bem destacadas e setas de retorno quando o aluno continuar estudando.
```

---

## Observação

O fluxograma deve representar uma visão abstrata do sistema. Ele não precisa mostrar detalhes de código, componentes React, arquivos ou estilos visuais. O foco é o funcionamento lógico da recomendação adaptativa.

