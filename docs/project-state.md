# Estado atual do projeto

Última verificação: 2026-11-03.

Este registro descreve o que foi verificado no repositório. Informações que dependem de ambientes externos são marcadas como não verificáveis localmente.

## Versão e Git

- Versão declarada em `package.json`: `0.1.0`.
- Branch local verificada: `main`.
- A branch local `develop` não existe no checkout auditado. Branch principal de desenvolvimento/remota não configurada ou confirmada.
- Nenhuma tag Git de versão foi encontrada.
- A convenção futura de branches está em [`../AGENTS.md`](../AGENTS.md); sua adoção operacional ainda não está refletida em branches locais.

## Stack

- Node.js `24.x` (requisito declarado em `package.json`).
- Next.js `16` com App Router e React `19`.
- TypeScript `5`.
- Tailwind CSS `4` e Framer Motion `11`.
- MDX para artigos; conteúdo de projetos e serviços também está em módulos TypeScript.
- Supabase JS para persistência server-side de leads.

## Arquitetura e funcionalidades implementadas

- Site institucional em Next.js, com rotas de marketing para início, contato, sobre, serviços, projetos, soluções e políticas legais; há também listagem e páginas de artigos MDX.
- Componentes compartilhados em `components/`, conteúdo em `content/`, configurações em `config/` e utilitários de aplicação em `lib/`.
- Metadados e SEO são implementados nas rotas e utilitários; existem handlers de sitemap e robots.
- Formulário de contato envia dados para `POST /api/contato`. A rota valida/sanitiza os dados, aplica limites em memória, persiste leads via Supabase e tenta notificar um webhook opcional.
- A única migração presente cria `public.leads`, constraints, índices e habilita Row Level Security.
- Analytics e consentimento têm implementação no frontend. O aviso aceita ou recusa a análise; a preferência fica no `localStorage`, e não há controle permanente para reabri-lo. O Google Analytics só é carregado com consentimento aceito e `NEXT_PUBLIC_GA_MEASUREMENT_ID` configurado. A presença do identificador em produção não foi verificada.
- O formulário envia nome, empresa opcional, e-mail, telefone opcional, serviço, mensagem e confirmação de leitura para `POST /api/contato`. A aplicação persiste leads no Supabase quando configurado e pode encaminhá-los a um webhook externo opcional. O IP e fingerprints contra abuso/duplicidade são usados temporariamente em memória; o esquema do lead não persiste IP.
- O código não define prazo de retenção nem rotina de exclusão automática de leads. A migration habilita RLS na tabela `leads`, mas não há policies explícitas nas migrations encontradas; permissões e configuração do projeto Supabase publicado precisam de confirmação. Projeto/região/configuração de produção, destino do webhook, hospedagem, logs externos e retenção operacional não foram verificados. A base legal de cada finalidade, a identidade jurídica do controlador e eventual canal formal de encarregado seguem pendentes de confirmação e revisão jurídica.
- A Home apresenta as três ofertas comerciais e o case do portfólio profissional de Taís, cadastrado em `content/projetos.ts` e vinculado à oferta `presenca-digital` (o campo "Solução aplicada" da página do case deriva de `serviceSlug`). O endereço `https://taissales.vercel.app/` foi informado pelo responsável e teve acesso público verificado por resposta HTTP 200 durante a atualização de apresentação do case; o conteúdo do site Taís ainda está em complementação pela cliente. A página `/projetos/portfolio-tais` publica quatro capturas reais desse projeto (campo `images`) e a listagem `/projetos` exibe a primeira como imagem de apresentação; `CaseCard` continua sem imagem, preservando a Home. Nenhum métrica, resultado ou depoimento não medido foi publicado.
- `/servicos` apresenta quatro ofertas principais e três complementares com preços iniciais aprovados em WEB-004.6. A navegação desktop e mobile direciona Serviços diretamente para `/servicos`; as três rotas individuais permanecem implementadas, publicadas e indexáveis, incluídas no sitemap e vinculadas contextualmente a partir de `/servicos` e da página de detalhe do case, permanecendo fora da navegação interna.

## Preparação para lançamento e prospecção

O roadmap registra a sequência pré-lançamento e o gate para aquisição ativa. Implementação local não comprova publicação, funcionamento dos serviços externos ou conclusão da preparação comercial.

- **Base local existente:** páginas institucionais, `/servicos` com sete ofertas e preços aprovados, formulário e rota de API, páginas legais, links de WhatsApp/e-mail e metadados/SEO estão presentes no repositório. Revisão final de todas as páginas, testes reais de envio/recebimento de leads, verificação dos canais e auditoria de qualidade continuam pendentes. O estado publicado permanece desconhecido.
- **Infraestrutura Supabase:** conforme informação do responsável, os projetos da Conjuga e da Taís usam plano gratuito, estão sujeitos a pausa por inatividade e têm região informada `us-east-1`. Essas informações não foram confirmadas nos consoles dos projetos. No repositório Conjuga, o Supabase é usado para persistir leads; não foi identificada autenticação de usuários da aplicação nem uso de Storage ou Edge Functions neste site. Dependências de PostgreSQL, Auth, Storage, Edge Functions, APIs e webhooks precisam ser verificadas nos dois projetos e em seus ambientes. O projeto Taís não está disponível neste repositório para auditoria de código.
- **Alternativas de infraestrutura:** avaliação de opções gratuitas, incluindo Neon, com comparação de custos, limites, disponibilidade e esforço/risco de migração ainda não realizada. Nenhuma migração ou contratação paga está autorizada por este registro.
- **Instagram:** três posts fixados para `@conjuga.br` estão planejados — CONJUGA, SOLUÇÕES e PROCESSO — mas ainda precisam de conteúdo, produção visual e aprovação. `@marllon.zip` não deve ser tratado como canal de aquisição institucional nesta etapa; não alterar outros perfis.
- **Preparação comercial e jurídica:** validação de custos, horas e margens das sete ofertas; definição do fluxo de atendimento, qualificação e propostas; e decisão sobre modelo jurídico e tributário dos primeiros contratos estão pendentes. Não presumir que o MEI atual cobre as atividades da Conjuga.
- **Prospecção:** permanece suspensa até a conclusão e revisão humana das quatro prioridades anteriores. O playbook de capacidade se aplica após a abertura desse gate.

### Estado das tarefas

- **Concluído como implementação local:** existe uma base de site, contato, preços publicados no código e documentação institucional. Isso não equivale à conclusão da revisão final nem à publicação.
- **Pendente:** todos os itens de finalização, confirmação de infraestrutura e comparação de alternativas, criação e aprovação dos posts, validação econômica e preparação operacional/jurídica descritos em `06-ROADMAP.md`.
- **Bloqueado para confirmação externa:** estado real dos projetos Supabase e das integrações/serviços em produção depende de evidência dos consoles e ambientes correspondentes; a escolha jurídico-tributária depende de decisão do responsável com orientação profissional. Até essas confirmações, não registrar esses itens como concluídos.

Detalhes e limites: [`architecture/overview.md`](architecture/overview.md).

## Funcionalidades em desenvolvimento

Não há estado de tarefas ou indicação confiável de funcionalidades em desenvolvimento nos arquivos auditados. O roadmap estratégico não equivale a um backlog de implementação.

## Próximos passos e dívidas conhecidas

- A sequência atual de preparação para lançamento e os gates de prospecção estão registrados em [`06-ROADMAP.md`](06-ROADMAP.md); este roadmap estratégico não substitui um backlog técnico detalhado.
- Os controles de limite de requisições e duplicidade da rota de contato são armazenados em memória no processo; não constituem estado compartilhado entre múltiplas instâncias.
- Não há script de testes automatizados declarado em `package.json`.
- Não foram encontrados arquivos de CI/CD nem configuração de provedor de deploy na inspeção do repositório. O processo e estado do deploy são desconhecidos.
- Não há ADRs históricos no repositório. Não foi possível determinar com segurança o racional histórico das escolhas arquiteturais existentes.
- A Política de Privacidade e os Termos de Uso refletem o comportamento verificável no código; a revisão jurídica e as confirmações de tratamento/fornecedores descritas acima continuam pendentes antes de considerar o conteúdo legal definitivo.

## Integrações e autenticação

- Supabase é usado para inserir leads. A configuração depende de `NEXT_PUBLIC_SUPABASE_URL` e `SUPABASE_SECRET_KEY` no ambiente server-side.
- A notificação externa usa `CONTACT_WEBHOOK_URL` e opcionalmente `CONTACT_WEBHOOK_TOKEN`. Sem URL configurada, a notificação não é entregue; a rota ainda trata esse caso sem falhar a persistência do lead.
- O identificador `NEXT_PUBLIC_GA_MEASUREMENT_ID` é consultado pelo código de analytics; a configuração real do ambiente não foi confirmada.
- Não foi identificada autenticação de usuários da aplicação no código e nas rotas auditadas. O cliente Supabase server-side desativa persistência e renovação de sessão; isso não prova o estado de autenticação ou políticas no projeto Supabase hospedado.

## Deploy

Não verificável a partir do checkout local: provedor, ambientes publicados, pipeline, domínio ativo, execução das migrações remotas e versão atualmente implantada. Não inferir estado de produção a partir do código local.
