# Tokens: Obra Primma

## Fonte
Archivo Variable (eixos wght 100 a 900, wdth 62 a 125), uma família só.

## Escala de texto
| Papel | Tamanho | Peso | Largura | Entrelinha | Tracking | Caixa |
|---|---|---|---|---|---|---|
| display | clamp(3.6rem, 11.6vw, 12.5rem) | 400 | 112% | 0.9 | -0.045em | alta |
| titulo | clamp(2.2rem, 5.4vw, 5.6rem) | 400 | 108% | 0.92 | -0.035em | alta |
| grande | clamp(1.35rem, 2.3vw, 2.15rem) | 400 | 100% | 1.3 | -0.015em | normal |
| corpo | 16px | 400 | 100% | 1.5 | 0 | normal |
| titulo-projeto | 14px | 600 | 100% | 1.3 | 0 | normal |
| legenda | 13px | 400 | 100% | 1.35 | 0 | normal |
| rotulo | 12px | 600 | 100% | 1.35 | 0.03em | alta |

## Cores
| Token | Hex | Papel |
|---|---|---|
| --ameixa | #583A42 | texto, linha forte, botão, rodapé |
| --vinho | #6D2F30 | ativo, hover, foco, seleção |
| --creme (bg) | #F7F5F6 | fundo |
| --mid | #6F5760 | texto secundário |
| --rosado | #C9B8BC | texto secundário sobre ameixa |
| --rosa | #E9B7AD | hover sobre ameixa |
| --line | rgba(88,58,66,.2) | divisória fina |
| --alerta | #C2410C | só a marca CONFIRMAR |

Só tema claro. Contrastes: ameixa/fundo 8.8:1, mid/fundo ≥ 4.5:1, fundo/ameixa (rodapé) 8.8:1.

## Espaço
Escala de 4px: 4, 8, 12, 16, 20, 24, 32, 48, 64, 96. Entre seções clamp(96px, 12vw, 200px). Margem lateral clamp(16px, 2.2vw, 32px). Conteúdo até 1680px.

## Raio
14px imagem · 999px botão e seta · 0 o resto.

## Elevação
Nenhuma sombra. Profundidade vem de cor de superfície (bloco de imagem, rodapé ameixa).

## Movimento
Entrada: expo.out 1.2s, linhas sobem da máscara, blocos abrem com clip-path. Filtro: GSAP Flip 0.6s expo.inOut. Hover: só cor, 0.2s. Reduzir movimento: tudo parado.

## Ícones
Só as duas setas do carrossel, SVG de traço 1.5px em ameixa. Nenhum outro ícone.
