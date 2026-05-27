'use client';
import { Wrench, ShoppingCart, CalendarRange, Headphones, Settings } from 'lucide-react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const services = [
  { icon: Wrench, title: 'Manutenção', desc: 'Preventiva e corretiva, com técnicos formados em fábrica e peças originais.' },
  { icon: ShoppingCart, title: 'Venda', desc: 'As melhores marcas e modelos do mercado, com curadoria para o seu perfil.' },
  { icon: CalendarRange, title: 'Locação', desc: 'Planos flexíveis para escalar sua produção sem comprometer capital de giro.' },
  { icon: Headphones, title: 'Suporte técnico', desc: 'Atendimento especializado, remoto ou presencial, com resposta rápida.' },
  { icon: Settings, title: 'Peças de reposição', desc: 'Cabeçotes, motores, placas, tintas, fusores e mais. Originais e compatíveis.' },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#F4F1EA] text-ink-900 py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <Reveal>
            <div className="font-mono text-[11px] tracking-[0.3em] text-brand uppercase mb-4">01 / Serviços</div>
            <h2 className="font-display font-extrabold text-[clamp(30px,5vw,64px)] leading-[1.05] tracking-[-0.035em] max-w-3xl">
              Tudo para sua gráfica <em className="not-italic text-brand">operar sem parar.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="max-w-sm text-ink-900/60">
            Da venda à manutenção, do suporte à reposição — uma operação completa, sob medida para o ritmo da sua produção.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative bg-white rounded-2xl p-7 h-full overflow-hidden ring-1 ring-black/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_-15px_rgba(255,106,26,0.3)] transition-shadow"
                  data-hover
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-brand/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-6 right-6 font-mono text-[10px] text-ink-900/40 tracking-[0.2em]">0{i + 1}</div>
                  <div className="relative w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white group-hover:rotate-[-8deg] group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl tracking-tight mb-2 relative">{s.title}</h3>
                  <p className="text-sm text-ink-900/60 leading-relaxed relative">{s.desc}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
