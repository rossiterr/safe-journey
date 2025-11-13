import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "SafeJourney - Intercâmbio Seguro para Mulheres",
  description: "Plataforma especializada em conectar mulheres com agências de intercâmbio confiáveis e seguras. Encontre programas avaliados por outras viajantes.",
  keywords: "intercâmbio, mulheres, segurança, agências, viagem, estudo no exterior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
