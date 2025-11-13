'use client';

import { useState } from 'react';
import { mockAgencies } from '@/data/mockData';
import AgencyCard from './AgencyCard';
import { Search } from 'lucide-react';

export default function AgencyList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [agencies] = useState(mockAgencies);

  const filteredAgencies = agencies.filter(agency =>
    agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agency.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agency.countries.some(country => country.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="card p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
          <input
            type="text"
            placeholder="Buscar por agência, país ou programa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-neutral-600">
          <span className="font-semibold text-neutral-900">{filteredAgencies.length}</span> agências encontradas
        </p>
        <select className="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Maior Classificação</option>
          <option>Mais Avaliações</option>
          <option>Selo Belta</option>
          <option>Ordem Alfabética</option>
        </select>
      </div>

      {/* Agency Cards */}
      <div className="space-y-6">
        {filteredAgencies.length > 0 ? (
          filteredAgencies.map((agency) => (
            <AgencyCard key={agency.id} agency={agency} />
          ))
        ) : (
          <div className="card p-12 text-center">
            <p className="text-neutral-600 text-lg">
              Nenhuma agência encontrada com esses critérios.
            </p>
            <p className="text-neutral-500 mt-2">
              Tente ajustar os filtros ou termo de busca.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
