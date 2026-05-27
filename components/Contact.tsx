'use client';
import Image from 'next/image';
import { Mail, MessageCircle, MapPin, Instagram, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contato" className="relative bg-[#F4F1EA] text-ink-900 py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-ink-900 text-white p-6 sm:p-10 md:p-14 ring-1 ring-black/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.4)]">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
              alt=""
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand/35 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-deep/25 blur-3xl" />

            <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-12">
              <div>
                <div className="font-mono text-[11px] tracking-[0.3em] text-brand uppercase mb-4">04 / Contato</div>
                <h2 className="font-display font-extrabold text-[clamp(32px,5vw,72px)] leading-[1.02] tracking-[-0.035em]">
                  Vamos imprimir <em className="not-italic text-brand">seu próximo passo.</em>
                </h2>
                <p className="mt-6 text-white/70 max-w-md text-lg leading-relaxed">
                  Conte para a gente o que sua gráfica precisa — venda, locação, peça ou suporte. Respondemos rapidinho e com solução pronta.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://wa.me/"
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-brand text-ink-900 font-bold shadow-[0_10px_30px_-8px_rgba(255,106,26,0.6)] hover:bg-brand-soft transition-colors"
                    data-hover
                  >
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://instagram.com/"
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 font-semibold backdrop-blur"
                    data-hover
                  >
                    <Instagram className="w-5 h-5" />
                    @alax.print
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Mail, lbl: 'Email', val: 'contato@alaxprint.com' },
                  { icon: MessageCircle, lbl: 'WhatsApp', val: '(xx) 9 0000-0000' },
                  { icon: MapPin, lbl: 'Endereço', val: 'Sua cidade — XX' },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <motion.a
                      key={c.lbl}
                      whileHover={{ x: 6 }}
                      href="#"
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-brand/40 hover:bg-brand/10 transition-colors"
                      data-hover
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand text-ink-900 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/60">{c.lbl}</div>
                        <div className="font-display font-semibold text-lg tracking-tight mt-0.5">{c.val}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
