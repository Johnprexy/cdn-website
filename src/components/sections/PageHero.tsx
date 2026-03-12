import { ReactNode, useEffect, useRef } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}

export default function PageHero({ eyebrow, title, sub }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-6 md:px-12" style={{
      background: 'linear-gradient(160deg, #0d1225 0%, #131a40 60%, #1a1045 100%)',
    }}>
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #c9a020, transparent)' }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <p className="flex items-center gap-3 text-xs tracking-widest uppercase font-bold text-yellow-400 mb-4" style={{ letterSpacing: '0.22em' }}>
          <span className="w-6 h-px bg-yellow-400 inline-block" />{eyebrow}
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
          {title}
        </h1>
        {sub && (
          <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
