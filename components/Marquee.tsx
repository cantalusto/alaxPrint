'use client';
import { Sparkles } from 'lucide-react';

const items = [
  'Impressoras Digitais',
  'Routers de Recorte',
  'Impressoras 3D',
  'Peças e Suprimentos',
  'Manutenção Especializada',
  'Suporte Técnico 24h',
];

export default function Marquee() {
  return (
    <div className="relative py-5 bg-gradient-to-r from-brand-deep via-brand to-brand-deep overflow-hidden mt-32 lg:mt-40">
      <div className="flex gap-12 animate-marquee whitespace-nowrap font-display font-extrabold text-2xl md:text-3xl uppercase tracking-tight text-ink-900">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            <Sparkles className="w-5 h-5" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
