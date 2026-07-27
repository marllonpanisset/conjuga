# 🧠 Agent Memory - Sistema Oficial de Memória dos Agentes IA da Fyrmma

Versão: 1.0.0

Este documento define como os agentes de Inteligência Artificial da Fyrmma devem armazenar, recuperar, atualizar e utilizar conhecimento durante a execução de projetos.

O objetivo é criar agentes que evoluem com o tempo, acumulam experiência e reduzem repetição de trabalho.

---

# Filosofia de Memória Fyrmma

Uma IA sem memória começa do zero todos os dias.

Uma IA com memória melhora continuamente.

A memória transforma:

```
Conversas

↓

Conhecimento

↓

Processos

↓

Experiência

↓

Vantagem competitiva
```

---

# Objetivo

Criar uma camada de conhecimento permanente para os agentes.

A memória deve armazenar:

- decisões
- padrões
- aprendizados
- erros
- soluções
- preferências técnicas
- contexto dos produtos

---

# Princípio Principal

Memória não é apenas guardar informações.

Memória é organizar conhecimento útil.

---

# Arquitetura de Memória Fyrmma

Modelo:

```
                Agentes IA

                    ↓

             Memory Manager

                    ↓

--------------------------------

Short Term Memory

Working Memory

Project Memory

Company Memory

Knowledge Base

--------------------------------
```

---

# Tipos de Memória

A Fyrmma utiliza cinco níveis.

---

# 1. Short Term Memory

Memória temporária.

Usada durante uma tarefa atual.

Exemplos:

- arquivos analisados
- erros encontrados
- contexto da conversa

Vida:

Horas ou dias.

---

# 2. Working Memory

Memória operacional.

Usada durante execução de projetos.

Exemplos:

- tarefas atuais
- decisões recentes
- bloqueios

Local:

```
.fyrmma/memory/work/
```

---

# 3. Project Memory

Memória específica de cada projeto.

Exemplo:

```
projects/

fyrmma-site/

saas-crm/

cliente-x/
```

Armazena:

- arquitetura
- decisões
- padrões
- histórico

---

# 4. Company Memory

Memória institucional.

Contém:

- valores
- estratégia
- processos
- padrões técnicos

Local:

```
.fyrmma/memory/company/
```

---

# 5. Knowledge Base

Conhecimento reutilizável.

Exemplos:

- soluções técnicas
- templates
- pesquisas
- aprendizados

Local:

```
.fyrmma/knowledge/
```

---

# Estrutura de Pastas

Padrão:

```
.fyrmma/

memory/

├── company/

│   ├── decisions/

│   ├── lessons/

│   └── standards/


├── projects/

│   └── project-name/


├── agents/

│   └── agent-history/


└── archive/
```

---

# Memory Manager Agent

Responsável por:

- organizar memória
- evitar duplicação
- atualizar conhecimento
- recuperar informações relevantes

---

# Responsabilidades

O Memory Manager deve:

## Capturar conhecimento

Registrar informações importantes.

---

## Organizar

Classificar corretamente.

---

## Recuperar

Encontrar contexto quando necessário.

---

## Atualizar

Substituir informações antigas.

---

# O Que Deve Ser Salvo

Salvar:

## Decisões importantes

Exemplo:

"Fyrmma utiliza Next.js porque prioriza SEO e performance."

---

## Soluções

Exemplo:

"Erro de build causado por incompatibilidade de versão."

---

## Padrões

Exemplo:

"Todo componente React deve usar TypeScript."

---

## Aprendizados

Exemplo:

"Clientes preferem demonstração antes da proposta."

---

# O Que NÃO Deve Ser Salvo

Não salvar:

- informações inúteis
- conversas completas
- dados sensíveis
- senhas
- tokens
- informações temporárias sem valor futuro

---

# Memória Estruturada

Preferir:

```
Título

Contexto

Decisão

Motivo

Impacto

Data

Responsável
```

---

# Exemplo de Decisão

Arquivo:

```
decision-001.md
```

Conteúdo:

```md
# Escolha do Banco de Dados

Data:
2026-07-26

Contexto:
Novo SaaS Fyrmma.

Decisão:
Utilizar PostgreSQL.

Motivo:
Maior estabilidade,
comunidade e integração
com Prisma.

Impacto:
Padronização dos projetos.
```

---

# Memória Técnica

Registrar:

- arquitetura
- bibliotecas
- configurações
- soluções de bugs

---

# Exemplo:

```
tech-note-authentication.md
```

Conteúdo:

```
Problema:

JWT expirando incorretamente.


Causa:

Configuração errada.


Solução:

Ajustar middleware.
```

---

# Memória de Clientes

Cada cliente deve possuir:

```
cliente/

├── contexto.md

├── requisitos.md

├── decisões.md

└── histórico.md
```

---

# Memória de Produtos SaaS

Cada produto deve possuir:

```
produto/

├── visão.md

├── roadmap.md

├── usuários.md

├── métricas.md

└── aprendizados.md
```

---

# Recuperação de Memória

Antes de executar uma tarefa:

O agente deve consultar:

```
1. Regras Fyrmma

2. Contexto do projeto

3. Decisões anteriores

4. Conhecimento relacionado
```

---

# Fluxo de Consulta

```
Receber tarefa

↓

Buscar memória relevante

↓

Analisar contexto

↓

Executar

↓

Atualizar memória
```

---

# RAG (Retrieval Augmented Generation)

A memória pode utilizar RAG.

Fluxo:

```
Documentos

↓

Indexação

↓

Busca semântica

↓

Contexto para IA

↓

Resposta melhor
```

---

# Benefícios do RAG

Permite:

- projetos maiores
- menos repetição
- respostas mais precisas
- conhecimento acumulativo

---

# Memória e Agentes Especializados

Cada agente possui sua memória.

Exemplo:

```
frontend-agent-memory/

backend-agent-memory/

marketing-agent-memory/

sales-agent-memory/
```

---

# Frontend Agent Memory

Guardar:

- padrões UI
- componentes
- decisões UX
- problemas comuns

---

# Backend Agent Memory

Guardar:

- APIs
- banco
- arquitetura
- integrações

---

# QA Agent Memory

Guardar:

- bugs encontrados
- testes criados
- falhas recorrentes

---

# Marketing Agent Memory

Guardar:

- campanhas
- mensagens
- resultados

---

# Atualização de Memória

Após cada projeto:

Executar:

```
Review

↓

Identificar aprendizados

↓

Registrar

↓

Atualizar padrões
```

---

# Memory Review

Periodicidade:

Semanal ou após grandes entregas.

Perguntas:

```
O que aprendemos?

O que devemos repetir?

O que devemos evitar?

O que pode virar padrão?
```

---

# Controle de Versão

Memória importante deve estar no Git.

Exemplo:

```
git commit -m "docs: update agent memory"
```

---

# Segurança da Memória

Proteger:

- dados de clientes
- informações privadas
- credenciais
- estratégias internas

---

# Separação de Memória

Nunca misturar:

```
Empresa

+

Cliente

+

Projeto pessoal
```

---

# Memory Decay

Conhecimento antigo pode perder relevância.

Processo:

```
Revisar

↓

Atualizar

↓

Arquivar

↓

Remover
```

---

# Hierarquia de Confiança

Prioridade:

```
Documentação oficial

↓

Decisões aprovadas

↓

Padrões técnicos

↓

Experiência anterior

↓

Hipóteses
```

---

# Agente Memory Manager Workflow

```
Receber informação

↓

Classificar

↓

Validar importância

↓

Armazenar

↓

Indexar

↓

Disponibilizar aos agentes
```

---

# Integração com Ollama

Arquitetura:

```
Ollama

↓

Qwen Model

↓

Memory Files

↓

RAG

↓

Contexto do Agente
```

---

# Estratégia Atual

Começar simples:

Fase 1:

```
Arquivos Markdown

+

.fyrmma/memory
```

---

Fase 2:

```
Banco vetorial local

+

Busca semântica
```

---

Fase 3:

```
Memória automática

+

Agentes autônomos
```

---

# Banco Vetorial Futuro

Possíveis tecnologias:

- ChromaDB
- Qdrant
- FAISS
- LanceDB

---

# Métricas de Memória

Avaliar:

## Utilidade

A memória ajuda?

---

## Precisão

Está correta?

---

## Atualização

Está atualizada?

---

## Reutilização

Foi usada novamente?

---

# Prompt Base Memory Manager

```
Você é o Memory Manager Agent da Fyrmma.

Sua função é administrar conhecimento
da organização.

Capture aprendizados importantes.

Organize informações.

Evite duplicação.

Mantenha memória útil,
atualizada e segura.

Transforme experiências em ativos
reutilizáveis.
```

---

# Visão Final

A maior vantagem da Fyrmma não será apenas o modelo de IA.

Será o conhecimento acumulado pelos agentes.

Modelos podem ser trocados.

Conhecimento organizado permanece.

---

# Regra Final

Toda experiência gera aprendizado.

Todo aprendizado gera memória.

Toda memória gera vantagem.

Fim do documento.
