# 🎨 Frontend - Padrões Oficiais de Desenvolvimento Frontend da Fyrmma

Versão: 1.0.0

Este documento define os padrões oficiais de desenvolvimento frontend da Fyrmma.

Toda IA trabalhando em projetos frontend deve seguir estas regras antes de criar, modificar ou revisar qualquer código.

O objetivo é criar interfaces:

- modernas
- rápidas
- acessíveis
- responsivas
- escaláveis
- fáceis de manter
- visualmente premium

---

# Filosofia Frontend Fyrmma

Frontend não é apenas uma camada visual.

Frontend é a experiência completa do usuário.

Um bom frontend deve unir:

- design
- performance
- acessibilidade
- arquitetura
- conversão
- manutenção

Toda interface deve responder:

"Esta experiência ajuda o usuário a atingir seu objetivo?"

---

# Stack Frontend Oficial

Framework:

- Next.js

Biblioteca:

- React

Linguagem:

- TypeScript

Estilos:

- Tailwind CSS

Componentes:

- Shadcn UI

Ícones:

- Lucide React

Animações:

- Motion

Formulários:

- React Hook Form

Validação:

- Zod

Gerenciamento de dados:

- Server Components
- Server Actions
- React Query quando necessário

---

# Princípios

Sempre priorizar:

1. Simplicidade

2. Performance

3. Reutilização

4. Acessibilidade

5. Experiência do usuário

6. Manutenibilidade

---

# Next.js

Utilizar:

- App Router
- Server Components
- Route Handlers
- Metadata API
- Image Optimization
- Dynamic Routes

Evitar:

- Pages Router em novos projetos
- Client Components sem necessidade

---

# Server Components

Por padrão:

Todo componente deve ser Server Component.

Utilizar Client Component somente quando precisar de:

- estado React
- eventos do navegador
- APIs do browser
- animações interativas específicas

Exemplo:

Bom:

```tsx
export default async function Page() {
  const data = await getData();

  return <Component data={data} />;
}
```

---

Ruim:

```tsx
"use client";

import { useState } from "react";
```

Quando não existe interação.

---

# Client Components

Utilizar apenas quando necessário.

Exemplos:

- menus interativos
- modais
- formulários
- sliders
- componentes com estado
- drag and drop

Sempre tentar manter o componente interativo pequeno.

---

# Estrutura Frontend Oficial

```
src/

app/

components/

features/

hooks/

services/

lib/

providers/

types/

utils/

styles/

public/
```

---

# Organização por Responsabilidade

## app/

Responsável por:

- páginas
- layouts
- rotas
- metadata
- loading
- error boundaries

Não colocar:

- regras de negócio
- componentes enormes
- chamadas complexas

---

# components/

Componentes reutilizáveis.

Exemplos:

```
components/

ui/

Button.tsx

Card.tsx

Modal.tsx

Navbar.tsx

Footer.tsx
```

---

# features/

Funcionalidades específicas.

Exemplo:

```
features/

auth/

dashboard/

billing/

crm/

chat/
```

Cada feature pode possuir:

```
components/

hooks/

services/

types/

utils/
```

---

# Componentes

Todo componente deve:

- ter uma responsabilidade
- possuir nome claro
- ser reutilizável quando possível
- possuir tipagem
- funcionar em diferentes tamanhos de tela

---

# Componentes Grandes

Evitar componentes com:

- centenas de linhas
- muitas responsabilidades
- lógica misturada
- muitos estados

Quando crescer:

Dividir.

---

# Props

Sempre tipar.

Exemplo:

```tsx
interface CardProps {
  title: string;
  description?: string;
}
```

Evitar:

```tsx
function Card(props: any);
```

---

# Composição

Preferir composição.

Bom:

```tsx
<Card>
  <CardHeader />
  <CardContent />
</Card>
```

Evitar componentes gigantes com dezenas de props.

---

# Design System

Todo projeto deve possuir consistência visual.

Criar padrões para:

- cores
- espaçamento
- tipografia
- botões
- inputs
- cards
- tabelas
- modais

---

# Referências Visuais

A Fyrmma busca qualidade inspirada em:

- Vercel
- Linear
- Stripe
- Framer
- Raycast

Não copiar.

Entender os princípios:

- simplicidade
- hierarquia visual
- espaço
- clareza
- elegância

---

# Tailwind CSS

Utilizar Tailwind como padrão.

Evitar CSS separado sem necessidade.

---

# Classes Tailwind

Organizar:

1. Layout

2. Display

3. Espaçamento

4. Tamanho

5. Tipografia

6. Cores

7. Bordas

8. Sombras

9. Estados

Exemplo:

```tsx
<div
  className="
flex
items-center
gap-4
rounded-xl
border
p-6
"
/>
```

---

# Responsividade

Todo componente deve funcionar em:

- mobile
- tablet
- desktop

Pensar primeiro em mobile.

Utilizar:

```css
sm:
md:
lg:
xl:
```

---

# Mobile First

Nunca criar desktop e depois corrigir mobile.

Fluxo:

Mobile

↓

Tablet

↓

Desktop

---

# Imagens

Sempre utilizar:

Next Image

Exemplo:

```tsx
<Image src="/image.png" alt="Descrição" width={800} height={600} />
```

Sempre informar:

- alt
- tamanho
- propósito

---

# Acessibilidade

Obrigatório:

- HTML semântico
- labels em inputs
- contraste adequado
- navegação por teclado
- foco visível
- alt em imagens

---

# HTML Semântico

Preferir:

```html
<header>
  <nav>main> section> article> footer></nav>
</header>
```

Evitar excesso de:

```html
<div></div>
```

---

# Formulários

Utilizar:

React Hook Form

-

Zod

Sempre validar:

Frontend

Backend

---

# Estados

Prioridade:

Server State

↓

Estado local

↓

Context

↓

Bibliotecas globais

---

# Evitar Context Excessivo

Não usar Context para tudo.

Usar apenas quando necessário:

- autenticação
- tema
- configurações globais

---

# Data Fetching

Prioridade:

1.

Server Component

2.

Server Actions

3.

React Query

4.

Fetch manual

---

# Loading States

Toda ação assíncrona deve possuir:

- loading
- sucesso
- erro

Nunca deixar usuário sem feedback.

---

# Error Handling

Criar experiências claras.

Exemplo:

Ruim:

"Erro"

Bom:

"Não conseguimos carregar seus dados. Tente novamente."

---

# Animações

Utilizar Motion.

Objetivo:

melhorar percepção.

Nunca:

- exagerar
- prejudicar performance
- distrair usuário

---

# Padrões de Animação

Preferir:

fade

slide

scale leve

transições suaves

Evitar:

efeitos chamativos

movimentos constantes

---

# Performance

Sempre otimizar:

- imagens
- bundle
- componentes
- carregamento
- fontes

---

# Evitar

- bibliotecas pesadas sem necessidade
- componentes client sem motivo
- imagens enormes
- animações pesadas

---

# SEO Frontend

Toda página deve possuir:

- title
- description
- metadata
- Open Graph
- Twitter Card
- canonical

---

# Estrutura de Página

Toda página comercial deve pensar em:

Hero

↓

Problema

↓

Solução

↓

Benefícios

↓

Prova

↓

CTA

↓

FAQ

↓

Contato

---

# Conversão

Frontend deve ajudar o negócio.

Sempre analisar:

- CTA claro
- hierarquia
- confiança
- prova social
- redução de dúvidas

---

# Código

Nunca:

- deixar console.log
- usar any
- duplicar componentes
- criar arquivos sem organização
- misturar lógica de negócio e UI

---

# Checklist Frontend

Antes de finalizar:

## Código

- TypeScript sem erros?
- Componentes organizados?
- Sem duplicação?
- Sem código morto?

## UI

- Responsivo?
- Visual consistente?
- Espaçamento correto?
- Tipografia adequada?

## UX

- Fluxo claro?
- Feedbacks presentes?
- Estados tratados?

## Performance

- Imagens otimizadas?
- Bundle controlado?
- Server Components usados?

## SEO

- Metadata?
- Open Graph?
- Sitemap?
- Schema?

## Acessibilidade

- Teclado?
- Labels?
- Alt?
- Contraste?

---

# Mentalidade Frontend Fyrmma

Um frontend não deve apenas funcionar.

Ele deve:

comunicar valor;

guiar usuários;

ser agradável;

ser rápido;

ser fácil de evoluir.

Todo componente criado deve ser considerado um possível ativo futuro da empresa.

Uma boa interface pode virar:

- template
- biblioteca
- produto
- SaaS

---

# Regra Final

Antes de criar qualquer tela pergunte:

Quem usa?

Qual objetivo?

Qual ação principal?

Como reduzir esforço?

Como tornar mais simples?

O melhor frontend não é o que possui mais elementos.

É o que permite ao usuário alcançar seu objetivo com menos esforço.

Fim do documento.
