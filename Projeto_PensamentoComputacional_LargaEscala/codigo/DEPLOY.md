# Deploy do StudyFlow

## URL Publicada

A versão atual em deploy está disponível em:

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

O build de produção é gerado em `dist`.

## Desenvolvimento Local

```bash
npm install
npm run dev
```

O Vite informa a URL local no terminal. Neste ambiente, a porta usada costuma ser `1420`.

## Variáveis de Ambiente

O login depende da chave pública do Clerk. Em ambiente local, ela deve estar em `.env.local`.

Exemplo:

```text
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
```

Na Vercel, a mesma variável deve ser configurada nas variáveis de ambiente do projeto.

## Observações de Produção

A versão atual é uma demonstração funcional. Ela usa Clerk para autenticação e `localStorage` para dados pedagógicos da sessão. Em uma versão SaaS completa, os registros de desempenho deveriam ser persistidos em banco de dados e associados ao usuário autenticado.

Antes de publicar uma nova versão, valide:

- `npm run build`
- login via Clerk
- navegação entre Início, Trilhas, Painel, Atividade, Histórico e Configurações
- alternância entre os nove temas
- registro de respostas de múltipla escolha e desafios de código
- avaliação automática de cobertura nas atividades de código
- atualização do histórico
- footer discreto no fim da página
