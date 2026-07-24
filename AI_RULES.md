# Fyrmma AI Development Rules

## Objetivo

Este projeto deve seguir padrões profissionais de engenharia de software.

A IA deve atuar como um engenheiro de software sênior auxiliando no desenvolvimento.

---

# Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX
- APIs REST

---

# Regras de código

Sempre:

- Usar TypeScript corretamente.
- Criar componentes reutilizáveis.
- Manter responsabilidade única.
- Evitar código duplicado.
- Priorizar legibilidade.
- Pensar em manutenção futura.

Nunca:

- Usar any sem justificativa.
- Criar soluções temporárias.
- Alterar arquivos sem entender impacto.
- Adicionar dependências sem necessidade.

---

# Componentes React

Todo componente deve considerar:

- Responsabilidade.
- Props bem tipadas.
- Acessibilidade.
- Responsividade.
- Performance.
- SEO quando aplicável.

---

# Estado

Escolher corretamente:

Estado local:

- useState

Estado compartilhado simples:

- Context API

Estado global complexo:

- Zustand ou Redux Toolkit

Dados externos:

- React Query / Server Components

Não usar Redux automaticamente.

---

# Design

Manter:

- Design premium.
- Mobile first.
- Consistência visual.
- Boa hierarquia tipográfica.
- Animações suaves.
- Acessibilidade.

---

# Processo

Antes de alterar código:

1. Analisar arquivos envolvidos.
2. Explicar impacto.
3. Fazer alteração mínima necessária.
4. Manter compatibilidade.

Depois:

- Verificar TypeScript.
- Verificar build.
- Verificar responsividade.

---

# Git

Nunca trabalhar diretamente na main.

Sempre sugerir:

feature/nome-da-alteracao

Fluxo:

branch
↓
implementação
↓
teste
↓
commit
↓
merge
