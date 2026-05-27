'use client';
import Logo from './Logo';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-5 md:px-10 border-t border-white/10 mt-32 bg-ink-900 text-paper">
      <div className="max-w-[1320px] mx-auto">
        <div
          aria-hidden
          className="font-display font-extrabold tracking-[-0.05em] leading-[0.85] text-stroke text-center select-none mb-12 text-[clamp(60px,14vw,220px)]"
        >
          ALAX·PRINT
        </div>

        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10 pb-10 border-b border-white/10">
          <div className="flex items-start gap-3">
            <Logo className="w-12 h-12" />
            <div>
              <div className="font-display font-extrabold text-2xl tracking-tight">
                ALAX<span className="text-brand">PRINT</span>
              </div>
              <p className="text-paperDim text-sm mt-2 max-w-xs">
                Tecnologia que imprime soluções para sua gráfica evoluir.
              </p>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paperDim mb-4">Navegação</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-brand transition-colors" data-hover>Serviços</a></li>
              <li><a href="#produtos" className="hover:text-brand transition-colors" data-hover>Produtos</a></li>
              <li><a href="#diferenciais" className="hover:text-brand transition-colors" data-hover>Diferenciais</a></li>
              <li><a href="#contato" className="hover:text-brand transition-colors" data-hover>Contato</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paperDim mb-4">Social</div>
            <div className="flex gap-3">
              {[
                { icon: MessageCircle, href: 'https://wa.me/' },
                { icon: Instagram, href: 'https://instagram.com/' },
                { icon: Mail, href: 'mailto:contato@alaxprint.com' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-brand hover:text-ink-900 transition-colors"
                    data-hover
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 font-mono text-[11px] text-paperDim tracking-wider">
          <span>© 2026 AlaxPrint. Todos os direitos reservados.</span>
          <span>Feito com <span className="text-brand">●</span> para gráficas que não param.</span>
        </div>
      </div>
    </footer>
  );
}
