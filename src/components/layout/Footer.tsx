import Link from 'next/link';
import { Globe, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-200">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
          {/* Brand */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg md:text-xl font-bold text-white">SafeJourney</span>
            </div>
            <p className="text-xs md:text-sm text-neutral-400">
              Conectando mulheres a experiências de intercâmbio seguras e transformadoras.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-primary transition-colors text-xs md:text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/agencies" className="text-neutral-400 hover:text-primary transition-colors text-xs md:text-sm">
                  Agências
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-xs md:text-sm">
                  Guia de Segurança
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-xs md:text-sm">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-xs md:text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-xs md:text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-xs md:text-sm text-neutral-400 justify-center sm:justify-start">
                <Mail size={14} className="md:w-4 md:h-4 flex-shrink-0" />
                <span className="break-all">contato@safejourney.com</span>
              </li>
              <li className="text-xs md:text-sm text-neutral-400">
                Horário de atendimento:<br />
                Seg - Sex: 9h às 18h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-neutral-400 px-4">
          <p>&copy; {new Date().getFullYear()} SafeJourney. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
