'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Clock, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const diffs = [
  { icon: ShieldCheck, title: 'Qualidade', desc: 'Equipamentos e peças de alto desempenho.', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80' },
  { icon: Clock, title: 'Confiança', desc: 'Compromisso com prazos e resultados.', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80' },
  { icon: TrendingUp, title: 'Desempenho', desc: 'Tecnologia que gera mais produtividade.', img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=900&q=80' },
  { icon: Users, title: 'Parceria', desc: 'Atendimento próximo, suporte de verdade.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80' },
];

export default function Differentials() {
  const [active, setActive] = useState(0);
  return (
    <section id="diferenciais" className="relative bg-[#F4F1EA] text-ink-900 py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.3em] text-brand uppercase mb-4">03 / Diferenciais</div>
          <h2 className="font-display font-extrabold text-[clamp(30px,5vw,64px)] leading-[1.05] tracking-[-0.035em] max-w-3xl mb-12 md:mb-16">
            Por que a AlaxPrint é <em className="not-italic text-brand">o parceiro da sua produção.</em>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <Reveal>
            <div className="border-t border-black/10">
              {diffs.map((d, i) => {
                const Icon = d.icon;
                const isActive = active === i;
                return (
                  <div
                    key={d.title}
                    onMouseEnter={() => setActive(i)}
                    className="group grid grid-cols-[40px_1fr_auto] sm:grid-cols-[60px_1fr_auto] gap-4 sm:gap-6 items-center py-6 sm:py-7 border-b border-black/10 cursor-pointer transition-all hover:pl-4"
                    data-hover
                  >
                    <div className="font-mono text-xs text-ink-900/50 tracking-[0.2em]">0{i + 1}</div>
                    <div>
                      <h4 className={`font-display font-extrabold text-xl sm:text-2xl md:text-3xl tracking-[-0.02em] transition-colors flex items-center gap-2 sm:gap-3 ${isActive ? 'text-brand' : 'text-ink-900'}`}>
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isActive ? 'text-brand' : 'text-ink-900/50'}`} />
                        {d.title}
                      </h4>
                      <p className="text-ink-900/60 text-sm mt-1">{d.desc}</p>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 transition-all ${isActive ? 'text-brand translate-x-1 -translate-y-1' : 'text-ink-900/40'}`} />
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-square rounded-3xl overflow-hidden ring-1 ring-black/10 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  <Image src={diffs[active].img} alt={diffs[active].title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 ring-1 ring-black/5">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand">Em destaque</div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="font-display font-extrabold text-2xl mt-2 tracking-tight">{diffs[active].title}</div>
                    <div className="text-sm text-ink-900/60 mt-1">{diffs[active].desc}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
