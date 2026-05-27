'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const finish = () => setTimeout(() => setLoading(false), 600);
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    // Safety timeout — never block beyond 2.5s
    const safety = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(safety);
  }, []);

  useEffect(() => {
    if (loading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-ink-900 flex items-center justify-center"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 [background:radial-gradient(600px_400px_at_50%_50%,rgba(255,106,26,0.18),transparent_60%)]" />

          <div className="relative flex flex-col items-center gap-6">
            <svg viewBox="0 0 64 64" className="w-20 h-20" aria-hidden>
              <defs>
                <linearGradient id="pl-g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#FF8A47" />
                  <stop offset="1" stopColor="#E14A00" />
                </linearGradient>
              </defs>
              {/* Outer triangle — draws in */}
              <motion.path
                d="M32 6 L58 56 L40 56 L32 38 L24 56 L6 56 Z"
                fill="url(#pl-g)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: [0, 1, 1, 0.85, 1],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  pathLength: { duration: 1.1, ease: 'easeInOut' },
                  opacity: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
                }}
                stroke="#FF6A1A"
                strokeWidth="0.5"
              />
              {/* Inner triangle */}
              <motion.path
                d="M32 22 L42 44 L22 44 Z"
                fill="#06080F"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              />
            </svg>

            <div className="flex flex-col items-center gap-2">
              <div className="font-display font-extrabold text-xl tracking-tight">
                ALAX<span className="text-brand">PRINT</span>
              </div>
              {/* Progress bar */}
              <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand to-transparent"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
