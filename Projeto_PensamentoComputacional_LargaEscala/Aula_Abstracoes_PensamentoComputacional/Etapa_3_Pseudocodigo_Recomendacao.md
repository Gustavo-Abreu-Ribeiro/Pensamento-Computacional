# Etapa 3 - Pseudocódigo da Recomendação Adaptativa

Esta etapa apresenta o pseudocódigo de uma função central do sistema **StudyFlow**: a recomendação da próxima ação do aluno com base no desempenho recente.

A função foi escolhida porque representa diretamente a proposta do sistema:

- registrar desempenho;
- analisar acertos, erros e tempo de resposta;
- adaptar a dificuldade;
- recomendar revisão, prática ou avanço.

---

## Função escolhida

Função do sistema:

`recommendNextStep`

Local no código:

`codigo/src/recommendation.ts`

Responsabilidade:

Analisar os registros recentes de desempenho do aluno e decidir qual deve ser a próxima recomendação.

---

## Entradas

A função recebe:

- `nivelAtual`: dificuldade atual do aluno;
- `registros`: lista de respostas recentes do aluno.

Cada registro contém:

- atividade respondida;
- trilha da atividade;
- se a resposta foi correta ou incorreta;
- tempo de resposta em segundos;
- dificuldade da atividade.

---

## Saídas

A função retorna uma recomendação contendo:

- próxima dificuldade;
- ação recomendada;
- mensagem explicativa.

As ações possíveis são:

- `avançar`;
- `revisar`;
- `praticar`.

---

## Pseudocódigo

```text
FUNÇÃO recomendarProximoPasso(nivelAtual, registros)

    DEFINIR ordemDificuldade COMO [iniciante, intermediario, avancado]

    SE registros estiver vazio ENTÃO
        RETORNAR recomendação:
            próximaDificuldade = nivelAtual
            ação = "praticar"
            mensagem = "Comece por uma atividade base para criar o primeiro histórico."
    FIM SE

    totalRegistros <- quantidade de registros
    totalAcertos <- 0
    somaTempos <- 0

    PARA CADA registro EM registros FAÇA
        SE registro.correto for verdadeiro ENTÃO
            totalAcertos <- totalAcertos + 1
        FIM SE

        somaTempos <- somaTempos + registro.tempoResposta
    FIM PARA

    taxaAcertos <- arredondar((totalAcertos / totalRegistros) * 100)
    tempoMedio <- arredondar(somaTempos / totalRegistros)

    posicaoAtual <- posição de nivelAtual em ordemDificuldade

    SE taxaAcertos > 80 ENTÃO
        novaPosicao <- menor valor entre posicaoAtual + 1 e última posição da lista

        RETORNAR recomendação:
            próximaDificuldade = ordemDificuldade[novaPosicao]
            ação = "avançar"
            mensagem = "Bom desempenho. A trilha pode subir a dificuldade."
    FIM SE

    SE taxaAcertos < 50 ENTÃO
        novaPosicao <- maior valor entre posicaoAtual - 1 e 0

        RETORNAR recomendação:
            próximaDificuldade = ordemDificuldade[novaPosicao]
            ação = "revisar"
            mensagem = "Muitos erros recentes. O ideal agora é revisar o conteúdo anterior."
    FIM SE

    SE tempoMedio > 45 ENTÃO
        RETORNAR recomendação:
            próximaDificuldade = nivelAtual
            ação = "revisar"
            mensagem = "O tempo médio está alto. Uma revisão curta pode destravar o progresso."
    FIM SE

    RETORNAR recomendação:
        próximaDificuldade = nivelAtual
        ação = "praticar"
        mensagem = "Desempenho estável. Continue praticando neste nível."

FIM FUNÇÃO
```

---

## Explicação do pseudocódigo

O algoritmo começa verificando se já existem registros de desempenho. Caso não existam, o sistema não tem dados suficientes para personalizar a trilha, então recomenda que o aluno pratique no nível atual.

Quando existem registros, o algoritmo calcula:

- a taxa de acertos;
- o tempo médio de resposta;
- a posição do nível atual na ordem de dificuldade.

Depois disso, aplica regras simples:

1. Se o aluno acerta mais de 80%, o sistema entende que ele está indo bem e pode avançar.
2. Se o aluno acerta menos de 50%, o sistema entende que há dificuldade e recomenda revisão.
3. Se o tempo médio passa de 45 segundos, o sistema entende que o aluno pode estar demorando muito e recomenda revisão.
4. Se nenhuma condição crítica acontece, o sistema recomenda continuar praticando.

---

## Relação com pensamento computacional

Este pseudocódigo utiliza conceitos de pensamento computacional:

- **Decomposição**: separa o problema em cálculo de acertos, cálculo de tempo e decisão de recomendação.
- **Reconhecimento de padrões**: identifica padrões de erro, acerto e demora.
- **Abstração**: ignora detalhes da interface e foca apenas nos dados essenciais do desempenho.
- **Algoritmo**: define uma sequência clara de passos para gerar a recomendação.

---

## Relação com o sistema proposto

No StudyFlow, esse algoritmo é usado após o aluno responder uma atividade. Ele ajuda o sistema a decidir se deve:

- apresentar uma atividade mais difícil;
- manter o aluno praticando no mesmo nível;
- recomendar revisão do conteúdo.

Assim, o pseudocódigo representa uma parte real da lógica do SaaS educacional proposto no projeto.

