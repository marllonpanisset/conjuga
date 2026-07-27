# 📋 Project Management - Padrões Oficiais de Gestão de Projetos da Fyrmma

Versão: 1.0.0

Este documento define os padrões oficiais de planejamento, organização, execução e acompanhamento dos projetos desenvolvidos pela Fyrmma.

Toda Inteligência Artificial trabalhando em projetos da Fyrmma deve seguir estas regras.

O objetivo é criar um processo de desenvolvimento:

- organizado
- previsível
- rápido
- transparente
- escalável
- orientado a resultados

---

# Filosofia de Gestão Fyrmma

A Fyrmma funciona como uma empresa de tecnologia orientada a execução.

Projetos não devem ser conduzidos apenas por código.

Todo projeto precisa de:

- objetivo claro
- prioridade definida
- etapas organizadas
- acompanhamento
- validação

---

# Princípios

Todo projeto deve seguir:

## Clareza antes da execução

Antes de desenvolver:

Entender:

- problema
- objetivo
- usuário
- resultado esperado

---

## Pequenas entregas

Grandes projetos devem ser divididos em pequenas entregas.

Evitar:

"Construir tudo e testar no final."

Preferir:

Construir

↓

Validar

↓

Melhorar

---

## Prioridade por valor

Nem toda tarefa possui o mesmo impacto.

Priorizar:

- receita
- usuários
- redução de risco
- aprendizado

---

# Papéis da Fyrmma

Mesmo trabalhando sozinho, utilizar papéis claros.

---

# Product Owner

Responsável por:

- visão do produto
- prioridades
- decisões de negócio

Pergunta principal:

"Isso gera valor?"

---

# Project Manager Agent

Responsável por:

- organizar tarefas
- acompanhar progresso
- criar planos
- identificar bloqueios

---

# Tech Lead Agent

Responsável por:

- decisões técnicas
- arquitetura
- qualidade do código

---

# Developer Agent

Responsável por:

- implementação
- correções
- melhorias

---

# QA Agent

Responsável por:

- testes
- validação
- qualidade

---

# Processo Oficial de Projeto

Fluxo:

```
Ideia

↓

Planejamento

↓

Priorização

↓

Sprint

↓

Desenvolvimento

↓

Validação

↓

Entrega

↓

Feedback
```

---

# Fase 1 - Descoberta

Antes de iniciar:

Criar:

```
project-brief.md
```

---

# Project Brief

Deve conter:

## Nome do projeto

Exemplo:

CRM IA Fyrmma

---

## Problema

Qual problema será resolvido?

---

## Público

Quem utiliza?

---

## Objetivo

Qual resultado esperado?

---

## Métrica de sucesso

Como saberemos que funcionou?

---

# Fase 2 - Planejamento

Criar:

```
roadmap.md
```

Definir:

- visão
- fases
- funcionalidades
- prioridades

---

# Roadmap

Exemplo:

## Fase 1

MVP

Objetivo:

Validar solução.

---

## Fase 2

Melhorias.

Objetivo:

Aumentar valor.

---

## Fase 3

Escala.

Objetivo:

Crescimento.

---

# Backlog

Toda tarefa deve existir em um backlog.

Exemplo:

```
BACKLOG

- Criar autenticação
- Criar dashboard
- Criar API de usuários
- Melhorar landing page
```

---

# Estrutura de Tarefa

Toda tarefa deve possuir:

```
Título

Descrição

Objetivo

Prioridade

Responsável

Status

Critérios de aceitação
```

---

# Exemplo

## Tarefa

Criar login de usuários.

---

## Objetivo

Permitir acesso seguro ao sistema.

---

## Critérios

- usuário consegue entrar
- senha validada
- erros tratados
- sessão criada

---

# Prioridades

Utilizar:

## P0 - Crítico

Bloqueia projeto.

Resolver imediatamente.

---

## P1 - Alta

Grande impacto.

---

## P2 - Média

Importante, mas não urgente.

---

## P3 - Baixa

Melhoria futura.

---

# Sprint

Sprint é um ciclo curto de execução.

Duração recomendada:

1 ou 2 semanas.

---

# Planejamento de Sprint

Antes da sprint:

Definir:

- objetivo
- tarefas
- resultado esperado

---

# Sprint Goal

Toda sprint deve possuir uma meta.

Exemplo:

"Publicar primeira versão funcional do CRM."

---

# Durante a Sprint

Acompanhar:

- progresso
- bloqueios
- mudanças

---

# Daily Simplificada

Mesmo sozinho:

Responder:

## O que foi feito?

---

## O que será feito?

---

## Existe bloqueio?

---

# Status das Tarefas

Utilizar:

```
BACKLOG

TODO

IN_PROGRESS

REVIEW

TESTING

DONE
```

---

# Definition of Ready

Uma tarefa está pronta quando:

- objetivo claro
- requisitos definidos
- dependências conhecidas

---

# Definition of Done

Uma tarefa está concluída quando:

- código criado
- testes realizados
- revisão feita
- documentação atualizada
- funcionando no ambiente correto

---

# Estimativa de Tarefas

Utilizar:

Story Points

ou

Tempo estimado.

---

# Story Points

Considerar:

- complexidade
- risco
- esforço

Não apenas horas.

---

# Exemplo

1 ponto:

Muito simples.

3 pontos:

Média complexidade.

8 pontos:

Grande.

---

# Gestão de Risco

Todo projeto deve analisar:

## Riscos técnicos

Exemplo:

Tecnologia desconhecida.

---

## Riscos financeiros

Exemplo:

Custo de infraestrutura.

---

## Riscos de mercado

Exemplo:

Pouca demanda.

---

# Registro de Riscos

Criar:

```
risks.md
```

Formato:

```
Risco:

Impacto:

Probabilidade:

Plano:
```

---

# Decisões Técnicas

Decisões importantes devem ser documentadas.

Criar:

```
adr/
```

Architecture Decision Records.

---

# Exemplo ADR

```
ADR-001

Escolha do PostgreSQL

Motivo:

Escalabilidade e compatibilidade.
```

---

# Comunicação entre Agentes

Cada agente deve entregar informações claras.

Exemplo:

Developer:

```
implementation-report.md
```

QA:

```
qa-report.md
```

Deploy:

```
deployment-report.md
```

---

# Controle de Escopo

Evitar:

Feature creep.

Toda nova ideia deve responder:

- É prioridade?
- Resolve problema?
- Impacta objetivo atual?

---

# MVP First

Regra:

Primeiro entregar valor.

Depois melhorar.

---

# Evitar

- arquitetura prematura
- funcionalidades desnecessárias
- perfeccionismo
- semanas planejando sem executar

---

# Gestão de Produtos SaaS

Todo SaaS deve acompanhar:

- roadmap
- métricas
- feedback
- prioridades

---

# Métricas de Projeto

Acompanhar:

## Velocidade

Quantidade entregue.

---

## Lead Time

Tempo entre ideia e entrega.

---

## Bugs

Quantidade de problemas encontrados.

---

## Retrabalho

Quanto foi refeito.

---

# Ferramentas

Preferência:

- GitHub Projects
- Notion
- Trello
- Linear

---

# Projetos com IA

Quando utilizar agentes:

## Planejamento

Product Agent

↓

## Arquitetura

Architect Agent

↓

## Código

Developer Agent

↓

## Testes

QA Agent

↓

## Revisão

Security Agent

---

# Prompt Base do Project Manager Agent

```
Você é o Project Manager da Fyrmma.

Sua função é organizar execução.

Antes de criar tarefas:

Entenda objetivo.

Divida em etapas pequenas.

Priorize valor.

Identifique riscos.

Crie planos claros.

Nunca iniciar desenvolvimento sem contexto.
```

---

# Checklist Inicial de Projeto

Antes de começar:

- Problema definido?
- Público definido?
- Objetivo definido?
- Stack definida?
- Arquitetura definida?
- Backlog criado?
- Critérios de sucesso definidos?

---

# Checklist Antes da Entrega

- Funcionalidade concluída?
- Testes realizados?
- Segurança revisada?
- Performance avaliada?
- Documentação atualizada?
- Deploy validado?

---

# Mentalidade Fyrmma

Gestão não existe para criar burocracia.

Existe para aumentar velocidade.

Um bom processo permite:

- menos erros
- melhores decisões
- entregas mais rápidas

---

# Regra Final

Planejar o suficiente para evitar desperdício.

Executar rápido o suficiente para aprender.

A Fyrmma cresce através de ciclos:

Construir.

Medir.

Aprender.

Melhorar.

Fim do documento.
