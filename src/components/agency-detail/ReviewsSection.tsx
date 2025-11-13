import { Star, ThumbsUp } from 'lucide-react';

interface ReviewsSectionProps {
  agencyId: string;
}

// Mock reviews
const mockReviews = [
  {
    id: '1',
    userName: 'Ana Paula S.',
    rating: 5,
    date: '2024-10-15',
    country: 'Canadá',
    program: 'Estudo e Trabalho',
    comment: 'Experiência incrível! A agência me deu todo o suporte necessário desde o início. Me senti muito segura durante toda a jornada. Recomendo para todas as mulheres que querem estudar fora!',
    safetyRating: 5,
  },
  {
    id: '2',
    userName: 'Mariana L.',
    rating: 5,
    date: '2024-09-28',
    country: 'Austrália',
    program: 'Curso de Idiomas',
    comment: 'Melhor decisão que tomei! A equipe é muito atenciosa e sempre disponível para ajudar. As acomodações sugeridas eram muito seguras e bem localizadas.',
    safetyRating: 5,
  },
  {
    id: '3',
    userName: 'Juliana M.',
    rating: 4,
    date: '2024-09-10',
    country: 'Irlanda',
    program: 'Estudo e Trabalho',
    comment: 'Ótima agência! O processo foi tranquilo e recebi todo o suporte necessário. Única sugestão seria melhorar a comunicação pré-embarque.',
    safetyRating: 4,
  },
];

export default function ReviewsSection({ agencyId }: ReviewsSectionProps) {
  return (
    <div className="card p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Avaliações</h2>
        <p className="text-neutral-600">O que outras mulheres estão dizendo</p>
      </div>

      <div className="space-y-6">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b border-neutral-200 last:border-0 pb-6 last:pb-0">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="font-semibold text-neutral-900">{review.userName}</div>
                <div className="text-sm text-neutral-500">
                  {review.country} • {review.program}
                </div>
              </div>
              <div className="text-sm text-neutral-500">
                {new Date(review.date).toLocaleDateString('pt-BR')}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? 'fill-accent text-accent' : 'text-neutral-300'}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                  <Star size={14} className="text-primary" />
                  <span className="text-primary font-medium">Segurança: {review.safetyRating}.0</span>
                </div>
              </div>
            </div>

            <p className="text-neutral-700">{review.comment}</p>

            <button className="mt-3 flex items-center gap-2 text-sm text-neutral-600 hover:text-primary transition-colors">
              <ThumbsUp size={16} />
              <span>Útil</span>
            </button>
          </div>
        ))}
      </div>

      <button className="w-full btn-outline">Ver todas as avaliações</button>
    </div>
  );
}
