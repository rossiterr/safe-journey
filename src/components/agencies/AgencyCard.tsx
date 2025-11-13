import Link from 'next/link';
import { Agency } from '@/types';
import { Star, Shield, Award, MapPin, ArrowRight } from 'lucide-react';

interface AgencyCardProps {
  agency: Agency;
}

export default function AgencyCard({ agency }: AgencyCardProps) {
  return (
    <div className="card p-4 md:p-6 hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Logo/Image Placeholder */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-primary">
              {agency.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3 md:space-y-4">
          {/* Header */}
          <div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
                  {agency.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-neutral-600 justify-center md:justify-start">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span>{agency.address.city}, {agency.address.state}</span>
                </div>
              </div>
              
              {/* Badges */}
              <div className="flex flex-col gap-2 items-center md:items-end">
                {agency.hasBeltaSeal && (
                  <div className="flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    <Award size={14} className="md:w-4 md:h-4" />
                    <span>Selo Belta</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-neutral-600 line-clamp-2 text-center md:text-left">
            {agency.description}
          </p>

          {/* Safety Rating & Reviews */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
            {/* Safety Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-primary/10 px-2 md:px-3 py-1 rounded-lg">
                <Shield className="text-primary" size={16} />
                <span className="font-bold text-primary text-sm md:text-base">{agency.safetyRating}.0</span>
              </div>
              <span className="text-xs md:text-sm text-neutral-600">Segurança</span>
            </div>

            {/* Overall Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="fill-accent text-accent" size={16} />
                <span className="font-bold text-neutral-900 text-sm md:text-base">{agency.rating}</span>
              </div>
              <span className="text-xs md:text-sm text-neutral-600">
                ({agency.reviewCount} avaliações)
              </span>
            </div>
          </div>

          {/* Countries */}
          <div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {agency.countries.slice(0, 4).map((country, index) => (
                <span
                  key={index}
                  className="px-2 md:px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs md:text-sm"
                >
                  {country}
                </span>
              ))}
              {agency.countries.length > 4 && (
                <span className="px-2 md:px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs md:text-sm">
                  +{agency.countries.length - 4} mais
                </span>
              )}
            </div>
          </div>

          {/* Safety Features Preview */}
          <div className="pt-2">
            <p className="text-xs md:text-sm font-medium text-neutral-700 mb-2 text-center md:text-left">
              Diferenciais de Segurança:
            </p>
            <ul className="grid grid-cols-1 gap-2">
              {agency.safetyFeatures.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-neutral-600">
                  <Shield size={14} className="md:w-4 md:h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {agency.safetyFeatures.length > 3 && (
              <p className="text-xs md:text-sm text-primary mt-2 text-center md:text-left">
                +{agency.safetyFeatures.length - 3} diferenciais
              </p>
            )}
          </div>

          {/* Action Button */}
          <div className="pt-2 md:pt-4">
            <Link
              href={`/agencies/${agency.id}`}
              className="inline-flex items-center gap-2 btn-primary w-full md:w-auto justify-center text-sm md:text-base"
            >
              <span>Ver Detalhes Completos</span>
              <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
