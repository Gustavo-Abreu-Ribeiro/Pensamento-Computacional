# Projeto Corrigido

## Versão corrigida

A versão corrigida está na pasta:

```text
Atividade_Caca_de_Bugs/codigo/
```

Ela foi criada a partir do frontend original do StudyFlow e recebeu ajustes concentrados em execução, lógica, acessibilidade e clareza.

## Correções realizadas

## 1. Correção dos textos quebrados

Os arquivos `src/App.tsx`, `src/data.ts` e `src/recommendation.ts` foram normalizados para UTF-8, corrigindo palavras com acentuação em português.

Justificativa: a interface precisa comunicar corretamente os conteúdos de pensamento computacional; texto quebrado compromete compreensão e profissionalismo.

## 2. Modo demonstração sem Clerk

O `src/main.tsx` foi alterado para manter a autenticação Clerk quando `VITE_CLERK_PUBLISHABLE_KEY` existir, mas carregar o app em modo demonstração quando a variável não estiver definida.

Justificativa: a aplicação deixa de quebrar em ambientes novos, como correção da atividade ou clone limpo do repositório.

## 3. Validação segura do localStorage

Foram adicionadas funções para validar tema, aluno, workspace e histórico antes de usar os dados salvos.

Justificativa: dados locais podem ser apagados, editados ou corrompidos. O tratamento evita falhas no carregamento e retorna para valores padrão seguros.

## 4. Persistência completa do estado principal

Agora o app salva aluno, workspace e histórico sempre que esses estados mudam.

Justificativa: a experiência fica consistente após recarregar a página, e os registros de desempenho deixam de ser temporários.

## 5. Feedback após envio de resposta

Foi adicionada uma mensagem de status informando se a resposta foi registrada como correta ou se precisa de revisão.

Justificativa: o usuário entende o resultado da ação e recebe retorno imediato.

## 6. Proteção no cálculo de cobertura

O cálculo das atividades de código passou a tratar listas vazias de palavras-chave esperadas.

Justificativa: novas atividades podem ser criadas no futuro; a correção evita resultado inválido e melhora a escalabilidade.

## 7. Histórico com tabela HTML real

O histórico de desempenho passou a usar `table`, `thead`, `tbody`, `th` e `td`.

Justificativa: a estrutura fica mais clara para navegadores, leitores de tela e manutenção futura.

## 8. Foco acessível ampliado

O CSS agora inclui foco visível para `textarea` e links.

Justificativa: usuários que navegam por teclado precisam perceber claramente onde estão na interface.

## 9. Referências oficiais adicionadas

A tela de configurações recebeu links para páginas oficiais sobre acessibilidade digital, privacidade, segurança e tratamento de dados.

Justificativa: como o projeto lida com dados educacionais e recomendações, a avaliação deve se apoiar em fontes confiáveis, preferencialmente oficiais.

## Teste executado

```bash
npm run build
```

Resultado: compilação TypeScript e build Vite concluídos com sucesso.
