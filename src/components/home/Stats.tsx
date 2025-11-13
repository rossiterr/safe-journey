import { TrendingUp, Globe, Heart, Award } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    number: '50+',
    label: 'Países Disponíveis',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Award,
    number: '500+',
    label: 'Agências Certificadas',
    color: 'from-secondary to-secondary-light',
  },
  {
    icon: Heart,
    number: '10k+',
    label: 'Mulheres Satisfeitas',
    color: 'from-accent to-accent-light',
  },
  {
    icon: TrendingUp,
    number: '98%',
    label: 'Taxa de Satisfação',
    color: 'from-primary to-secondary',
  },
];

export default function Stats() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Números que Inspiram Confiança
          </h2>
          <p className="text-base md:text-lg text-white/90">
            Mais de 10 mil mulheres já realizaram seus sonhos através do SafeJourney.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-8 text-center hover:bg-white/20 transition-all duration-200 hover:scale-105"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-base text-white/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
