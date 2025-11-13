import { Shield, Users, Award, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Agências Verificadas',
    description: 'Todas as agências passam por um rigoroso processo de verificação focado em segurança e qualidade.',
    color: 'text-primary',
  },
  {
    icon: Users,
    title: 'Avaliações Reais',
    description: 'Leia experiências de outras mulheres que realizaram intercâmbio através das agências.',
    color: 'text-secondary',
  },
  {
    icon: Award,
    title: 'Selo Belta',
    description: 'Priorizamos agências com certificação Belta, garantindo padrões elevados de excelência.',
    color: 'text-accent',
  },
  {
    icon: CheckCircle,
    title: 'Diferenciais de Segurança',
    description: 'Veja claramente quais medidas de segurança cada agência oferece especificamente para mulheres.',
    color: 'text-primary',
  },
];

export default function Features() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 md:mb-4">
            Por que escolher o SafeJourney?
          </h2>
          <p className="text-base md:text-lg text-neutral-600">
            Nossa plataforma foi desenvolvida pensando exclusivamente na segurança e bem-estar 
            de mulheres que desejam realizar intercâmbio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-5 md:p-6 hover:scale-105 transition-transform duration-200"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3 md:mb-4`}>
                <feature.icon className={`w-6 h-6 md:w-7 md:h-7 ${feature.color}`} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
