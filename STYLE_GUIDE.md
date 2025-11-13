# Guia de Estilos - SafeJourney

## 🎨 Paleta de Cores

### Cores Principais

```css
/* Azul Principal - Confiança e Profissionalismo */
--primary: #4A6FA5
--primary-light: #6B8DC4
--primary-dark: #2E4A6F

/* Verde Secundário - Crescimento e Esperança */
--secondary: #78B892
--secondary-light: #9BCFAB
--secondary-dark: #5A9973

/* Dourado Accent - Excelência e Qualidade */
--accent: #C5A572
--accent-light: #D4B98F
--accent-dark: #A68755
```

### Cores Neutras

```css
--neutral-50: #F9FAFB
--neutral-100: #F3F4F6
--neutral-200: #E5E7EB
--neutral-300: #D1D5DB
--neutral-400: #9CA3AF
--neutral-500: #6B7280
--neutral-600: #4B5563
--neutral-700: #374151
--neutral-800: #1F2937
--neutral-900: #111827
```

## 📐 Tipografia

### Font Family
- **Principal**: Inter (importada do Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif

### Tamanhos

```css
/* Headings */
h1: 2.5rem - 3.75rem (40px - 60px)
h2: 1.875rem - 2.25rem (30px - 36px)
h3: 1.5rem (24px)

/* Body */
text-base: 1rem (16px)
text-lg: 1.125rem (18px)
text-xl: 1.25rem (20px)

/* Small */
text-sm: 0.875rem (14px)
text-xs: 0.75rem (12px)
```

## 🧩 Componentes Reutilizáveis

### Botões

#### Primário
```tsx
<button className="btn-primary">
  Texto do Botão
</button>
```
- Fundo azul principal
- Texto branco
- Hover com sombra aumentada
- Padding: 12px 24px

#### Secundário
```tsx
<button className="btn-secondary">
  Texto do Botão
</button>
```
- Fundo verde secundário
- Texto branco
- Mesmas características do primário

#### Outline
```tsx
<button className="btn-outline">
  Texto do Botão
</button>
```
- Borda azul principal
- Texto azul principal
- Hover: fundo azul, texto branco

### Cards

```tsx
<div className="card p-6">
  Conteúdo do card
</div>
```
- Fundo branco
- Borda sutil
- Shadow no hover
- Border radius: 12px

### Container

```tsx
<div className="container-custom">
  Conteúdo centralizado
</div>
```
- Max-width: 1280px
- Padding responsivo
- Centralizado

## 🎯 Badges e Tags

### Selo Belta
```tsx
<div className="flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
  <Award size={16} />
  <span>Selo Belta</span>
</div>
```

### Classificação de Segurança
```tsx
<div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-lg">
  <Shield className="text-primary" size={18} />
  <span className="font-bold text-primary">5.0</span>
</div>
```

### Rating com Estrelas
```tsx
<div className="flex items-center gap-1">
  <Star className="fill-accent text-accent" size={18} />
  <span className="font-bold">4.8</span>
</div>
```

## 📱 Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large */
```

### Exemplo de Uso
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Mobile: 1 coluna, Tablet: 2 colunas, Desktop: 4 colunas */}
</div>
```

## 🎭 Animações e Transições

### Hover Scale
```tsx
<div className="hover:scale-105 transition-transform duration-200">
  Elemento com zoom no hover
</div>
```

### Smooth Transitions
```tsx
<button className="transition-all duration-200 hover:shadow-lg">
  Botão com transição suave
</button>
```

### Gradientes

#### Background Gradients
```tsx
{/* Azul para Verde */}
<div className="bg-gradient-to-r from-primary to-secondary">
  Conteúdo
</div>

{/* Com opacidade */}
<div className="bg-gradient-to-br from-primary/10 to-secondary/10">
  Conteúdo
</div>
```

#### Text Gradients
```tsx
<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
  Texto com gradiente
</span>
```

## 🖼️ Ícones

Usando **Lucide React** para ícones consistentes:

```tsx
import { Shield, Star, Globe, Users } from 'lucide-react';

<Shield className="text-primary" size={20} />
<Star className="fill-accent text-accent" size={18} />
```

### Ícones Comuns
- `Shield` - Segurança
- `Star` - Avaliações
- `Award` - Certificações
- `Globe` - Internacional
- `Users` - Comunidade
- `CheckCircle` - Confirmação
- `Mail` - Email
- `Phone` - Telefone
- `MapPin` - Localização
- `Search` - Busca
- `Filter` - Filtros
- `ArrowRight` - Navegação

## 📋 Forms

### Input Text
```tsx
<input
  type="text"
  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
  placeholder="Digite aqui..."
/>
```

### Select
```tsx
<select className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
  <option>Opção 1</option>
  <option>Opção 2</option>
</select>
```

### Checkbox
```tsx
<input
  type="checkbox"
  className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
/>
```

## 🌈 Estados de Componentes

### Loading
```tsx
<div className="animate-pulse bg-neutral-200 rounded h-4 w-full"></div>
```

### Empty State
```tsx
<div className="card p-12 text-center">
  <p className="text-neutral-600 text-lg">Nenhum resultado encontrado</p>
</div>
```

### Error State
```tsx
<div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
  Mensagem de erro
</div>
```

### Success State
```tsx
<div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
  Operação realizada com sucesso!
</div>
```

## 🎪 Seções de Página

### Hero Section
```tsx
<section className="bg-gradient-to-r from-primary to-secondary py-20">
  <div className="container-custom">
    {/* Conteúdo */}
  </div>
</section>
```

### Content Section
```tsx
<section className="py-20 bg-white">
  <div className="container-custom">
    {/* Conteúdo */}
  </div>
</section>
```

### Alternating Background
```tsx
<section className="py-20 bg-neutral-50">
  {/* Seção com fundo alternado */}
</section>
```

## 💡 Boas Práticas

1. **Mobile First**: Sempre desenvolva pensando primeiro em mobile
2. **Consistência**: Use as classes utilitárias do Tailwind
3. **Acessibilidade**: Sempre adicione labels, alt text e aria-labels
4. **Performance**: Use Next.js Image para otimização de imagens
5. **Semântica**: Use tags HTML semânticas (section, article, nav, etc.)
6. **Responsividade**: Teste em diferentes tamanhos de tela

## 🔧 Customização

Para customizar a paleta de cores, edite o arquivo `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#SuaCor',
    light: '#SuaCorClara',
    dark: '#SuaCorEscura',
  },
}
```

Para adicionar novos componentes globais, edite `src/app/globals.css`:

```css
@layer components {
  .seu-componente {
    @apply classes-tailwind;
  }
}
```
