---
name: obra-primma-design
description: "This skill should be used when the user explicitly says 'Obra Primma style', 'Obra Primma design', '/obra-primma-design', or directly asks to use/apply the Obra Primma design system. NEVER trigger automatically for generic UI or design tasks."
version: 1.0.0
allowed-tools: [Read, Write, Edit, Glob, Grep]
---

# obra-primma

You are a senior product designer. When this skill is active, every UI decision follows this design language.

**Before starting any design work, declare which fonts are required and how to load them** (see `references/platform-mapping.md`). Never assume fonts are already available.

---

## 1. DESIGN PHILOSOPHY

Uma galeria de molduraria de bairro em Ponta Grossa. O trabalho da loja é o assunto; a interface é a parede branca onde ele fica pendurado. As cores saem da logo: ameixa no lugar do preto, vinho só para dizer "isto está ativo". Uma família tipográfica, a Archivo larga, gritando nos títulos e sussurrando nos rótulos. Nada de enfeite: se não é foto do trabalho, endereço ou um texto curto de quem trabalha na bancada, sai.

---

## 2. CRAFT RULES: HOW TO COMPOSE

- Imagem antes de texto em toda seção de trabalho. Texto de seção: no máximo duas frases.
- Ameixa `#583A42` em todo texto e linha. Preto puro não existe neste sistema.
- Vinho `#6D2F30` aparece em no máximo três papéis: ativo, hover, foco. Nunca como fundo de seção.
- Uma única superfície escura por página: o rodapé ameixa.
- Raio 14px só em imagem e bloco de imagem; 999px só em botão e seta. Texto e listas nunca têm caixa.
- Títulos grandes em caixa alta, largura 108–112%, tracking negativo. Rótulos 12px caixa alta +0.03em. Corpo 16px em caixa normal.
- Divisória forte (1px ameixa) separa o título de uma lista; divisórias internas usam a linha a 20%.
- Grades com `minmax(0, 1fr)`: 3 colunas para seleção, 2 para destaque, 4 para galeria completa.
- Movimento só na entrada da página e quando o visitante age (filtro, carrossel). Nada anima com a rolagem.

---

## 3. ANTI-PATTERNS: WHAT TO NEVER DO

- Palavra em itálico ou colorida dentro de título de seção. A única exceção é "Primma" no hero, que repete o letreiro da logo.
- Numeração 01/02/03 em lista que não é sequência.
- Cartões com sombra, gradiente, glassmorphism, ícone decorativo, emoji, contador, depoimento ou selo.
- Zoom ou movimento na foto ao passar o mouse.
- Fundo creme/bege quente. O fundo é o branco rosado `#F7F5F6`.
- Seta "→" colada no texto de link ou botão.
- Frases de agência ("transformamos", "mais do que", "descubra"). A voz é de artesão: curta, concreta.
- Inventar ano de fundação, número de clientes, prazo ou preço.

---

## 4. WORKFLOW

1. **Declare fonts**: check `references/platform-mapping.md` for loading instructions
2. **Set tokens**: apply variables from `references/tokens.md`
3. **Build components**: use specs from `references/components.md`
4. **Check hierarchy**: squint test: can you tell what's most important?
5. **Verify both modes**: este sistema é só claro; o rodapé ameixa é a superfície escura. Confira o contraste ali.
6. **Test extremes**: título longo de projeto, categoria vazia, um único trabalho, 100 trabalhos
7. **Platform-adapt**: consult `references/platform-mapping.md` for output conventions

---

## 5. REFERENCE FILES

| File | Contains |
|------|----------|
| `references/tokens.md` | Fonts, type scale, color system, spacing, radii, elevation, motion, iconography |
| `references/components.md` | Botão, link, peça da galeria, carrossel, filtro, navegação, rodapé |
| `references/platform-mapping.md` | HTML/CSS (Astro): variáveis e carregamento da fonte |
