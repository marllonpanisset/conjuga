# 🔐 Security - Padrões Oficiais de Segurança da Fyrmma

Versão: 1.0.0

Este documento define os padrões oficiais de segurança aplicados aos projetos desenvolvidos pela Fyrmma.

Toda Inteligência Artificial trabalhando em qualquer projeto deve considerar segurança como requisito obrigatório desde o início do desenvolvimento.

Segurança não é uma etapa final.

Segurança é parte da arquitetura.

---

# Filosofia de Segurança Fyrmma

A Fyrmma desenvolve produtos digitais que podem lidar com:

- usuários
- empresas
- pagamentos
- dados privados
- integrações externas
- informações estratégicas

Um sistema seguro protege:

- usuários
- clientes
- empresa
- reputação
- patrimônio técnico

---

# Princípios Fundamentais

Todo sistema deve seguir:

## Security First

Pensar em segurança antes de implementar.

---

## Least Privilege

Conceder somente as permissões necessárias.

Nunca dar acesso maior que o necessário.

---

## Defense in Depth

Utilizar múltiplas camadas de proteção.

Exemplo:

Frontend valida.

Backend valida.

Banco protege.

Logs monitoram.

---

## Zero Trust

Nunca confiar automaticamente em:

- usuários
- dispositivos
- integrações
- dados externos

Sempre validar.

---

# Responsabilidade da IA

Antes de criar qualquer funcionalidade perguntar:

- Existe risco de segurança?
- Quais dados serão manipulados?
- Quem pode acessar?
- Como impedir abuso?
- Como detectar problemas?

---

# Variáveis de Ambiente

Nunca armazenar no código:

- senhas
- tokens
- API keys
- secrets
- DATABASE_URL
- credenciais externas

Sempre utilizar:

```
.env

.env.local

.env.example
```

---

# Exemplo

Errado:

```ts
const API_KEY = "123456";
```

Correto:

```ts
const API_KEY = process.env.API_KEY;
```

---

# Git e Segurança

Nunca enviar:

- arquivos .env
- certificados
- chaves privadas
- backups
- dumps de banco

O `.gitignore` deve proteger informações sensíveis.

---

# Autenticação

Toda aplicação com usuários deve possuir autenticação segura.

Padrão:

- JWT
- Cookies HTTP Only quando possível
- Refresh Token quando necessário

---

# Senhas

Nunca armazenar senhas em texto puro.

Sempre utilizar:

- bcrypt
- argon2

Fluxo:

Senha

↓

Hash

↓

Banco

---

# Regras de Senha

Considerar:

- tamanho mínimo
- complexidade adequada
- proteção contra ataques de força bruta

Evitar regras excessivamente rígidas que prejudiquem UX.

---

# Tokens

Nunca:

- expor tokens no frontend
- salvar tokens sensíveis no LocalStorage
- enviar tokens em URLs

Preferir:

Cookies HTTP Only

Secure

SameSite

---

# Sessões

Considerar:

- expiração
- renovação
- revogação
- logout completo

---

# Autorização

Autenticação:

"Quem é você?"

Autorização:

"O que você pode fazer?"

Sempre separar.

---

# Controle de Acesso

Utilizar:

RBAC

(Role Based Access Control)

Exemplo:

```
ADMIN

MANAGER

MEMBER

USER
```

---

# Multi Tenant Security

Todos os SaaS da Fyrmma devem considerar isolamento de dados.

Exemplo:

Empresa A

não pode acessar:

Empresa B

---

# Regra Obrigatória

Toda consulta deve filtrar:

```
organizationId
```

quando aplicável.

Nunca confiar apenas no frontend.

---

# Validação de Entrada

Nunca confiar em dados recebidos.

Validar:

- body
- query
- params
- headers
- uploads

Utilizar:

Zod

---

# Sanitização

Proteger contra:

- XSS
- SQL Injection
- NoSQL Injection
- HTML Injection

---

# SQL Injection

Nunca montar SQL utilizando strings diretamente.

Errado:

```ts
query("SELECT * FROM users WHERE id=" + id);
```

Correto:

Utilizar Prisma ou queries parametrizadas.

---

# XSS

Nunca renderizar conteúdo HTML sem sanitização.

Cuidado com:

- comentários
- mensagens
- campos personalizados

---

# CSRF

Quando utilizar cookies de autenticação considerar:

- SameSite
- tokens CSRF quando necessário

---

# CORS

Nunca liberar:

```
*
```

em produção sem necessidade.

Configurar:

- origens permitidas
- métodos
- headers

---

# Rate Limit

APIs públicas devem possuir proteção contra abuso.

Proteger especialmente:

- login
- cadastro
- recuperação de senha
- envio de mensagens
- webhooks

---

# Brute Force

Proteger contra tentativas repetidas.

Aplicar:

- limite de tentativas
- delay progressivo
- bloqueio temporário

---

# Upload de Arquivos

Nunca confiar em:

- nome
- extensão
- MIME enviado

Validar:

- tamanho
- tipo real
- conteúdo

---

# Arquivos Permitidos

Definir:

- formatos aceitos
- tamanho máximo
- quantidade

---

# Imagens

Sempre:

- redimensionar quando necessário
- remover metadata sensível
- limitar tamanho

---

# APIs Externas

Toda integração deve considerar:

- autenticação
- timeout
- validação de resposta
- tratamento de erro

Nunca confiar cegamente em terceiros.

---

# Webhooks

Todo webhook deve validar:

- assinatura
- origem
- payload
- timestamp

---

# Idempotência

Operações críticas devem evitar duplicação.

Exemplos:

- pagamentos
- pedidos
- assinaturas

Mesmo evento recebido várias vezes:

Resultado:

uma única operação.

---

# Banco de Dados

Proteções obrigatórias:

- usuário separado por ambiente
- permissões mínimas
- backups
- migrations controladas

---

# Dados Sensíveis

Evitar armazenar:

- documentos sem necessidade
- informações privadas em logs
- dados pessoais excessivos

Aplicar:

Princípio da minimização.

---

# LGPD

Projetos brasileiros devem considerar:

- consentimento
- finalidade dos dados
- minimização
- exclusão quando aplicável
- transparência

---

# Logs Seguros

Registrar:

- erros
- eventos importantes
- ações administrativas

Nunca registrar:

- senhas
- tokens
- cookies
- dados financeiros completos

---

# Tratamento de Erros

Nunca retornar detalhes internos.

Errado:

```json
{
  "error": "Prisma database connection failed at localhost..."
}
```

Correto:

```json
{
  "error": "Erro interno do servidor"
}
```

---

# Dependências

Antes de adicionar biblioteca:

Verificar:

- reputação
- manutenção
- vulnerabilidades conhecidas
- necessidade real

---

# Atualizações

Manter:

- dependências atualizadas
- frameworks corrigidos
- versões suportadas

---

# Docker Security

Sempre:

- imagens oficiais
- versões fixas
- usuário não-root quando possível
- secrets fora da imagem

---

# Frontend Security

Considerar:

- XSS
- exposição de dados
- dependências vulneráveis
- informações sensíveis no bundle

Nunca colocar:

- secrets
- chaves privadas
- tokens administrativos

---

# Backend Security

Obrigatório:

- validação
- autenticação
- autorização
- logs
- tratamento de erros

---

# Checklist Antes do Deploy

## Código

- Sem secrets?
- Sem console sensível?
- Dependências verificadas?

## API

- Rotas protegidas?
- Inputs validados?
- Rate limit?

## Banco

- Permissões corretas?
- Backup?
- Migrações?

## Infra

- HTTPS?
- Variáveis protegidas?
- Logs configurados?

---

# Checklist de Revisão de Segurança

Perguntar:

- O usuário pode acessar algo que não deveria?
- Dados privados estão protegidos?
- Existe validação no backend?
- Existe possibilidade de abuso?
- Existe vazamento de informação?
- Existe dependência insegura?
- Existe plano de recuperação?

---

# Mentalidade Fyrmma

Segurança não deve impedir inovação.

Segurança deve permitir crescimento seguro.

Um produto profissional precisa ser:

bonito

rápido

funcional

e confiável.

---

# Regra Final

Toda funcionalidade deve nascer pensando em segurança.

Corrigir uma vulnerabilidade depois custa mais caro do que prevenir.

A Fyrmma constrói produtos para durar.

Segurança é parte da qualidade.

Fim do documento.
