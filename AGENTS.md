# AGENTS.md

## Purpose

This repository follows a documentation-first approach.

Before making any significant decision, consult the appropriate project documentation.

Documentation defines the approved business model, principles, brand, website structure, communication and roadmap.

When documentation conflicts with the current implementation, stop and report the conflict before making changes.

---

## Documentation

### Business model

- docs/01-BUSINESS.md

### Engineering and company principles

- docs/02-PRINCIPLES.md

### Brand identity

- docs/03-BRAND.md

### Website architecture

- docs/04-WEBSITE.md

### Communication and copywriting

- docs/05-COPY.md

### Strategic roadmap

- docs/06-ROADMAP.md

---

## Core Principles

- Documentation is the single source of truth.
- Do not invent business rules.
- Do not invent copy.
- Do not invent services.
- Do not invent projects, testimonials or clients.
- Do not invent claims, capabilities, metrics or results.
- Prefer modifying existing code over creating new abstractions.
- Reuse existing components and visual patterns whenever possible.
- Keep solutions simple, readable and maintainable.
- Implement only what was explicitly requested.
- Do not anticipate future roadmap items.
- Do not perform unrelated improvements.
- Preserve existing behavior unless the current sprint explicitly authorizes a change.
- When documentation is insufficient to support a decision, ask for clarification instead of guessing.

---

## Documentation Review Policy

Project documentation is reviewed and updated before major changes to public positioning, communication or business strategy.

When reviewing documentation:

- inspect the complete document;
- preserve its purpose and organization unless a structural change is explicitly justified;
- identify outdated rules, contradictions, ambiguities and missing definitions;
- do not silently resolve conflicts using assumptions;
- do not introduce unsupported business decisions;
- preserve terminology that is already established unless a terminology change is explicitly approved;
- ensure the revised document remains consistent with the other canonical documents;
- return the complete revised document when the task requests a replacement file.

When multiple documents are being reviewed sequentially, previously approved documents become references for subsequent documents.

Documentation review and implementation are separate activities.

A documentation revision does not authorize code changes unless the implementation is explicitly requested.

---

## Home Page Policy

The Home page is considered approved and protected from casual changes.

Do not modify the Home unless the request is explicitly about:

- bug fixes;
- accessibility;
- broken behavior;
- performance;
- SEO;
- technical regressions;
- an explicitly authorized strategic, editorial or visual Home change.

A strategic or editorial review of the Home may be explicitly authorized without authorizing implementation.

When the Home is being reviewed but not implemented:

- inspect its current content;
- evaluate it against the current approved documentation;
- identify communication, positioning, clarity or conversion issues;
- recommend changes when justified;
- do not modify the Home files unless implementation is separately authorized.

Never redesign, refactor or reorganize the Home during unrelated tasks.

Do not modify shared components when the change could alter the approved Home indirectly.

Before editing a shared component, inspect every place where it is used.

If a shared-component change could affect the Home, stop and report the impact instead of implementing it without explicit authorization.

---

## Visual Pattern Reuse Policy

Before creating or composing a new UI section, identify whether an equivalent visual pattern already exists in the project.

Think in terms of complete visual patterns, not only individual UI components.

Always follow this decision order:

1. Can the complete existing visual pattern be reused without changes?
2. Can the layout and composition be reused by changing only its content?
3. Can the existing component hierarchy and visual structure be reused?
4. Can existing low-level components be combined without introducing a new visual language?
5. Only if all previous answers are no, propose a new visual composition or component.

When reusing a visual pattern, preserve whenever possible:

- section hierarchy;
- spacing;
- rhythm;
- proportions;
- surfaces;
- borders;
- card composition;
- icon placement;
- numbering strategy;
- typography hierarchy;
- responsive behavior;
- interaction behavior.

Change only what is specific to the new page:

- icons;
- titles;
- descriptions;
- links;
- content;
- data.

Do not reuse a pattern only because it exists.

Reuse it only when there is semantic and visual equivalence.

Do not force process components into non-sequential content.

Do not force service cards into institutional content.

Do not introduce a new visual composition when an equivalent pattern already exists.

The goal is for every page to look like it belongs to the same design system, even when its content is different.

Always justify the decision when introducing a new component or visual pattern.

---

## Home Visual Patterns

The Home page defines the canonical visual language of the project.

Before designing or refactoring an internal page, inspect whether an equivalent section already exists on the Home.

Canonical examples:

- Services: independent cards for services, solutions or navigable offers.
- Method: a unified panel for sequential stages, processes or connected steps.
- Differentials: institutional cards for principles, values, commitments, positioning or differentiators.

Reuse these patterns whenever they match the semantic purpose of the new content.

Do not reproduce the Home content itself.

Reuse only the visual architecture, adapting icons, titles, descriptions, links and data to the internal page.

Do not modify the Home components solely to accommodate an internal page.

If the existing implementation cannot be reused safely without affecting the Home, reproduce the approved visual structure locally with existing design-system primitives.

---

## Copywriting Policy

Copy must come from the project documentation.

Priority order:

1. docs/05-COPY.md
2. docs/01-BUSINESS.md
3. docs/02-PRINCIPLES.md
4. docs/03-BRAND.md
5. docs/04-WEBSITE.md

The priority order determines the primary source for communication decisions.

It does not authorize one document to contradict a higher-level business or strategic decision.

If the documentation does not contain the required content, ask for clarification instead of inventing text.

Do not create:

- new claims;
- new promises;
- new capabilities;
- new processes;
- new metrics;
- new client results;
- new testimonials;
- new clients;
- new positioning statements;
- unsupported commercial guarantees.

Do not rewrite approved copy merely to make it sound more creative.

Do not introduce marketing language that changes the documented meaning.

When consolidating documented content, preserve its original meaning and avoid introducing new business claims.

When copy is revised strategically, the revised copy must remain consistent with the approved business model, principles, brand and website architecture.

---

## Sprint Policy

Every implementation task belongs to a single sprint.

Implement only the requested sprint.

Do not anticipate future roadmap items.

Do not perform unrelated improvements.

Keep the scope intentionally small.

A sprint should have:

- one primary objective;
- a limited set of allowed files;
- explicit exclusions;
- clear validation commands;
- a defined expected result.

If the requested scope appears too broad, propose dividing it before implementing.

Do not implement future sections while working on the current section.

Do not remove an existing section before its approved replacement is implemented, unless the current sprint explicitly authorizes its removal.

Documentation review tasks may modify only the documentation files explicitly included in the task.

---

## Scope Control

Only modify files directly related to the requested task.

Avoid touching unrelated pages, components or documentation.

Do not use `git add .` when the sprint is restricted to specific files.

If a broader refactor seems beneficial, describe it but do not implement it.

If the implementation requires changing a file outside the allowed scope, stop and report the reason before editing it.

Preserve unrelated code, formatting and behavior.

Do not rename, move or reorganize files unless explicitly requested.

---

## Visual Consistency

Internal pages must reuse the same premium B2B design language established by the Home.

Preserve:

- section hierarchy;
- grid structure;
- spacing;
- typography;
- surfaces;
- borders;
- card density;
- icon treatment;
- numbering;
- section rhythm;
- responsive behavior;
- interaction restraint.

Avoid introducing new visual patterns when equivalent ones already exist.

Do not consider a section visually consistent merely because it uses the generic `Card`, `Grid`, `Heading` or `Text` components.

Consistency must be evaluated at the level of the complete composition.

A section should not fall back to plain title-and-description columns when the Home already provides a suitable premium pattern for the same type of content.

Prefer:

- complete section patterns over isolated components;
- structured surfaces over loose text blocks;
- documented hierarchy over decorative effects;
- clarity and restraint over visual novelty.

Do not add:

- gradients;
- glassmorphism;
- glow effects;
- decorative animations;
- excessive shadows;
- new icon styles;
- new border treatments;

unless explicitly requested or already established by the canonical pattern being reused.

---

## Design Review Checklist

Before considering any UI implementation complete, verify:

- Does an equivalent visual pattern already exist in the Home or another approved page?
- Was the complete visual pattern reused, rather than only a low-level component?
- Does the selected pattern match the semantic purpose of the content?
- Does the section introduce an unnecessary new visual composition?
- Are spacing, surfaces, borders, proportions and typography consistent with the Home?
- Does the section maintain the premium B2B visual language of the project?
- If all text were removed, would the layout still look like it belongs to the same website?
- Does the implementation remain consistent on desktop, tablet and mobile?
- Was any shared component changed in a way that could affect the protected Home?

If any answer reveals an inconsistency, revise the implementation before considering the task complete.

---

## Documentation Policy

Update documentation when the requested work changes:

- business behavior;
- architecture;
- public communication;
- project rules;
- roadmap decisions;
- approved positioning;
- documented processes.

Do not rewrite documentation unnecessarily.

Prefer modifying the appropriate existing document instead of creating a new one.

Do not duplicate the same rule or business definition across multiple documents.

Keep each document responsible for its own subject.

If a rule belongs to one canonical document, do not duplicate the full rule in another document merely for convenience.

If implementation and documentation conflict, stop and report the conflict before proceeding.

If two documentation files conflict, do not choose one silently. Identify the conflict and determine which document or business decision needs to be updated before implementation.

---

## Validation

Before considering an implementation task complete, always run:

```bash
npm run lint
npm run build
git diff --check
```

Also inspect:

```bash
git status --short
git diff --stat
```

When the sprint restricts changes to specific files, inspect the final diff for those files explicitly.

Example:

```bash
git diff -- path/to/allowed-file
```

The final working tree must contain only files related to the current sprint.

Do not create a commit unless the task explicitly requests it.

---

## Workflow

For implementation tasks:

1. Read AGENTS.md.
2. Read only the documentation relevant to the current task.
3. Inspect the current implementation and its dependencies.
4. Identify the equivalent approved visual pattern.
5. Confirm the allowed files and exclusions.
6. Explain any trade-offs or scope conflicts before implementation.
7. Implement only the requested sprint.
8. Review the result against the Design Review Checklist.
9. Run all required validation commands.
10. Report the files changed, the validation results and any remaining limitations.
11. Stop.

For documentation review or revision tasks:

1. Read AGENTS.md.
2. Read the complete document being reviewed.
3. Identify its purpose and relationship to the other canonical documents.
4. Compare it against the current approved project direction.
5. Identify contradictions, outdated rules, ambiguities and missing definitions.
6. Do not silently invent or resolve unsupported business decisions.
7. Revise only the requested documentation file.
8. Preserve its purpose, terminology and organization unless a structural change is justified.
9. Return or inspect the complete revised document.
10. Stop.

For strategic or editorial review tasks:

1. Read AGENTS.md.
2. Read all documentation relevant to the communication being reviewed.
3. Inspect the current implementation or copy.
4. Compare the communication against the approved documentation.
5. Separate review from implementation.
6. Identify problems and recommend changes.
7. Do not modify implementation unless explicitly authorized.
8. Do not invent replacement copy when the documentation does not support it.
9. Stop after delivering the review.
