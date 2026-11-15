# Obra Primma Molduraria

Site da Obra Primma, molduraria em Ponta Grossa, PR. Portfólio com páginas de Sobre, Contato e Blog.
Nada de venda, carrinho ou preço.

Feito em [Astro](https://astro.build) (site estático) com GSAP para as animações.

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

## O que falta confirmar com a loja

Tudo que não foi confirmado aparece no site com a marca **CONFIRMAR**. Os dados ficam em
`src/data/site.ts`: troque o valor, mude `confirmado` para `true` e a marca some. Para esconder
todas de uma vez, `mostrarConfirmar: false`.

| Dado | O que encontrei | Onde mexer |
|---|---|---|
| Endereço | Três versões em listas públicas: **Rua José Bonifácio, 511, Órfãs** (a mais repetida, CEP 84015-450), Rua Balduíno Taques, 1660, Centro (CNPJ 03.289.937/0001-17, situação *baixada*) e Rua Amazonas, 193, Estrela (só no Moovit). | `site.ts` |
| Telefone | (42) 3223-4602, em várias listas. | `site.ts` |
| WhatsApp | Nenhum número público. | `site.ts` |
| Horário | Não encontrado. | `site.ts` |
| Ano de abertura e história | Não encontrado. O texto da página Sobre tem as lacunas marcadas. | `src/pages/sobre.astro` |
| Serviços | Impressão + moldura (confirmado por vocês). Espelhos aparece no nome da loja em uma lista pública. No Google Maps a loja aparece como "Obra Primma Molduras e Quadros Fine Art". | `src/pages/sobre.astro` |
| Categorias do portfólio | Montadas sem acesso ao Instagram. Ajustar ao que a loja mais faz (camisa de time, diploma, espelho etc.). | `src/data/obras.ts` |
| Logo | Não encontrado. O site usa o nome escrito em Libre Caslon. | `src/components/Cabecalho.astro` |
| Domínio | Placeholder `obraprimma.com.br`. | `astro.config.mjs` |

## Imagens provisórias

O Instagram e o Facebook bloquearam o acesso automático, então **nenhuma foto do site é trabalho da
loja**. Até chegarem as fotos reais:

- As obras são pinturas, gravuras e fotos em domínio público do Art Institute of Chicago (CC0),
  em `src/assets/obras/`. A moldura e o passe-partout em volta delas são desenhados em CSS
  (`src/components/Quadro.astro`), com sete perfis: caixa preta, freijó, nogueira, dourada, branca,
  carvalho e prata.
- A foto do canto de nogueira na página Sobre é de Art Graphics, CC BY-SA 4.0, via Wikimedia Commons.

### Como trocar pelas fotos reais

1. Ponha a foto do quadro pronto em `src/assets/trabalhos/` (jpg, png ou webp).
2. Em `src/data/obras.ts`, no item correspondente, preencha `foto: 'nome-do-arquivo'` (sem extensão)
   e ajuste título, autor, suporte e moldura. Com `foto`, o site mostra a foto como ela é, sem a
   moldura desenhada.
3. Quando todas forem reais, tire a linha de créditos provisórios do rodapé
   (`src/components/Rodape.astro`).

Fotos que fariam mais diferença: a parede de amostras, a bancada, mãos cortando ou montando uma
moldura, a fachada e umas 20 peças prontas fotografadas de frente, com luz de janela.

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
  data/obras.ts       catálogo do portfólio e categorias
  components/         Quadro (moldura em CSS), Trabalho, Montagem, Visita, cabeçalho e rodapé
  pages/              início, trabalhos, sobre, contato, blog
  content/blog/       posts
  scripts/entrada.ts  animação de entrada (GSAP)
```

A única animação ligada à rolagem é a seção "Como um quadro é montado" na home, em que a impressão
sai, o passe-partout entra e a moldura fecha nos cantos. Com "reduzir movimento" ligado no sistema,
tudo aparece parado.
