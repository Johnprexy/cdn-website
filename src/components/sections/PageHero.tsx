import { motion } from 'framer-motion';
import { ReactNode } from 'react';

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
        className="absolute -top-24 -right-20 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(42,82,190,0.15), transparent 70%)', filter: 'blur(60px)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a020] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#e8c040] mb-4"
        >
          <span className="w-6 h-px bg-[#e8c040]" />{eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.08] mb-5"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/55 text-base md:text-lg leading-[1.85] max-w-2xl"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}
