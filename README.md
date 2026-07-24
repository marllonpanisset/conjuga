# Fyrmma — Site institucional

Site oficial da Fyrmma, construído seguindo a arquitetura técnica aprovada: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React e MDX para o blog.

## Rodando o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Estrutura

- `app/(marketing)` — páginas institucionais (Home, Serviços, Soluções por segmento, Sobre, Projetos, Contato, legais)
- `app/blog` — índice e posts em MDX
- `app/api/contato` — endpoint do formulário de contato (placeholder de envio — conectar a um provedor de e-mail transacional antes de produção)
- `components/ui` — primitivos do design system (Button, Card, Heading, Text etc.)
- `components/motion` — camada de animação sobre Framer Motion (FadeIn, StaggerGroup, RevealOnScroll)
- `components/layout` — Header, Footer, MobileNav, PageWrapper
- `components/sections` — blocos de composição usados nas páginas (Hero, ServiceCard, CTASection etc.)
- `content/` — dados estruturados de serviços, nichos e cases + posts MDX do blog
- `lib/` — utilitários (SEO/metadata, leitura de MDX, `cn`)
- `config/` — configuração de navegação e dados do site

## Convenções

- Nenhuma página deve usar `motion.*` do Framer Motion diretamente — sempre pela camada `components/motion`.
- Conteúdo de serviços, nichos e cases vive em `content/*.ts` como dado tipado, não hardcoded em componentes — adicionar um novo serviço ou nicho é editar o array correspondente.
- Cores, tipografia e espaçamento são tokens definidos em `app/globals.css` (`@theme`) — evitar valores soltos fora dos primitivos de `components/ui`.

## Antes de ir para produção

1. Conectar `app/api/contato/route.ts` a um provedor real de e-mail (ex: Resend) ou CRM.
2. Substituir as imagens placeholder em `content/projetos.ts` por assets reais em `/public/images/cases`.
3. Revisar `config/site.ts` com domínio e links sociais definitivos.
4. Gerar imagem de Open Graph real em `/public/og/default.png`.
5. Rodar `npm run build` e validar Core Web Vitals antes do deploy.
