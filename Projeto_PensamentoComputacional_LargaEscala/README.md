# Projeto - Pensamento Computacional para Sistemas de Larga Escala

## Descricao

Este projeto foi desenvolvido para a disciplina Pensamento Computacional, no curso de Ciencia da Computacao da UDF.

O objetivo e aplicar conceitos de pensamento computacional e engenharia de software na concepcao de um sistema educacional com caracteristicas de larga escala, explorando decomposicao, abstracao, reconhecimento de padroes, algoritmos, autenticacao, experiencia de usuario e publicacao web.

## Sistema Proposto

**Nome do sistema:** StudyFlow - Plataforma de Aprendizagem Adaptativa

O StudyFlow e um SaaS educacional que organiza trilhas de aprendizagem e adapta a proxima atividade conforme o desempenho recente do aluno. A versao atual esta publicada na Vercel:

[https://pensamento-computacional-jet.vercel.app](https://pensamento-computacional-jet.vercel.app)

## Implementacao Atual

A aplicacao foi implementada com React, TypeScript, Vite, Clerk e estrutura preparada para Tauri. O app funciona como uma demonstracao navegavel do SaaS, com autenticacao real via Clerk e dados de estudo mantidos localmente na sessao do navegador.

Recursos implementados:

- Login protegido por Clerk, com suporte aos provedores configurados na conta.
- Layout de SaaS educacional com sidebar, paginas internas e footer discreto no fim da pagina.
- Rotas internas: Inicio, Trilhas, Painel, Atividade, Historico e Configuracoes.
- Catalogo com cinco trilhas: Logica e algoritmos, Padroes e abstracao, Programacao pratica, Dados e recomendacao, Sistemas de larga escala.
- Ambiente de atividade com inicio manual, cronometro real apos o clique em iniciar e correcao automatica.
- Atividades de multipla escolha e desafios curtos de codigo com avaliacao automatica por cobertura de requisitos.
- Registro de desempenho por trilha, conteudo, resultado, tempo de resposta e dificuldade.
- Painel com nivel atual, taxa de acerto, tempo medio, trilhas completas e recomendacao pedagogica.
- Algoritmo de recomendacao baseado em taxa de acerto, erros recentes e tempo medio.
- Personalizacao de aluno, instituicao e turma dentro da sessao.
- Nove temas visuais: Moderno, Escuro, Pastel, Terroso, Vibrante, Cores fortes, Neo brutalism, Editorial e Aurora Glass.
- Identidade institucional atualizada para UDF.
- Build de producao gerado em `codigo/dist`.

## Pensamento Computacional Aplicado

### Decomposicao

O sistema foi dividido em partes menores:

- Autenticacao e controle de acesso.
- Perfil do aluno e configuracao da turma.
- Trilhas e atividades.
- Registro de desempenho.
- Algoritmo de recomendacao.
- Painel, historico e temas visuais.
- Deploy web.

### Reconhecimento de Padroes

O StudyFlow observa padroes nos registros recentes:

- Frequencia de acertos e erros.
- Tempo medio de resposta.
- Dificuldades por conteudo e trilha.
- Evolucao do nivel do aluno.

### Abstracao

Os detalhes da interface sao reduzidos a entidades principais:

- Aluno.
- Trilha.
- Atividade.
- Resposta de codigo.
- Registro de desempenho.
- Recomendacao.
- Workspace institucional.

### Algoritmos

O algoritmo `recommendNextStep`, em `codigo/src/recommendation.ts`, usa regras simples:

- Se a taxa de acerto for maior que 80%, recomenda avancar.
- Se a taxa de acerto for menor que 50%, recomenda revisar.
- Se o tempo medio for maior que 45 segundos, recomenda revisar.
- Nos demais casos, recomenda continuar praticando.

## Caracterizacao como Sistema de Larga Escala

O projeto foi concebido para representar problemas comuns de sistemas educacionais de maior porte:

- Muitos alunos e instituicoes usando a mesma plataforma.
- Grande volume de eventos de aprendizagem.
- Necessidade de recomendacoes frequentes.
- Personalizacao por aluno, turma e trilha.
- Autenticacao segura e possibilidade de integracao com provedores externos.
- Evolucao futura para persistencia em banco de dados e relatorios institucionais.

Na versao atual, os dados pedagogicos ficam no navegador. Em uma versao de producao completa, eles seriam persistidos em banco de dados e associados ao usuario autenticado.

## Acesso ao SaaS

Versao publicada:

[https://pensamento-computacional-jet.vercel.app](https://pensamento-computacional-jet.vercel.app)

Versao local:

```bash
cd codigo
npm install
npm run dev
```

O Vite informara a porta local no terminal. Neste ambiente, a aplicacao costuma abrir em:

[http://127.0.0.1:1420/](http://127.0.0.1:1420/)

## Gerar Build de Producao

```bash
cd codigo
npm install
npm run build
```

O build final fica em `codigo/dist`.

## Rodar como Aplicacao Desktop com Tauri

Para usar o Tauri, e necessario ter Node.js, npm e Rust instalados.

```bash
cd codigo
npm install
npm run tauri dev
```

## Estrutura do Projeto

- `README.md`: documentacao principal.
- `Design.md`: arquitetura, modulos e fluxo do sistema.
- `Desafios.md`: desafios tecnicos e de larga escala.
- `Diagrama.png`: diagrama atualizado dos modulos principais.
- `Aula_Abstracoes_PensamentoComputacional`: atividade de abstracao, fluxograma e pseudocodigo.
- `codigo`: aplicacao web/desktop.
- `codigo/src`: interface, dados de exemplo, cronometro e algoritmo de recomendacao.
- `codigo/src-tauri`: configuracao inicial para gerar app desktop.
- `codigo/DEPLOY.md`: orientacoes de publicacao e manutencao do deploy.

## Documentos e Fluxos

O arquivo `Diagrama.png` resume a arquitetura modular atual do StudyFlow. O arquivo `Aula_Abstracoes_PensamentoComputacional/fluxograma.png` representa o fluxo da recomendacao adaptativa, incluindo a etapa atual em que o aluno precisa iniciar manualmente a atividade para que o cronometro comece.
