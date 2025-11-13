import { Agency } from '@/types';

export const mockAgencies: Agency[] = [
  {
    id: '1',
    name: 'Global Education Experience',
    description: 'Especializada em intercâmbio acadêmico para mulheres, com foco em segurança e acompanhamento personalizado.',
    safetyRating: 5,
    hasBeltaSeal: true,
    rating: 4.8,
    reviewCount: 234,
    countries: ['Canadá', 'Austrália', 'Nova Zelândia', 'Irlanda'],
    programs: ['Estudo e Trabalho', 'High School', 'Ensino Superior', 'Curso de Idiomas'],
    safetyFeatures: [
      'Acomodação em residências femininas',
      'Acompanhamento 24/7 durante a viagem',
      'Rede de apoio local de mentoras',
      'Seguro saúde especializado',
      'Workshop de segurança pré-embarque'
    ],
    contact: {
      email: 'contato@globaleducation.com.br',
      phone: '(11) 98765-4321',
      website: 'https://globaleducation.com.br'
    },
    address: {
      city: 'São Paulo',
      state: 'SP'
    }
  },
  {
    id: '2',
    name: 'Women\'s Journey Abroad',
    description: 'Agência pioneira em intercâmbio exclusivo para mulheres, com mais de 15 anos de experiência.',
    safetyRating: 5,
    hasBeltaSeal: true,
    rating: 4.9,
    reviewCount: 456,
    countries: ['Inglaterra', 'Malta', 'Portugal', 'Espanha'],
    programs: ['Estudo e Trabalho', 'Au Pair', 'Curso de Idiomas', 'Intercâmbio Cultural'],
    safetyFeatures: [
      'Grupos exclusivos femininos',
      'Parceria com acomodações seguras',
      'App de emergência 24h',
      'Orientação sobre segurança local',
      'Comunidade de intercambistas mulheres'
    ],
    contact: {
      email: 'hello@womensjourney.com.br',
      phone: '(21) 97654-3210',
      website: 'https://womensjourney.com.br'
    },
    address: {
      city: 'Rio de Janeiro',
      state: 'RJ'
    }
  },
  {
    id: '3',
    name: 'Safe Horizons International',
    description: 'Comprometidos com experiências internacionais seguras e enriquecedoras para mulheres de todas as idades.',
    safetyRating: 4,
    hasBeltaSeal: true,
    rating: 4.7,
    reviewCount: 189,
    countries: ['Estados Unidos', 'França', 'Alemanha', 'Itália'],
    programs: ['Ensino Superior', 'Pós-Graduação', 'MBA', 'Curso de Idiomas'],
    safetyFeatures: [
      'Assessoria jurídica especializada',
      'Seguro viagem completo',
      'Rede de contatos de emergência',
      'Acompanhamento psicológico remoto'
    ],
    contact: {
      email: 'info@safehorizons.com.br',
      phone: '(11) 96543-2109',
      website: 'https://safehorizons.com.br'
    },
    address: {
      city: 'Belo Horizonte',
      state: 'MG'
    }
  },
  {
    id: '4',
    name: 'She Travels Study',
    description: 'Acreditamos que toda mulher merece realizar seu sonho de estudar no exterior com total segurança.',
    safetyRating: 5,
    hasBeltaSeal: true,
    rating: 4.9,
    reviewCount: 312,
    countries: ['Canadá', 'Inglaterra', 'Austrália', 'África do Sul'],
    programs: ['Estudo e Trabalho', 'Voluntariado', 'Curso de Idiomas', 'Gap Year'],
    safetyFeatures: [
      'Programa de mentoria feminina',
      'Acomodações verificadas e seguras',
      'Suporte 24/7 em português',
      'Workshops sobre cultura e segurança',
      'Comunidade online ativa'
    ],
    contact: {
      email: 'contato@shetravelsstudy.com.br',
      phone: '(41) 95432-1098',
      website: 'https://shetravelsstudy.com.br'
    },
    address: {
      city: 'Curitiba',
      state: 'PR'
    }
  },
  {
    id: '5',
    name: 'Bright Future Education',
    description: 'Transformando sonhos em realidade através de programas de intercâmbio seguros e personalizados.',
    safetyRating: 4,
    hasBeltaSeal: false,
    rating: 4.6,
    reviewCount: 145,
    countries: ['Nova Zelândia', 'Irlanda', 'Malta', 'Dubai'],
    programs: ['Estudo e Trabalho', 'Curso de Idiomas', 'Intercâmbio Profissional'],
    safetyFeatures: [
      'Parceria com escolas renomadas',
      'Seguro saúde internacional',
      'Suporte local nos destinos',
      'Orientação pré-embarque'
    ],
    contact: {
      email: 'info@brightfuture.com.br',
      phone: '(51) 94321-0987',
      website: 'https://brightfuture.com.br'
    },
    address: {
      city: 'Porto Alegre',
      state: 'RS'
    }
  },
  {
    id: '6',
    name: 'Empowered Exchange',
    description: 'Empoderando mulheres através de experiências educacionais internacionais seguras e transformadoras.',
    safetyRating: 5,
    hasBeltaSeal: true,
    rating: 4.8,
    reviewCount: 267,
    countries: ['Canadá', 'Estados Unidos', 'Inglaterra', 'Austrália'],
    programs: ['High School', 'Ensino Superior', 'Pós-Graduação', 'Estudo e Trabalho'],
    safetyFeatures: [
      'Famílias anfitriãs selecionadas',
      'Check-ins regulares com a família',
      'App de rastreamento opcional',
      'Rede de suporte psicológico',
      'Comunidade de ex-intercambistas'
    ],
    contact: {
      email: 'hello@empoweredexchange.com.br',
      phone: '(85) 93210-9876',
      website: 'https://empoweredexchange.com.br'
    },
    address: {
      city: 'Fortaleza',
      state: 'CE'
    }
  }
];
