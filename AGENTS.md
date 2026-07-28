# Fyrmma — Regras para o Codex

## Objetivo atual

O objetivo principal deste repositório é finalizar e lançar o site institucional
da Fyrmma rapidamente, com qualidade visual premium e sem refatorações
desnecessárias.

Prioridades, nesta ordem:

1. UI/UX visual e consistência do design system.
2. Responsividade e acessibilidade.
3. Revisão de CTA e copy.
4. SEO, performance e preparação para produção.
5. Lançamento.

Não buscar perfeição indefinidamente. Priorizar alterações que tenham impacto
visível ou comercial relevante.

---

## Ambiente obrigatório

Este projeto deve ser executado exclusivamente no WSL Ubuntu.

Diretório do projeto:

```bash
~/dev/fyrmma
```

Para lint, build, testes ou comandos Node, use o ambiente Linux do WSL.

Nunca execute `node`, `npm`, `npx`, `pnpm`, `next` ou ferramentas relacionadas
usando o Node do Windows.

Se a sessão estiver no Windows, execute comandos assim:

```bash
wsl -d Ubuntu -- bash -lc 'cd ~/dev/fyrmma && <comando>'
```

Não reinstale dependências apenas para corrigir incompatibilidade entre Windows
e Linux.

Não exclua `node_modules`.

Não altere lockfiles sem que a tarefa exija explicitamente uma mudança de
dependência.

---

## Stack e arquitetura

Preservar a stack e a arquitetura existentes.

- Next.js com App Router.
- TypeScript.
- Tailwind CSS.
- Componentes compartilhados em `components/ui`.
- Seções reutilizáveis em `components/sections`.
- Conteúdo estruturado em `content`.
- Utilitários existentes em `lib`.

Não instalar bibliotecas sem autorização explícita.

Não criar novas abstrações quando um componente existente resolver o problema.

Não mover arquivos sem necessidade direta da tarefa.

Antes de criar um componente novo, procurar um componente compartilhado
existente que possa ser reutilizado.

---

## Escopo das tarefas

Alterar apenas os arquivos explicitamente permitidos no prompt.

Arquivos relacionados podem ser lidos para compreender dependências, mas não
devem ser modificados sem necessidade e sem autorização explícita.

Não alterar durante tarefas visuais:

- copy;
- conteúdo;
- dados;
- rotas;
- metadata;
- props públicas;
- tipos públicos;
- arquitetura;
- dependências;
- lógica de negócio.

Se uma mudança necessária estiver fora do escopo, não a faça silenciosamente.
Relate-a ao final como recomendação.

---

## Direção visual da Fyrmma

A Fyrmma deve transmitir:

- empresa de tecnologia séria;
- engenharia e estratégia;
- visual premium;
- clareza;
- confiança;
- modernidade sem aparência de template genérico.

Identidade existente:

- grafite/navy;
- verde-sinal como destaque;
- tipografia técnica;
- estética limpa e estruturada;
- contraste adequado;
- superfícies discretas;
- hierarquia editorial.

Evitar:

- visual genérico de agência;
- gradientes azul/roxo sem relação com a identidade;
- glow neon;
- glassmorphism excessivo;
- sombras exageradas;
- bordas muito fortes;
- excesso de elementos decorativos;
- animações chamativas;
- aparência gamer;
- aparência de dashboard quando não fizer sentido;
- copiar diretamente Linear, Vercel, Stripe ou outros produtos.

Referências podem orientar qualidade e acabamento, mas o resultado deve preservar
a identidade própria da Fyrmma.

---

## Sistema visual

Manter consistência entre componentes.

Preferências atuais:

- raio principal de cards: 16px;
- bordas sutis;
- sombras leves e controladas;
- superfícies opacas ou apenas levemente translúcidas;
- espaçamento interno confortável;
- hierarquia tipográfica clara;
- uso moderado da cor signal;
- foco visível e acessível.

Sempre preferir tokens existentes do design system em vez de valores arbitrários.

Antes de adicionar valores fixos de cor ou sombra, verificar se já existe uma
variável CSS ou token equivalente.

Evitar repetir longas classes arbitrárias quando um token já existe.

---

## Interações e movimento

Elementos interativos não devem mudar de posição.

Não usar em botões ou cards:

- `scale-*`;
- `hover:scale-*`;
- `active:scale-*`;
- `translate-*`;
- `hover:translate-*`;
- `group-hover:translate-*`;
- movimentação vertical ou horizontal no hover.

Hover deve utilizar apenas, quando apropriado:

- mudança de cor;
- mudança de fundo;
- mudança de borda;
- mudança sutil de sombra;
- mudança de opacidade;
- mudança de cor de ícones.

Não usar `transition-all`.

Declarar somente as propriedades realmente animadas, por exemplo:

```css
transition-[border-color,background-color,box-shadow,color]
```

Respeitar `prefers-reduced-motion` quando houver animações.

---

## Cards

O componente `Card` deve ser uma superfície base reutilizável.

Evitar colocar comportamento interativo global no `Card` se nem todas as
instâncias forem clicáveis.

Comportamentos específicos de hover devem ficar no componente interativo, como:

- `ServiceCard`;
- `NicheCard`;
- `CaseCard`.

Não aplicar duas animações concorrentes no componente base e no componente
especializado.

Cards relacionados devem parecer parte do mesmo sistema, mas podem ter diferenças
sutis conforme sua função.

---

## Responsividade

Toda alteração deve ser revisada para:

- mobile em aproximadamente 390px;
- tablet em aproximadamente 768px;
- desktop em aproximadamente 1440px.

Evitar:

- overflow horizontal;
- textos cortados;
- grids comprimidos;
- títulos com quebras ruins;
- padding excessivo no mobile;
- áreas clicáveis pequenas;
- desalinhamentos entre cards.

Não otimizar apenas para desktop.

---

## Conteúdo e credibilidade

Não inventar:

- clientes;
- cases;
- métricas;
- depoimentos;
- resultados;
- certificações;
- integrações;
- funcionalidades;
- informações sobre a empresa.

Não usar Brototec, projetos pessoais, projetos acadêmicos ou trabalhos sem
autorização explícita como cases da Fyrmma.

Projetos demonstrativos devem ser claramente identificados como demonstrações,
quando existirem.

---

## Qualidade de código

Preservar:

- tipagem TypeScript;
- padrões existentes;
- imports organizados;
- semântica HTML;
- acessibilidade;
- legibilidade;
- APIs públicas dos componentes.

Evitar:

- `as any`;
- `eslint-disable`;
- duplicação desnecessária;
- comentários óbvios;
- abstrações prematuras;
- arquivos grandes sem necessidade;
- mudanças de formatação fora do escopo;
- renomeações cosméticas em massa.

Não corrigir problemas não relacionados à tarefa, salvo quando impedirem a
validação.

---

## Segurança operacional

Não executar sem autorização explícita:

- `git commit`;
- `git push`;
- `git reset`;
- `git clean`;
- exclusão ampla de arquivos;
- alteração de `.env`;
- comandos com `sudo`;
- instalação ou remoção de dependências;
- migrações de banco;
- comandos destrutivos;
- mudanças em infraestrutura ou deploy.

Pode executar normalmente dentro do projeto:

- leitura de arquivos;
- buscas com `rg`, `find` e equivalentes;
- `git status`;
- `git diff`;
- `git diff --check`;
- lint;
- build;
- testes já existentes.

Não modificar o histórico do Git.

Não realizar commit ao final da tarefa, salvo solicitação explícita.

---

## Autonomia

O agente pode executar sem solicitar confirmação:

- leitura de arquivos;
- edição dos arquivos permitidos pela tarefa;
- `git status`;
- `git diff`;
- `git diff --check`;
- buscas com `rg`/`find`;
- `npm run lint`;
- `npm run build`;
- testes já existentes.

O agente NÃO pode executar sem autorização explícita:

- `git commit`;
- `git push`;
- `git reset`;
- `git clean`;
- instalação ou remoção de dependências;
- alterações em `.env`;
- migrações de banco;
- deploy;
- comandos destrutivos;
- alterações fora do workspace.

---

## Validação obrigatória

Após alterações, executar quando disponíveis:

```bash
npm run lint
npm run build
git diff --check
```

Se houver testes relevantes e já configurados, executá-los também.

Não instalar dependências para fazer a validação passar.

Se uma validação falhar:

- identificar se a falha foi causada pelas alterações;
- corrigir apenas erros relacionados ao escopo;
- não mascarar erros;
- informar claramente bloqueios de ambiente ou erros preexistentes.

Antes de concluir alterações visuais, buscar nos arquivos modificados por:

```
scale-
translate-
transition-all
```

Esses padrões só podem permanecer quando já existirem por um motivo válido fora
do escopo ou quando forem explicitamente autorizados.

---

## Fluxo obrigatório

Para toda tarefa:

1. Ler os arquivos necessários.
2. Identificar componentes relacionados.
3. Fazer o menor conjunto possível de alterações.
4. Executar lint.
5. Executar build.
6. Corrigir apenas problemas causados pelas alterações.
7. Mostrar resumo.
8. Mostrar `git diff`.
9. Nunca fazer commit.

---

## Entrega da tarefa

Ao terminar, responder de forma curta com:

- arquivos alterados;
- resumo das mudanças;
- validações executadas e resultados;
- bloqueios encontrados;
- `git diff --stat`;
- diff somente dos arquivos alterados, quando solicitado.

Não repetir arquivos completos na resposta se o diff for suficiente.

Não apresentar longas explicações do raciocínio interno.

Não fazer commit automaticamente.

---

## Regra de contenção

Quando houver dúvida entre uma alteração pequena e uma refatoração ampla,
escolher a alteração menor.

Quando a tarefa puder ser concluída alterando um componente compartilhado, evitar
editar várias páginas individualmente.

Quando uma mudança visual não tiver impacto perceptível, não realizá-la.

A prioridade é lançar uma versão sólida da Fyrmma, não reconstruir o projeto.

---
