// Catálogo do portfólio. Por enquanto é wireframe: cada projeto aparece como um bloco cinza.
// Quando as fotos chegarem, salve em src/assets/trabalhos/ e preencha `imagem` com o nome do arquivo
// sem extensão (ex.: 'retrato-familia'). Títulos e tipos também são provisórios.

export type Categoria = 'pintura' | 'fotografia' | 'papel' | 'objetos';

// [CONFIRMAR] categorias definidas sem acesso ao Instagram da loja.
export const categorias: { id: Categoria; nome: string }[] = [
  { id: 'pintura', nome: 'Pintura' },
  { id: 'fotografia', nome: 'Fotografia' },
  { id: 'papel', nome: 'Gravura e papel' },
  { id: 'objetos', nome: 'Objetos' },
];

export type Obra = {
  slug: string;
  titulo: string;
  categoria: Categoria;
  tipo: string;
  imagem?: string;
};

const tipos: Record<Categoria, string> = {
  pintura: 'Reprodução em tela',
  fotografia: 'Impressão fotográfica',
  papel: 'Papel com passe-partout',
  objetos: 'Caixa para objeto',
};

const ordem: Categoria[] = [
  'pintura', 'fotografia', 'papel', 'pintura', 'objetos', 'fotografia',
  'papel', 'pintura', 'fotografia', 'pintura', 'papel', 'objetos',
  'fotografia', 'pintura', 'papel', 'fotografia', 'pintura', 'objetos',
  'papel', 'fotografia', 'pintura', 'papel', 'pintura', 'fotografia',
];

export const obras: Obra[] = ordem.map((categoria, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { slug: `projeto-${n}`, titulo: `Projeto ${n}`, categoria, tipo: tipos[categoria] };
});

export const total = String(obras.length).padStart(2, '0');
export const contaCategoria = (c: Categoria) => obras.filter((o) => o.categoria === c).length;
