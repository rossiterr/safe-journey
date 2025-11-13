import { Agency } from '@/types';
import { Star, Shield, Award, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface AgencyHeaderProps {
  agency: Agency;
}

export default function AgencyHeader({ agency }: AgencyHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-12">
      <div className="container-custom">
        {/* Back Button */}
        <Link 
          href="/agencies"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Voltar para agências</span>
        </Link>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-white rounded-xl shadow-xl flex items-center justify-center">
              <span className="text-5xl font-bold text-primary">
                {agency.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {agency.name}
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin size={18} />
                <span>{agency.address.city}, {agency.address.state}</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {agency.hasBeltaSeal && (
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md">
                  <Award className="text-accent" size={20} />
                  <span className="font-semibold text-neutral-900">Selo Belta</span>
                </div>
              )}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md">
                <Shield className="text-primary" size={20} />
                <span className="font-semibold text-neutral-900">
                  Segurança: {agency.safetyRating}.0/5.0
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md">
                <Star className="text-accent fill-accent" size={20} />
                <span className="font-semibold text-neutral-900">
                  {agency.rating} ({agency.reviewCount} avaliações)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-white/95 max-w-3xl">
              {agency.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
