# 🗄️ Database - Padrões Oficiais de Banco de Dados da Fyrmma

Versão: 1.0.0

Este documento define os padrões oficiais de modelagem, organização e evolução de bancos de dados utilizados pela Fyrmma.

Toda Inteligência Artificial trabalhando em sistemas que possuem persistência de dados deve seguir estas regras.

O objetivo é criar bancos:

- organizados
- seguros
- escaláveis
- performáticos
- fáceis de manter
- preparados para produtos SaaS

---

# Filosofia de Banco de Dados Fyrmma

O banco de dados é um dos ativos mais importantes de qualquer produto.

Uma decisão errada de modelagem pode gerar:

- dificuldade de manutenção
- problemas de performance
- migrações complexas
- limitações futuras

Antes de criar uma tabela, entender:

- qual problema ela resolve?
- quais dados realmente precisam existir?
- como essa informação será utilizada?
- como ela pode evoluir?

---

# Banco Oficial

Banco principal:

PostgreSQL

Motivos:

- robustez
- escalabilidade
- suporte a recursos avançados
- excelente integração com Prisma
- utilizado amplamente em produtos SaaS

---

# ORM Oficial

Prisma ORM

Responsável por:

- modelagem
- migrations
- queries
- tipagem automática
- relacionamento entre entidades

---

# Regras Gerais

Sempre utilizar:

- migrations
- UUID como identificador
- timestamps
- relacionamentos explícitos
- índices quando necessário
- constraints
- validação de dados

Evitar:

- tabelas sem propósito
- campos genéricos demais
- duplicação de dados
- dados sem dono
- informações sensíveis sem proteção

---

# Estrutura Prisma

Arquivo principal:

```
prisma/

schema.prisma

migrations/

seed.ts
```

---

# Modelagem

Antes de criar qualquer model:

Definir:

- entidade
- responsabilidade
- relacionamentos
- ciclo de vida
- regras

---

# Nomenclatura

## Models

Sempre:

PascalCase

Singular

Exemplo:

```prisma
model User {}

model Customer {}

model Organization {}
```

---

## Campos

Sempre:

camelCase

Exemplo:

```prisma
firstName

createdAt

updatedAt
```

---

## Tabelas

Preferência:

singular no Prisma.

O banco será gerenciado pelo ORM.

---

# IDs

Padrão:

UUID

Exemplo:

```prisma
id String @id @default(uuid())
```

Motivos:

- evita colisão
- facilita sistemas distribuídos
- melhor para SaaS

---

# Timestamps

Todo model importante deve possuir:

```prisma
createdAt DateTime @default(now())

updatedAt DateTime @updatedAt
```

---

# Soft Delete

Quando necessário:

```prisma
deletedAt DateTime?
```

Utilizar quando:

- dados precisam ser recuperáveis
- existe auditoria
- existe histórico importante

Não utilizar em tudo.

---

# Auditoria

Sistemas empresariais devem considerar:

Quem criou?

Quem alterou?

Quando aconteceu?

Para casos críticos criar:

- createdBy
- updatedBy
- audit logs

---

# Multi-Tenant SaaS

Todo produto SaaS da Fyrmma deve considerar isolamento por organização.

Modelo recomendado:

```
Organization

|

Users

|

Products

|

Data
```

Exemplo:

```prisma
model Organization {
 id String @id @default(uuid())

 name String

 createdAt DateTime @default(now())
}
```

Outras entidades devem possuir:

```prisma
organizationId String
```

---

# Regra Multi-Tenant

Nunca permitir que um usuário veja dados de outra organização.

Toda consulta deve considerar:

organizationId

---

# Relacionamentos

Sempre documentar:

1:N

1:1

N:N

---

# Um para Muitos

Exemplo:

Uma empresa possui vários usuários.

```prisma
model Organization {

 id String @id @default(uuid())

 users User[]

}
```

---

# Muitos para Muitos

Utilizar tabela intermediária quando necessário.

Exemplo:

Usuários e permissões.

```
User

|

UserPermission

|

Permission
```

---

# Campos Obrigatórios

Criar campos obrigatórios somente quando realmente necessários.

Evitar:

```
String
```

quando o valor pode ser inexistente.

Utilizar:

```
String?
```

quando fizer sentido.

---

# Enums

Utilizar enums para valores fixos.

Exemplo:

```prisma
enum Status {

ACTIVE

INACTIVE

BLOCKED

}
```

Evitar strings soltas.

---

# Índices

Criar índices para:

- buscas frequentes
- filtros
- ordenações
- relacionamentos

Exemplo:

```prisma
@@index([email])
```

---

# Índices Excessivos

Não criar índices em todos os campos.

Índice também possui custo.

Sempre avaliar:

- frequência de busca
- tamanho da tabela
- impacto em escrita

---

# Unique

Utilizar quando um valor não pode repetir.

Exemplo:

```prisma
email String @unique
```

---

# Constraints

Garantir integridade no banco.

Exemplos:

- unique
- foreign keys
- relações obrigatórias

---

# Migrations

Nunca alterar banco manualmente em produção.

Sempre:

Criar migration

↓

Revisar

↓

Aplicar

---

# Nome das Migrations

Nomes devem explicar mudança.

Bom:

```
add_user_roles

create_leads_table

add_payment_status
```

Ruim:

```
update1

teste

final
```

---

# Seed

Utilizar seed para:

- dados iniciais
- ambientes de desenvolvimento
- testes

Nunca colocar dados sensíveis.

---

# Queries

Sempre considerar:

- quantidade de dados
- índices
- paginação
- performance

---

# Evitar N+1

Problema:

Buscar lista.

Depois buscar dados relacionados individualmente.

Preferir:

include

select

queries otimizadas.

---

# Paginação

Toda lista potencialmente grande deve possuir.

Exemplo:

Usuários

Produtos

Pedidos

Leads

---

# Ordenação

Sempre definir ordem quando necessário.

Nunca depender da ordem natural do banco.

---

# Select

Buscar somente o necessário.

Evitar retornar:

dados privados

campos gigantes

informações sem uso

---

# Dados Sensíveis

Nunca armazenar:

senhas puras

tokens expostos

informações privadas sem proteção

---

# Senhas

Sempre:

hash

salt

bcrypt ou algoritmo apropriado

Nunca:

texto puro

---

# Exclusão de Dados

Antes de apagar:

Existe histórico?

Existe obrigação legal?

Existe relacionamento?

Existe necessidade de auditoria?

---

# Performance

Sempre analisar:

queries lentas

índices

volume de dados

relações

paginação

cache

---

# Cache

Utilizar quando:

dados são acessados frequentemente

mudam pouco

consultas são pesadas

Ferramenta:

Redis

---

# Transações

Utilizar quando várias operações precisam acontecer juntas.

Exemplo:

Criar pedido:

- pedido
- pagamento
- estoque

Tudo deve falhar ou funcionar.

---

# Backup

Todo produto deve considerar:

backup automático

restauração

retenção

segurança

---

# Ambiente

Separar:

Development

Staging

Production

Nunca utilizar banco de produção para testes.

---

# Variáveis de Ambiente

Nunca colocar:

DATABASE_URL

senhas

tokens

diretamente no código.

Utilizar:

.env

.env.example

---

# Segurança

Sempre:

validar entrada

limitar acesso

proteger credenciais

usar menor privilégio necessário

---

# Banco para Produtos SaaS

Antes de criar um SaaS considerar:

Usuários

Organizações

Permissões

Planos

Assinaturas

Pagamentos

Logs

Auditoria

Configurações

---

# Modelo Base SaaS Fyrmma

Estrutura inicial:

```
Organization

User

Role

Permission

Subscription

Plan

AuditLog

```

Cada produto pode evoluir a partir dessa base.

---

# Checklist Antes de Criar uma Tabela

Perguntar:

- Essa entidade realmente existe?
- Qual responsabilidade possui?
- Quem é dono desses dados?
- Existe relacionamento?
- Precisa de índice?
- Precisa de auditoria?
- Precisa de soft delete?
- Pode ser multi-tenant?
- Pode crescer?

---

# Checklist Antes de Aprovar Banco

- Models organizados?
- Relacionamentos corretos?
- Índices avaliados?
- Migrations criadas?
- Dados sensíveis protegidos?
- Queries eficientes?
- Multi-tenant considerado?
- Backup planejado?

---

# Mentalidade Fyrmma

O banco de dados não é apenas armazenamento.

É a fundação do produto.

Uma boa modelagem permite:

novas funcionalidades;

novos clientes;

novos módulos;

novos produtos;

novos SaaS.

Toda decisão de banco deve pensar no futuro.

---

# Regra Final

Não criar tabelas pensando apenas na funcionalidade atual.

Criar modelos pensando no produto que pode existir daqui a anos.

O objetivo não é apenas salvar dados.

O objetivo é construir uma base sólida para os produtos digitais da Fyrmma.

Fim do documento.
