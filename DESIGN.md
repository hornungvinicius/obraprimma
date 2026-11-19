# Design System: Obra Primma Molduraria

Extraído do código-fonte (Astro, CSS puro). Fonte dos tokens: `src/styles/global.css`.
Estado atual: wireframe. As imagens são blocos cinza até chegarem as fotos da loja.

## 1. Visual Theme & Atmosphere

Galeria clara e silenciosa, em que o trabalho da loja é o assunto e a interface fica em segundo
plano. Fundo quase branco puxado para o rosado da logo, texto em ameixa em vez de preto, um único
vinho para estados ativos. Tipografia grotesca larga em caixa alta nos títulos grandes, contrastando
com rótulos pequenos. Muito espaço entre seções, grade justa entre as imagens, cantos arredondados
só onde há imagem ou botão. Densidade baixa: uma ideia por tela.

## 2. Color Palette & Roles

Todas as cores saem da logo (arquivo enviado pela loja).

| Nome | Hex | Papel |
|---|---|---|
| **Ameixa** | `#583A42` | Cor da moldura e do letreiro na logo. Todo o texto, linhas, botão principal, fundo do rodapé. |
| **Vinho** | `#6D2F30` | Quadrado da logo. Itálico do nome no hero, filtro ativo, hover de botão, seta e link, anel de foco, seleção de texto. |
| **Branco rosado** | `#F7F5F6` | Fundo da página. |
| **Ameixa suave** | `#6F5760` | Texto secundário (legendas, descrições). Contraste ≥ 4.5:1 sobre o fundo. |
| **Rosado** | `#C9B8BC` | Texto secundário sobre o rodapé ameixa. |
| **Rosa** | `#E9B7AD` | Hover de link sobre o rodapé ameixa. |
| **Linha** | `rgba(88, 58, 66, 0.2)` | Divisórias finas. Divisória forte usa ameixa sólido. |
| **Alerta** | `#C2410C` | Só a marca CONFIRMAR (dado pendente). Some quando o site for publicado de vez. |
| Blocos do wireframe | `#DED5D6`, `#D4C9CB`, `#E7E0E1`, `#D7CDCF` | Lugar das fotos. Saem quando as fotos entrarem. |

## 3. Typography Rules

Uma família só: **Archivo** variável (eixos de peso e largura), carregada local via Fontsource (woff2).

| Papel | Tamanho | Peso | Largura | Entrelinha | Caixa |
|---|---|---|---|---|---|
| Display (hero, título de página) | `clamp(3.6rem, 11.6vw, 12.5rem)` | 400 | 112% | 0.9 | alta |
| Título de seção | `clamp(2.2rem, 5.4vw, 5.6rem)` | 400 | 108% | 0.92 | alta |
| Texto grande (apresentação) | `clamp(1.35rem, 2.3vw, 2.15rem)` | 400 | 100% | 1.3 | normal |
| Corpo | 16px | 400 | 100% | 1.5 | normal |
| Título de projeto | 14px | 600 | 100% | 1.3 | normal |
| Legenda | 13px | 400 | 100% | 1.35 | normal |
| Rótulo, navegação, botão, link pequeno | 12px | 600 | 100% | 1.35 | alta, +0.03em |

Letter-spacing negativo (-0.035em a -0.045em) só nos tamanhos grandes. Títulos com
`text-wrap: balance`, parágrafos com `text-wrap: pretty`. Itálico 300 só em "Primma" no hero, porque
repete o letreiro manuscrito da logo; nenhum outro título usa itálico ou cor de destaque.

## 4. Component Stylings

- **Botão:** cápsula (raio 999px), 48px de altura, ameixa com texto claro; hover vinho; clique desce 1px.
  Variante clara (fundo da página, texto ameixa) só dentro do hero.
- **Link pequeno:** caixa alta 12px sublinhado; hover vinho. Sem seta no texto.
- **Projeto da galeria:** imagem com raio 14px na proporção 4:5 (grade) ou 5:4 (destaques), sem
  sombra e sem borda; título 14px semibold e tipo 13px abaixo. Imagem parada no hover.
- **Carrossel de tipos:** cartões 4:5 com raio 14px, nome centralizado embaixo; setas em círculo
  de 48px com contorno ameixa, hover vinho. Rolagem nativa com encaixe; o próximo cartão aparece
  cortado na borda.
- **Filtro da galeria:** botões de texto em caixa alta; ativo em vinho e sublinhado; a grade se
  reorganiza com GSAP Flip.
- **Navegação:** logo à esquerda, links centralizados, Instagram à direita. No celular, botão
  "Menu" abre tela cheia com os links em tamanho display.
- **Rodapé:** fundo ameixa, logo clara grande à esquerda, três colunas (páginas, redes, loja).
- **Marca CONFIRMAR:** borda tracejada laranja, 11px. Liga e desliga em `src/data/site.ts`.

## 5. Layout Principles

- Margem lateral `clamp(16px, 2.2vw, 32px)`; conteúdo limitado a 1680px (acima disso só a margem cresce).
- Espaço entre imagens `clamp(12px, 1.3vw, 20px)`; entre seções `clamp(96px, 12vw, 200px)`.
- Grades com `minmax(0, 1fr)`: 3 colunas (selecionados), 2 (destaques), 4 (galeria completa);
  caem para 2 e 1 no celular.
- Seções de texto alinhadas à esquerda; só o título do carrossel é centralizado.
- Hero: uma caixa com raio 14px na altura da tela, título e frase dentro, no pé da caixa.
- Movimento: só a entrada do título ao carregar e a reorganização do filtro. Nada anima com a
  rolagem. Com "reduzir movimento", tudo aparece parado.
- Alvos de toque com no mínimo 44px.

## 6. Notas para gerar telas novas

- Comece pelo trabalho: a imagem vem antes do texto, e o texto é curto.
- Use ameixa onde outro site usaria preto, e vinho só para "isso está ativo / você está aqui".
- Não use cartões com sombra, gradientes, ícones decorativos, contadores nem depoimentos.
- Não use numeração (01, 02) em listas que não são sequência.
- Novos títulos de seção: caixa alta larga, sem palavra em itálico ou colorida.
