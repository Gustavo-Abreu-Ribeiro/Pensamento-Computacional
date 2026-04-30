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

## Desafios Identificados

- Escalabilidade para múltiplos usuários simultâneos  
- Processamento contínuo de dados  
- Geração de recomendações em tempo hábil  
- Segurança de dados educacionais  
- Integração com sistemas externos  

---
