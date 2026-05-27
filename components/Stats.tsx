'use client';
import Counter from './Counter';
import Reveal from './Reveal';

const stats = [
  { to: 12, suffix: '+', label: 'Anos de experiência' },
  { to: 450, suffix: '+', label: 'Clientes ativos' },
  { to: 2400, suffix: '+', label: 'Atendimentos / ano' },
  { to: 24, suffix: 'h', label: 'Resposta técnica' },
];

export default function Stats() {
  return (
    <section className="relative bg-[#F4F1EA] text-ink-900 px-5 md:px-10 py-8">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)] overflow-hidden">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className={`p-10 hover:bg-brand/5 transition-colors ${i < 3 ? 'lg:border-r border-black/10' : ''} ${
                  i % 2 === 0 ? 'border-r border-black/10 lg:border-r' : ''
                } ${i < 2 ? 'border-b lg:border-b-0 border-black/10' : ''}`}
              >
                <div className="font-display font-extrabold text-[clamp(48px,6vw,84px)] leading-none tracking-[-0.04em] text-brand">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-900/50 mt-4">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
