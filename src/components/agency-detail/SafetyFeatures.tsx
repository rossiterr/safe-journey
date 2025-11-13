import { Agency } from '@/types';
import { Shield, CheckCircle } from 'lucide-react';

interface SafetyFeaturesProps {
  agency: Agency;
}

export default function SafetyFeatures({ agency }: SafetyFeaturesProps) {
  return (
    <div className="card p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Shield className="text-primary" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Diferenciais de Segurança</h2>
          <p className="text-neutral-600">Medidas específicas para mulheres</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {agency.safetyFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10"
          >
            <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={20} />
            <span className="text-neutral-700">{feature}</span>
          </div>
        ))}
      </div>

      <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
        <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
          <Shield className="text-accent" size={20} />
          Classificação de Segurança: {agency.safetyRating}.0/5.0
        </h3>
        <p className="text-neutral-600 text-sm">
          Esta classificação é baseada em critérios como certificações, medidas de proteção 
          específicas para mulheres, acomodações seguras, suporte 24/7 e avaliações de usuárias.
        </p>
      </div>
    </div>
  );
}
