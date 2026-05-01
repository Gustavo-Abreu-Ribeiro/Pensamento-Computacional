# Deploy do StudyFlow

## URL Publicada

A versao atual em deploy esta disponivel em:

[https://pensamento-computacional-jet.vercel.app](https://pensamento-computacional-jet.vercel.app)

## Stack

- React
- TypeScript
- Vite
- Clerk
- Vercel
- Tauri preparado para empacotamento desktop

## Build Local

```bash
npm install
npm run build
```

O build de producao e gerado em `dist`.

## Desenvolvimento Local

```bash
npm install
npm run dev
```

O Vite informa a URL local no terminal. Neste ambiente, a porta usada costuma ser `1420`.

## Variaveis de Ambiente

O login depende da chave publica do Clerk. Em ambiente local, ela deve estar em `.env.local`.

Exemplo:

```text
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
```

Na Vercel, a mesma variavel deve ser configurada nas variaveis de ambiente do projeto.

## Observacoes de Producao

A versao atual e uma demonstracao funcional. Ela usa Clerk para autenticacao e `localStorage` para dados pedagogicos da sessao. Em uma versao SaaS completa, os registros de desempenho deveriam ser persistidos em banco de dados e associados ao usuario autenticado.

Antes de publicar uma nova versao, valide:

- `npm run build`
- login via Clerk
- navegacao entre Inicio, Trilhas, Painel, Atividade, Historico e Configuracoes
- alternancia entre os nove temas
- registro de respostas de multipla escolha e desafios de codigo
- avaliacao automatica de cobertura nas atividades de codigo
- atualizacao do historico
- footer discreto no fim da pagina
