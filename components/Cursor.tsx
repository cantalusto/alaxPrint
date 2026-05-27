'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [data-hover]')) setHover(true);
      else setHover(false);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference hidden md:block"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: hover ? 56 : 20,
        height: hover ? 56 : 20,
        backgroundColor: hover ? 'rgba(255,106,26,0.9)' : 'rgba(244,241,234,0.9)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    />
  );
}
