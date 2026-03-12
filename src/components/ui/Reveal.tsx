import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

export default function Reveal({ children, className, style, delay = 0, direction = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = direction === 'up' ? 'translateY(30px)'
      : direction === 'left' ? 'translateX(-30px)'
      : direction === 'right' ? 'translateX(30px)'
      : 'scale(0.94)';
    el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
