'use client';
import Logo from './Logo';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => setSolid(v > 20));

  // Detect if nav is over a dark or light section
  useEffect(() => {
    const update = () => {
      const heroEl = document.querySelector('section');
      if (!heroEl) return;
      const rect = heroEl.getBoundingClientRect();
      // Nav (~72px) over hero = dark; otherwise = light (cream sections)
      setOnDark(rect.bottom > 80);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const textColor = onDark ? 'text-paper' : 'text-ink-900';
  const linkDim = onDark ? 'text-paper/65' : 'text-ink-900/60';
  const linkHover = onDark ? 'hover:text-paper' : 'hover:text-ink-900';
  const subColor = onDark ? 'text-paper/55' : 'text-ink-900/50';
  const menuBtnBorder = onDark ? 'border-white/15' : 'border-black/15';

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          solid
            ? onDark
              ? 'bg-ink-900/85 backdrop-blur-xl border-b border-white/5'
              : 'bg-[#F4F1EA]/85 backdrop-blur-xl border-b border-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
          <a href="#" className={`flex items-center gap-3 ${textColor}`} data-hover>
            <Logo className="w-10 h-10" />
            <div className="leading-none">
              <div className="font-display font-extrabold text-[22px] tracking-tight">
                ALAX<span className="text-brand">PRINT</span>
              </div>
              <div className={`font-mono text-[9px] tracking-[0.3em] uppercase ${subColor} mt-1`}>
                tecnologia que imprime soluções
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`group relative text-sm ${linkDim} ${linkHover} transition-colors py-2`}
                data-hover
              >
                {l.label}
                <span className="absolute inset-x-0 -bottom-px h-px bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand text-ink-900 text-sm font-bold shadow-[0_10px_30px_-8px_rgba(255,106,26,0.6)] hover:bg-brand-soft hover:-translate-y-0.5 transition-all"
              data-hover
            >
              Fale com a gente
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden w-11 h-11 rounded-xl border ${menuBtnBorder} ${textColor} flex items-center justify-center`}
              aria-label="Menu"
              data-hover
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-ink-900/95 backdrop-blur-xl text-paper flex flex-col"
        >
          <div className="flex justify-between p-5">
            <Logo className="w-10 h-10" />
            <button onClick={() => setOpen(false)} className="w-11 h-11 rounded-xl border border-white/15 flex items-center justify-center" data-hover>
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center gap-8 px-10">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 + 0.1 }}
                className="font-display font-extrabold text-5xl tracking-tight"
              >
                {l.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}
