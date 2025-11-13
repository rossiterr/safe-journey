import AgencyList from '@/components/agencies/AgencyList';
import AgencyFilters from '@/components/agencies/AgencyFilters';

export const metadata = {
  title: 'Agências de Intercâmbio | SafeJourney',
  description: 'Encontre agências de intercâmbio verificadas e seguras para mulheres. Filtre por país, programa e nível de segurança.',
};

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Agências Verificadas
            </h1>
            <p className="text-xl text-white/90">
              Explore centenas de agências de intercâmbio avaliadas e certificadas, 
              com foco em segurança para mulheres.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <AgencyFilters />
          </aside>

          {/* Agency List */}
          <main className="lg:col-span-3">
            <AgencyList />
          </main>
        </div>
      </section>
    </div>
  );
}
