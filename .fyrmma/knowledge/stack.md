# ⚙️ Stack Tecnológica Oficial da Fyrmma

Versão: 1.0.0

Este documento define a stack oficial utilizada pela Fyrmma.

Toda Inteligência Artificial deve seguir este documento antes de instalar bibliotecas, criar arquitetura ou escrever código.

Não utilize tecnologias fora deste documento sem justificativa técnica.

---

# Filosofia

A stack da Fyrmma foi escolhida com base em cinco pilares.

- Simplicidade
- Produtividade
- Escalabilidade
- Performance
- Facilidade de manutenção

Não utilizamos tecnologias apenas porque estão na moda.

Toda ferramenta deve resolver um problema real.

---

# Stack Principal

Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion
- Shadcn UI
- Lucide Icons

Backend

- Fastify
- TypeScript
- Prisma ORM

Banco

- PostgreSQL

Infraestrutura

- Docker

Autenticação

- JWT
- Cookies HTTP Only quando necessário

Hospedagem

- Vercel
- VPS Linux
- Coolify

Versionamento

- Git
- GitHub

---

# Linguagem Oficial

Sempre utilizar:

TypeScript

Nunca criar novos arquivos JavaScript sem necessidade.

Evite:

any

Prefira:

unknown

Generics

Interfaces

Tipos explícitos

---

# Frontend

Framework oficial

Next.js

Utilizar sempre:

App Router

Server Components quando possível

Client Components somente quando necessário

---

# React

Sempre utilizar:

Hooks

Componentes pequenos

Responsabilidade única

Estado local quando possível

Context apenas quando realmente necessário

Evitar:

Prop Drilling

Componentes gigantes

Lógica misturada com UI

---

# Tailwind

Toda estilização deve utilizar Tailwind.

Evitar CSS tradicional.

Criar CSS apenas quando realmente necessário.

Priorizar:

utility classes

componentes reutilizáveis

consistência visual

---

# Shadcn

Sempre verificar se existe componente pronto antes de criar outro.

Evitar reinventar:

Dialog

Popover

Dropdown

Table

Tabs

Accordion

Toast

Command

Sheet

---

# Ícones

Biblioteca oficial:

Lucide

Nunca misturar bibliotecas diferentes sem necessidade.

---

# Animações

Biblioteca oficial

Motion

As animações devem ser:

sutis

rápidas

elegantes

Nunca exageradas.

Animação deve melhorar UX.

Nunca distrair.

---

# Backend

Framework oficial

Fastify

Sempre utilizar:

plugins

schemas

tipagem

rotas organizadas

injeção de dependência quando necessário

Evitar:

arquivos gigantes

rotas enormes

lógica espalhada

---

# Prisma

ORM oficial.

Sempre utilizar:

migrations

tipos gerados

relacionamentos explícitos

Nunca escrever SQL manual quando o Prisma resolver adequadamente.

SQL puro apenas quando houver ganho real.

---

# Banco de Dados

Banco oficial

PostgreSQL

Sempre utilizar:

foreign keys

índices

constraints

normalização

Evitar:

duplicação

campos sem propósito

tabelas desorganizadas

---

# APIs

Padrão

REST

Sempre utilizar:

status HTTP corretos

tratamento de erro

validação

tipagem

logs

documentação

---

# Validação

Biblioteca preferencial

Zod

Toda entrada deve ser validada.

Nunca confiar em dados enviados pelo cliente.

---

# Estado

Prioridade

1.

Server Components

↓

2.

State local

↓

3.

Context

↓

4.

Biblioteca externa

Nunca instalar Redux sem justificativa.

---

# Formulários

Bibliotecas

React Hook Form

Zod

Sempre validar:

frontend

backend

---

# Autenticação

Prioridade

JWT

Cookies HTTP Only

Refresh Token quando necessário

Nunca armazenar informações sensíveis no LocalStorage.

---

# Uploads

Sempre validar:

tipo

tamanho

segurança

Nunca confiar apenas na extensão.

---

# Imagens

Utilizar

Next Image

Sempre otimizar.

Sempre definir:

width

height

alt

loading

sizes

---

# SEO

Sempre utilizar

Metadata API

Open Graph

Twitter Cards

Schema.org

JSON-LD

Sitemap

Robots

Canonical

---

# Performance

Prioridades

Server Components

Lazy Loading

Dynamic Imports

Cache

Compressão

Otimização de imagens

Redução de JavaScript

Minimizar renderizações

---

# Docker

Todo projeto deve possuir:

Dockerfile

docker-compose quando necessário

.env.example

README

Nunca depender exclusivamente da máquina do desenvolvedor.

---

# Git

Fluxo

main

↓

develop

↓

feature/\*

↓

fix/\*

↓

hotfix/\*

Commits devem ser claros.

Exemplos

feat:

fix:

refactor:

docs:

test:

perf:

style:

chore:

---

# Estrutura recomendada

Frontend

app/

components/

hooks/

services/

lib/

types/

styles/

public/

Backend

src/

routes/

controllers/

services/

repositories/

schemas/

middlewares/

plugins/

utils/

database/

---

# Bibliotecas Permitidas

Frontend

React

Next

Tailwind

Motion

Shadcn

Lucide

React Hook Form

Zod

Backend

Fastify

Prisma

JWT

bcrypt

Docker

---

# Bibliotecas que exigem justificativa

Redux

MobX

Axios

Moment

Lodash

Express

NestJS

Bootstrap

Material UI

Cada instalação deve explicar:

Por que?

Qual benefício?

Existe alternativa nativa?

---

# Antes de instalar qualquer dependência

Responder internamente

Resolve um problema real?

Existe API nativa?

Aumenta manutenção?

Aumenta bundle?

Vale a pena?

---

# Atualizações

Sempre utilizar versões estáveis.

Nunca migrar versões principais sem planejamento.

Toda atualização deve considerar:

breaking changes

segurança

performance

compatibilidade

---

# Inteligência Artificial

A IA deve respeitar esta stack.

Nunca sugerir tecnologias diferentes apenas por preferência.

Caso exista uma alternativa melhor, apresentar comparação completa antes de recomendar mudanças.

---

# Objetivo

Toda solução criada pela IA deve:

seguir esta stack;

produzir código consistente;

facilitar manutenção;

evitar dependências desnecessárias;

seguir padrões modernos;

ser compatível com futuros projetos da Fyrmma.

A consistência da stack é um dos principais ativos da empresa.

Fim do documento.
