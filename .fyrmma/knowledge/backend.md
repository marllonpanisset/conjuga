# ⚙️ Backend - Padrões Oficiais de Desenvolvimento Backend da Fyrmma

Versão: 1.0.0

Este documento define os padrões oficiais de desenvolvimento backend da Fyrmma.

Toda IA trabalhando em sistemas backend deve seguir estas regras antes de criar, modificar ou revisar qualquer código.

O objetivo é construir backends:

- seguros
- escaláveis
- performáticos
- organizados
- fáceis de manter
- preparados para crescimento

---

# Filosofia Backend Fyrmma

O backend é responsável por:

- regras de negócio
- processamento de dados
- integrações
- autenticação
- autorização
- comunicação com banco
- segurança

O backend NÃO deve conhecer detalhes de interface.

A separação entre frontend e backend deve ser clara.

---

# Stack Backend Oficial

Framework:

- Fastify

Linguagem:

- TypeScript

ORM:

- Prisma

Banco:

- PostgreSQL

Validação:

- Zod

Autenticação:

- JWT

Criptografia:

- bcrypt

Cache:

- Redis quando necessário

Filas:

- BullMQ quando necessário

Documentação:

- Swagger / OpenAPI

Infra:

- Docker

---

# Princípios

Todo backend deve seguir:

- Separação de responsabilidades
- Baixo acoplamento
- Alta coesão
- Segurança por padrão
- Validação de dados
- Tratamento de erros
- Observabilidade
- Escalabilidade

---

# Arquitetura Oficial

Estrutura recomendada:

```
src/

app.ts

server.ts

routes/

controllers/

services/

repositories/

schemas/

middlewares/

plugins/

database/

config/

utils/

types/
```

---

# Responsabilidade das Camadas

## Routes

Responsável por:

- definir endpoints
- conectar controller
- configurar schemas

Não deve conter regra de negócio.

Exemplo:

```
POST /users
GET /products
DELETE /orders/:id
```

---

# Controllers

Responsável por:

- receber request
- extrair dados
- chamar services
- retornar resposta

Nunca deve:

- acessar banco diretamente
- conter regras complexas

Fluxo:

Request

↓

Controller

↓

Service

↓

Response

---

# Services

Camada principal de negócio.

Responsável por:

- regras da aplicação
- validações de negócio
- decisões
- processamento

Exemplo:

Criar pedido:

- verificar estoque
- calcular preço
- aplicar desconto
- salvar pedido

Tudo isso pertence ao Service.

---

# Repositories

Responsável pelo acesso aos dados.

Utiliza:

- Prisma
- Queries
- Transações

Nunca deve conter:

- regras de negócio
- validações de usuário

---

# Schemas

Responsável por validar dados.

Utilizar:

Zod

Validar:

- body
- params
- query
- respostas quando necessário

Nunca confiar no cliente.

---

# Plugins

Responsáveis por configurações globais.

Exemplos:

- Prisma
- JWT
- CORS
- Logger
- Redis

---

# Database

Organização:

```
database/

prisma.ts

seed.ts

migrations/
```

---

# Fastify

Sempre utilizar:

- plugins
- schemas
- decorators quando necessário
- hooks

Evitar:

arquivos gigantes

rotas misturadas

lógica espalhada

---

# Estrutura por Módulo

Para sistemas maiores utilizar organização por domínio.

Exemplo:

```
src/

modules/

users/

users.routes.ts

users.controller.ts

users.service.ts

users.repository.ts

users.schema.ts


products/

orders/

payments/
```

---

# Feature First Backend

Cada módulo deve possuir sua própria responsabilidade.

Exemplo:

CRM:

```
crm/

contacts

deals

pipelines

activities
```

Evitar criar:

```
controllers/

services/

repositories/
```

com centenas de arquivos misturados.

---

# Banco de Dados

Banco oficial:

PostgreSQL

---

# Prisma

Sempre utilizar:

- schema organizado
- migrations
- relacionamentos claros
- índices quando necessário

---

# Models

Nomes devem ser:

Singular

PascalCase

Exemplo:

```prisma
model User {}

model Organization {}

model Lead {}
```

---

# Campos

Utilizar:

camelCase

Exemplo:

```prisma
createdAt

updatedAt

firstName
```

---

# IDs

Preferência:

UUID

Exemplo:

```prisma
id String @id @default(uuid())
```

---

# Timestamps

Todo model importante deve possuir:

createdAt

updatedAt

---

# Soft Delete

Quando necessário utilizar:

deletedAt

Evitar apagar dados importantes sem estratégia.

---

# Relacionamentos

Sempre pensar:

Cardinalidade

Performance

Integridade

---

# Índices

Criar índices para:

- buscas frequentes
- filtros
- relacionamentos importantes

Não criar índices sem necessidade.

---

# APIs

Padrão:

REST

---

# Endpoints

Utilizar substantivos.

Bom:

```
GET /users

POST /orders

GET /customers/:id
```

Evitar:

```
GET /getUsers

POST /createOrder
```

---

# HTTP Status

Utilizar corretamente:

200

Sucesso

201

Criado

204

Sem conteúdo

400

Erro de validação

401

Não autenticado

403

Sem permissão

404

Não encontrado

409

Conflito

500

Erro interno

---

# Respostas

Padronizar.

Sucesso:

```json
{
  "data": {},
  "message": "Success"
}
```

Erro:

```json
{
  "error": {
    "code": "",
    "message": ""
  }
}
```

---

# Validação

Toda entrada deve ser validada.

Nunca confiar em:

- frontend
- integrações externas
- usuários

---

# Autenticação

Padrão:

JWT

Utilizar:

- access token
- refresh token quando necessário

---

# Senhas

Nunca salvar senha pura.

Sempre:

bcrypt

com salt adequado.

---

# Autorização

Autenticação:

Quem é você?

Autorização:

O que você pode fazer?

Sempre separar.

---

# Permissões

Preferir:

RBAC

(Role Based Access Control)

Exemplo:

Admin

Manager

User

---

# Segurança

Obrigatório:

- validar entradas
- proteger rotas
- limitar requisições
- esconder erros internos
- proteger secrets

---

# Variáveis de Ambiente

Nunca colocar:

tokens

senhas

URLs privadas

chaves

diretamente no código.

Utilizar:

.env

.env.example

---

# Tratamento de Erros

Nunca retornar:

stack trace

informações internas

dados sensíveis

---

# Logs

Registrar:

- erros
- ações importantes
- integrações

Nunca registrar:

- senhas
- tokens
- informações privadas

---

# Performance

Sempre considerar:

- índices
- cache
- paginação
- queries eficientes
- processamento assíncrono

---

# Paginação

Listagens grandes devem possuir:

page

limit

cursor quando necessário

Nunca retornar milhares de registros sem controle.

---

# Uploads

Sempre validar:

- tamanho
- tipo
- extensão
- conteúdo

Nunca confiar no nome do arquivo.

---

# Integrações Externas

Toda integração deve possuir:

- service próprio
- tratamento de erro
- timeout
- logs
- retry quando necessário

---

# Jobs e Filas

Utilizar filas quando:

- processo demora
- envio de emails
- processamento pesado
- sincronizações

Nunca bloquear uma request longa.

---

# Testes

Prioridade:

1.

Testes de regra de negócio

2.

Testes de API

3.

Testes de integração

---

# Documentação

Todo backend deve possuir:

- README
- variáveis necessárias
- comandos
- arquitetura
- endpoints principais

---

# Código

Nunca:

- duplicar lógica
- misturar camadas
- criar services gigantes
- acessar banco no controller
- ignorar erros

---

# Antes de Criar uma Feature

Responder:

Qual problema resolve?

Qual módulo pertence?

Qual regra de negócio existe?

Qual impacto no banco?

Qual impacto nas APIs?

Como será testado?

---

# Checklist Backend

## Arquitetura

- Responsabilidades separadas?
- Código organizado?
- Baixo acoplamento?

## Banco

- Migration criada?
- Índices avaliados?
- Relacionamentos corretos?

## API

- Endpoint seguindo padrão?
- Status HTTP correto?
- Erros tratados?

## Segurança

- Entradas validadas?
- Permissões verificadas?
- Secrets protegidos?

## Qualidade

- Código legível?
- Sem duplicação?
- Documentado?

---

# Mentalidade Backend Fyrmma

Um backend não é apenas uma API funcionando.

É o núcleo do produto.

Ele deve permitir:

- crescimento
- novos módulos
- novos clientes
- novas integrações
- novos produtos

Toda API criada deve ser pensada como um possível ativo interno da Fyrmma.

---

# Regra Final

Antes de implementar qualquer backend:

Entenda o problema.

Modele os dados.

Defina a arquitetura.

Planeje os fluxos.

Só então escreva código.

Um bom backend não é aquele que possui mais código.

É aquele que resolve problemas complexos com uma arquitetura simples.

Fim do documento.
