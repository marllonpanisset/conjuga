# 📦 Project Templates - Templates Oficiais de Projetos da Fyrmma

Versão: 1.0.0

Este documento define os modelos padrões utilizados pela Software Factory da Fyrmma para iniciar novos projetos de forma rápida, consistente e escalável.

Os templates funcionam como plantas de construção.

Em vez de começar do zero:

```
Ideia

↓

Template correto

↓

Configuração inicial

↓

Desenvolvimento

↓

Entrega
```

---

# Filosofia dos Templates Fyrmma

Um bom template reduz:

- tempo de desenvolvimento
- erros repetidos
- decisões desnecessárias
- custo operacional

---

# Princípio Principal

Não reinventar o que já funciona.

Criar uma vez.

Melhorar continuamente.

Reutilizar sempre.

---

# Estrutura Geral de Projeto

Todo projeto Fyrmma deve possuir:

```
project/

├── README.md

├── .env.example

├── docs/

├── src/

├── tests/

├── .fyrmma/

└── package.json
```

---

# Convenção de Projetos

Nome:

```
fyrmma-[tipo]-[nome]
```

Exemplos:

```
fyrmma-site-cliente

fyrmma-saas-crm

fyrmma-api-pagamentos
```

---

# TEMPLATE 01 - Landing Page Premium

ID:

```
landing-page-premium
```

Objetivo:

Criar páginas de alta conversão para produtos e empresas.

---

# Stack

Frontend:

```
Next.js

React

TypeScript

Tailwind CSS
```

---

# Estrutura:

```
src/

├── app/

├── components/

├── sections/

├── styles/

└── assets/
```

---

# Seções padrão:

```
Hero

Problema

Solução

Benefícios

Como funciona

Depoimentos

FAQ

CTA

Footer
```

---

# Agentes envolvidos:

```
Marketing Agent

↓

UX Agent

↓

Frontend Agent

↓

SEO Agent

↓

QA Agent
```

---

# Checklist:

- Responsivo
- SEO configurado
- Performance otimizada
- Formulário funcionando
- Analytics instalado

---

# TEMPLATE 02 - Site Institucional

ID:

```
corporate-website
```

Objetivo:

Criar presença digital profissional.

---

# Páginas padrão:

```
/

Sobre

Serviços

Cases

Blog

Contato

404
```

---

# Recursos:

- CMS opcional
- SEO avançado
- Blog
- Formulários
- Integrações

---

# Agentes:

```
Product Agent

↓

Frontend Agent

↓

SEO Agent

↓

QA Agent
```

---

# TEMPLATE 03 - SaaS MVP

ID:

```
saas-mvp
```

Objetivo:

Criar produtos SaaS rapidamente.

---

# Stack padrão:

Frontend:

```
Next.js

TypeScript

Tailwind
```

Backend:

```
Node.js

Fastify

Prisma
```

Banco:

```
PostgreSQL
```

---

# Estrutura:

```
apps/

├── web/

├── api/


packages/

├── database/

├── ui/

└── config/
```

---

# Funcionalidades base:

```
Autenticação

Usuários

Organizações

Dashboard

Configurações

Logs
```

---

# Agentes:

```
Architect

↓

Backend

↓

Frontend

↓

Database

↓

QA

↓

DevOps
```

---

# TEMPLATE 04 - API Backend

ID:

```
backend-api
```

Objetivo:

Criar APIs profissionais.

---

# Stack:

```
Node.js

TypeScript

Fastify

Prisma

PostgreSQL
```

---

# Estrutura:

```
src/

├── modules/

├── routes/

├── services/

├── controllers/

├── database/

└── utils/
```

---

# Recursos:

- validação
- autenticação
- logs
- documentação Swagger
- testes

---

# Agentes:

```
Backend Agent

↓

Database Agent

↓

Security Agent

↓

QA Agent
```

---

# TEMPLATE 05 - Dashboard Administrativo

ID:

```
admin-dashboard
```

Objetivo:

Criar painéis internos.

---

# Recursos:

- gráficos
- tabelas
- filtros
- permissões
- relatórios

---

# Stack:

```
Next.js

React Query

Charts

Tailwind
```

---

# Estrutura:

```
dashboard/

├── pages/

├── components/

├── charts/

├── tables/

└── hooks/
```

---

# Agentes:

```
Frontend Agent

↓

Backend Agent

↓

UX Agent

↓

QA Agent
```

---

# TEMPLATE 06 - CRM WhatsApp com IA

ID:

```
ai-whatsapp-crm
```

Objetivo:

Criar plataforma de relacionamento automatizado.

---

# Funcionalidades base:

```
Usuários

Clientes

Conversas

Pipeline

Tags

Automação

Agentes IA

Relatórios
```

---

# Arquitetura:

```
Frontend

↓

API

↓

Banco

↓

WhatsApp Provider

↓

IA Engine
```

---

# Agentes:

```
Product

↓

Architect

↓

Backend

↓

AI Agent

↓

Frontend

↓

QA
```

---

# TEMPLATE 07 - Plataforma com Agentes IA

ID:

```
ai-agent-platform
```

Objetivo:

Criar sistemas baseados em múltiplos agentes.

---

# Componentes:

```
Agent Manager

Memory System

Tools

Knowledge Base

Workflow Engine
```

---

# Arquitetura:

```
User

↓

Orchestrator

↓

Specialized Agents

↓

Tools

↓

Memory
```

---

# Agentes:

```
AI Architect

↓

Backend

↓

AI Engineer

↓

QA
```

---

# TEMPLATE 08 - Automação Empresarial

ID:

```
business-automation
```

Objetivo:

Eliminar tarefas repetitivas.

---

# Exemplos:

- integração APIs
- bots
- relatórios automáticos
- processamento de dados

---

# Componentes:

```
Trigger

↓

Process

↓

Action

↓

Notification
```

---

# Agentes:

```
Research

↓

Automation Engineer

↓

Backend

↓

QA
```

---

# TEMPLATE 09 - Blog / Conteúdo SEO

ID:

```
seo-content-platform
```

Objetivo:

Criar canais de aquisição orgânica.

---

# Recursos:

- MDX
- categorias
- busca
- SEO
- sitemap

---

# Agentes:

```
Content Agent

↓

SEO Agent

↓

Frontend Agent
```

---

# TEMPLATE 10 - E-commerce

ID:

```
ecommerce-platform
```

Objetivo:

Criar lojas digitais.

---

# Recursos:

```
Produtos

Carrinho

Checkout

Pagamentos

Pedidos

Usuários
```

---

# Agentes:

```
Product

↓

Backend

↓

Frontend

↓

Payment

↓

QA
```

---

# Processo de Criação de Novo Projeto

Fluxo:

```
Solicitação

↓

Escolher Template

↓

Clonar Estrutura

↓

Configurar Variáveis

↓

Executar Agentes

↓

Personalizar

↓

Testar

↓

Publicar
```

---

# Template Selection Agent

ID:

```
template-selector-agent
```

Função:

Escolher o template correto.

---

# Regras:

Perguntar:

```
Qual problema?

Quem usa?

Qual objetivo?

Qual prazo?

Qual orçamento?
```

---

# Critérios:

Landing Page:

```
Venda rápida
```

---

Site:

```
Presença institucional
```

---

SaaS:

```
Produto recorrente
```

---

API:

```
Sistema interno
```

---

Dashboard:

```
Gestão de dados
```

---

# Biblioteca de Templates

Estrutura:

```
templates/

├── landing-page/

├── website/

├── saas/

├── api/

├── dashboard/

├── automation/

└── ai-platform/
```

---

# Evolução dos Templates

Todo projeto concluído deve gerar melhorias.

Fluxo:

```
Projeto entregue

↓

Identificar padrões

↓

Atualizar template

↓

Melhorar fábrica
```

---

# Métricas

Avaliar:

## Tempo inicial

Quanto tempo para começar.

---

## Reutilização

Quantos projetos usam o template.

---

## Qualidade

Quantidade de ajustes necessários.

---

# Prompt Base Template Manager

```
Você é o Template Manager da Fyrmma.

Sua função é selecionar e manter
templates oficiais de projetos.

Escolha a base correta.

Evite começar do zero.

Priorize:

velocidade,

padronização,

qualidade,

reutilização.
```

---

# Visão Final

Templates transformam experiência em ativos.

A Fyrmma não cria projetos.

A Fyrmma opera uma fábrica de produtos digitais.

```
Template

↓

Agentes

↓

Ferramentas

↓

Produto

↓

Receita
```

---

# Regra Final

Cada projeto deve deixar a fábrica melhor.

Fim do documento.
