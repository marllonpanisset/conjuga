# 🧪 Testing - Padrões Oficiais de Testes e Qualidade da Fyrmma

Versão: 1.0.0

Este documento define os padrões oficiais de testes, validação e garantia de qualidade dos projetos desenvolvidos pela Fyrmma.

Toda Inteligência Artificial trabalhando em qualquer projeto deve considerar testes como parte do desenvolvimento.

Testar não é apenas encontrar erros.

Testar é garantir confiança para evoluir o produto.

---

# Filosofia de Qualidade Fyrmma

Um software profissional precisa ser:

- confiável
- previsível
- seguro
- fácil de evoluir

Código sem testes aumenta risco.

Testes reduzem:

- bugs em produção
- retrabalho
- medo de alterar código
- custo de manutenção

---

# Princípios

Toda estratégia de testes deve seguir:

## Testar comportamento

Não testar apenas implementação.

O objetivo é garantir que o usuário receba o resultado esperado.

---

## Testes simples

Um teste deve ser:

- fácil de entender
- rápido
- confiável
- independente

---

## Testes próximos do código

Testes devem acompanhar funcionalidades.

Nunca criar uma floresta de testes impossível de manter.

---

# Pirâmide de Testes

Prioridade:

```
           E2E

        Integração

     Testes Unitários
```

---

# Testes Unitários

Objetivo:

Testar pequenas unidades isoladas.

Exemplos:

- funções
- regras de negócio
- validações
- cálculos

---

# Quando criar teste unitário

Criar principalmente para:

- regras complexas
- cálculos financeiros
- permissões
- validações importantes
- funções reutilizadas

---

# Exemplos

Bom candidato:

```
calculateDiscount()

validateSubscription()

checkPermission()
```

Menos necessário:

Componentes extremamente simples.

---

# Testes de Integração

Objetivo:

Validar comunicação entre partes.

Exemplos:

- API + banco
- Service + Repository
- autenticação completa

---

# Testes E2E

Objetivo:

Simular comportamento real do usuário.

Exemplos:

Usuário:

entra no sistema

↓

faz login

↓

cria registro

↓

visualiza resultado

---

# Estratégia Fyrmma

Nem tudo precisa de E2E.

Priorizar:

- fluxos críticos
- pagamento
- autenticação
- cadastro
- ações principais

---

# Stack de Testes

Frontend:

- Vitest
- React Testing Library
- Playwright

Backend:

- Vitest
- Fastify Testing
- Supertest quando necessário

---

# Testes Frontend

Devem validar:

- renderização
- interação
- estados
- acessibilidade
- comportamento

---

# Componentes

Testar:

Usuário consegue visualizar?

Usuário consegue interagir?

Estados funcionam?

---

# Exemplo

Botão de envio:

Testar:

- aparece
- está habilitado
- executa ação
- mostra feedback

---

# Não testar detalhes internos

Evitar testar:

- nome de variável
- estrutura interna
- implementação específica

Testar:

resultado esperado.

---

# Hooks

Testar hooks quando possuem:

- lógica complexa
- chamadas externas
- estados importantes

---

# Formulários

Sempre testar:

- preenchimento válido
- preenchimento inválido
- mensagens de erro
- envio correto

---

# API Testing

Toda API importante deve possuir testes.

Validar:

- status HTTP
- resposta
- regras de negócio
- autenticação
- permissões

---

# Cenários Obrigatórios

Para cada endpoint:

## Sucesso

Usuário envia dados corretos.

Resultado esperado.

---

## Validação

Usuário envia dados inválidos.

API rejeita corretamente.

---

## Autorização

Usuário sem permissão.

API bloqueia.

---

## Não encontrado

Recurso inexistente.

Resposta adequada.

---

# Banco de Dados em Testes

Nunca utilizar banco de produção.

Ambientes:

```
development

test

staging

production
```

---

# Test Database

Testes devem possuir:

- banco isolado
- dados controlados
- limpeza após execução

---

# Mocks

Utilizar quando necessário.

Exemplos:

- APIs externas
- pagamentos
- emails
- serviços terceiros

---

# Não Mockar Tudo

Mocks excessivos podem esconder problemas reais.

Sempre equilibrar.

---

# Testes de Integração Externa

Para serviços externos:

Testar:

- resposta esperada
- erros
- timeout
- falhas temporárias

---

# Testes de Segurança

Validar:

- autenticação
- autorização
- isolamento de dados
- entradas inválidas

---

# Testes Multi Tenant

Obrigatório em SaaS.

Garantir:

Empresa A

não acessa

Empresa B

---

# Testes de Performance

Realizar quando necessário.

Avaliar:

- APIs críticas
- consultas pesadas
- grandes volumes

---

# Testes de Regressão

Antes de grandes entregas verificar:

Funcionalidades antigas continuam funcionando?

---

# Antes de Corrigir Bug

Criar teste que reproduz o problema.

Fluxo:

Bug encontrado

↓

Teste criado

↓

Correção implementada

↓

Teste passa

---

# Organização dos Testes

Estrutura sugerida:

```
tests/

unit/

integration/

e2e/
```

Ou junto da funcionalidade:

```
feature/

component.tsx

component.test.tsx
```

---

# Nome dos Testes

Nome deve explicar comportamento.

Bom:

```
should create user when email is valid
```

Ruim:

```
test1
```

---

# Commits de Testes

Utilizar:

```
test:
```

Exemplo:

```
test(auth): add login validation tests
```

---

# Antes de Entregar uma Feature

Checklist:

## Funcionalidade

- Funciona conforme esperado?
- Cenário principal validado?

---

## Erros

- Casos inválidos tratados?
- Mensagens claras?

---

## Segurança

- Permissões testadas?
- Dados protegidos?

---

## Performance

- Impacto avaliado?

---

## Código

- Testes adicionados quando necessário?
- Código limpo?

---

# Definition of Done Fyrmma

Uma funcionalidade só está pronta quando:

- código implementado
- revisão realizada
- testes executados
- erros tratados
- documentação atualizada
- comportamento validado

---

# QA Mentalidade

Todo desenvolvedor é responsável pela qualidade.

QA não deve ser uma etapa separada.

Qualidade nasce durante o desenvolvimento.

---

# IA como QA

Quando revisar código, a IA deve procurar:

- bugs possíveis
- casos extremos
- falhas de segurança
- problemas de UX
- falta de validação
- problemas de performance

---

# Checklist Final Antes do Deploy

## Código

- Build funcionando?
- TypeScript sem erros?
- Lint aprovado?

## Testes

- Unitários passando?
- Integração passando?
- E2E crítico validado?

## Produto

- Fluxo principal funcionando?
- UX revisada?
- Responsividade validada?

## Segurança

- Sem secrets?
- Permissões corretas?
- Dados protegidos?

---

# Mentalidade Fyrmma

Testes não existem para atrasar desenvolvimento.

Existem para permitir velocidade segura.

Uma empresa cresce quando consegue alterar sistemas sem medo.

Testes transformam código em produto confiável.

---

# Regra Final

Antes de dizer:

"Está pronto."

A pergunta correta é:

"Como sabemos que está funcionando?"

Se não existe uma resposta clara,

a entrega ainda não terminou.

Fim do documento.
