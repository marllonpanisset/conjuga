# 💻 Coding Rules - Padrões Oficiais de Desenvolvimento da Fyrmma

Versão: 1.0.0

Este documento define os padrões obrigatórios de desenvolvimento da Fyrmma.

Todo código escrito por qualquer Inteligência Artificial deve seguir estas regras.

Estas regras possuem prioridade sobre preferências pessoais.

---

# Objetivo

Escrever código que seja:

- simples
- legível
- reutilizável
- seguro
- performático
- escalável
- fácil de testar
- fácil de manter

Código é patrimônio da empresa.

Cada linha deve facilitar a evolução do projeto.

---

# Regra Principal

Sempre escreva código para humanos.

Computadores executam qualquer código.

Desenvolvedores precisam entender esse código daqui a meses ou anos.

---

# Antes de Programar

Sempre siga esta sequência.

1.

Entender o problema.

↓

2.

Analisar contexto.

↓

3.

Propor solução.

↓

4.

Somente então escrever código.

Nunca programe imediatamente.

---

# Simplicidade

Sempre escolher a solução mais simples.

Evite:

abstrações desnecessárias

camadas extras

design patterns sem necessidade

código "inteligente"

Prefira código óbvio.

---

# Legibilidade

Código deve ser autoexplicativo.

Prefira:

```ts
const userProfile = await getUserProfile();
```

Evite:

```ts
const d = await g();
```

---

# Nomes

Nomes devem explicar propósito.

Bom

```ts
calculateTotalPrice();
```

Ruim

```ts
calc();
```

---

# Componentes

Todo componente deve possuir apenas uma responsabilidade.

Ruim

Dashboard

↓

Tabela

↓

Modal

↓

Form

↓

API

↓

Tudo junto.

Bom

Dashboard

↓

Table

↓

Modal

↓

Form

↓

Hooks

↓

Services

---

# Funções

Funções devem ser pequenas.

Ideal

20~40 linhas.

Evite funções enormes.

Se uma função exige rolagem extensa,

provavelmente faz mais de uma coisa.

---

# Arquivos

Evite arquivos gigantes.

Referência.

Ideal

até 200 linhas.

Aceitável

300 linhas.

Acima disso,

avaliar divisão.

---

# Tipagem

Sempre utilizar TypeScript.

Nunca utilizar

```ts
any;
```

Prefira

```ts
unknown;
```

ou tipos explícitos.

---

# Interfaces

Criar interfaces apenas quando fizer sentido.

Evitar interfaces desnecessárias.

Prefira tipos simples quando possível.

---

# Props

Sempre tipar.

Exemplo

```ts
interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}
```

Nunca deixar props implícitas.

---

# Estados

Prioridade.

Server Components

↓

Server Actions

↓

State Local

↓

Context

↓

Biblioteca externa

Nunca criar estado global sem necessidade.

---

# React

Sempre utilizar

Hooks

Componentes Funcionais

Early Return

Composition

Evitar

Class Components

---

# JSX

Evitar JSX complexo.

Ruim

```tsx
{condition ? (
...
) : anotherCondition ? (
...
) : (
...
)}
```

Prefira separar em componentes.

---

# Hooks

Hooks devem:

começar com use

ter responsabilidade única

não depender de efeitos colaterais desnecessários

---

# useEffect

Utilizar apenas quando necessário.

Perguntar.

Posso resolver isso sem useEffect?

Se sim,

evitar.

---

# Lógica de Negócio

Nunca colocar lógica complexa dentro do componente.

Mover para:

services

hooks

utils

---

# API

Nunca fazer fetch espalhado.

Centralizar.

Exemplo.

services/

api.ts

auth.ts

users.ts

---

# Erros

Nunca ignorar erros.

Sempre tratar.

Sempre retornar mensagens úteis.

Nunca:

```ts
catch {}
```

---

# Logs

Nunca deixar

```ts
console.log();
```

em produção.

Utilizar logger quando necessário.

---

# Comentários

Código bom precisa de poucos comentários.

Comentar apenas:

regras de negócio

decisões complexas

workarounds documentados

Nunca comentar o óbvio.

Ruim

```ts
// Soma um ao contador
count++;
```

---

# Imports

Organizar.

1.

Bibliotecas

↓

2.

Componentes

↓

3.

Hooks

↓

4.

Services

↓

5.

Tipos

↓

6.

Estilos

Evitar imports desorganizados.

---

# CSS

Sempre utilizar Tailwind.

Criar CSS separado apenas quando realmente necessário.

Nunca misturar vários estilos diferentes.

---

# Classes Tailwind

Organizar.

Layout

↓

Spacing

↓

Typography

↓

Colors

↓

Effects

↓

States

---

# Componentes Reutilizáveis

Antes de criar um componente.

Perguntar.

Já existe?

Pode ser adaptado?

Pode virar parte do Design System?

---

# Duplicação

Nunca copiar código.

Se repetir pela terceira vez,

refatorar.

---

# Constantes

Nunca utilizar números mágicos.

Ruim

```ts
if(users > 17)
```

Bom

```ts
const MAX_USERS = 17;
```

---

# Strings

Evitar strings repetidas.

Centralizar constantes.

---

# Condições

Sempre simplificar.

Ruim

```ts
if(a == true)
```

Bom

```ts
if(a)
```

---

# Early Return

Preferir.

Ruim

```ts
if(user){

...

}
```

Bom

```ts
if (!user) {
  return;
}
```

---

# Segurança

Nunca confiar na entrada do usuário.

Sempre validar.

Sempre sanitizar.

Sempre tipar.

---

# Banco

Nunca acessar banco diretamente do Controller.

Fluxo.

Controller

↓

Service

↓

Repository

↓

Prisma

---

# Prisma

Sempre utilizar:

migrations

tipos gerados

transações quando necessário

---

# Performance

Evitar.

renderizações desnecessárias

consultas repetidas

efeitos desnecessários

componentes gigantes

---

# Acessibilidade

Sempre considerar.

ARIA

Labels

Alt

Tab

Keyboard

Focus

---

# SEO

Toda página deve possuir.

Title

Description

Open Graph

Canonical

Schema

JSON-LD

---

# Testes

Sempre pensar.

Como isso pode ser testado?

O código deve facilitar testes.

---

# Refatoração

Refatore apenas quando existir ganho.

Nunca apenas por gosto.

---

# Dependências

Antes de instalar.

Responder.

Existe solução nativa?

A stack já resolve?

Vale aumentar manutenção?

---

# Commits

Padrão.

feat:

fix:

refactor:

docs:

style:

perf:

test:

chore:

Exemplo

feat(auth): adiciona login com Google

---

# Pull Requests

Todo PR deve responder.

O que foi feito?

Por que?

Como testar?

Existe impacto?

Existe Breaking Change?

---

# Checklist Antes de Entregar

- Código compila?
- TypeScript sem erros?
- ESLint limpo?
- Não há console.log?
- Não há código morto?
- Não há duplicação?
- Componentes reutilizados?
- Performance mantida?
- Responsividade validada?
- Acessibilidade considerada?
- SEO preservado?
- Erros tratados?
- Tipagem correta?
- Documentação atualizada?

---

# Quando Receber uma Tarefa

Nunca responda diretamente com código.

Primeiro entregue.

## Diagnóstico

Explique o problema.

---

## Solução Proposta

Explique a abordagem.

---

## Arquivos Afetados

Liste exatamente.

---

## Impactos

Explique riscos.

---

## Implementação

Somente agora escreva código.

---

## Como Testar

Descreva o passo a passo.

---

## Melhorias Futuras

Liste oportunidades encontradas.

---

# Mentalidade Fyrmma

Você não escreve código para cumprir tarefas.

Você escreve código para construir ativos.

Todo componente pode virar biblioteca.

Todo módulo pode virar template.

Todo template pode virar produto.

Todo produto pode virar SaaS.

Sempre pense alguns passos à frente.

---

# Regra Final

Se houver conflito entre:

Código curto × Código legível

Escolha código legível.

Se houver conflito entre:

Velocidade × Qualidade

Escolha qualidade suficiente para entregar com segurança.

Se houver conflito entre:

Criar algo novo × Reutilizar

Escolha reutilizar.

A consistência é um dos maiores ativos da Fyrmma.

Fim do documento.
