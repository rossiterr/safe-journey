import { notFound } from 'next/navigation';
import { mockAgencies } from '@/data/mockData';
import AgencyHeader from '@/components/agency-detail/AgencyHeader';
import AgencyInfo from '@/components/agency-detail/AgencyInfo';
import SafetyFeatures from '@/components/agency-detail/SafetyFeatures';
import ReviewsSection from '@/components/agency-detail/ReviewsSection';
import ContactSection from '@/components/agency-detail/ContactSection';

export async function generateStaticParams() {
  return mockAgencies.map((agency) => ({
    id: agency.id,
  }));
}

export default function AgencyDetailPage({ params }: { params: { id: string } }) {
  const agency = mockAgencies.find((a) => a.id === params.id);

  if (!agency) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <AgencyHeader agency={agency} />
      
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <AgencyInfo agency={agency} />
            <SafetyFeatures agency={agency} />
            <ReviewsSection agencyId={agency.id} />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <ContactSection agency={agency} />
          </aside>
        </div>
      </div>
    </div>
  );
}
