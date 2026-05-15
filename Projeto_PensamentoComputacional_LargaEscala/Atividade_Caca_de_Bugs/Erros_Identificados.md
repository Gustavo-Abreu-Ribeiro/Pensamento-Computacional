# Erros Identificados

## 1. Codificação de caracteres

O frontend exibia textos com caracteres quebrados, como `CiÃªncia`, `HistÃ³rico` e `ConfiguraÃ§Ãµes`. Isso prejudicava a clareza da interface e a leitura do conteúdo educacional.

Tipo: erro de apresentação e clareza.

## 2. Quebra de execução sem variável de ambiente

O arquivo `src/main.tsx` lançava erro quando `VITE_CLERK_PUBLISHABLE_KEY` não existia. Como a atividade foi copiada para uma nova pasta sem `.env.local`, o app poderia abrir em tela quebrada no ambiente de correção.

Tipo: erro de execução.

## 3. Leitura frágil do localStorage

O app lia `studyflow-student` e `studyflow-records` com `JSON.parse` direto. Se o valor salvo estivesse corrompido ou em formato inesperado, a aplicação poderia quebrar ao carregar.

Tipo: erro de execução e robustez.

## 4. Persistência incompleta

O tema era salvo no `localStorage`, mas aluno, workspace e histórico eram apenas lidos, sem gravação contínua. Isso fazia o usuário perder dados ao recarregar a página.

Tipo: erro de lógica.

## 5. Feedback insuficiente após envio

Ao enviar uma resposta, o sistema registrava o resultado, mas voltava para a tela inicial da atividade sem indicar claramente se a resposta foi correta ou enviada para revisão.

Tipo: erro de clareza e experiência do usuário.

## 6. Cálculo vulnerável em atividade de código

O cálculo de cobertura dividia pela quantidade de palavras-chave esperadas. Caso uma atividade de código fosse criada sem palavras-chave, o resultado poderia virar `NaN` ou valor inválido.

Tipo: erro de lógica e escalabilidade.

## 7. Tabela de histórico sem semântica ideal

O histórico usava `div` com `role="table"` e `role="row"`, mas não usava células e cabeçalhos reais. Isso tornava a leitura pior para tecnologias assistivas.

Tipo: erro de acessibilidade.

## 8. Foco de teclado incompleto

O CSS definia foco visível para botões e inputs, mas deixava `textarea` e links fora da regra. Isso reduzia a navegação acessível por teclado.

Tipo: erro de acessibilidade.

## 9. Referências externas não estavam explícitas

O projeto discutia segurança, privacidade e acessibilidade, mas não apresentava referências oficiais para orientar a avaliação. Foram consultados:

- eMAG/Governo Digital: https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/modelo-de-acessibilidade
- Governo Digital sobre privacidade e segurança: https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/legislacao-federal/legislacao
- ANPD sobre tratamento de dados para fins acadêmicos: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/web-guia-anpd-tratamento-de-dados-para-fins-academicos.pdf

Tipo: adequação a fontes oficiais e segurança informacional.
