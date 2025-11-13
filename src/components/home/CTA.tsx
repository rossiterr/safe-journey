import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom px-4">
        <div className="card p-6 md:p-8 lg:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20 shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900">
              Pronta para Começar sua Jornada?
            </h2>
            <p className="text-base md:text-lg text-neutral-600">
              Explore agora mesmo centenas de agências verificadas e encontre 
              o programa de intercâmbio perfeito para você, com total segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 md:pt-4">
              <Link 
                href="/agencies" 
                className="btn-primary flex items-center space-x-2 text-base md:text-lg w-full sm:w-auto justify-center"
              >
                <span>Explorar Agências Agora</span>
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
