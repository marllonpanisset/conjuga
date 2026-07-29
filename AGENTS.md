# AGENTS.md

## Purpose

This repository follows a documentation-first approach.

Before making any significant decision, consult the appropriate document.

## Documentation

Business model

- docs/01-BUSINESS.md

Engineering and company principles

- docs/02-PRINCIPLES.md

Brand identity

- docs/03-BRAND.md

Website architecture

- docs/04-WEBSITE.md

Communication and copywriting

- docs/05-COPY.md

Strategic roadmap

- docs/06-ROADMAP.md

## Core Principles

- Documentation is the single source of truth.
- Do not invent business rules.
- Do not invent copy.
- Do not invent services.
- Do not invent projects, testimonials or clients.
- Prefer modifying existing code over creating new abstractions.
- Reuse existing components whenever possible.
- Keep solutions simple, readable and maintainable.

## Home Page Policy

The Home page is considered approved and frozen.

Do not modify the Home unless the request is explicitly about:

- bug fixes;
- accessibility;
- broken behavior;
- performance;
- SEO;
- technical regressions.

Never redesign or refactor the Home during unrelated tasks.

## Component Reuse Policy

Before creating any component, follow this order:

1. Can an existing component be reused without changes?
2. Can it be reused by changing only its data?
3. Can only its visual structure be reused?
4. Only if all previous answers are "no", propose creating a new component.

Always justify the decision when introducing a new component.

## Copywriting Policy

Copy must come from the documentation.

Priority order:

1. docs/05-COPY.md
2. docs/01-BUSINESS.md
3. docs/02-PRINCIPLES.md

If the documentation does not contain the required content, ask for clarification instead of inventing text.

## Sprint Policy

Every task belongs to a single sprint.

Implement only the requested sprint.

Do not anticipate future roadmap items.

Do not perform unrelated improvements.

Keep the scope intentionally small.

## Scope Control

Only modify files directly related to the requested task.

Avoid touching unrelated pages, components or documentation.

If a broader refactor seems beneficial, describe it but do not implement it.

## Visual Consistency

Internal pages should reuse the same design language established by the Home.

Reuse:

- spacing
- typography
- surfaces
- borders
- cards
- section rhythm
- responsive behavior

Avoid introducing new visual patterns when equivalent ones already exist.

## Documentation Policy

Update documentation only when the requested feature changes business behavior, architecture or public documentation.

Do not rewrite documentation unnecessarily.

## Validation

Before considering a task complete, always run:

```bash
npm run lint
npm run build
git diff --check
```
