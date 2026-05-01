# Pseudocodigo da Recomendacao Adaptativa

Esta etapa apresenta o pseudocodigo de uma funcao central do StudyFlow: recomendar a proxima acao do aluno com base no desempenho recente.

A funcao escolhida representa diretamente a proposta do sistema:

- registrar desempenho;
- analisar acertos, erros e tempo de resposta;
- adaptar a dificuldade;
- recomendar revisao, pratica ou avanco.

## Funcao Escolhida

Funcao real no codigo:

`recommendNextStep`

Local:

`codigo/src/recommendation.ts`

Responsabilidade:

Analisar os registros recentes de desempenho do aluno e decidir qual deve ser a proxima recomendacao.

## Entradas

A funcao recebe:

- `nivelAtual`: dificuldade atual do aluno;
- `registros`: lista de respostas recentes do aluno.

Cada registro contem:

- atividade respondida;
- trilha da atividade;
- conteudo;
- se a resposta foi correta ou incorreta;
- tempo de resposta em segundos;
- dificuldade da atividade.

## Saida

A funcao retorna uma recomendacao contendo:

- proxima dificuldade;
- acao recomendada;
- mensagem explicativa.

As acoes possiveis sao:

- `avancar`;
- `revisar`;
- `praticar`.

## Pseudocodigo

```text
FUNCAO recomendarProximoPasso(nivelAtual, registros)

    DEFINIR ordemDificuldade COMO [iniciante, intermediario, avancado]

    SE registros estiver vazio ENTAO
        RETORNAR:
            proximaDificuldade = nivelAtual
            acao = "praticar"
            mensagem = "Comece por uma atividade base para criar o primeiro historico."
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
            acao = "avancar"
            mensagem = "Bom desempenho. A trilha pode subir a dificuldade."
    FIM SE

    SE taxaAcertos < 50 ENTAO
        novaPosicao <- maior valor entre posicaoAtual - 1 e 0

        RETORNAR:
            proximaDificuldade = ordemDificuldade[novaPosicao]
            acao = "revisar"
            mensagem = "Muitos erros recentes. O ideal agora e revisar o conteudo anterior."
    FIM SE

    SE tempoMedio > 45 ENTAO
        RETORNAR:
            proximaDificuldade = nivelAtual
            acao = "revisar"
            mensagem = "O tempo medio esta alto. Uma revisao curta pode destravar o progresso."
    FIM SE

    RETORNAR:
        proximaDificuldade = nivelAtual
        acao = "praticar"
        mensagem = "Desempenho estavel. Continue praticando neste nivel."

FIM FUNCAO
```

## Relacao com Pensamento Computacional

- **Decomposicao**: separa calculo de acertos, tempo medio e decisao final.
- **Reconhecimento de padroes**: identifica acerto alto, erro recorrente e demora.
- **Abstracao**: ignora detalhes de interface e foca nos dados essenciais.
- **Algoritmo**: define uma sequencia clara de condicoes para gerar a recomendacao.

## Relacao com o Sistema Atual

No StudyFlow, esse algoritmo e usado apos o aluno responder uma atividade. A resposta atualiza o historico, recalcula a recomendacao e influencia a proxima atividade sugerida.
