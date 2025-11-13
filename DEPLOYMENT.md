# 🚀 Guia de Deploy - SafeJourney

## Opções de Deploy

### 1. Vercel (Recomendado) ⭐

A Vercel é a plataforma criada pelos desenvolvedores do Next.js e oferece a melhor experiência.

#### Deploy Automático via GitHub

1. **Crie uma conta na Vercel**
   - Acesse: https://vercel.com/signup
   - Faça login com sua conta GitHub

2. **Importe o Projeto**
   - Clique em "Add New Project"
   - Selecione seu repositório `safe-journey`
   - A Vercel detecta automaticamente que é Next.js

3. **Configure (Opcional)**
   ```
   Framework Preset: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde 2-3 minutos
   - Seu site estará no ar! 🎉

#### Deploy via CLI

```bash
# Instale a CLI da Vercel
npm install -g vercel

# Na pasta do projeto
cd safe-journey

# Execute o deploy
vercel

# Siga as instruções interativas
# - Link to existing project? No
# - What's your project's name? safe-journey
# - Which directory is your code located? ./
# - Want to modify settings? No

# Para produção
vercel --prod
```

#### URLs
- **Preview**: `safe-journey-xxx.vercel.app` (cada commit)
- **Produção**: `safe-journey.vercel.app` ou seu domínio customizado

---

### 2. Netlify

```bash
# Instale a CLI
npm install -g netlify-cli

# Build local
npm run build

# Deploy
netlify deploy

# Deploy para produção
netlify deploy --prod
```

#### Build Settings na Interface
```
Build command: npm run build
Publish directory: .next
```

---

### 3. AWS Amplify

1. **Console AWS Amplify**
   - Acesse: https://console.aws.amazon.com/amplify/
   - Clique em "New app" → "Host web app"

2. **Conecte o Repositório**
   - Selecione GitHub
   - Autorize e escolha o repositório

3. **Configure Build**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

---

### 4. Docker + Cloud (DigitalOcean, AWS ECS, etc.)

#### Dockerfile
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

#### Docker Compose
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

#### Build e Run
```bash
# Build
docker build -t safe-journey .

# Run
docker run -p 3000:3000 safe-journey
```

---

## 🔧 Configurações Importantes

### Variáveis de Ambiente

Crie `.env.production` para produção:

```env
# API (quando implementar)
NEXT_PUBLIC_API_URL=https://api.safejourney.com

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Sentry (opcional)
SENTRY_DSN=https://...
```

### Next.js Config

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Se usar imagens externas
  images: {
    domains: ['example.com'],
  },
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
```

---

## 📊 Performance e Otimização

### 1. Build Otimizado

```bash
# Build de produção
npm run build

# Analise o tamanho do bundle
npm install -D @next/bundle-analyzer
```

### 2. Cache de Assets

A Vercel e Netlify fazem isso automaticamente:
- Cache de imagens
- Cache de JS/CSS
- Edge Caching via CDN

### 3. Compressão

```javascript
// next.config.js
const nextConfig = {
  compress: true, // Gzip automático
}
```

---

## 🌍 Domínio Customizado

### Vercel

1. Vá em Settings → Domains
2. Adicione seu domínio: `safejourney.com.br`
3. Configure DNS:
   ```
   Tipo: CNAME
   Nome: www
   Valor: cname.vercel-dns.com
   
   Tipo: A
   Nome: @
   Valor: 76.76.21.21
   ```

### Netlify

1. Domain Settings → Add custom domain
2. Configure DNS:
   ```
   Tipo: CNAME
   Nome: www
   Valor: seu-site.netlify.app
   ```

---

## 🔒 SSL/HTTPS

Todas as plataformas fornecem SSL grátis via Let's Encrypt:
- ✅ Vercel: Automático
- ✅ Netlify: Automático
- ✅ AWS Amplify: Automático

---

## 📈 Monitoramento

### Google Analytics

```tsx
// src/app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Sentry (Error Tracking)

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

---

## ✅ Checklist de Deploy

Antes de fazer deploy para produção:

- [ ] Build local funciona sem erros (`npm run build`)
- [ ] Todos os links internos funcionam
- [ ] Imagens carregam corretamente
- [ ] Formulários funcionam
- [ ] Responsivo em mobile/tablet/desktop
- [ ] SEO: Meta tags configuradas
- [ ] Performance: Lighthouse score > 90
- [ ] Acessibilidade testada
- [ ] Variáveis de ambiente configuradas
- [ ] Analytics configurado
- [ ] Favicon adicionado

---

## 🐛 Troubleshooting

### Erro: "Module not found"
```bash
# Limpe cache e reinstale
rm -rf .next node_modules
npm install
npm run build
```

### Build Timeout
```bash
# Aumente o timeout (Vercel)
# vercel.json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next",
      "config": {
        "maxDuration": 60
      }
    }
  ]
}
```

### 404 em Rotas Dinâmicas
- Certifique-se de ter `generateStaticParams()` nas páginas dinâmicas
- Ou use `dynamicParams = true` para SSR

---

## 🚀 CI/CD Automático

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run test # quando implementar
```

---

## 📱 PWA (Futuro)

Para transformar em Progressive Web App:

```bash
npm install next-pwa
```

```javascript
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // suas configs
})
```

---

## 💰 Custos Estimados

### Vercel
- **Hobby (Grátis)**: Perfeito para começar
  - 100GB bandwidth
  - Serverless functions ilimitadas
  - SSL automático
  
- **Pro ($20/mês)**: Para produção
  - 1TB bandwidth
  - Mais poder computacional
  - Suporte prioritário

### Netlify
- **Starter (Grátis)**: 
  - 100GB bandwidth
  - 300 build minutes/mês

### AWS Amplify
- Pay-as-you-go
- ~$15-50/mês dependendo do tráfego

---

## 🎯 Recomendação

Para o SafeJourney, recomendo:

1. **Desenvolvimento**: Vercel (deploy automático em cada commit)
2. **Staging**: Branch `develop` → Preview deploy
3. **Produção**: Branch `main` → Production deploy
4. **Domínio**: Registre `safejourney.com.br`

---

## 📞 Suporte

Se precisar de ajuda com deploy:
- Documentação Vercel: https://vercel.com/docs
- Discord Next.js: https://discord.gg/nextjs
- Stack Overflow: Tag `next.js`

---

**Boa sorte com o deploy! 🚀**
