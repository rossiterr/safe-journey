import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-secondary py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 px-4">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-3 py-2 md:px-4 md:py-2 rounded-full border border-white/30">
            <Shield size={18} className="md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">Sua segurança é nossa prioridade</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-2">
            Seu Intercâmbio Seguro
            <span className="block text-accent mt-2">Começa Aqui</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
            Encontre agências de intercâmbio confiáveis, avaliadas por mulheres como você. 
            Realize seu sonho de estudar no exterior com segurança e tranquilidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Link 
              href="/agencies" 
              className="bg-white text-primary hover:bg-neutral-50 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center text-sm md:text-base"
            >
              <span>Explorar Agências</span>
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-6 md:pt-8 flex flex-wrap justify-center gap-6 md:gap-8 text-white/80 px-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-xs md:text-sm">Agências Verificadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">10k+</div>
              <div className="text-xs md:text-sm">Mulheres Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">4.8/5</div>
              <div className="text-xs md:text-sm">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
