'use client';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const products = [
  {
    cat: 'Categoria 01',
    title: 'Impressoras\nDigitais',
    desc: 'Grande formato, alta produtividade e qualidade profissional para sua gráfica entregar mais em menos tempo.',
    tags: ['Eco-solvente', 'UV', 'Sublimática'],
    img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1400&q=85',
    span: 'lg:col-span-7',
  },
  {
    cat: 'Categoria 02',
    title: 'Peças e\nSuprimentos',
    desc: 'Cabeçotes, motores, placas, tintas, fusores e muito mais. Estoque pronto para reduzir o seu downtime.',
    tags: ['Originais', 'Compatíveis', 'Tintas'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=85',
    span: 'lg:col-span-5',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="relative bg-[#F4F1EA] text-ink-900 py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <Reveal>
            <div className="font-mono text-[11px] tracking-[0.3em] text-brand uppercase mb-4">02 / Produtos</div>
            <h2 className="font-display font-extrabold text-[clamp(30px,5vw,64px)] leading-[1.05] tracking-[-0.035em] max-w-3xl">
              Tecnologia que <em className="not-italic text-brand">gera produtividade.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="max-w-sm text-ink-900/60">
            Equipamentos selecionados para resultado profissional, com curadoria por aplicação e orçamento.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className={p.span}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden bg-ink-900 ring-1 ring-black/10 cursor-pointer shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
                data-hover
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-[1.2s] ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 text-white">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand">// {p.cat}</div>
                    <h3 className="font-display font-extrabold text-[clamp(28px,3.4vw,44px)] leading-[0.95] tracking-[-0.03em] mt-4 whitespace-pre-line">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-white/70 text-sm max-w-md leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 tracking-wider uppercase text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-brand text-ink-900 flex items-center justify-center group-hover:rotate-[-45deg] group-hover:scale-110 transition-transform duration-500">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
