# Conjuga — Engenharia de Software

A Conjuga é uma empresa de engenharia de software que resolve problemas operacionais de empresas por meio de sistemas web, automações, integrações e inteligência artificial quando fizer sentido.

Proposta de valor: desenvolvemos sistemas, automações e soluções digitais que ajudam empresas a tornar suas operações mais organizadas e eficientes — reduzindo tarefas repetitivas, eliminando gargalos, conectando informações e criando uma base tecnológica preparada para acompanhar a evolução do negócio.

- Site institucional (endereço configurado no código em `config/site.ts`): <https://www.conjuga.com.br>
- Contato: `contato@conjuga.com.br`
- Posicionamento aprovado: `docs/01-BUSINESS.md`; comunicação aprovada: `docs/05-COPY.md`

Este repositório contém o site institucional da Conjuga e sua infraestrutura técnica. Ele não é o catálogo das soluções entregues a clientes nem um produto comercial por si só.

## Soluções

Áreas comerciais da Conjuga, conforme `docs/01-BUSINESS.md`. São serviços oferecidos pela empresa, não funcionalidades implementadas neste repositório:

- **Sistemas web** — painéis administrativos, portais, CRMs internos, sistemas operacionais e plataformas sob medida. O conteúdo de serviços vigente (`content/servicos.ts`) inclui MVPs e aplicações web dentro desta área.
- **Automações de processos** — fluxos automatizados, integrações entre plataformas, processos internos e eliminação de tarefas repetitivas.
- **Presença digital** — landing pages, sites institucionais, microsites, blogs e SEO técnico, como possível porta de entrada para um trabalho mais amplo de engenharia.
- **Inteligência artificial aplicada** — capacidade transversal (assistentes internos, busca inteligente, classificação de informações, automação com IA), utilizada somente quando gera valor real para o negócio.

Distinções importantes:

- **Serviços da empresa**: descritos acima e detalhados em `docs/01-BUSINESS.md`.
- **Este repositório**: site institucional e infraestrutura técnica descritos em “Estado do projeto” e “Arquitetura e estrutura”.
- **Produtos próprios ou SaaS**: não são ofertas consolidadas. Conforme `docs/01-BUSINESS.md` e `docs/06-ROADMAP.md`, só podem ser considerados no futuro a partir de problemas repetidos e soluções validadas em projetos reais.
- **CMS modular**: não há evidência de CMS implementado no código, nas migrations ou em `docs/project-state.md`; nada neste README deve ser lido como anúncio de CMS ou SaaS pronto.

## Estado do projeto

Resumo objetivo do que está implementado (detalhes verificados em `docs/project-state.md`):

- Site institucional em Next.js com rotas de marketing (início, contato, sobre, serviços e detalhe por slug, projetos e detalhe por slug, soluções por nicho, política de privacidade e termos de uso) e blog com listagem e artigos em MDX.
- Formulário de contato que envia para `POST /api/contato`. A rota valida e sanitiza os dados, aplica limites em memória, persiste leads via Supabase e tenta notificar um webhook opcional sem falhar a persistência quando ele não está configurado.
- SEO implementado nas rotas e utilitários, com handlers de sitemap e robots.
- Analytics e consentimento de cookies implementados no frontend; a configuração real dos ambientes não foi confirmada localmente.
- Banco de dados: migrations em `supabase/migrations/` criam a tabela `public.leads` (campos, constraints, índices, Row Level Security). Não há confirmação de que as migrations foram aplicadas em ambiente hospedado.

Não implementado neste repositório, conforme `docs/project-state.md` e `docs/architecture/overview.md`:

- Autenticação de usuários da aplicação.
- CMS, área administrativa ou Storage para CMS.
- Testes automatizados (nenhum script de teste declarado no `package.json`).
- CI/CD ou configuração identificável de provedor de deploy; provedor, ambientes publicados e domínio ativo não são verificáveis a partir do checkout local.

Não há backlog de tarefas registrado neste repositório; o roadmap estratégico (`docs/06-ROADMAP.md`) orienta a evolução de longo prazo e não equivale a funcionalidades em desenvolvimento.

Referência canônica de estado: `docs/project-state.md`.

## Stack tecnológica

Tecnologias verificadas no `package.json` e no código:

- Next.js 16 (App Router) e React 19.
- TypeScript 5.
- Tailwind CSS 4.
- Framer Motion 11.
- MDX (`@mdx-js`, `@next/mdx`) para artigos; dados de projetos e serviços em módulos TypeScript.
- Supabase JS (`@supabase/supabase-js`) para persistência server-side de leads.
- `lucide-react`, `clsx`, `tailwind-merge`, `gray-matter`, `reading-time`.
- Desenvolvimento e qualidade: ESLint (`eslint`, `eslint-config-next`), PostCSS, `@tailwindcss/postcss`.

Tecnologias de fases futuras do roadmap não estão listadas aqui.

## Arquitetura e estrutura

| Caminho | Responsabilidade |
| --- | --- |
| `app/` | Rotas, layouts, páginas, handlers de API (`api/contato`), metadados, estilos globais, sitemap e robots. |
| `components/` | Componentes de layout, interface, seções, animação, analytics e SEO. |
| `config/` | Configuração compartilhada de navegação e dados do site (`config/site.ts`). |
| `content/` | Artigos MDX e dados de projetos e serviços. |
| `lib/` | SEO, conteúdo MDX, validação e fluxo de leads, cliente Supabase e utilitários. |
| `types/` | Tipos de domínio para artigos, projetos e serviços. |
| `public/` | Imagens e ícones estáticos. |
| `supabase/migrations/` | Migrations SQL versionadas. |

Documentos técnicos pertinentes: `docs/architecture/overview.md` (stack, rotas, integrações, dados e limites) e `docs/decisions/README.md` (política de ADRs).

## Pré-requisitos e configuração

- Node.js `24.x`, conforme `engines` no `package.json` e `.nvmrc`.
- npm, com dependências descritas no `package-lock.json`.

Instalação das dependências:

```bash
npm install
```

Execução local:

```bash
npm run dev
```

O servidor de desenvolvimento padrão do Next.js atende em `http://localhost:3000`.

Variáveis de ambiente (nomes conferidos no código; valores devem ser fornecidos pelo ambiente e nunca versionados):

| Variável | Uso | Obrigatória |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | URL utilizada pelo cliente Supabase server-side. | Sim, para inicializar a persistência. |
| `SUPABASE_SECRET_KEY` | Credencial privilegiada do cliente Supabase server-side. Manter somente no servidor. | Sim, para inicializar a persistência. |
| `CONTACT_WEBHOOK_URL` | Destino opcional de notificação após persistir o lead. | Não; sem ela não há entrega de notificação. |
| `CONTACT_WEBHOOK_TOKEN` | Bearer token opcional para o webhook. | Não. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Identificador consultado pela implementação de analytics. | Não indicado pelo código como obrigatório. |

Não existe arquivo `.env.example` neste repositório. Detalhes em `docs/development/setup.md`.

## Comandos de desenvolvimento e validação

Scripts declarados no `package.json` (somente estes estão documentados; não há `typecheck` nem `test`):

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento. |
| `npm run lint` | Verificação ESLint. |
| `npm run build` | Build de produção. |
| `npm start` | Serve o build de produção; deve ser precedido por `npm run build`. |
| `npm run analyze` | Análise experimental do bundle (`next experimental-analyze`). |

Fluxo recomendado e detalhes em `docs/development/setup.md`. Não se afirma que os comandos passam sem execução ou evidência recente.

## Documentação do projeto

Índice e manutenção em `docs/README.md`. Os documentos canônicos definem as regras aprovadas de negócio, princípios, marca, site, comunicação e roadmap:

```text
docs/
├── 01-BUSINESS.md      Modelo de negócio
├── 02-PRINCIPLES.md    Princípios da empresa e engenharia
├── 03-BRAND.md         Identidade da marca
├── 04-WEBSITE.md       Arquitetura e estrutura do site
├── 05-COPY.md          Comunicação institucional
├── 06-ROADMAP.md       Evolução estratégica
├── README.md           Índice documental
├── project-state.md    Estado verificado da implementação
├── architecture/       Arquitetura técnica
├── development/        Instruções de desenvolvimento
├── decisions/          Registros de decisões (ADRs)
├── changelog/          Histórico de mudanças
└── releases/           Notas relacionadas a tags de versão
```

`AGENTS.md` é o ponto de entrada para agentes de IA, com o fluxo permanente de trabalho e as políticas do projeto. A estratégia comercial e operacional inicial está em `docs/07-COMMERCIAL-PLAYBOOK.md`, documento de trabalho subordinado a `docs/01-BUSINESS.md`, com valores e prazos provisórios que não devem ser publicados no site sem validação.

O conteúdo desses documentos não é duplicado aqui; consulte-os como fonte.

## Princípios de desenvolvimento

Este projeto adota a abordagem Documentation First para decisões de negócio e operação: o código e as configurações confirmam o comportamento implementado, enquanto os documentos canônicos definem as regras e o posicionamento aprovados.

Antes de implementar funcionalidades:

- consulte a documentação correspondente;
- evite duplicar regras ou decisões;
- mantenha cada tipo de informação em sua fonte apropriada;
- atualize a documentação técnica, o estado do projeto e o changelog quando houver mudanças relevantes.

Consulte `docs/README.md` para o índice documental e `AGENTS.md` para o fluxo permanente de trabalho.

## Licença

Projeto proprietário.

Todos os direitos reservados.
