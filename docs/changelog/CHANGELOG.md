# Changelog

Alterações relevantes registradas em ordem cronológica inversa. Este histórico começa com a adoção do registro documental; não representa um histórico completo anterior.

## [Unreleased]

### Roadmap

- Detalhada a sequência de preparação antes da prospecção: revisão final do site, diagnóstico de infraestrutura gratuita, três posts fixados de `@conjuga.br` e prontidão comercial/jurídica; prospecção ativa permanece bloqueada até revisão dessas etapas.
- Registradas no estado do projeto as informações de infraestrutura reportadas pelo responsável (Supabase gratuito, risco de pausa por inatividade e região informada `us-east-1`), distinguindo-as de verificações ainda dependentes dos consoles e ambientes externos.
- Alinhado o playbook comercial ao gate: a regra de prospecção por capacidade só passa a valer depois da conclusão das prioridades pré-lançamento.
- Nenhuma funcionalidade ou comportamento do site foi alterado nesta atualização documental.

### Legal & Commercial

- Consolidada no playbook a política de manutenção mensal, exclusões de terceiros, infraestrutura, atendimento, suporte e garantia técnica; atualizados Termos de Uso e Política de Privacidade com informações verificáveis do site e pendências jurídicas registradas no estado do projeto.
- Atualizado o FAQ da página Contato com as dez perguntas comerciais aprovadas e removida a promessa de retorno em um dia útil.

### Services

- Incluídas as três rotas individuais de serviços no sitemap e adicionados links contextuais a partir de `/servicos` e da página de detalhe do case, mantendo-as fora da navegação interna.
- Atualizada a página `/servicos` para quatro ofertas principais e três complementares com os preços aprovados em WEB-004.6; navegação desktop e mobile simplificada para link direto.
- Consolidada a página `/servicos` em quatro ofertas principais e serviços de suporte e evolução; páginas individuais preservadas, publicadas e indexáveis, com links contextuais a partir de `/servicos` e da página de detalhe do case, permanecendo fora da navegação interna.
- Reorganizada a página `/servicos` para apresentar as três ofertas, formas de escolha, etapas do trabalho e contato, sem alterar as páginas individuais.
- Alinhado o conteúdo das páginas individuais de serviços para qualificar benefícios, limitar evolução futura a novo escopo contratado e diferenciar CTAs por oferta.

### Home

- Reorganizada a Home com a proposta comercial aprovada, sinais de problemas operacionais, três ofertas, etapas de trabalho, diferenciais e contato direto.
- Cadastrado o projeto de portfólio profissional de Taís no mecanismo existente de cases; o projeto passa a aparecer também na listagem e rota de detalhe de Projetos.

### Brand

- Adotado o cubo isométrico modular âmbar como símbolo oficial (`docs/references/logo-cubo-aprovado.png`): novo componente `LogoCube` no header, menu mobile e rodapé; favicons, ícones Android e Open Graph 1200×630 regenerados do desenho aprovado sobre tinta `#101418`.
- Atualizado `docs/03-BRAND.md` (símbolo, usos incorretos e alvo de favicon/Open Graph) para refletir a decisão visual vigente.

### Documentation

- Adicionado índice técnico, estado verificado do projeto, visão de arquitetura, guia de desenvolvimento e convenções para ADRs e releases.
- Atualizadas as instruções permanentes para distinguir comportamento comprovado pelo código de regras de negócio aprovadas em documentação.
- Atualizados o modelo de negócio, as diretrizes do site e a comunicação para apresentar presença digital como possível primeiro projeto, continuidade com suporte e evolução, e produtos SaaS apenas como possibilidade futura após validação.
- Atualizadas as copies de Home, Serviços e Contato para comunicar engenharia de software orientada a problemas operacionais.

### Interface

- Padronizado o item Blog no menu desktop, alinhando-o ao menu mobile e ao rodapé.
- Substituído o design system por uma direção "Technical Paper": papel claro, tinta, réguas finas, anotações monospaciadas e um único sinal de cor (verde petróleo), substituindo o tema escuro anterior.
- Nova escala tipográfica distribuída entre Space Grotesk (display), Inter (texto) e JetBrains Mono (rótulos técnicos), com novos estágios declarados em `app/globals.css`.
- Recompostas Home, Serviços, detalhe de serviço, Projetos, Sobre, Contato, Blog, páginas legais, 404 e erro: índice editorial de serviços, método em painel de etapas com régua, diferenciais como lista institucional, CTA em bloco escuro e formulário em painel de superfície.
- Corrigida a regra global que reduzia todas as transições CSS a `0.01ms`: agora ela vale apenas dentro de `@media (prefers-reduced-motion: reduce)`.
- Adicionadas transição de entrada de rota (`app/template.tsx`), régua de progresso de navegação, revelação tipográfica palavra a palavra, stagger por viewport, régua que se desenha e paralaxe em camada, todas condicionadas a `prefers-reduced-motion`.
- Adicionado link "Ir para o conteúdo" e `id` no `<main>`.
- Removidos componentes sem uso: `FeatureGrid`, `TestimonialBlock`, `StatsBlock`, `ServiceCard`, `Card`, `Grid` e os primitivos de movimento `FadeIn`, `SlideIn`, `RevealOnScroll` e `StaggerGroup`.

Não houve alteração de funcionalidades da aplicação nesta atualização documental.
