# Platform mapping: Obra Primma

## Fonte
```bash
npm install @fontsource-variable/archivo
```
```css
@import '@fontsource-variable/archivo/wdth.css';
@import '@fontsource-variable/archivo/wdth-italic.css';
```
Use `font-stretch` (não `font-variation-settings`) para a largura e `font-weight` para o peso.

## HTML/CSS (Astro)
```css
:root {
  --ameixa: #583a42;
  --vinho: #6d2f30;
  --creme: #f7f5f6;
  --mid: #6f5760;
  --rosado: #c9b8bc;
  --rosa: #e9b7ad;
  --line: rgba(88, 58, 66, 0.2);
  --bg: var(--creme);
  --ink: var(--ameixa);
  --fonte: 'Archivo Variable', 'Helvetica Neue', Arial, sans-serif;
  --t-rotulo: 12px;
  --t-legenda: 13px;
  --t-corpo: 16px;
  --g: clamp(16px, 2.2vw, 32px);
  --gap: clamp(12px, 1.3vw, 20px);
  --raio: 14px;
  --largura: 1680px;
}
html, body { overflow-x: clip; }
.pag { padding-inline: max(var(--g), calc((100% - var(--largura)) / 2)); }
```
A fonte completa dos tokens está em `src/styles/global.css` do repositório.

## Imagens
Fotos em `src/assets/trabalhos/`, renderizadas com `<Image>` de `astro:assets` (webp, srcset 400/800/1200).
