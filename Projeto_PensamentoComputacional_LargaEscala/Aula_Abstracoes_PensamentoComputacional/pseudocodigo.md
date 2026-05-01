# Pseudocódigo da Recomendação Adaptativa

Esta etapa apresenta o pseudocódigo de uma função central do StudyFlow: recomendar a próxima ação do aluno com base no desempenho recente.

A função escolhida representa diretamente a proposta do sistema:

- registrar desempenho;
- analisar acertos, erros e tempo de resposta;
- adaptar a dificuldade;
- recomendar revisão, prática ou avanço.

## Função Escolhida

Função real no código:

`recommendNextStep`

Local:

`codigo/src/recommendation.ts`

Responsabilidade:

Analisar os registros recentes de desempenho do aluno e decidir qual deve ser a próxima recomendação.

## Entradas

A função recebe:

- `nivelAtual`: dificuldade atual do aluno;
- `registros`: lista de respostas recentes do aluno.

Cada registro contém:

- atividade respondida;
- trilha da atividade;
- conteúdo;
- se a resposta foi correta ou incorreta;
- tempo de resposta em segundos;
- dificuldade da atividade.

## Saída

A função retorna uma recomendação contendo:

- próxima dificuldade;
- ação recomendada;
- mensagem explicativa.

As ações possíveis são:

- `avançar`;
- `revisar`;
- `praticar`.

## Pseudocódigo

```text
FUNCAO recomendarProximoPasso(nivelAtual, registros)

    DEFINIR ordemDificuldade COMO [iniciante, intermediario, avancado]

    SE registros estiver vazio ENTAO
        RETORNAR:
            proximaDificuldade = nivelAtual
            acao = "praticar"
            mensagem = "Comece por uma atividade base para criar o primeiro histórico."
    FIM SE

    totalRegistros <- quantidade de registros
    totalAcertos <- 0
    somaTempos <- 0

    PARA CADA registro EM registros FACA
        SE registro.correto for verdadeiro ENTAO
            totalAcertos <- totalAcertos + 1
        FIM SE

        somaTempos <- somaTempos + registro.tempoResposta
    FIM PARA

    taxaAcertos <- arredondar((totalAcertos / totalRegistros) * 100)
    tempoMedio <- arredondar(somaTempos / totalRegistros)
    posicaoAtual <- posicao de nivelAtual em ordemDificuldade

    SE taxaAcertos > 80 ENTAO
        novaPosicao <- menor valor entre posicaoAtual + 1 e ultima posicao da lista

        RETORNAR:
            proximaDificuldade = ordemDificuldade[novaPosicao]
            acao = "avançar"
            mensagem = "Bom desempenho. A trilha pode subir a dificuldade."
    FIM SE

    SE taxaAcertos < 50 ENTAO
        novaPosicao <- maior valor entre posicaoAtual - 1 e 0

        RETORNAR:
            proximaDificuldade = ordemDificuldade[novaPosicao]
            acao = "revisar"
            mensagem = "Muitos erros recentes. O ideal agora é revisar o conteúdo anterior."
    FIM SE

    SE tempoMedio > 45 ENTAO
        RETORNAR:
            proximaDificuldade = nivelAtual
            acao = "revisar"
            mensagem = "O tempo médio está alto. Uma revisão curta pode destravar o progresso."
    FIM SE

    RETORNAR:
        proximaDificuldade = nivelAtual
        acao = "praticar"
mensagem = "Desempenho estável. Continue praticando neste nível."

FIM FUNCAO
```

## Relação com Pensamento Computacional

- **Decomposição**: separa cálculo de acertos, tempo médio e decisão final.
- **Reconhecimento de padrões**: identifica acerto alto, erro recorrente e demora.
- **Abstração**: ignora detalhes de interface e foca nos dados essenciais.
- **Algoritmo**: define uma sequência clara de condições para gerar a recomendação.

## Relação com o Sistema Atual

No StudyFlow, esse algoritmo é usado após o aluno responder uma atividade. A resposta atualiza o histórico, recalcula a recomendação e influencia a próxima atividade sugerida.
