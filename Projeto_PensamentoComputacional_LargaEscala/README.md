# Projeto – Pensamento Computacional para Sistemas de Larga Escala

## Descrição

Este projeto foi desenvolvido como parte da disciplina Pensamento Computacional no curso de Ciência da Computação, com a Profa. Kadidja Valéria.

O objetivo é aplicar os conceitos de pensamento computacional e engenharia de software na concepção de um sistema de larga escala, explorando decomposição, abstração, reconhecimento de padrões e algoritmos.

---

## Objetivos

- Relacionar engenharia de software e pensamento computacional  
- Reconhecer princípios e padrões relevantes para sistemas de larga escala  
- Identificar dificuldades reais no desenvolvimento de aplicações complexas  
- Aplicar metodologias ágeis no planejamento do projeto  

---

## Sistema Proposto

Nome do Sistema: StudyFlow – Plataforma de Aprendizagem Adaptativa

### Descrição

Uma aplicação web para aprendizado personalizado que cria trilhas de estudo dinâmicas com base no comportamento do aluno.

O sistema integra:

- Cadastro e autenticação de usuários  
- Registro de desempenho, incluindo acertos, erros e tempo de resposta  
- Sistema de recomendações adaptativas  
- Painel de acompanhamento de progresso  

### Diferencial

O sistema se diferencia por utilizar múltiplos fatores para adaptação do aprendizado:

- Consideração do tempo de resposta além de acertos e erros  
- Ajuste dinâmico da dificuldade em tempo de execução  
- Uso de padrões de comportamento para orientar recomendações  

Essa abordagem permite uma adaptação mais precisa e contínua do conteúdo apresentado ao usuário.

### Caracterização como Sistema de Larga Escala

O sistema foi concebido considerando:

- Grande número de usuários simultâneos  
- Alto volume de dados gerados continuamente  
- Necessidade de processamento frequente de recomendações  
- Personalização individual para cada usuário  

Essas características tornam o problema computacionalmente relevante e exigem soluções eficientes e escaláveis.

### Caracterização como SaaS

O StudyFlow também pode ser entendido como um SaaS educacional, pois seria oferecido como uma aplicação acessada pela internet, sem necessidade de instalação local pelos usuários finais.

Nesse modelo, escolas, professores e alunos poderiam utilizar a plataforma por meio de contas cadastradas, com dados armazenados em nuvem e recursos disponibilizados de forma contínua.

Como SaaS, o sistema poderia incluir:

- Acesso via navegador  
- Cadastro de instituições, professores e alunos  
- Planos de assinatura ou contratação institucional  
- Armazenamento seguro dos dados educacionais em nuvem  
- Painel administrativo para acompanhamento de turmas  
- Relatórios de desempenho por aluno, turma ou instituição  
- Escalabilidade para atender múltiplas instituições simultaneamente  

Essa abordagem reforça a proposta de larga escala, pois permite que o mesmo sistema seja utilizado por diferentes grupos de usuários, mantendo personalização, disponibilidade e evolução contínua da plataforma.

---

## Pensamento Computacional Aplicado

### Decomposição

- Autenticação  
- Perfil do aluno  
- Registro de desempenho  
- Sistema de recomendação  
- Relatórios  

### Reconhecimento de Padrões

- Identificação de erros recorrentes  
- Análise de tempo de resposta  
- Identificação de dificuldades por conteúdo  

### Abstração

O sistema foi modelado com base nas seguintes entidades principais:

- Aluno  
- Conteúdo  
- Desempenho  
- Recomendação  

### Algoritmos

O sistema utiliza regras para adaptação do conteúdo:

Se o aluno apresenta alto índice de acertos, o nível de dificuldade é aumentado.  
Se o aluno apresenta alto índice de erros, o nível de dificuldade é reduzido.  
Se o tempo de resposta é elevado, o sistema sugere revisão do conteúdo.

---

## Metodologia de Desenvolvimento

Metodologia: Scrum  

- Sprints de duas semanas  
- Uso de GitHub Projects, Issues e quadro Kanban  

---

## Implementação Atual

Foi desenvolvida uma versão web funcional do StudyFlow com React, TypeScript, Vite e estrutura preparada para Tauri.

A aplicação atual apresenta uma interface moderna de SaaS educacional, com painel de acompanhamento, configuração de aluno, instituição e turma, registro de respostas e recomendação adaptativa.

Recursos implementados:

- Menu inicial com navegação entre páginas internas do sistema  
- Catálogo de trilhas de aprendizagem por objetivo educacional  
- Página específica de painel para acompanhamento do aluno e da turma  
- Página de configurações com sete temas visuais selecionáveis  
- Dashboard com métricas de nível, taxa de acerto, tempo médio e alunos ativos  
- Cadastro simples de aluno, instituição e turma dentro da sessão  
- Atividades com alternativas e correção automática  
- Cronômetro real para medir o tempo de resposta do aluno  
- Histórico de desempenho por trilha, conteúdo, resultado, tempo e dificuldade  
- Algoritmo de recomendação baseado em acertos, erros e tempo médio  
- Interface visual mais moderna, limpa e profissional para representar um SaaS educacional  

Temas disponíveis:

- Moderno  
- Escuro  
- Pastel  
- Terroso  
- Vibrante  
- Cores fortes  
- Neo brutalism  

### Acesso ao SaaS

Com o servidor de desenvolvimento em execução, o app pode ser acessado pelo navegador no endereço:

[http://127.0.0.1:1420/](http://127.0.0.1:1420/)

Caso o Vite utilize outra porta, o endereço correto aparecerá no terminal após executar `npm run dev` dentro da pasta `codigo`.

### Rodar como aplicação web

```bash
cd codigo
npm install
npm run dev
```

### Rodar como aplicação desktop com Tauri

Para usar o Tauri, é necessário ter Node.js, npm e Rust instalados.

```bash
cd codigo
npm install
npm run tauri dev
```

### Estrutura criada

- `README.md`: documentação principal do projeto
- `Design.md`: descrição da arquitetura e módulos do sistema
- `Desafios.md`: desafios técnicos e de larga escala
- `Diagrama.png`: diagrama do sistema
- `codigo`: aplicação web/desktop e arquivos necessários para execução
- `codigo/src`: interface, dados de exemplo, cronômetro real e algoritmo de recomendação
- `codigo/src-tauri`: configuração inicial para gerar app desktop
- `codigo/package.json`: scripts e dependências do projeto

---

## Desafios Identificados

- Escalabilidade para múltiplos usuários simultâneos  
- Processamento contínuo de dados  
- Geração de recomendações em tempo hábil  
- Segurança de dados educacionais  
- Integração com sistemas externos  

---
