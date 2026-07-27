# Fyrmma Agent v3 — Estado Atual

## Objetivo

O Fyrmma Agent é um agente local de engenharia de software.
Ele utiliza Ollama para atuar como um Engenheiro Full Stack.

O agente deve:

- analisar projetos reais;
- entender arquitetura;
- encontrar problemas baseados em evidências;
- gerar relatórios;
- criar planos de correção;
- nunca inventar problemas.

---

# Arquitetura atual

## core/

Infraestrutura do agente.

Responsabilidades:

- configuração;
- contexto;
- comunicação Ollama;
- validação de evidências;
- memória;
- prompts.

Arquivos:

config.py
context.py
evidence.py
memory.py
ollama.py
prompts.py

## agents/

Agentes especializados.

Atual:

fullstack.py

Responsável por:

- deep audit;
- health report;
- planos de correção.

## tools/

Ferramentas determinísticas.

Responsáveis por:

- leitura de arquivos;
- scanner;
- análise de dependências;
- git;
- build checks.

## tests/

Testes atuais:

- imports;
- execução;
- chamadas;
- atributos Ollama.

---

# Implementado

✅ Configuração centralizada

✅ Comunicação Ollama

✅ Streaming

✅ Retry

✅ Context budget

✅ Sistema de findings

✅ Validação automática de evidência

✅ Relatórios Markdown

✅ Memória JSONL

✅ Planos de sprint

✅ Scanner de projeto

---

# Em validação

🚧 Qualidade dos prompts

🚧 Seleção de contexto

🚧 Precisão dos findings

🚧 Fluxo completo de auditoria

---

# Pendências

- revisar arquitetura geral;
- validar todos os tools;
- melhorar testes;
- adicionar segurança de execução;
- criar agentes especializados;
- validar experiência final.

---

# Pergunta principal desta análise

Como finalizar o Fyrmma Agent v3 para que ele seja um agente confiável de engenharia de software?
