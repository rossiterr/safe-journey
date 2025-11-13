import { Search, Star, MessageCircle, Plane } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Pesquise',
    description: 'Explore agências verificadas e filtre por país, programa e nível de segurança.',
    step: '01',
  },
  {
    icon: Star,
    title: 'Compare',
    description: 'Veja avaliações, selos de qualidade e diferenciais de segurança de cada agência.',
    step: '02',
  },
  {
    icon: MessageCircle,
    title: 'Entre em Contato',
    description: 'Converse diretamente com as agências e tire todas as suas dúvidas.',
    step: '03',
  },
  {
    icon: Plane,
    title: 'Viaje Segura',
    description: 'Realize seu intercâmbio com confiança e tranquilidade.',
    step: '04',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 md:mb-4">
            Como Funciona?
          </h2>
          <p className="text-base md:text-lg text-neutral-600">
            Em apenas 4 passos simples, você encontra a agência perfeita para seu intercâmbio.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative px-4">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-20"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-3 md:space-y-4">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg md:text-xl relative z-10 shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white shadow-md flex items-center justify-center border border-neutral-100">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 px-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
