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

No protótipo atual, o login e os botões de SSO simulam o fluxo de autenticação.

Para SSO real, seria necessário conectar a aplicação a um provedor OAuth/OIDC, como:

- Google Workspace
- Microsoft Entra ID
- provedor institucional da faculdade
- Auth0
- Clerk
- Supabase Auth

Em um sistema real, o fluxo recomendado seria:

1. O aluno acessa o StudyFlow.
2. O frontend redireciona para o provedor SSO.
3. O provedor autentica o usuário.
4. O usuário retorna para o sistema com um token.
5. Um backend valida o token.
6. O sistema cria a sessão e carrega permissões, instituição e turma.

## Backend necessário para SaaS real

Para transformar o StudyFlow em um SaaS completo, seria necessário adicionar:

- API para autenticação e sessões;
- banco de dados para alunos, instituições, trilhas e desempenho;
- controle multi-instituição;
- permissões por perfil;
- armazenamento seguro dos registros;
- relatórios persistentes.

