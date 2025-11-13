import { Agency } from '@/types';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

interface ContactSectionProps {
  agency: Agency;
}

export default function ContactSection({ agency }: ContactSectionProps) {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Contact Card */}
      <div className="card p-6 space-y-6">
        <h3 className="text-xl font-bold text-neutral-900">Entre em Contato</h3>

        <div className="space-y-4">
          <a
            href={`mailto:${agency.contact.email}`}
            className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors group"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-neutral-500">E-mail</div>
              <div className="text-sm text-neutral-900 truncate">{agency.contact.email}</div>
            </div>
          </a>

          <a
            href={`tel:${agency.contact.phone}`}
            className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors group"
          >
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Phone className="text-secondary" size={20} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-neutral-500">Telefone</div>
              <div className="text-sm text-neutral-900">{agency.contact.phone}</div>
            </div>
          </a>

          <a
            href={agency.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors group"
          >
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Globe className="text-accent" size={20} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-neutral-500">Website</div>
              <div className="text-sm text-primary">Visitar site</div>
            </div>
          </a>

          <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
            <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
              <MapPin className="text-neutral-600" size={20} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-neutral-500">Localização</div>
              <div className="text-sm text-neutral-900">
                {agency.address.city}, {agency.address.state}
              </div>
            </div>
          </div>
        </div>

        <button className="w-full btn-primary">Solicitar Orçamento</button>
      </div>

      {/* Safety Note */}
      <div className="card p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10">
        <h4 className="font-semibold text-neutral-900 mb-2">💡 Dica de Segurança</h4>
        <p className="text-sm text-neutral-600">
          Sempre faça uma consulta inicial para esclarecer suas dúvidas sobre segurança, 
          acomodações e suporte durante o intercâmbio.
        </p>
      </div>
    </div>
  );
}
