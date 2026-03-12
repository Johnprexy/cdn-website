import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}

export default function PageHero({ eyebrow, title, sub }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-6 md:px-12" style={{
      background: 'linear-gradient(160deg, #0d1225 0%, #131a40 60%, #1a1045 100%)',
    }}>
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(42,82,190,0.15), transparent)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #c9a020, transparent)' }} />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="flex items-center gap-3 text-xs tracking-widest uppercase font-bold text-yellow-400 mb-4"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ letterSpacing: '0.22em' }}
        >
          <span className="w-6 h-px bg-yellow-400 inline-block" />{eyebrow}
        </motion.p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
          {title}
        </h1>
        {sub && (
          <motion.p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {sub}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
