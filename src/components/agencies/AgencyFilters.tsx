'use client';

import { useState } from 'react';
import { Filter, Shield, Award } from 'lucide-react';

export default function AgencyFilters() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="space-y-6">
      {/* Mobile Toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden w-full flex items-center justify-between card p-4"
      >
        <div className="flex items-center gap-2">
          <Filter size={20} />
          <span className="font-semibold">Filtros</span>
        </div>
        <span>{showFilters ? '−' : '+'}</span>
      </button>

      {/* Filters */}
      <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
        {/* Safety Rating */}
        <div className="card p-6">
          <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <Shield className="text-primary" size={20} />
            Classificação de Segurança
          </h3>
          <div className="space-y-2">
            {[5, 4, 3].map((rating) => (
              <label key={rating} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Shield key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-neutral-600">ou mais</span>
              </label>
            ))}
          </div>
        </div>

        {/* Selo Belta */}
        <div className="card p-6">
          <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <Award className="text-accent" size={20} />
            Certificações
          </h3>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
            />
            <span className="text-sm text-neutral-700">Apenas com Selo Belta</span>
          </label>
        </div>

        {/* Countries */}
        <div className="card p-6">
          <h3 className="font-semibold text-neutral-900 mb-4">País de Destino</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {[
              'Canadá',
              'Austrália',
              'Estados Unidos',
              'Inglaterra',
              'Irlanda',
              'Nova Zelândia',
              'Malta',
              'Portugal',
              'Espanha',
              'França',
              'Alemanha',
              'Itália',
            ].map((country) => (
              <label key={country} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
                />
                <span className="text-sm text-neutral-700">{country}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="card p-6">
          <h3 className="font-semibold text-neutral-900 mb-4">Tipo de Programa</h3>
          <div className="space-y-2">
            {[
              'Estudo e Trabalho',
              'Curso de Idiomas',
              'High School',
              'Ensino Superior',
              'Pós-Graduação',
              'Au Pair',
              'Voluntariado',
            ].map((program) => (
              <label key={program} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
                />
                <span className="text-sm text-neutral-700">{program}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Reset Filters */}
        <button className="w-full btn-outline text-sm">
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}
