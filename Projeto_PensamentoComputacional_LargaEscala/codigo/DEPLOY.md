# Deploy do StudyFlow

Este arquivo descreve como publicar a aplicação web do StudyFlow em uma hospedagem real.

## Build de produção

Na pasta `codigo`, execute:

```bash
npm install
npm run build
```

O Vite gera a versão final em:

```text
dist/
```

Essa pasta pode ser publicada em serviços de hospedagem estática.

## Opções de hospedagem

### Vercel

Configuração sugerida:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `codigo`

### Netlify

Configuração sugerida:

- Base directory: `codigo`
- Build command: `npm run build`
- Publish directory: `codigo/dist`

### Cloudflare Pages

Configuração sugerida:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `codigo`

## SSO em produção

Para SSO real e gratuito, integramos o **Clerk** (clerk.com), que oferece:

- Até 10.000 usuários ativos mensais gratuitos
- Suporte a Google, Microsoft, e provedores customizados
- SDK fácil para React
- Gestão de usuários e sessões

### Configuração do Clerk

1. Crie uma conta gratuita em [clerk.com](https://clerk.com)
2. Crie uma nova aplicação
3. Configure os provedores SSO desejados (Google, Microsoft, etc.)
4. Copie as chaves:
   - `VITE_CLERK_PUBLISHABLE_KEY` (para frontend)
   - `CLERK_SECRET_KEY` (para backend, se necessário)
5. Adicione as chaves no Vercel como variáveis de ambiente

### Integração no código

O frontend já está integrado com Clerk. Os botões de SSO agora abrem modais reais do Clerk.

Para produção completa com backend, considere Supabase (gratuito: 500MB banco, 50.000 usuários mensais) para armazenar dados de alunos e registros.

