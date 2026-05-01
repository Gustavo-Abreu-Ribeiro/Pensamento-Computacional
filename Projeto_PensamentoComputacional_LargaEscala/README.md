# Projeto - Pensamento Computacional para Sistemas de Larga Escala

## Descrição

Este projeto foi desenvolvido para a disciplina Pensamento Computacional, no curso de Ciência da Computação da UDF.

O objetivo é aplicar conceitos de pensamento computacional e engenharia de software na concepção de um sistema educacional com características de larga escala, explorando decomposição, abstração, reconhecimento de padrões, algoritmos, autenticação, experiência de usuário e publicação web.

## Sistema Proposto

**Nome do sistema:** StudyFlow - Plataforma de Aprendizagem Adaptativa

O StudyFlow é um SaaS educacional que organiza trilhas de aprendizagem e adapta a próxima atividade conforme o desempenho recente do aluno. A versão atual está publicada na Vercel:

[https://pensamento-computacional-jet.vercel.app](https://pensamento-computacional-jet.vercel.app)

## Implementação Atual

A aplicação foi implementada com React, TypeScript, Vite, Clerk e estrutura preparada para Tauri. O app funciona como uma demonstração navegável do SaaS, com autenticação real via Clerk e dados de estudo mantidos localmente na sessão do navegador.

Recursos implementados:

- Login protegido por Clerk, com suporte aos provedores configurados na conta.
- Layout de SaaS educacional com sidebar, páginas internas e footer discreto no fim da página.
- Rotas internas: Início, Trilhas, Painel, Atividade, Histórico e Configurações.
- Catálogo com cinco trilhas: Lógica e algoritmos, Padrões e abstração, Programação prática, Dados e recomendação, Sistemas de larga escala.
- Ambiente de atividade com início manual, cronômetro real após o clique em iniciar e correção automática.
- Atividades de múltipla escolha e desafios curtos de código com avaliação automática por cobertura de requisitos.
- Registro de desempenho por trilha, conteudo, resultado, tempo de resposta e dificuldade.
- Painel com nível atual, taxa de acerto, tempo médio, trilhas completas e recomendação pedagógica.
- Algoritmo de recomendação baseado em taxa de acerto, erros recentes e tempo médio.
- Personalização de aluno, instituição e turma dentro da sessão.
- Nove temas visuais: Moderno, Escuro, Pastel, Terroso, Vibrante, Cores fortes, Neo brutalism, Editorial e Aurora Glass.
- Identidade institucional atualizada para UDF.
- Build de producao gerado em `codigo/dist`.

## Pensamento Computacional Aplicado

### Decomposicao

O sistema foi dividido em partes menores:

- Autenticação e controle de acesso.
- Perfil do aluno e configuração da turma.
- Trilhas e atividades.
- Registro de desempenho.
- Algoritmo de recomendação.
- Painel, histórico e temas visuais.
- Deploy web.

### Reconhecimento de Padrões

O StudyFlow observa padrões nos registros recentes:

- Frequência de acertos e erros.
- Tempo médio de resposta.
- Dificuldades por conteúdo e trilha.
- Evolução do nível do aluno.

### Abstração

Os detalhes da interface sao reduzidos a entidades principais:

- Aluno.
- Trilha.
- Atividade.
- Resposta de codigo.
- Registro de desempenho.
- Recomendação.
- Workspace institucional.

### Algoritmos

O algoritmo `recommendNextStep`, em `codigo/src/recommendation.ts`, usa regras simples:

- Se a taxa de acerto for maior que 80%, recomenda avancar.
- Se a taxa de acerto for menor que 50%, recomenda revisar.
- Se o tempo medio for maior que 45 segundos, recomenda revisar.
- Nos demais casos, recomenda continuar praticando.

## Caracterização como Sistema de Larga Escala

O projeto foi concebido para representar problemas comuns de sistemas educacionais de maior porte:

- Muitos alunos e instituições usando a mesma plataforma.
- Grande volume de eventos de aprendizagem.
- Necessidade de recomendações frequentes.
- Personalização por aluno, turma e trilha.
- Autenticação segura e possibilidade de integração com provedores externos.
- Evolução futura para persistência em banco de dados e relatórios institucionais.

Na versão atual, os dados pedagógicos ficam no navegador. Em uma versão de produção completa, eles seriam persistidos em banco de dados e associados ao usuário autenticado.

## Acesso ao SaaS

Versão publicada:

[https://pensamento-computacional-jet.vercel.app](https://pensamento-computacional-jet.vercel.app)

Versão local:

```bash
cd codigo
npm install
npm run dev
```

O Vite informará a porta local no terminal. Neste ambiente, a aplicação costuma abrir em:

[http://127.0.0.1:1420/](http://127.0.0.1:1420/)

## Gerar Build de Produção

```bash
cd codigo
npm install
npm run build
```

O build final fica em `codigo/dist`.

## Rodar como Aplicação Desktop com Tauri

Para usar o Tauri, é necessário ter Node.js, npm e Rust instalados.

```bash
cd codigo
npm install
npm run tauri dev
```

## Estrutura do Projeto

- `README.md`: documentação principal.
- `Design.md`: arquitetura, módulos e fluxo do sistema.
- `Desafios.md`: desafios técnicos e de larga escala.
- `Diagrama.png`: diagrama atualizado dos módulos principais.
- `Aula_Abstracoes_PensamentoComputacional`: atividade de abstração, fluxograma e pseudocódigo.
- `codigo`: aplicação web/desktop.
- `codigo/src`: interface, dados de exemplo, cronômetro e algoritmo de recomendação.
- `codigo/src-tauri`: configuração inicial para gerar app desktop.
- `codigo/DEPLOY.md`: orientações de publicação e manutenção do deploy.

## Documentos e Fluxos

O arquivo `Diagrama.png` resume a arquitetura modular atual do StudyFlow. O arquivo `Aula_Abstracoes_PensamentoComputacional/fluxograma.png` representa o fluxo da recomendação adaptativa, incluindo a etapa atual em que o aluno precisa iniciar manualmente a atividade para que o cronômetro comece.
