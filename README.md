# Obra Primma Molduraria

Site da Obra Primma, molduraria em Ponta Grossa, PR. Portfólio com páginas de Sobre, Contato e Blog.
Nada de venda, carrinho ou preço.

Feito em [Astro](https://astro.build) (site estático), tipografia Archivo e GSAP nas animações
(entrada do título e filtro da galeria).

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Deploy na Vercel

Importe o repositório na Vercel. Ela reconhece Astro sozinha (build `npm run build`, saída `dist`).
Depois de registrar o domínio, troque `site` em `astro.config.mjs` e a linha do sitemap em
`public/robots.txt`.

## Dados da loja

Ficam em `src/data/site.ts`. WhatsApp e horário estão vazios: preencha e a linha aparece no site
(no bloco de endereço da home e na página Contato); vazios, não aparecem.

| Dado | Origem | Onde mexer |
|---|---|---|
| Endereço | Listas públicas trazem três versões: Rua José Bonifácio, 511, Órfãs (a mais repetida, usada no site), Rua Balduíno Taques, 1660, Centro, e Rua Amazonas, 193, Estrela. | `site.ts` |
| Telefone | (42) 3223-4602, de listas públicas. | `site.ts` |
| WhatsApp e horário | Vazios. | `site.ts` |
| Serviços | Página Sobre. Espelhos vem do nome da loja numa lista pública. | `src/pages/sobre.astro` |
| Categorias do portfólio e do carrossel | Provisórias. | `src/data/obras.ts`, `src/components/Carrossel.astro` |
| Domínio | `obraprimma.com.br` provisório. | `astro.config.mjs` |

## Logo e cores

A logo foi vetorizada a partir do arquivo enviado pela loja: `public/logo.svg` (colorida),
`public/logo-claro.svg` (para fundo escuro) e `public/favicon.svg` (só o símbolo).

| Cor | Hex | Onde |
|---|---|---|
| Ameixa | `#583A42` | moldura e letreiro da logo; texto, títulos, botões e rodapé |
| Vinho | `#6D2F30` | quadrado da logo; palavras em itálico, estados ativos e hover |
| Creme | `#F4F0EC` | fundo |

Os tokens ficam no começo de `src/styles/global.css`.

## Fotos provisórias

As imagens do site são fotos de bancos de imagem com licença aberta (CC BY e CC BY-SA, achadas pelo
Openverse, a maioria do Flickr), em `src/assets/provisorias/`. A licença pede crédito, que está na
página `/creditos/` (link no rodapé). Projeto sem foto aparece como bloco cinza.

Para trocar pelas fotos da loja:

1. Salve a foto em `src/assets/trabalhos/` (jpg, png ou webp).
2. Em `src/data/obras.ts`, troque o nome na lista `fotos` (ou em `imagem`) pelo nome do arquivo, sem
   extensão. O Astro gera WebP em vários tamanhos sozinho.
3. Hero, Sobre e carrossel usam o componente `Foto` com o nome do arquivo direto na página
   (`src/pages/index.astro`, `src/pages/sobre.astro`, `src/components/Carrossel.astro`); posts usam
   o campo `foto` no cabeçalho do Markdown.
4. Quando não sobrar nenhuma provisória, apague `src/assets/provisorias/`, `src/data/creditos.ts`,
   `src/pages/creditos.astro` e o link de créditos do rodapé.

## Blog

Os posts ficam em `src/content/blog/` em Markdown. Para um post novo, copie um dos existentes e
mude o cabeçalho (`titulo`, `descricao`, `data`, `quadro`). `rascunho: true` esconde o post.

Ideias de pauta para SEO local: "Onde emoldurar camisa de time em Ponta Grossa", "Quanto tempo leva
para fazer uma moldura", "Como pendurar quadro em parede de drywall", "Moldura para diploma e
certificado".

## Estrutura

```
src/
  data/site.ts        dados da loja (endereço, telefone, horário)
  data/obras.ts       projetos da galeria e categorias
  components/         Peca (item da galeria), Loja (endereço e mapa), cabeçalho e rodapé
  pages/              início, trabalhos, sobre, contato, blog
  content/blog/       posts
  scripts/entrada.ts  entrada do título (GSAP)
```

Animações: o título de cada página sobe de dentro de uma máscara ao carregar, e o filtro da página
Trabalhos reorganiza a grade com GSAP Flip. Nada anima com a rolagem. Com "reduzir movimento" ligado,
tudo aparece parado.
