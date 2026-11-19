// Dados da molduraria num lugar só. Campo vazio (WhatsApp, horário) não aparece no site.

export const site = {
  nome: 'Obra Primma',
  nomeCompleto: 'Obra Primma Molduraria',
  cidade: 'Ponta Grossa',
  uf: 'PR',

  // Três endereços aparecem em listas públicas: Rua José Bonifácio, 511 (Órfãs),
  // Rua Balduíno Taques, 1660 (Centro, CNPJ antigo baixado) e Rua Amazonas, 193 (Estrela).
  // O mais repetido é o da José Bonifácio.
  endereco: 'Rua José Bonifácio, 511, Órfãs',
  cep: '84015-450',

  telefone: '(42) 3223-4602',
  telefoneLink: 'tel:+554232234602',

  // Preencha os dois para a linha do WhatsApp aparecer.
  whatsapp: '', // ex.: (42) 99999-9999
  whatsappLink: '', // ex.: https://wa.me/5542999999999

  // Preencha para a linha do horário aparecer. Ex.: { dias: 'Segunda a sexta', horas: '8h às 18h' }
  horario: [] as { dias: string; horas: string }[],

  instagram: {
    usuario: '@obraprimma_molduras',
    url: 'https://www.instagram.com/obraprimma_molduras/',
  },
  facebook: { url: 'https://www.facebook.com/obraprimmamolduras/' },

  // Busca no Google Maps pelo nome da loja. Pode trocar pelo link "Incorporar mapa" do Google Maps.
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
