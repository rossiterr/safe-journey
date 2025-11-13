# 🌍 SafeJourney - Intercâmbio Seguro para Mulheres

<div align="center">

![SafeJourney Logo](./logo.png)

**Plataforma web especializada em conectar mulheres com agências de intercâmbio confiáveis e seguras.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

</div>

---

## 📋 Sobre o Projeto

O **SafeJourney** é uma plataforma inovadora que auxilia mulheres a encontrarem agências de intercâmbio com foco em segurança e qualidade. Nossa missão é facilitar a busca por programas internacionais confiáveis, fornecendo:

- ✅ **Classificação de Segurança**: Sistema exclusivo de avaliação focado em proteção para mulheres
- 🏅 **Selo Belta**: Destaque para agências certificadas
- 💬 **Avaliações Reais**: Depoimentos de outras mulheres intercambistas
- 🛡️ **Diferenciais de Segurança**: Informações claras sobre medidas de proteção oferecidas
- 🌐 **Diversos Destinos**: Centenas de programas em mais de 50 países

---

## 🎨 Design

A paleta de cores foi cuidadosamente escolhida para transmitir confiança, segurança e tranquilidade:

- **Azul Principal** (#4A6FA5): Confiança e profissionalismo
- **Verde Secundário** (#78B892): Crescimento e esperança
- **Dourado Accent** (#C5A572): Excelência e qualidade

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as melhores práticas de frontend moderno:

- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática e segurança de código
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utilitária e responsiva
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e consistentes

---

## 📁 Estrutura do Projeto

```
safe-journey/
├── src/
│   ├── app/                      # App Router (Next.js 14)
│   │   ├── about/               # Página Sobre Nós
│   │   ├── agencies/            # Listagem de Agências
│   │   │   └── [id]/           # Detalhes da Agência
│   │   ├── contact/            # Página de Contato
│   │   ├── layout.tsx          # Layout Global
│   │   ├── page.tsx            # Home Page
│   │   └── globals.css         # Estilos Globais
│   ├── components/              # Componentes React
│   │   ├── layout/             # Header e Footer
│   │   ├── home/               # Componentes da Home
│   │   ├── agencies/           # Componentes de Agências
│   │   └── agency-detail/      # Componentes de Detalhes
│   ├── data/                    # Dados mockados
│   │   └── mockData.ts         # Agências de exemplo
│   └── types/                   # TypeScript Types
│       └── index.ts            # Interfaces e Types
├── public/                      # Arquivos estáticos
├── tailwind.config.ts          # Configuração Tailwind
├── tsconfig.json               # Configuração TypeScript
└── package.json                # Dependências
```

---

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/rossiterr/safe-journey.git
   cd safe-journey
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

---

## 📄 Páginas Disponíveis

### 🏠 Home (`/`)
- Hero section inspirador
- Seção de features e benefícios
- Como funciona (4 passos)
- Estatísticas de confiança
- Call-to-action

### 🏢 Agências (`/agencies`)
- Listagem completa de agências
- Filtros por país, programa e segurança
- Busca em tempo real
- Cards informativos com classificação

### 📋 Detalhes da Agência (`/agencies/[id]`)
- Informações completas da agência
- Diferenciais de segurança destacados
- Avaliações e depoimentos
- Seção de contato
- Programas e países disponíveis
---

## 🎯 Funcionalidades Principais

### Sistema de Classificação de Segurança
Cada agência recebe uma classificação de 1 a 5 baseada em:
- Certificações (Selo Belta)
- Medidas de proteção específicas para mulheres
- Acomodações seguras
- Suporte 24/7
- Avaliações de usuárias

### Filtros Avançados
- Por país de destino
- Tipo de programa (Estudo e Trabalho, High School, etc.)
- Classificação de segurança mínima
- Apenas agências com Selo Belta

### Avaliações Verificadas
- Comentários de mulheres que viajaram
- Rating geral e de segurança separados
- Informações sobre destino e programa

---

## 🎨 Componentes Reutilizáveis

### Botões
```tsx
<button className="btn-primary">Botão Primário</button>
<button className="btn-secondary">Botão Secundário</button>
<button className="btn-outline">Botão Outline</button>
```

### Cards
```tsx
<div className="card p-6">
  Conteúdo do card
</div>
```

### Container
```tsx
<div className="container-custom">
  Conteúdo centralizado e responsivo
</div>
```

---

## 📱 Responsividade

O SafeJourney é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

---

## 🤝 Contribuindo

Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

<div align="center">

**Feito com 💜 para empoderar mulheres a realizarem seus sonhos**

</div>