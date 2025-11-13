import { Agency } from '@/types';
import { Globe, BookOpen } from 'lucide-react';

interface AgencyInfoProps {
  agency: Agency;
}

export default function AgencyInfo({ agency }: AgencyInfoProps) {
  return (
    <div className="card p-8 space-y-6">
      <h2 className="text-2xl font-bold text-neutral-900">Sobre a Agência</h2>

      {/* Countries */}
      <div>
        <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
          <Globe className="text-primary" size={20} />
          Países Disponíveis
        </h3>
        <div className="flex flex-wrap gap-2">
          {agency.countries.map((country, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
            >
              {country}
            </span>
          ))}
        </div>
      </div>

      {/* Programs */}
      <div>
        <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
          <BookOpen className="text-secondary" size={20} />
          Programas Oferecidos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {agency.programs.map((program, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg border border-neutral-200"
            >
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-neutral-700">{program}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
