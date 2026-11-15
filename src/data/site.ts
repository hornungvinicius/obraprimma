// Dados da molduraria num lugar só. Tudo que tem `confirmado: false`
// aparece no site com a marca CONFIRMAR até alguém da loja checar.
// Quando confirmar, troque o valor e mude para `confirmado: true`.

export type Dado<T = string> = { valor: T; confirmado: boolean };

export const site = {
  nome: 'Obra Primma',
  nomeCompleto: 'Obra Primma Molduraria',
  cidade: 'Ponta Grossa',
  uf: 'PR',

  // Mostrar as marcas CONFIRMAR na página. Desligue antes de publicar de vez.
  mostrarConfirmar: true,

  // Três endereços aparecem em listas públicas: Rua José Bonifácio, 511 (Órfãs),
  // Rua Balduíno Taques, 1660 (Centro, CNPJ antigo baixado) e Rua Amazonas, 193 (Estrela).
  // O mais repetido é o da José Bonifácio. Ver README.
  endereco: {
    valor: 'Rua José Bonifácio, 511, Órfãs',
    confirmado: false,
  } as Dado,
  cep: { valor: '84015-450', confirmado: false } as Dado,

  telefone: { valor: '(42) 3223-4602', confirmado: false } as Dado,
  telefoneLink: 'tel:+554232234602',

  // Sem número de WhatsApp público encontrado.
  whatsapp: { valor: '', confirmado: false } as Dado,
  whatsappLink: '', // ex.: https://wa.me/5542999999999

  horario: {
    valor: [] as { dias: string; horas: string }[],
    confirmado: false,
  },

  instagram: {
    usuario: '@obraprimma_molduras',
    url: 'https://www.instagram.com/obraprimma_molduras/',
  },
  facebook: { url: 'https://www.facebook.com/obraprimmamolduras/' },

  // Busca no Google Maps pelo nome da loja. Troque pelo link "Incorporar mapa"
  // do Google Maps quando o endereço estiver confirmado.
  mapaEmbed:
    'https://www.google.com/maps?q=Obra+Primma+Molduraria+Ponta+Grossa+PR&output=embed',
  mapaLink:
    'https://www.google.com/maps/search/?api=1&query=Obra+Primma+Molduraria+Ponta+Grossa',
};

export const nav = [
  { href: '/trabalhos/', label: 'Trabalhos' },
  { href: '/sobre/', label: 'Sobre' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contato/', label: 'Contato' },
];
