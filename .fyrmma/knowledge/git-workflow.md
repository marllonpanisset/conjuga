# 🌿 Git Workflow - Padrões Oficiais de Versionamento da Fyrmma

Versão: 1.0.0

Este documento define os padrões oficiais de uso do Git, organização de branches, commits, revisão de código e colaboração nos projetos desenvolvidos pela Fyrmma.

Toda Inteligência Artificial trabalhando em qualquer projeto deve seguir estas regras.

O objetivo é manter:

- histórico limpo
- código rastreável
- entregas seguras
- colaboração eficiente
- facilidade de manutenção

---

# Filosofia Git Fyrmma

Git não é apenas uma ferramenta para salvar código.

Git representa:

- histórico do produto
- decisões técnicas
- evolução da empresa
- segurança contra erros

Um bom histórico facilita:

- manutenção
- correções
- auditorias
- colaboração entre humanos e agentes IA

---

# Princípios

Todo projeto deve seguir:

## Commits pequenos

Cada commit deve representar uma mudança lógica.

Evitar:

"fiz várias coisas"

Preferir:

"adiciona autenticação"

"corrige validação"

---

## Código sempre versionado

Nunca trabalhar sem commit.

Nunca manter mudanças importantes apenas localmente.

---

## Histórico compreensível

Outra pessoa ou IA deve conseguir entender:

- o que mudou
- por que mudou
- quando mudou

---

# Estrutura de Branches Oficial

Modelo:

```
main

↓

develop

↓

feature/*
```

---

# Branch main

Responsabilidade:

Produção.

Características:

- código estável
- pronto para usuários
- protegido contra alterações diretas

Nunca desenvolver diretamente na main.

---

# Branch develop

Responsabilidade:

Integração das novas funcionalidades.

Recebe:

- features
- melhorias
- correções

Antes de ir para produção:

develop

↓

testes

↓

main

---

# Branch Feature

Criada para novas funcionalidades.

Formato:

```
feature/nome-da-feature
```

Exemplos:

```
feature/user-authentication

feature/crm-dashboard

feature/payment-integration
```

---

# Branch Fix

Para correções comuns.

Formato:

```
fix/nome-do-problema
```

Exemplos:

```
fix/login-validation

fix/mobile-navbar
```

---

# Branch Hotfix

Para problemas críticos em produção.

Formato:

```
hotfix/nome-do-problema
```

Exemplo:

```
hotfix/payment-error
```

Fluxo:

```
main

↓

hotfix

↓

main
```

---

# Branch Refactor

Para melhorias internas sem alterar comportamento.

Exemplo:

```
refactor/api-architecture
```

---

# Branch Documentation

Para documentação.

Exemplo:

```
docs/update-readme
```

---

# Fluxo Oficial de Desenvolvimento

```
Criar branch

↓

Desenvolver

↓

Testar

↓

Commit

↓

Review

↓

Merge

↓

Deploy
```

---

# Antes de Criar uma Feature

Verificar:

- existe issue?
- existe planejamento?
- arquitetura definida?
- impacto analisado?

---

# Commits

A Fyrmma utiliza Conventional Commits.

Formato:

```
tipo(escopo): descrição
```

---

# Tipos Permitidos

## feat

Nova funcionalidade.

Exemplo:

```
feat(auth): add user login
```

---

## fix

Correção.

Exemplo:

```
fix(api): resolve validation bug
```

---

## refactor

Melhoria estrutural.

Exemplo:

```
refactor(database): optimize queries
```

---

## docs

Documentação.

Exemplo:

```
docs(readme): update installation guide
```

---

## test

Testes.

Exemplo:

```
test(users): add service tests
```

---

## chore

Manutenção.

Exemplo:

```
chore(deps): update packages
```

---

## perf

Performance.

Exemplo:

```
perf(images): optimize loading
```

---

# Regras de Commit

Um commit deve:

- possuir uma mudança clara
- usar verbo no presente
- ser pequeno
- explicar intenção

---

# Bons Commits

```
feat(crm): create lead pipeline

fix(auth): prevent expired token error

docs(api): add endpoint documentation
```

---

# Commits Ruins

Evitar:

```
update

changes

final

teste

arrumei
```

---

# Pull Request

Toda mudança importante deve passar por revisão.

Mesmo trabalhando sozinho com IA.

O PR funciona como:

- checkpoint
- documentação
- revisão técnica

---

# Checklist de Pull Request

Antes de aprovar:

## Código

- Está organizado?
- Segue arquitetura?
- Existe duplicação?

---

## Segurança

- Possui riscos?
- Exposição de dados?
- Secrets?

---

## Testes

- Funcionalidade testada?
- Casos críticos cobertos?

---

## Produto

- Resolve o problema correto?
- UX está adequada?

---

# Merge

Preferência:

Squash Merge

Motivos:

- histórico limpo
- menos commits irrelevantes
- melhor leitura

---

# Rebase

Utilizar quando necessário para manter histórico atualizado.

Exemplo:

```
develop atualizado

↓

rebase feature
```

---

# Nunca Fazer

Evitar:

```
git push --force
```

em branches compartilhadas.

---

# Pull Antes de Trabalhar

Antes de iniciar:

```
git pull
```

Garantir código atualizado.

---

# .gitignore

Todo projeto deve proteger:

```
node_modules/

.env

.next/

dist/

coverage/

logs/
```

---

# Tags

Utilizar tags para versões importantes.

Formato:

```
v1.0.0
v1.1.0
v2.0.0
```

---

# Versionamento Semântico

Formato:

```
MAJOR.MINOR.PATCH
```

Exemplo:

```
1.4.2
```

---

# MAJOR

Mudança incompatível.

Exemplo:

API antiga removida.

---

# MINOR

Nova funcionalidade compatível.

Exemplo:

Novo módulo.

---

# PATCH

Correção.

Exemplo:

Bug corrigido.

---

# Releases

Toda versão importante deve possuir:

- descrição
- mudanças
- correções
- breaking changes

---

# Git com Inteligência Artificial

Agentes IA devem:

Antes de alterar código:

- entender contexto
- verificar branch
- analisar arquivos existentes

Nunca:

- apagar arquivos sem confirmação
- reescrever projeto inteiro sem necessidade
- criar padrões diferentes

---

# Fluxo com Agentes Fyrmma

Modelo:

```
Product Agent

↓

Planner Agent

↓

Developer Agent

↓

QA Agent

↓

Review Agent

↓

Deploy Agent
```

---

# Commits Gerados por IA

Toda alteração feita por agente deve:

- possuir commit claro
- explicar mudança
- permitir rollback

---

# Rollback

Sempre considerar:

Como desfazer?

Utilizar:

- git revert
- tags
- releases

Evitar apagar histórico.

---

# Backup

Repositórios importantes devem possuir:

- remoto configurado
- histórico preservado
- acesso seguro

---

# Monorepo

Quando possuir vários produtos:

Estrutura:

```
fyrmma/

apps/

packages/

services/

docs/
```

---

# Commits em Monorepo

Informar escopo.

Exemplo:

```
feat(web): improve landing page

feat(api): add leads endpoint
```

---

# Código de Produção

Antes de entrar na main:

Obrigatório:

- build funcionando
- testes passando
- revisão feita

---

# Checklist Diário

Antes de começar:

```
git pull
```

Durante:

```
commits pequenos
```

Antes de finalizar:

```
git status

git push
```

---

# Mentalidade Fyrmma

Git é a memória técnica da empresa.

Cada commit conta uma história.

Um bom histórico permite que:

- humanos entendam
- IAs aprendam
- produtos evoluam

---

# Regra Final

Nunca pense:

"vou só fazer uma alteração rápida".

Pense:

"essa alteração fará parte do patrimônio técnico da Fyrmma".

Código organizado hoje economiza horas amanhã.

Fim do documento.
