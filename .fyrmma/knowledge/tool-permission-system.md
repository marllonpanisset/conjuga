# 🔐 Tool Permission System - Sistema de Permissões das Ferramentas IA da Fyrmma

Versão: 1.0.0

Este documento define o sistema oficial de controle de acesso das ferramentas utilizadas pelos agentes de Inteligência Artificial da Fyrmma.

O objetivo é permitir que agentes executem tarefas reais mantendo segurança, rastreabilidade e controle humano.

---

# Filosofia de Permissões

Agentes poderosos precisam de limites claros.

A Fyrmma segue o princípio:

```
Maior capacidade

+

Maior responsabilidade

+

Maior controle
```

---

# Objetivo

Controlar:

- acesso aos arquivos
- execução de comandos
- alterações de código
- acesso a dados
- deploy
- integrações externas

---

# Modelo de Segurança

Arquitetura:

```
Agente

↓

Permission Manager

↓

Tool Executor

↓

Sistema

↓

Log
```

---

# Princípios

## Princípio 1 - Menor Privilégio

Um agente recebe somente as permissões necessárias.

Exemplo:

QA Agent:

```
Pode ler código

Não pode alterar produção
```

---

## Princípio 2 - Aprovação Humana

Ações críticas exigem confirmação.

Exemplo:

```
Deploy produção

↓

Solicitar aprovação
```

---

## Princípio 3 - Auditoria

Toda ação deve gerar registro.

Registrar:

- agente
- horário
- ferramenta usada
- comando executado
- resultado

---

# Níveis de Permissão

A Fyrmma utiliza 5 níveis.

---

# Level 0 - Observer

## Função

Agente analista.

Pode:

```
✓ Ler arquivos

✓ Analisar código

✓ Criar relatórios

✓ Sugerir mudanças
```

Não pode:

```
✗ Editar arquivos

✗ Executar comandos

✗ Fazer deploy
```

---

# Level 1 - Assistant

## Função

Agente auxiliar.

Pode:

```
✓ Ler arquivos

✓ Criar documentação

✓ Criar planos

✓ Gerar código como sugestão
```

Não pode:

```
✗ Alterar código existente
```

---

# Level 2 - Developer

## Função

Agente desenvolvedor.

Pode:

```
✓ Ler arquivos

✓ Criar arquivos

✓ Editar código

✓ Executar testes

✓ Executar comandos seguros
```

Restrições:

```
✗ Não altera produção

✗ Não remove dados críticos
```

---

# Level 3 - Operator

## Função

Agente operacional.

Pode:

```
✓ Configurar ambientes

✓ Executar automações

✓ Gerenciar serviços

✓ Fazer deploy de teste
```

Restrições:

```
✗ Produção exige aprovação
```

---

# Level 4 - Production

## Função

Agente com acesso crítico.

Pode:

```
✓ Deploy produção

✓ Alterações infraestrutura

✓ Operações administrativas
```

Obrigatório:

```
Aprovação humana

Backup

Logs

Rollback disponível
```

---

# Matriz de Permissões

| Ferramenta       | Observer | Assistant | Developer | Operator    | Production |
| ---------------- | -------- | --------- | --------- | ----------- | ---------- |
| Ler arquivos     | ✅       | ✅        | ✅        | ✅          | ✅         |
| Criar documentos | ❌       | ✅        | ✅        | ✅          | ✅         |
| Editar código    | ❌       | ❌        | ✅        | ✅          | ✅         |
| Terminal         | ❌       | ❌        | Limitado  | ✅          | ✅         |
| Git commit       | ❌       | ❌        | ✅        | ✅          | ✅         |
| Git push         | ❌       | ❌        | Limitado  | ✅          | ✅         |
| Banco dados      | ❌       | ❌        | Teste     | Homologação | Produção   |
| Deploy           | ❌       | ❌        | ❌        | Teste       | ✅         |

---

# Ferramentas Controladas

---

# Filesystem Tool

Permite interação com arquivos.

Operações:

```
read

create

update

delete
```

---

# Regras

Leitura:

Permitida.

Criação:

Permitida para Developer.

Exclusão:

Sempre requer confirmação.

---

# Terminal Tool

Permite execução de comandos.

Exemplos:

Permitidos:

```
npm install

npm run build

npm test

git status
```

---

# Comandos Sensíveis

Exigem confirmação:

```
rm

format

drop database

delete

production commands
```

---

# Git Tool

Responsável pelo controle de versão.

---

# Permissões:

Developer:

```
git add

git commit
```

---

Operator:

```
git push

merge
```

---

Production:

```
release

tag

deploy
```

---

# Database Tool

Controle de dados.

---

# Desenvolvimento

Permitido:

```
migrations

seed

queries teste
```

---

# Produção

Obrigatório:

```
backup

aprovação

registro
```

---

# Deploy Tool

Controle de publicação.

Fluxo:

```
Código

↓

Teste

↓

Homologação

↓

Aprovação

↓

Produção
```

---

# Browser Tool

Uso:

- pesquisa
- validação visual
- testes

---

# Restrições

Não permitir:

- envio automático de dados privados
- preenchimento sem aprovação
- ações irreversíveis

---

# Environment Variables

Agentes nunca devem expor:

```
API_KEYS

TOKENS

PASSWORDS

SECRETS
```

---

# Gestão de Segredos

Usar:

```
.env

Secret Manager

Variáveis protegidas
```

---

# Agent Permission Profile

Cada agente possui configuração.

Exemplo:

```
agents/frontend/config.yaml
```

```yaml
agent:
  name: frontend-agent

permission:
  level: developer

tools:
  filesystem:
    read: true
    write: true

  terminal:
    enabled: true

  deploy:
    enabled: false
```

---

# Perfis Oficiais

---

# Orchestrator Agent

Nível:

```
Assistant
```

Pode:

- analisar
- delegar
- acompanhar

Não pode:

- alterar código diretamente

---

# Full Stack Engineer

Nível:

```
Developer
```

Pode:

- editar código
- testar
- criar funcionalidades

---

# QA Engineer

Nível:

```
Observer
```

Pode:

- analisar
- testar

Não pode:

- modificar código

---

# DevOps Agent

Nível:

```
Operator
```

Pode:

- configurar ambiente
- executar deploy teste

---

# Marketing Agent

Nível:

```
Assistant
```

Pode:

- criar conteúdo
- analisar mercado

---

# Escala de Confiança dos Agentes

Agentes evoluem conforme histórico.

```
Novo agente

↓

Observer

↓

Assistant

↓

Developer

↓

Operator

↓

Production
```

---

# Critérios para Evolução

Avaliar:

```
Quantidade de tarefas concluídas

Qualidade das entregas

Quantidade de erros

Cumprimento das regras
```

---

# Sistema de Aprovação

Aprovações importantes:

```
Alteração produção

↓

Solicitação

↓

Explicação

↓

Confirmação humana

↓

Execução
```

---

# Emergency Stop

Todo agente deve possuir:

```
STOP
```

capaz de interromper execução.

---

# Logs de Segurança

Local:

```
.fyrmma/logs/security/
```

Registrar:

```
Data

Agente

Usuário

Ferramenta

Ação

Resultado
```

---

# Permission Manager Agent

ID:

```
permission-manager-agent
```

---

# Função

Controlar acesso dos agentes às ferramentas.

---

# Responsabilidades

- criar permissões
- revisar acessos
- bloquear ações perigosas
- auditar comportamento

---

# Prompt Base

```
Você é o Permission Manager Agent da Fyrmma.

Sua função é proteger a operação
de agentes IA.

Controle:

acesso,

ferramentas,

execuções,

permissões.

Sempre aplique:

menor privilégio,

segurança,

rastreabilidade.

Nunca permita ações críticas
sem autorização adequada.
```

---

# Evolução Futura

Possíveis melhorias:

```
Sandbox por agente

Containers

Ambientes isolados

Controle por política

RBAC avançado

Auditoria automática
```

---

# Visão Final

O objetivo não é limitar a IA.

É permitir que ela trabalhe com segurança.

```
Liberdade

+

Controle

+

Responsabilidade

=

Agentes Confiáveis
```

---

# Regra Final

Agentes podem acelerar uma empresa.

Permissões garantem que eles não destruam uma empresa.

Fim do documento.
