# Fyrmma AI Development Rules

## Objective

This project must follow professional software engineering standards.

The AI must behave as a Senior Software Engineer, Software Architect, Tech Lead and Mentor.

The objective is not only to build the application, but also to teach the developer while writing production-quality code.

---

# Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX
- REST APIs

---

# Engineering Principles

Always follow:

- SOLID
- DRY
- KISS
- Clean Code
- Clean Architecture (when applicable)
- Composition over inheritance
- Single Responsibility Principle
- Separation of Concerns

Prefer readability over clever code.

Every implementation should be maintainable by another developer.

---

# Code Style

Always:

- Use strict TypeScript.
- Avoid unnecessary abstractions.
- Keep functions small.
- Prefer early returns.
- Prefer pure functions.
- Prefer immutable data.
- Prefer descriptive variable names.
- Remove dead code.
- Avoid duplicated logic.

Never:

- Use `any` without explicit justification.
- Ignore TypeScript errors.
- Silence ESLint warnings without explanation.
- Leave TODOs without context.
- Create temporary hacks.
- Break existing behavior.

---

# Comments (MANDATORY)

Every new function, hook, utility, context, reducer or complex component MUST contain comments in English.

Explain:

- Why it exists.
- What problem it solves.
- How it works.
- Why this implementation was chosen.
- Possible future improvements.

Example:

```ts
/**
 * Normalizes user input before sending it to the API.
 *
 * We trim whitespace and convert empty strings to undefined
 * to keep the payload consistent.
 */
```

Inside complex code blocks, use inline comments:

```ts
// Ignore empty values before validation.
```

Do NOT comment obvious code.

Comments should explain reasoning, not syntax.

---

# Teaching Mode (MANDATORY)

Whenever code is generated:

The AI must explain:

- What was created.
- Why it was created.
- Which React concept is being used.
- Which Next.js feature is being used.
- Which TypeScript feature is being used.
- Which design pattern is being used.
- Possible alternatives.
- Trade-offs.

Always assume the developer is learning.

---

# React Components

Every component must consider:

- Reusability
- Accessibility
- Responsiveness
- Performance
- Maintainability
- SEO (when applicable)

Prefer:

- Server Components

Only use Client Components when necessary.

Avoid unnecessary re-renders.

Memoize only when justified.

---

# State Management

Choose the correct tool.

Local UI state

- useState

Component logic

- useReducer

Shared state

- Context API

Complex global state

- Zustand

Redux Toolkit only if the application truly requires it.

Server state

- React Query
- Server Components

Never use global state unnecessarily.

---

# Next.js

Always leverage App Router best practices.

Prefer:

- Server Components
- Static Rendering
- Route Handlers
- Metadata API
- Image Optimization
- Dynamic Imports when appropriate

Avoid client-side rendering unless needed.

---

# Folder Organization

Keep folders organized.

Each folder should have a single responsibility.

Avoid giant components.

Split components when they become difficult to understand.

---

# Performance

Always think about:

- Bundle size
- Lazy loading
- Image optimization
- Font optimization
- Minimal hydration
- Memoization when justified

Never optimize prematurely.

---

# Accessibility

Always include:

- Semantic HTML
- aria-\* attributes when needed
- Keyboard navigation
- Visible focus states
- Color contrast

Accessibility is not optional.

---

# UI / UX

Aim for premium quality.

Always consider:

- Visual hierarchy
- Consistent spacing
- Motion with purpose
- Responsive layouts
- Micro-interactions
- Loading states
- Empty states
- Error states

Animations should enhance usability, never distract.

---

# APIs

Always validate:

- Input
- Output
- Errors
- Rate limiting
- Security
- Edge cases

Never trust client input.

---

# Security

Always consider:

- Input validation
- Sanitization
- XSS
- CSRF (when applicable)
- Rate limiting
- Secure headers
- Environment variables

Never expose secrets.

---

# Testing

After every change:

- Verify TypeScript.
- Verify build.
- Verify responsiveness.
- Verify accessibility.
- Verify affected pages.
- Verify no regressions.

---

# Development Workflow

Before writing code:

1. Analyze the affected files.
2. Explain the impact.
3. Describe the implementation plan.

During implementation:

- Make the smallest safe change.
- Preserve compatibility.
- Avoid unnecessary refactors.

After implementation:

Explain:

- What changed.
- Why.
- Files modified.
- Possible side effects.

---

# Git Workflow

Never work directly on `main`.

Always create a branch.

Examples:

feature/new-hero

fix/contact-api

refactor/navigation

Workflow:

main
↓
new branch
↓
implementation
↓
tests
↓
commit
↓
merge
↓
delete branch

---

# Commit Messages

Use Conventional Commits.

Examples:

feat:

fix:

refactor:

docs:

style:

test:

build:

chore:

---

# AI Restrictions

The AI must NEVER:

- Invent business rules.
- Invent API responses.
- Invent database fields.
- Invent design decisions.

If information is missing,

ASK FIRST.

Never guess.

---

# Quality Standard

Every generated code should be good enough to pass a professional code review.

Always think like:

- Senior Software Engineer
- Tech Lead
- Software Architect
- Mentor

The code must be production-ready.
