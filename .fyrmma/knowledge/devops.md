# 🚀 DevOps - Padrões Oficiais de Infraestrutura e Deploy da Fyrmma

Versão: 1.0.0

Este documento define os padrões oficiais de infraestrutura, deploy, automação e operação dos sistemas desenvolvidos pela Fyrmma.

Toda Inteligência Artificial trabalhando com infraestrutura deve seguir estas regras.

O objetivo é criar sistemas:

- fáceis de publicar
- seguros
- reproduzíveis
- escaláveis
- monitoráveis
- baratos de operar

---

# Filosofia DevOps Fyrmma

DevOps é a ponte entre desenvolvimento e operação.

Um sistema não está pronto quando funciona apenas na máquina do desenvolvedor.

Ele precisa funcionar em:

- desenvolvimento
- homologação
- produção

---

# Princípios

Toda infraestrutura deve seguir:

## Automação

Tudo que for repetitivo deve ser automatizado.

Exemplos:

- deploy
- migrations
- testes
- builds
- backups

---

## Reprodutibilidade

Outro desenvolvedor deve conseguir executar o projeto seguindo documentação.

Evitar:

"Na minha máquina funciona."

---

## Simplicidade

Não criar infraestrutura complexa sem necessidade.

Uma aplicação pequena não precisa de arquitetura de grande empresa.

---

## Segurança

Infraestrutura deve proteger:

- código
- dados
- usuários
- credenciais

---

# Stack DevOps Oficial

## Versionamento

- Git
- GitHub

---

## Containers

- Docker
- Docker Compose

---

## CI/CD

Preferência:

- GitHub Actions

---

## Hospedagem

Prioridade:

- Vercel para frontend Next.js
- VPS Linux para aplicações backend
- Coolify para gerenciamento simplificado

---

## Banco

- PostgreSQL

---

## Cache

Quando necessário:

- Redis

---

# Ambientes

Todo projeto deve considerar:

```
Development

Staging

Production
```

---

# Development

Ambiente local.

Objetivo:

Desenvolvimento rápido.

Pode possuir:

- dados de teste
- logs detalhados
- ferramentas auxiliares

---

# Staging

Ambiente de validação.

Deve ser próximo da produção.

Utilizado para:

- testes finais
- validação do cliente
- testes de integração

---

# Production

Ambiente real.

Prioridades:

- estabilidade
- segurança
- performance

---

# Estrutura de Projeto

Todo projeto deve possuir:

```
README.md

.env.example

Dockerfile

docker-compose.yml

.gitignore
```

---

# Docker

Docker deve garantir:

- ambiente consistente
- instalação simplificada
- isolamento

---

# Dockerfile

Boas práticas:

Utilizar imagens oficiais.

Fixar versões.

Reduzir tamanho da imagem.

Não colocar secrets.

---

# Exemplo de boas práticas:

```
node:22-alpine
```

Evitar:

```
node:latest
```

---

# Docker Compose

Utilizar quando existir múltiplos serviços.

Exemplo:

```
Frontend

Backend

PostgreSQL

Redis
```

---

# Variáveis de Ambiente

Nunca colocar secrets dentro do código.

Utilizar:

```
.env

.env.local

.env.production
```

---

# Arquivo .env.example

Todo projeto deve possuir exemplo:

```
DATABASE_URL=

JWT_SECRET=

API_URL=
```

Sem valores reais.

---

# Git Workflow

Fluxo recomendado:

```
main

↓

develop

↓

feature/*
```

---

# Branches

## main

Produção.

Código estável.

---

## develop

Integração.

Próxima versão.

---

## feature

Novas funcionalidades.

Exemplo:

```
feature/user-auth
```

---

## fix

Correções.

Exemplo:

```
fix/login-error
```

---

## hotfix

Correções urgentes em produção.

---

# Commits

Utilizar padrão:

```
feat:
fix:
refactor:
docs:
test:
perf:
chore:
```

Exemplos:

```
feat(auth): add login flow

fix(api): correct validation error

docs(readme): update installation
```

---

# CI/CD

Toda aplicação importante deve possuir pipeline.

Fluxo:

```
Push

↓

Install

↓

Lint

↓

Tests

↓

Build

↓

Deploy
```

---

# Antes do Deploy

Verificar:

- testes passando
- build funcionando
- variáveis configuradas
- migrations prontas
- segurança revisada

---

# Deploy Frontend

Para Next.js:

Preferência:

Vercel

Verificar:

- build
- environment variables
- domínio
- SEO

---

# Deploy Backend

Opções:

- VPS Linux
- Docker
- Coolify

Fluxo:

```
Código

↓

Docker Build

↓

Container

↓

Servidor

↓

Aplicação
```

---

# Banco em Produção

Nunca:

- usar banco local
- alterar manualmente
- apagar dados sem backup

Sempre:

- migrations
- backup
- monitoramento

---

# Migrations

Fluxo:

Desenvolvimento

↓

Criar migration

↓

Testar

↓

Aplicar staging

↓

Aplicar produção

---

# Backup

Todo sistema importante deve possuir:

- backup automático
- retenção
- teste de restauração

Backup sem restauração testada não é garantia.

---

# Logs

Produção deve possuir:

- logs estruturados
- identificação de erros
- histórico de eventos

Nunca armazenar:

- senhas
- tokens
- dados privados

---

# Monitoramento

Considerar:

- disponibilidade
- erros
- performance
- consumo de recursos

---

# Alertas

Criar alertas para:

- aplicação offline
- banco indisponível
- erros críticos
- uso excessivo de recursos

---

# Performance

Monitorar:

- tempo de resposta
- uso de CPU
- memória
- banco
- tamanho dos builds

---

# Segurança de Infraestrutura

Sempre:

- HTTPS
- firewall
- atualizações
- usuários com menor privilégio
- chaves SSH seguras

---

# VPS Linux

Boas práticas:

- usuário próprio
- SSH protegido
- firewall ativo
- atualizações frequentes
- backups

---

# Domínios

Configurar:

- DNS correto
- HTTPS
- redirecionamentos
- subdomínios quando necessário

Exemplo:

```
app.fyrmma.com.br

api.fyrmma.com.br
```

---

# Escalabilidade

Antes de escalar:

Medir.

Não adicionar complexidade sem necessidade.

Ordem:

1.

Otimizar código

2.

Otimizar banco

3.

Adicionar cache

4.

Aumentar recursos

5.

Escalar horizontalmente

---

# Custos

A Fyrmma deve buscar eficiência.

Sempre considerar:

- custo de servidor
- custo de banco
- custo de serviços externos

Não pagar por infraestrutura que não gera valor.

---

# Disaster Recovery

Sistemas importantes devem considerar:

- backup
- restauração
- plano de recuperação
- documentação

---

# Checklist Antes da Produção

## Código

- Build funcionando?
- Testes passando?
- Sem secrets?

## Infraestrutura

- HTTPS ativo?
- Variáveis configuradas?
- Banco protegido?

## Operação

- Logs funcionando?
- Backup configurado?
- Monitoramento ativo?

---

# Mentalidade DevOps Fyrmma

Infraestrutura não deve ser um obstáculo.

Ela deve permitir que a empresa entregue produtos rapidamente.

O objetivo é criar uma fábrica de software:

- repetível
- automatizada
- confiável

---

# Regra Final

O melhor ambiente não é o mais complexo.

É aquele que permite:

desenvolver rápido,

publicar com segurança,

monitorar facilmente,

e evoluir continuamente.

Fim do documento.
