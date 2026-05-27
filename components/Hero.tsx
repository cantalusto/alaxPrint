'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Wrench, Award, Printer, Cpu, Box, Headphones } from 'lucide-react';

const words = ['Imprimimos', 'mais que', 'cores,', 'imprimimos', 'possibilidades.'];

const features = [
  { icon: ShieldCheck, title: 'Atendimento', sub: 'especializado' },
  { icon: Wrench, title: 'Suporte técnico', sub: 'rápido e eficiente' },
  { icon: Award, title: 'Qualidade e tecnologia', sub: 'em cada detalhe' },
];

const products = [
  { icon: Printer, title: 'Impressoras Digitais', desc: 'Soluções completas para impressão profissional.' },
  { icon: Cpu, title: 'Routers', desc: 'Performance e precisão para seus projetos.' },
  { icon: Box, title: 'Impressoras 3D', desc: 'Tecnologia que transforma ideias em realidade.' },
  { icon: Headphones, title: 'Suporte Técnico', desc: 'Assistência especializada quando você mais precisa.' },
];

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-28 pb-0 text-paper">
      {/* Full hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background01.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-right"
        />
        {/* Dark overlay — strong on mobile, side-fade on desktop */}
        <div className="absolute inset-0 bg-ink-900/75 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-ink-900 via-ink-900/85 via-40% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-30 [mask-image:linear-gradient(to_right,#000_30%,transparent_60%)] hidden lg:block" />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-12 items-center min-h-[calc(100svh-6rem)] lg:min-h-[calc(100svh-7rem)]">
          {/* LEFT — text */}
          <div>
            <h1 className="font-display font-extrabold leading-[1.02] tracking-[-0.03em] text-[clamp(32px,8vw,58px)]">
              {words.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.06em] mr-2.5">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                    className={`inline-block ${i === 2 || i === 4 ? 'text-gradient-brand' : ''}`}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="mt-6 max-w-md text-paperDim text-base leading-relaxed"
            >
              Venda, manutenção, locação e suporte técnico para impressoras digitais, routers e impressoras 3D.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/15 bg-ink-900/40 backdrop-blur flex items-center justify-center text-brand shrink-0">
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <div className="text-[13px] leading-tight">
                      <div className="font-semibold">{f.title}</div>
                      <div className="text-paperDim">{f.sub}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4"
            >
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 pl-5 sm:pl-6 pr-2 py-2 rounded-full bg-brand text-ink-900 font-bold text-sm shadow-[0_18px_40px_-10px_rgba(255,106,26,0.7)] hover:bg-brand-soft transition-colors"
                data-hover
              >
                Fale com a gente
                <span className="w-9 h-9 rounded-full bg-ink-900 text-brand flex items-center justify-center group-hover:rotate-[-45deg] transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#servicos"
                className="group inline-flex items-center gap-2 text-sm font-semibold hover:text-brand transition-colors"
                data-hover
              >
                Conheça nossos serviços
                <span className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-brand group-hover:text-brand transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right column is intentionally empty — printer image is in the section bg */}
          <div className="hidden lg:block" />
        </div>

        {/* Product strip — white card overlapping cream section below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-20 mt-12 lg:mt-16 mb-[-110px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#F4F1EA] text-ink-900 rounded-[28px] shadow-[0_40px_100px_-30px_rgba(255,106,26,0.25),0_30px_80px_-30px_rgba(0,0,0,0.6)] overflow-hidden ring-1 ring-black/5"
        >
          {products.map((p, i) => {
            const Icon = p.icon;
            const isLast = i === products.length - 1;
            return (
              <div
                key={p.title}
                className={[
                  'group flex items-start gap-4 p-6 sm:p-7 lg:p-8 transition-colors hover:bg-brand/5',
                  // Mobile separator
                  !isLast ? 'border-b border-black/10' : '',
                  // sm: remove bottom border on last row, add right border on left col
                  'sm:border-b-0',
                  i % 2 === 0 ? 'sm:border-r sm:border-black/10' : '',
                  i < 2 ? 'sm:border-b sm:border-black/10' : '',
                  // lg: reset to single row with right border on first 3
                  'lg:border-b-0 lg:border-r-0',
                  i < 3 ? 'lg:border-r lg:border-black/10' : '',
                ].filter(Boolean).join(' ')}
              >
                <div className="w-12 h-12 rounded-full border-2 border-brand/40 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white group-hover:border-brand group-hover:rotate-[-8deg] transition-all">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[17px] leading-tight">{p.title}</h3>
                  <p className="text-[13px] text-ink-900/60 mt-1.5 leading-snug">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
