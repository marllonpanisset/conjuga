# ROADMAP.md

> Documento canônico da evolução estratégica da Conjuga.
>
> Define as principais fases de crescimento da empresa e suas prioridades.
>
> Este documento não substitui um backlog de desenvolvimento. Seu objetivo é orientar decisões de longo prazo.

---

# Visão

A Conjuga será construída de forma incremental.

Cada etapa deve gerar aprendizado e valor antes da próxima começar.

Não buscamos construir tudo de uma vez.

Buscamos construir uma empresa sólida, sustentável e capaz de evoluir sem comprometer a qualidade das entregas.

---

# Princípios

- Lançar antes de aperfeiçoar.
- Validar antes de expandir.
- Automatizar antes de escalar.
- Crescer de forma sustentável.
- Priorizar impacto sobre quantidade.
- Proteger a capacidade de entrega.
- Aprender com clientes e projetos reais antes de padronizar ou expandir.
- Não antecipar etapas futuras sem evidência suficiente.

---

# Phase 1 — Foundation

## Objetivo

Construir uma base sólida para a empresa.

## Sequência operacional atual — preparação antes da prospecção

Esta sequência detalha as prioridades de preparação da Phase 1 e funciona como gate para iniciar a aquisição ativa. A existência de páginas, integrações ou documentos no repositório não significa que a revisão final, a operação em produção ou a prontidão comercial tenham sido validadas.

1. **Finalizar a revisão do site:** revisar todas as páginas públicas; conferir navegação, responsividade, conteúdo, SEO, páginas legais e informações institucionais; testar o formulário e confirmar o recebimento dos leads; verificar WhatsApp e e-mail; concluir auditoria de qualidade e preparação para publicação. O estado do deploy e dos serviços em produção não é verificável pelo checkout local.
2. **Diagnosticar infraestrutura gratuita:** confirmar nos projetos Supabase da Conjuga e da Taís o plano, a pausa por inatividade e a região; mapear dependências de PostgreSQL, Auth, Storage, Edge Functions, APIs e webhooks; avaliar alternativas gratuitas, incluindo Neon, comparando custos, limites, disponibilidade e esforço de migração. Não migrar dados nem contratar serviços pagos sem aprovação explícita.
3. **Preparar três publicações fixadas do Instagram institucional `@conjuga.br`:** (1) CONJUGA — quem somos, posicionamento e proposta de valor; (2) SOLUÇÕES — serviços, problemas atendidos e ofertas contratáveis; (3) PROCESSO — etapas de trabalho e relacionamento com o cliente. Conteúdo alinhado à marca, aos serviços e aos preços publicados no site. `@marllon.zip` não é canal de aquisição da Conjuga nesta etapa; não alterar outros perfis.
4. **Preparar operação comercial e jurídica:** validar custos, horas e margens dos sete serviços; definir atendimento, qualificação e elaboração de propostas; confirmar com orientação contábil e jurídica o modelo jurídico e tributário dos primeiros contratos. Não presumir que o MEI atual pode ser utilizado para as atividades da Conjuga.
5. **Iniciar prospecção somente após a conclusão e revisão das etapas 1–4.** Até lá, não fazer prospecção ativa. Contatos recebidos espontaneamente podem ser tratados sem iniciar campanhas de aquisição.

### Estado das prioridades

- **Concluído como base local:** o repositório contém as páginas institucionais, o formulário de contato e sua rota de API, a página de serviços com sete ofertas e preços, e páginas de Termos de Uso e Privacidade. Isso comprova implementação local, não revisão final, publicação ou funcionamento dos serviços externos.
- **Pendente:** revisão final do site; confirmação do envio e recebimento de leads; verificação dos canais; diagnóstico comparativo de infraestrutura; produção e aprovação dos três posts; validação econômica das ofertas; definição dos processos comercial, jurídico e tributário.
- **Bloqueado para confirmação independente:** estado/plano/região dos projetos Supabase, configuração de produção e dependências do projeto Taís dependem de evidência dos respectivos ambientes/contas. A decisão jurídica e tributária depende de confirmação do responsável e orientação profissional.
- **Gate fechado:** prospecção ativa não começa até a conclusão e revisão humana das prioridades 1–4.

## Prioridades

### Marca

- identidade consolidada;
- documentação estratégica;
- posicionamento definido.

### Site

- páginas institucionais implementadas localmente;
- revisão final conforme a etapa 1 da sequência operacional acima.

### Infraestrutura

- diagnóstico e alternativas conforme a etapa 2 da sequência operacional acima;
- domínio, hospedagem, e-mail profissional, versionamento e CI/CD conforme decisão aprovada.

### Conteúdo

- três publicações fixadas conforme a etapa 3 da sequência operacional acima;
- primeiros artigos e novos projetos apenas quando houver conteúdo e projetos reais adequados.

### Comercial

- prontidão conforme a etapa 4 da sequência operacional acima;
- manter formulário e canais disponíveis para contatos recebidos.

## Critério de conclusão

A Conjuga possui uma base institucional e operacional revisada, canais de contato verificados, infraestrutura avaliada, conteúdo institucional preparado e processo comercial e jurídico-operacional definido antes de iniciar aquisição ativa de clientes.

---

# Phase 2 — Launch

## Objetivo

Começar a adquirir clientes e validar o processo comercial.

## Prioridades

### Marketing e presença

- Google Business Profile;
- LinkedIn;
- Instagram;
- SEO contínuo.

### Prospecção

- prospecção direta, com foco inicial;
- empresas locais e outros potenciais clientes compatíveis com o ICP;
- Google Maps quando aplicável;
- networking;
- indicações.

Regra operacional inicial (cf. `07-COMMERCIAL-PLAYBOOK.md` §7): a prospecção ativa só começa depois do gate de preparação da Phase 1 descrito acima. Depois de aberto o gate, manter prospecção ativa com registro simples de pipeline apenas enquanto houver capacidade para assumir um projeto. Quando houver um contrato em execução, pausar a prospecção ativa de novas empresas para proteger a entrega, mantendo respostas a contatos em andamento e oportunidades recebidas em lista de espera, com prazos realistas, e só retomar quando a capacidade estiver novamente disponível. A regra de capacidade não antecipa a autorização para começar a prospecção.

### Conteúdo

- construir conteúdo continuamente para gerar autoridade e demanda no médio e longo prazo;
- manter presença recorrente e sustentável no Instagram, sem obrigação diária ou meta rígida de frequência;
- artigos técnicos;
- estudos de caso quando houver projetos reais;
- materiais educativos.

### Processos

- CRM;
- pipeline comercial;
- acompanhamento de propostas;
- registro de aprendizados sobre perfil de cliente, problemas e objeções.

## Critério de conclusão

- primeiros clientes recorrentes;
- processo comercial validado;
- entendimento mais claro dos segmentos, problemas e tipos de projeto com maior aderência.

A conclusão desta fase não depende apenas de quantidade de clientes, mas de aprendizado comercial suficiente para orientar a próxima etapa.

Meta interna de referência: alcançar faturamento mensal de R$ 10 mil a R$ 20 mil combinando projetos e receita recorrente de suporte, sustentação e evolução. Esta é uma meta de planejamento interno, não uma promessa ou afirmação comercial.

---

# Phase 3 — Growth

## Objetivo

Aumentar a capacidade de entrega e aquisição sem perder qualidade.

## Prioridades

### Automação e eficiência interna

- automações internas;
- templates;
- documentação;
- uso aplicado de IA;
- melhoria contínua dos processos.

Ferramentas de IA pagas não são contratadas antecipadamente. Após o primeiro cliente, a contratação de um plano pago (cf. `07-COMMERCIAL-PLAYBOOK.md` §8) é avaliada caso a caso conforme necessidade técnica clara, cabimento no orçamento e na margem do projeto, ganho concreto de produtividade ou qualidade e adequação das condições de privacidade e uso de dados, com o custo registrado no planejamento do projeto.

### Portfólio

- novos cases;
- expansão para segmentos com aderência comprovada;
- depoimentos reais quando disponíveis;
- identificação de soluções e padrões reutilizáveis.

### Conteúdo

- calendário editorial quando houver necessidade;
- vídeos;
- redes sociais;
- newsletter quando fizer sentido.

### Processos

- padronização;
- métricas;
- melhoria contínua;
- documentação operacional.

O crescimento da capacidade segue ordem gradual por evidências (cf. `07-COMMERCIAL-PLAYBOOK.md` §9): primeiro validar proposta, contrato, estimativa e entrega com projetos reais dentro da capacidade existente; depois padronizar templates, checklists e processo de proposta e criar suporte recorrente apenas com limites claros de escopo e capacidade; só então avaliar ampliação. A contratação de um tech lead é possibilidade futura e condicional — demanda qualificada superando repetidamente a capacidade segura, receita e caixa suficientes, necessidade de continuidade técnica e processos que permitam transferir contexto —, com alternativas proporcionais (apoio por projeto ou dedicação parcial) avaliadas antes de qualquer custo fixo. Nenhum item deste roadmap autoriza contratação antecipada nem compromete receita futura.

## Critério de conclusão

Empresa operando com processos consistentes, capacidade de entrega protegida e geração de oportunidades mais previsível.

---

# Phase 4 — Platform

## Objetivo

Transformar conhecimento e padrões validados em produtos ou ativos reutilizáveis.

Esta fase só deve avançar quando houver evidência suficiente de que determinados problemas, soluções ou processos possuem potencial de padronização e escala.

Produtos ou SaaS não são ofertas consolidadas nas fases atuais. A possibilidade futura deve partir de problemas repetidos observados em projetos reais e de soluções validadas, sem antecipar um produto antes dessa evidência.

## Prioridades

### Produtos

- plataforma própria;
- ferramentas SaaS;
- soluções reutilizáveis.

### Inteligência Artificial

- agentes especializados;
- automações avançadas;
- ferramentas internas.

### Escalabilidade

- arquitetura multi-tenant quando necessária;
- APIs;
- integrações;
- infraestrutura adequada ao modelo de produto.

## Critério de conclusão

Receita recorrente proveniente de produtos além de serviços.

---

# Processo de Revisão

O roadmap deve ser revisado periodicamente.

Mudanças devem ocorrer quando houver aprendizado, mudança de contexto ou evidência suficiente para justificar uma nova direção estratégica.

Evitar alterar prioridades apenas por tendências momentâneas.

As fases representam direção estratégica, não compromissos rígidos de prazo.

Uma fase pode continuar por mais tempo quando seus critérios de aprendizado ou validação ainda não tiverem sido atingidos.

---

# Fora do Escopo

Este documento não contém:

- backlog;
- tarefas técnicas;
- bugs;
- issues;
- cronogramas detalhados;
- estimativas.

Esses itens pertencem às ferramentas de gerenciamento de projetos.

---

# Relação com os Demais Documentos

- BUSINESS.md define quem somos e como o negócio funciona.
- PRINCIPLES.md define como tomamos decisões.
- BRAND.md define como queremos ser percebidos.
- WEBSITE.md define a arquitetura do site.
- COPY.md define nossa comunicação.
- ROADMAP.md define como evoluímos.
- AGENTS.md define como os agentes de IA devem trabalhar.
- COMMERCIAL-PLAYBOOK.md detalha a estratégia comercial e operacional inicial de forma subordinada ao BUSINESS.md. Escopos e prazos de referência seguem como hipóteses; preços podem ser publicados somente após validação econômica ou aprovação comercial explícita. A tabela aprovada em WEB-004.6 não altera as fases deste roadmap. Em caso de conflito, prevalece o BUSINESS.md.
