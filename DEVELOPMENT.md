# Guia de Desenvolvimento - SafeJourney

## 🚀 Começando

### Instalação Inicial

```bash
# Clone o repositório
git clone https://github.com/rossiterr/safe-journey.git
cd safe-journey

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

## 📂 Estrutura de Arquivos

```
safe-journey/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Layout raiz com Header/Footer
│   │   ├── page.tsx           # Página inicial
│   │   ├── globals.css        # Estilos globais + Tailwind
│   │   ├── about/             # Rota /about
│   │   ├── agencies/          # Rota /agencies
│   │   │   ├── page.tsx      # Listagem
│   │   │   └── [id]/         # Rota dinâmica
│   │   │       └── page.tsx  # Detalhes
│   │   └── contact/          # Rota /contact
│   ├── components/
│   │   ├── layout/           # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/             # Componentes da home
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Stats.tsx
│   │   │   └── CTA.tsx
│   │   ├── agencies/         # Componentes de agências
│   │   │   ├── AgencyList.tsx
│   │   │   ├── AgencyCard.tsx
│   │   │   └── AgencyFilters.tsx
│   │   └── agency-detail/    # Componentes de detalhes
│   │       ├── AgencyHeader.tsx
│   │       ├── AgencyInfo.tsx
│   │       ├── SafetyFeatures.tsx
│   │       ├── ReviewsSection.tsx
│   │       └── ContactSection.tsx
│   ├── data/
│   │   └── mockData.ts       # Dados de exemplo
│   └── types/
│       └── index.ts          # TypeScript interfaces
├── public/                    # Arquivos estáticos
├── tailwind.config.ts        # Config Tailwind
├── tsconfig.json             # Config TypeScript
├── next.config.js            # Config Next.js
├── package.json              # Dependências
├── README.md                 # Documentação principal
├── DATA_STRUCTURE.md         # Estrutura de dados
└── STYLE_GUIDE.md           # Guia de estilos
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev        # Inicia servidor dev na porta 3000

# Build
npm run build      # Cria build otimizado
npm run start      # Executa build de produção

# Qualidade de Código
npm run lint       # Roda ESLint
```

## 🎯 Como Adicionar Novas Features

### 1. Nova Página

```bash
# Crie uma nova pasta em src/app/
src/app/nova-pagina/page.tsx
```

```tsx
// src/app/nova-pagina/page.tsx
export const metadata = {
  title: 'Título da Página | SafeJourney',
  description: 'Descrição para SEO',
};

export default function NovaPaginaPage() {
  return (
    <div>
      <h1>Nova Página</h1>
    </div>
  );
}
```

### 2. Novo Componente

```tsx
// src/components/categoria/NomeComponente.tsx
interface NomeComponenteProps {
  prop1: string;
  prop2?: number;
}

export default function NomeComponente({ prop1, prop2 }: NomeComponenteProps) {
  return (
    <div className="card p-6">
      {/* Seu componente */}
    </div>
  );
}
```

### 3. Novo Tipo TypeScript

```typescript
// src/types/index.ts
export interface NovoTipo {
  id: string;
  nome: string;
  // ...outros campos
}
```

### 4. Novos Dados Mock

```typescript
// src/data/mockData.ts
export const novosDados: NovoTipo[] = [
  {
    id: '1',
    nome: 'Exemplo',
    // ...
  },
];
```

## 🎨 Usando o Sistema de Design

### Cores

```tsx
// Classes do Tailwind
className="bg-primary text-white"
className="bg-secondary hover:bg-secondary-dark"
className="text-accent border-accent"
```

### Componentes Pré-construídos

```tsx
// Botão Primário
<button className="btn-primary">Click</button>

// Card
<div className="card p-6">Conteúdo</div>

// Container
<div className="container-custom">Conteúdo centralizado</div>
```

## 🔄 Client vs Server Components

### Server Components (padrão)
- Renderizados no servidor
- Sem interatividade
- Melhor SEO
- Menor bundle JavaScript

```tsx
// Não precisa de 'use client'
export default function ServerComponent() {
  return <div>Conteúdo estático</div>;
}
```

### Client Components
- Precisam de interatividade (useState, onClick, etc.)
- Adicione `'use client'` no topo

```tsx
'use client';

import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## 🛣️ Roteamento

### Rotas Estáticas
```
src/app/about/page.tsx → /about
src/app/contact/page.tsx → /contact
```

### Rotas Dinâmicas
```
src/app/agencies/[id]/page.tsx → /agencies/1, /agencies/2, etc.
```

```tsx
// Acessando parâmetros
export default function Page({ params }: { params: { id: string } }) {
  return <div>ID: {params.id}</div>;
}
```

### Navegação

```tsx
import Link from 'next/link';

<Link href="/agencies">Ir para Agências</Link>
```

## 📱 Responsividade

### Breakpoints do Tailwind

```tsx
<div className="
  grid 
  grid-cols-1      // Mobile: 1 coluna
  md:grid-cols-2   // Tablet: 2 colunas
  lg:grid-cols-4   // Desktop: 4 colunas
  gap-8
">
  {/* Conteúdo */}
</div>
```

### Visibilidade Condicional

```tsx
<div className="
  hidden           // Oculto em mobile
  md:block         // Visível em tablet+
">
  Desktop only
</div>

<div className="
  block            // Visível em mobile
  md:hidden        // Oculto em tablet+
">
  Mobile only
</div>
```

## 🎯 Boas Práticas

### 1. Componentes Pequenos e Reutilizáveis
✅ **Bom:**
```tsx
// components/ui/Badge.tsx
export function Badge({ children, variant }) {
  return <span className={`badge-${variant}`}>{children}</span>;
}
```

❌ **Ruim:**
```tsx
// Componente gigante com 500 linhas
```

### 2. Props com TypeScript
✅ **Bom:**
```tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ text, onClick, variant = 'primary' }: ButtonProps) {
  // ...
}
```

### 3. Nomes Descritivos
✅ **Bom:**
```tsx
const [isModalOpen, setIsModalOpen] = useState(false);
const handleSubmitForm = () => { };
```

❌ **Ruim:**
```tsx
const [x, setX] = useState(false);
const fn = () => { };
```

### 4. Imports Organizados
```tsx
// 1. React & Next.js
import { useState } from 'react';
import Link from 'next/link';

// 2. Bibliotecas externas
import { Star, Shield } from 'lucide-react';

// 3. Imports locais
import { Agency } from '@/types';
import { mockAgencies } from '@/data/mockData';
import AgencyCard from '@/components/agencies/AgencyCard';
```

### 5. Acessibilidade
```tsx
// Sempre adicione alt em imagens
<img src="/logo.png" alt="SafeJourney Logo" />

// Use labels em inputs
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Botões descritivos
<button aria-label="Fechar modal">×</button>
```

## 🐛 Debug e Troubleshooting

### Erros Comuns

#### 1. "Cannot find module"
```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

#### 2. "Hydration mismatch"
- Causa: Diferença entre servidor e cliente
- Solução: Use `'use client'` ou useEffect para conteúdo dinâmico

#### 3. Estilos não aplicados
```bash
# Reinicie o servidor dev
# Ctrl+C e depois
npm run dev
```

## 📊 Performance

### Otimização de Imagens
```tsx
import Image from 'next/image';

<Image 
  src="/photo.jpg" 
  alt="Description"
  width={500}
  height={300}
  priority // Para imagens above the fold
/>
```

### Lazy Loading
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Carregando...</p>,
});
```

## 🧪 Testes (Para implementar)

```bash
# Instalar dependências de teste
npm install -D @testing-library/react @testing-library/jest-dom jest

# Criar teste
# __tests__/components/Button.test.tsx
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instale a CLI
npm install -g vercel

# Deploy
vercel
```

### Build Manual
```bash
npm run build
npm run start
```

## 📝 Commits Semânticos

```bash
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: formata código
refactor: refatora código
test: adiciona testes
chore: tarefas de manutenção
```

Exemplos:
```bash
git commit -m "feat: adiciona filtro por país na página de agências"
git commit -m "fix: corrige bug no formulário de contato"
git commit -m "docs: atualiza README com instruções de instalação"
```

## 🔐 Variáveis de Ambiente (Futuro)

Crie `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.safejourney.com
DATABASE_URL=postgresql://...
SECRET_KEY=...
```

Uso:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 📚 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev/)
- [React Docs](https://react.dev/)

## 🆘 Precisa de Ajuda?

1. Consulte a documentação
2. Verifique issues no GitHub
3. Entre em contato: contato@safejourney.com

---

**Happy Coding! 💜**
