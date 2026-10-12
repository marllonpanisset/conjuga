# Changelog

Alterações relevantes registradas em ordem cronológica inversa. Este histórico começa com a adoção do registro documental; não representa um histórico completo anterior.

## [Unreleased]

### Brand

- Adotado o cubo isométrico modular âmbar como símbolo oficial (`docs/references/logo-cubo-aprovado.png`): novo componente `LogoCube` no header, menu mobile e rodapé; favicons, ícones Android e Open Graph 1200×630 regenerados do desenho aprovado sobre tinta `#101418`.
- Atualizado `docs/03-BRAND.md` (símbolo, usos incorretos e alvo de favicon/Open Graph) para refletir a decisão visual vigente.

### Documentation

- Adicionado índice técnico, estado verificado do projeto, visão de arquitetura, guia de desenvolvimento e convenções para ADRs e releases.
- Atualizadas as instruções permanentes para distinguir comportamento comprovado pelo código de regras de negócio aprovadas em documentação.
- Atualizados o modelo de negócio, as diretrizes do site e a comunicação para apresentar presença digital como possível primeiro projeto, continuidade com suporte e evolução, e produtos SaaS apenas como possibilidade futura após validação.
- Atualizadas as copies de Home, Serviços e Contato para comunicar engenharia de software orientada a problemas operacionais.

### Interface

- Substituído o design system por uma direção "Technical Paper": papel claro, tinta, réguas finas, anotações monospaciadas e um único sinal de cor (verde petróleo), substituindo o tema escuro anterior.
- Nova escala tipográfica distribuída entre Space Grotesk (display), Inter (texto) e JetBrains Mono (rótulos técnicos), com novos estágios declarados em `app/globals.css`.
- Recompostas Home, Serviços, detalhe de serviço, Projetos, Sobre, Contato, Blog, páginas legais, 404 e erro: índice editorial de serviços, método em painel de etapas com régua, diferenciais como lista institucional, CTA em bloco escuro e formulário em painel de superfície.
- Corrigida a regra global que reduzia todas as transições CSS a `0.01ms`: agora ela vale apenas dentro de `@media (prefers-reduced-motion: reduce)`.
- Adicionadas transição de entrada de rota (`app/template.tsx`), régua de progresso de navegação, revelação tipográfica palavra a palavra, stagger por viewport, régua que se desenha e paralaxe em camada, todas condicionadas a `prefers-reduced-motion`.
- Adicionado link "Ir para o conteúdo" e `id` no `<main>`.
- Removidos componentes sem uso: `FeatureGrid`, `TestimonialBlock`, `StatsBlock`, `ServiceCard`, `Card`, `Grid` e os primitivos de movimento `FadeIn`, `SlideIn`, `RevealOnScroll` e `StaggerGroup`.

Não houve alteração de funcionalidades da aplicação nesta atualização documental.
