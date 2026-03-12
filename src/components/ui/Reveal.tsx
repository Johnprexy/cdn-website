import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode, CSSProperties } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

const variants = {
  up:    { hidden: { opacity: 0, y: 32 },        visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -32 },       visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32 },        visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 },  visible: { opacity: 1, scale: 1 } },
};

export default function Reveal({ children, className, style, delay = 0, direction = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
