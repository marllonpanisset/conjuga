# 🏗️ Architecture - Arquitetura Oficial da Fyrmma

Versão: 1.0.0

Este documento define os padrões arquiteturais da Fyrmma.

Toda IA deve seguir estas diretrizes ao criar, modificar ou evoluir qualquer projeto.

Arquitetura não é apenas organização de pastas.

Arquitetura é a forma como um software evolui ao longo do tempo.

---

# Objetivo

A arquitetura da Fyrmma deve permitir:

- desenvolvimento rápido
- fácil manutenção
- escalabilidade
- reutilização
- baixo acoplamento
- alta coesão
- fácil onboarding
- transformação de projetos em produtos

Todo projeto deve poder crescer sem exigir reescrita completa.

---

# Filosofia

Não seguimos arquiteturas apenas porque são famosas.

Seguimos princípios.

Sempre perguntar:

A solução é simples?

É sustentável?

Pode crescer?

Pode ser reutilizada?

É fácil de entender?

---

# Princípios

Toda arquitetura deve respeitar:

Responsabilidade Única

Baixo Acoplamento

Alta Coesão

Separação de Responsabilidades

Composição ao invés de Herança

Reutilização

Legibilidade

Escalabilidade

---

# Estrutura Geral

Todo projeto deve possuir apenas o necessário.

Nunca criar camadas vazias.

Nunca criar abstrações sem necessidade.

A arquitetura deve acompanhar a complexidade do projeto.

---

# Arquitetura Frontend

Estrutura recomendada

app/

components/

features/

hooks/

services/

lib/

providers/

contexts/

types/

utils/

styles/

public/

---

# Responsabilidade das Pastas

## app/

Rotas.

Layouts.

Pages.

Loading.

Error.

Metadata.

Nunca colocar regras de negócio.

---

## components/

Componentes reutilizáveis.

Botões.

Cards.

Inputs.

Dialogs.

Tables.

Sections.

Nunca colocar chamadas HTTP.

Nunca colocar regras de negócio.

---

## features/

Cada funcionalidade possui sua própria estrutura.

Exemplo

features/auth

features/dashboard

features/leads

Cada feature pode conter:

components

hooks

services

types

utils

actions

---

## hooks/

Hooks reutilizáveis.

Nunca criar hooks específicos de apenas uma página.

---

## services/

Comunicação externa.

APIs.

Storage.

Cookies.

Integrações.

Nunca colocar UI.

---

## lib/

Configurações.

Helpers.

Clients.

Instâncias.

Utilities globais.

---

## providers/

Providers React.

Theme.

Auth.

Query.

Nunca adicionar providers desnecessários.

---

## types/

Tipos compartilhados.

Interfaces.

Enums.

Nunca duplicar tipos.

---

## utils/

Funções puras.

Sem efeitos colaterais.

---

# Arquitetura Backend

Estrutura

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

config/

---

# Camadas

Controller

Recebe requisição.

Valida.

Chama Service.

Nunca implementar regra de negócio.

---

Service

Contém regras de negócio.

Toda lógica deve estar aqui.

---

Repository

Acesso ao banco.

Nunca colocar regra de negócio.

---

Schema

Validação.

Nunca confiar em entrada do usuário.

---

Middleware

Autenticação.

Permissões.

Logs.

Rate Limit.

---

Plugin

Configuração do Fastify.

---

Utils

Funções reutilizáveis.

Sem dependência de contexto.

---

# Banco de Dados

Separar claramente:

Models

Seeds

Migrations

Enums

Nunca misturar lógica de negócio com banco.

---

# Fluxo Oficial

Cliente

↓

Frontend

↓

API

↓

Controller

↓

Service

↓

Repository

↓

Banco

↓

Repository

↓

Service

↓

Controller

↓

Frontend

Nunca pular camadas sem justificativa.

---

# Componentes

Todo componente deve responder apenas por uma responsabilidade.

Exemplo ruim

Card

-

Tabela

-

Modal

-

Formulário

Tudo junto.

Exemplo bom

Card

Table

Modal

Form

Cada um separado.

---

# Feature First

Quando o projeto crescer,

organizar por funcionalidades.

Exemplo

features/

auth/

dashboard/

crm/

chat/

billing/

Cada módulo possui sua própria organização.

---

# Reutilização

Sempre verificar.

Esse componente poderá ser usado novamente?

Se sim,

generalize.

Caso contrário,

mantenha específico.

---

# Design System

Todo componente reutilizável pertence ao Design System.

Nunca duplicar:

Button

Input

Badge

Card

Dialog

Tooltip

Table

Modal

Select

Accordion

Tabs

---

# Estado

Prioridade.

Server Components

↓

Server Actions

↓

State Local

↓

Context

↓

Bibliotecas externas

Nunca usar estado global sem necessidade.

---

# Chamadas HTTP

Centralizar em:

services/

Nunca espalhar fetch pelo projeto.

---

# Configurações

Centralizar.

Nunca repetir:

URLs

Keys

Timeout

Headers

Tokens

---

# Variáveis de Ambiente

Toda configuração sensível deve utilizar:

.env

.env.local

.env.example

Nunca enviar credenciais para o Git.

---

# Logs

Logs devem ajudar.

Nunca poluir.

Sempre registrar:

erros

eventos importantes

integrações

Nunca registrar:

senhas

tokens

dados sensíveis

---

# Tratamento de Erros

Nunca esconder erros.

Sempre:

registrar

explicar

retornar mensagens úteis

evitar vazamento de informações

---

# APIs

Toda API deve possuir.

Validação

Tipagem

Tratamento de Erro

Documentação

Status HTTP corretos

---

# Modularização

Cada módulo deve funcionar de forma independente.

Exemplo

CRM

Agenda

Financeiro

Usuários

Chat

Cada módulo deve poder evoluir sem afetar os demais.

---

# Produtos Internos

Sempre pensar.

Esse módulo pode virar biblioteca?

Pode virar pacote?

Pode virar template?

Pode virar SaaS?

Toda arquitetura deve facilitar isso.

---

# Escalabilidade

Sempre considerar.

Novos usuários

Novas empresas

Novos módulos

Novas integrações

Novos desenvolvedores

Nunca criar soluções que funcionem apenas para hoje.

---

# Organização

Arquivos pequenos.

Pastas claras.

Nomes objetivos.

Evitar:

helpers2.ts

novo.ts

teste.ts

final-final.ts

---

# Convenções

Componentes

PascalCase

Exemplo

UserCard.tsx

---

Hooks

camelCase

useAuth.ts

---

Tipos

PascalCase

User.ts

Lead.ts

Organization.ts

---

Constantes

UPPER_SNAKE_CASE

---

Rotas

Sempre minúsculas.

Separadas por "-"

Exemplo

/novo-cliente

---

# Dependências

Toda dependência adicionada deve responder.

Por que existe?

Quem utiliza?

Existe alternativa?

Qual impacto?

---

# Refatoração

Nunca refatorar por estética.

Refatore apenas quando houver ganho claro.

Exemplos

menos complexidade

mais reutilização

mais clareza

melhor performance

---

# Evolução

A arquitetura deve permitir evolução incremental.

Nunca exigir reescrita completa.

Sempre preferir pequenas melhorias contínuas.

---

# Mentalidade Fyrmma

Cada projeto desenvolvido aumenta o patrimônio técnico da empresa.

Ao finalizar qualquer funcionalidade pergunte.

Posso transformar isso em:

componente?

template?

biblioteca?

documentação?

script?

agente?

Se a resposta for sim,

registre no backlog.

---

# Checklist Antes de Aprovar uma Implementação

- Resolve o problema solicitado?
- Segue a stack oficial?
- Mantém a arquitetura consistente?
- Evita duplicação?
- Possui nomes claros?
- Está documentado quando necessário?
- É reutilizável?
- É seguro?
- É performático?
- É fácil de testar?
- É fácil de manter?

Se qualquer resposta for "não", a implementação deve ser revisada.

---

# Regra de Ouro

A arquitetura da Fyrmma deve permitir que um novo desenvolvedor compreenda o projeto em poucas horas.

Código organizado reduz bugs.

Arquitetura consistente reduz custos.

Reutilização aumenta lucro.

Toda decisão arquitetural deve fortalecer os ativos internos da Fyrmma.

Fim do documento.
