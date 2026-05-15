# Atividade - Caça de Bugs

## Aula

Tratamento de Erros e Avaliação de Soluções.

## Objetivo

Aplicar tratamento de erros diretamente no projeto StudyFlow, identificando problemas de sintaxe, lógica, execução, acessibilidade, clareza, responsividade e segurança. A atividade usa o frontend original como base e mantém uma versão corrigida em `codigo/`.

## Escopo revisado

- Textos e dados educacionais exibidos no frontend.
- Inicialização do app com e sem chave do Clerk.
- Persistência de tema, aluno, workspace e histórico no `localStorage`.
- Fluxo de resposta das atividades.
- Marcação semântica e navegação por teclado.
- Layout responsivo em telas menores.
- Referências a sites oficiais e seguros.

## Como executar

```bash
cd Projeto_PensamentoComputacional_LargaEscala/Atividade_Caca_de_Bugs/codigo
npm install
npm run dev
```

O projeto funciona em modo demonstração sem `.env.local`. Para usar autenticação real com Clerk, copie `codigo/.env.example` para `.env.local` e preencha `VITE_CLERK_PUBLISHABLE_KEY`.

## Verificação realizada

- `npm run build`: aprovado.
- Servidor Vite em `http://127.0.0.1:1432/`: respondeu HTTP 200.

## Arquivos da entrega

- `README.md`: explicação da atividade e objetivos.
- `Erros_Identificados.md`: registro dos problemas encontrados.
- `Projeto_Corrigido.md`: correções aplicadas e justificativas.
- `Avaliacao.md`: avaliação final sobre clareza, eficiência e escalabilidade.

Commit sugerido:

```bash
git commit -m "Entrega Aula – Tratamento de Erros e Avaliação de Soluções (Projeto)"
```
