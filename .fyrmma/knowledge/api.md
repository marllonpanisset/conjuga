# 🔌 API - Padrões Oficiais de Desenvolvimento de APIs da Fyrmma

Versão: 1.0.0

Este documento define os padrões oficiais para criação, manutenção e evolução das APIs desenvolvidas pela Fyrmma.

Toda Inteligência Artificial trabalhando em backend, integrações ou sistemas distribuídos deve seguir estas regras.

O objetivo é criar APIs:

- previsíveis
- seguras
- documentadas
- escaláveis
- fáceis de consumir
- fáceis de evoluir

---

# Filosofia de API Fyrmma

Uma API é um contrato entre sistemas.

Ela deve ser:

- clara para humanos
- consistente para máquinas
- estável para clientes
- preparada para evolução

Uma API ruim aumenta custo.

Uma API bem projetada vira um ativo reutilizável.

---

# Princípios

Toda API Fyrmma deve seguir:

- REST quando aplicável
- padrões HTTP
- respostas consistentes
- validação obrigatória
- documentação
- versionamento quando necessário
- segurança por padrão

---

# Stack Oficial

Framework:

Fastify

Linguagem:

TypeScript

Validação:

Zod

Documentação:

OpenAPI / Swagger

ORM:

Prisma

Banco:

PostgreSQL

---

# Arquitetura da API

Fluxo oficial:

```
Cliente

↓

Route

↓

Controller

↓

Service

↓

Repository

↓

Database

```

Nunca:

Frontend acessar banco diretamente.

Controller possuir regra de negócio.

Repository decidir lógica de aplicação.

---

# Estrutura de API

Exemplo:

```
src/

routes/

users.routes.ts

controllers/

users.controller.ts

services/

users.service.ts

repositories/

users.repository.ts

schemas/

users.schema.ts

```

---

# Design REST

Utilizar recursos.

Bom:

```
GET /users

POST /users

GET /users/:id

PATCH /users/:id

DELETE /users/:id
```

Evitar:

```
GET /getUsers

POST /createUser

POST /deleteUser
```

---

# Recursos

Utilizar substantivos.

Exemplos:

```
users

organizations

products

orders

customers

leads
```

Evitar verbos.

---

# Métodos HTTP

## GET

Buscar dados.

Exemplo:

```
GET /customers
```

---

## POST

Criar recurso.

Exemplo:

```
POST /customers
```

---

## PATCH

Atualizar parcialmente.

Exemplo:

```
PATCH /customers/:id
```

---

## PUT

Substituir recurso completo quando necessário.

---

## DELETE

Remover recurso.

---

# Status HTTP

Sempre utilizar corretamente.

## 200 OK

Operação concluída.

---

## 201 Created

Novo recurso criado.

---

## 204 No Content

Sucesso sem retorno.

---

## 400 Bad Request

Dados inválidos.

---

## 401 Unauthorized

Usuário não autenticado.

---

## 403 Forbidden

Usuário autenticado mas sem permissão.

---

## 404 Not Found

Recurso inexistente.

---

## 409 Conflict

Conflito de dados.

Exemplo:

Email já cadastrado.

---

## 422 Unprocessable Entity

Regra de negócio inválida.

---

## 500 Internal Server Error

Erro inesperado.

---

# Versionamento

Quando necessário utilizar:

```
/api/v1
```

Exemplo:

```
GET /api/v1/users
```

---

# Quando criar nova versão

Somente quando existir:

- breaking change
- alteração incompatível
- mudança estrutural grande

Não criar versão para pequenas melhorias.

---

# Respostas Padronizadas

Toda resposta deve possuir padrão.

---

# Sucesso

Exemplo:

```json
{
  "data": {
    "id": "123",
    "name": "Empresa"
  },
  "message": "Operação realizada com sucesso"
}
```

---

# Lista

Exemplo:

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

---

# Erros

Sempre retornar:

```json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "Usuário não encontrado"
  }
}
```

---

# Códigos de Erro

Utilizar códigos previsíveis.

Exemplo:

```
AUTH_INVALID_TOKEN

USER_NOT_FOUND

EMAIL_ALREADY_EXISTS

VALIDATION_ERROR

PERMISSION_DENIED
```

---

# Nunca retornar

Evitar:

```json
{
  "error": "erro"
}
```

Sem contexto.

---

# Validação

Toda entrada deve ser validada.

Validar:

- body
- params
- query
- headers

Utilizar:

Zod

---

# Exemplo de Schema

```ts
const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});
```

---

# Segurança

Toda API deve considerar:

- autenticação
- autorização
- validação
- rate limit
- logs
- tratamento de erros

---

# Autenticação

Padrão:

JWT

Fluxo:

Login

↓

Servidor valida usuário

↓

Gera token

↓

Cliente envia token

↓

API valida acesso

---

# Headers

Padrão:

```
Authorization: Bearer TOKEN
```

---

# Autorização

Autenticação responde:

"Quem é você?"

Autorização responde:

"O que você pode fazer?"

Sempre separar.

---

# Permissões

Utilizar RBAC.

Exemplo:

```
ADMIN

MANAGER

USER
```

---

# Multi Tenant

Toda API SaaS deve considerar organizações.

Exemplo:

```
GET /organizations/:organizationId/leads
```

ou

através do usuário autenticado:

```
JWT

↓

organizationId

↓

Filtro automático
```

---

# Regra Multi Tenant

Nunca permitir:

Empresa A

acessar dados

Empresa B

Toda query deve respeitar isolamento.

---

# Paginação

Toda listagem grande deve possuir paginação.

Exemplo:

```
GET /users?page=1&limit=20
```

---

# Limites

Nunca permitir:

```
limit=100000
```

Definir limite máximo.

Exemplo:

```
limit máximo: 100
```

---

# Ordenação

Permitir quando necessário:

```
GET /users?sort=createdAt&order=desc
```

Validar campos permitidos.

---

# Filtros

Utilizar filtros claros.

Exemplo:

```
GET /leads?status=OPEN
```

Evitar:

queries genéricas complexas.

---

# Busca

Sempre considerar:

- performance
- índices
- paginação

Nunca buscar grandes volumes sem controle.

---

# Uploads

Uploads devem possuir:

- validação de tipo
- limite de tamanho
- armazenamento seguro
- tratamento de erro

---

# Webhooks

Toda integração via webhook deve possuir:

- assinatura de segurança
- validação da origem
- logs
- idempotência

---

# Idempotência

Operações críticas devem evitar duplicação.

Exemplo:

Pagamento.

Mesmo evento recebido duas vezes:

Resultado:

uma única operação.

---

# Integrações Externas

Sempre criar:

```
services/integrations/
```

Exemplo:

```
stripe.service.ts

whatsapp.service.ts

email.service.ts
```

---

# Timeout

Toda integração externa deve possuir timeout.

Nunca deixar requisições travadas indefinidamente.

---

# Retry

Utilizar retry apenas quando fizer sentido.

Exemplo:

- falha temporária
- instabilidade externa

Nunca repetir erros permanentes.

---

# Cache

Utilizar quando necessário.

Exemplos:

- dados públicos
- consultas pesadas
- configurações

Tecnologia:

Redis

---

# Logs

Registrar:

- endpoint
- usuário
- tempo de resposta
- erros

Nunca registrar:

- senha
- token
- dados privados

---

# Observabilidade

Sistemas importantes devem possuir:

- logs estruturados
- monitoramento
- alertas
- rastreamento de erros

---

# Documentação

Toda API deve possuir:

- README
- exemplos
- endpoints
- autenticação
- respostas
- erros

---

# OpenAPI

APIs públicas ou importantes devem possuir documentação.

Incluir:

- endpoints
- parâmetros
- schemas
- respostas
- autenticação

---

# Testes

Toda API importante deve possuir:

## Unitários

Serviços.

Regras.

## Integração

Fluxo completo.

## E2E

Principais jornadas.

---

# Antes de Criar um Endpoint

Responder:

Qual problema resolve?

Quem utiliza?

Qual recurso representa?

Precisa autenticação?

Precisa permissão?

Qual impacto no banco?

Como tratar erros?

Como testar?

---

# Checklist API

## Design

- REST consistente?
- Nome dos recursos correto?
- Status HTTP correto?

## Segurança

- Validação?
- Autenticação?
- Permissões?
- Rate limit?

## Dados

- Paginação?
- Índices?
- Performance?

## Qualidade

- Documentação?
- Testes?
- Logs?

---

# Mentalidade Fyrmma

Uma API não é apenas uma ponte entre sistemas.

Ela é um produto.

APIs bem construídas permitem:

- novos clientes
- integrações
- aplicativos
- automações
- novos SaaS

Cada API criada deve aumentar o patrimônio técnico da Fyrmma.

---

# Regra Final

Antes de criar uma API:

Entenda o domínio.

Modele os dados.

Defina o contrato.

Planeje segurança.

Documente.

Só então implemente.

Uma boa API não é a que possui muitos endpoints.

É a que resolve problemas de forma simples, segura e previsível.

Fim do documento.
