import type { ImageMetadata } from 'astro';

// SUBSTITUTAS. As imagens em src/assets/obras são obras em domínio público
// (Art Institute of Chicago, CC0) montadas numa moldura desenhada em CSS.
// Servem para o site ter corpo até chegarem as fotos dos trabalhos reais da loja.
// Para trocar: ponha a foto do quadro pronto em src/assets/trabalhos/ e preencha
// `foto` no item. Com `foto`, o componente mostra a foto como ela é, sem moldura desenhada.

const arquivos = import.meta.glob<{ default: ImageMetadata }>(
  ['../assets/obras/*.jpg', '../assets/trabalhos/*.{jpg,jpeg,png,webp}'],
  { eager: true },
);

export const img = (nome: string): ImageMetadata => {
  const achado = Object.entries(arquivos).find(([caminho]) =>
    caminho.split('/').pop()!.startsWith(nome + '.'),
  );
  if (!achado) throw new Error(`Imagem não encontrada: ${nome}`);
  return achado[1].default;
};

export type Moldura =
  | 'caixa-preta'
  | 'freijo'
  | 'nogueira'
  | 'dourada'
  | 'branca'
  | 'carvalho'
  | 'prata';

export type Passe = 'nenhum' | 'branco' | 'creme' | 'preto' | 'flutuante';

export const molduras: Record<Moldura, { nome: string; nota: string }> = {
  'caixa-preta': { nome: 'Caixa preta', nota: 'perfil reto, 2 cm' },
  freijo: { nome: 'Freijó natural', nota: 'madeira clara, veio aparente' },
  nogueira: { nome: 'Nogueira', nota: 'tom escuro, acabamento fosco' },
  dourada: { nome: 'Dourada clássica', nota: 'ouro velho com filete' },
  branca: { nome: 'Branca laqueada', nota: 'perfil fino' },
  carvalho: { nome: 'Carvalho claro', nota: 'perfil fino, cantos vivos' },
  prata: { nome: 'Prata envelhecida', nota: 'filete duplo' },
};

export type Categoria = 'pintura' | 'papel' | 'fotografia' | 'conjuntos';

// [CONFIRMAR] categorias montadas sem acesso ao Instagram da loja.
// Ajuste os nomes conforme o que eles mais fazem (ex.: camisas de time, espelhos, diplomas).
export const categorias: { id: Categoria; nome: string; texto: string }[] = [
  {
    id: 'pintura',
    nome: 'Reproduções de pintura',
    texto: 'Impressas aqui e montadas em tela ou em papel, com a moldura escolhida na parede de amostras.',
  },
  {
    id: 'papel',
    nome: 'Gravura, aquarela e papel',
    texto: 'Trabalho em papel pede passe-partout e vidro. A obra não encosta no vidro e o papel respira.',
  },
  {
    id: 'fotografia',
    nome: 'Fotografia',
    texto: 'Foto de família, de viagem, de casamento. A gente imprime a partir do arquivo ou da cópia em papel.',
  },
  {
    id: 'conjuntos',
    nome: 'Conjuntos para parede',
    texto: 'Duas ou três peças com a mesma moldura e o mesmo passe, pensadas para ficar juntas.',
  },
];

type Peca = {
  arte: string; // nome do arquivo em src/assets/obras (sem extensão)
  moldura: Moldura;
  passe: Passe;
};

export type Obra = {
  slug: string;
  categoria: Categoria;
  titulo: string;
  autor: string;
  suporte: string;
  formato?: 'retrato' | 'paisagem' | 'quadrado';
  pecas: Peca[];
  foto?: string; // foto real do trabalho pronto (src/assets/trabalhos)
  destaque?: boolean;
};

export const obras: Obra[] = [
  // Pintura
  {
    slug: 'flores-fantin-latour',
    categoria: 'pintura',
    titulo: 'Natureza-morta com flores',
    autor: 'Henri Fantin-Latour',
    suporte: 'Impressão em tela',
    pecas: [{ arte: 'flores-fantin-latour', moldura: 'dourada', passe: 'flutuante' }],
    destaque: true,
  },
  {
    slug: 'rua-de-paris-chuva',
    categoria: 'pintura',
    titulo: 'Rua de Paris, dia de chuva',
    autor: 'Gustave Caillebotte',
    suporte: 'Impressão em tela',
    pecas: [{ arte: 'rua-de-paris-chuva', moldura: 'caixa-preta', passe: 'flutuante' }],
    destaque: true,
  },
  {
    slug: 'medas-de-trigo',
    categoria: 'pintura',
    titulo: 'Medas de trigo, fim de verão',
    autor: 'Claude Monet',
    suporte: 'Impressão em tela',
    pecas: [{ arte: 'medas-de-trigo', moldura: 'freijo', passe: 'flutuante' }],
    destaque: true,
  },
  {
    slug: 'la-berceuse',
    categoria: 'pintura',
    titulo: 'La Berceuse',
    autor: 'Vincent van Gogh',
    suporte: 'Impressão em tela',
    pecas: [{ arte: 'la-berceuse', moldura: 'nogueira', passe: 'flutuante' }],
    destaque: true,
  },
  {
    slug: 'magnolias',
    categoria: 'pintura',
    titulo: 'Magnólias sobre veludo',
    autor: 'Martin Johnson Heade',
    suporte: 'Impressão em papel',
    pecas: [{ arte: 'magnolias', moldura: 'dourada', passe: 'creme' }],
    destaque: true,
  },
  {
    slug: 'falesia-pourville',
    categoria: 'pintura',
    titulo: 'Passeio na falésia',
    autor: 'Claude Monet',
    suporte: 'Impressão em tela',
    pecas: [{ arte: 'falesia-pourville', moldura: 'branca', passe: 'flutuante' }],
  },
  {
    slug: 'vaso-verde',
    categoria: 'pintura',
    titulo: 'Natureza-morta com vaso verde',
    autor: 'Paula Modersohn-Becker',
    suporte: 'Impressão em tela',
    pecas: [{ arte: 'vaso-verde', moldura: 'carvalho', passe: 'flutuante' }],
  },
  {
    slug: 'mar-renoir',
    categoria: 'pintura',
    titulo: 'Marinha',
    autor: 'Pierre-Auguste Renoir',
    suporte: 'Impressão em tela',
    pecas: [{ arte: 'mar-renoir', moldura: 'prata', passe: 'flutuante' }],
    destaque: true,
  },
  {
    slug: 'na-varanda',
    categoria: 'pintura',
    titulo: 'Na varanda',
    autor: 'Mary Cassatt',
    suporte: 'Impressão em tela',
    pecas: [{ arte: 'na-varanda', moldura: 'dourada', passe: 'flutuante' }],
  },
  {
    slug: 'margem-do-sena',
    categoria: 'pintura',
    titulo: 'Na margem do Sena',
    autor: 'Claude Monet',
    suporte: 'Impressão em tela',
    pecas: [{ arte: 'margem-do-sena', moldura: 'nogueira', passe: 'flutuante' }],
  },
  {
    slug: 'barcos-boudin',
    categoria: 'pintura',
    titulo: 'Marinha com barcos',
    autor: 'Eugène Boudin',
    suporte: 'Impressão em papel',
    pecas: [{ arte: 'barcos-boudin', moldura: 'carvalho', passe: 'branco' }],
  },
  {
    slug: 'rede-de-arenque',
    categoria: 'pintura',
    titulo: 'A rede',
    autor: 'Winslow Homer',
    suporte: 'Impressão em tela',
    pecas: [{ arte: 'rede-de-arenque', moldura: 'caixa-preta', passe: 'flutuante' }],
  },

  // Papel
  {
    slug: 'grous-na-neve',
    categoria: 'papel',
    titulo: 'Grous no pinheiro com neve',
    autor: 'Katsushika Hokusai',
    suporte: 'Impressão em papel',
    pecas: [{ arte: 'grous-na-neve', moldura: 'carvalho', passe: 'creme' }],
    destaque: true,
  },
  {
    slug: 'crisantemos-hokusai',
    categoria: 'papel',
    titulo: 'Crisântemos e mutuca',
    autor: 'Katsushika Hokusai',
    suporte: 'Impressão em papel',
    pecas: [{ arte: 'crisantemos-hokusai', moldura: 'caixa-preta', passe: 'branco' }],
  },
  {
    slug: 'a-carta',
    categoria: 'papel',
    titulo: 'A carta',
    autor: 'Mary Cassatt',
    suporte: 'Impressão em papel',
    pecas: [{ arte: 'a-carta', moldura: 'branca', passe: 'branco' }],
    destaque: true,
  },
  {
    slug: 'oumayagashi',
    categoria: 'papel',
    titulo: 'Oumayagashi',
    autor: 'Utagawa Hiroshige',
    suporte: 'Impressão em papel',
    pecas: [{ arte: 'oumayagashi', moldura: 'nogueira', passe: 'creme' }],
  },
  {
    slug: 'hamamatsu',
    categoria: 'papel',
    titulo: 'Hamamatsu',
    autor: 'Utagawa Hiroshige',
    suporte: 'Impressão em papel',
    pecas: [{ arte: 'hamamatsu', moldura: 'freijo', passe: 'creme' }],
  },
  {
    slug: 'corrente-do-golfo',
    categoria: 'papel',
    titulo: 'A Corrente do Golfo, aquarela',
    autor: 'Winslow Homer',
    suporte: 'Impressão em papel',
    pecas: [{ arte: 'corrente-do-golfo', moldura: 'branca', passe: 'branco' }],
  },
  {
    slug: 'sol-e-sombra',
    categoria: 'papel',
    titulo: 'Sol e sombra, aquarela',
    autor: 'Winslow Homer',
    suporte: 'Impressão em papel',
    pecas: [{ arte: 'sol-e-sombra', moldura: 'prata', passe: 'branco' }],
  },
  {
    slug: 'lembranca-da-italia',
    categoria: 'papel',
    titulo: 'Lembrança da Itália',
    autor: 'Camille Corot',
    suporte: 'Impressão em papel',
    pecas: [{ arte: 'lembranca-da-italia', moldura: 'dourada', passe: 'preto' }],
  },

  // Fotografia
  {
    slug: 'oliveira-nice',
    categoria: 'fotografia',
    titulo: 'Oliveira, Nice',
    autor: 'Eugène Atget',
    suporte: 'Impressão fotográfica',
    pecas: [{ arte: 'oliveira-nice', moldura: 'caixa-preta', passe: 'branco' }],
    destaque: true,
  },
  {
    slug: 'tocador-de-realejo',
    categoria: 'fotografia',
    titulo: 'Tocador de realejo',
    autor: 'Eugène Atget',
    suporte: 'Impressão fotográfica',
    pecas: [{ arte: 'tocador-de-realejo', moldura: 'nogueira', passe: 'creme' }],
  },
  {
    slug: 'porte-de-gentilly',
    categoria: 'fotografia',
    titulo: 'Porte de Gentilly',
    autor: 'Eugène Atget',
    suporte: 'Impressão fotográfica',
    pecas: [{ arte: 'porte-de-gentilly', moldura: 'carvalho', passe: 'branco' }],
  },
  {
    slug: 'cabare',
    categoria: 'fotografia',
    titulo: 'Fachada de cabaré',
    autor: 'Eugène Atget',
    suporte: 'Impressão fotográfica',
    pecas: [{ arte: 'cabare', moldura: 'caixa-preta', passe: 'preto' }],
  },

  // Conjuntos
  {
    slug: 'trio-neve',
    categoria: 'conjuntos',
    titulo: 'Três paisagens de neve',
    autor: 'Utagawa Hiroshige',
    suporte: 'Impressão em papel',
    pecas: [
      { arte: 'kanbara-neve', moldura: 'carvalho', passe: 'branco' },
      { arte: 'akabane-neve', moldura: 'carvalho', passe: 'branco' },
      { arte: 'mishima-neblina', moldura: 'carvalho', passe: 'branco' },
    ],
    destaque: true,
  },
  {
    slug: 'par-versalhes',
    categoria: 'conjuntos',
    titulo: 'Par de Versalhes',
    autor: 'Eugène Atget',
    suporte: 'Impressão fotográfica',
    pecas: [
      { arte: 'versalhes-parque', moldura: 'nogueira', passe: 'creme' },
      { arte: 'versalhes-vaso', moldura: 'nogueira', passe: 'creme' },
    ],
  },
];

export const obrasPorCategoria = (c: Categoria) => obras.filter((o) => o.categoria === c);
