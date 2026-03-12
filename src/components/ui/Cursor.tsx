import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const rawRingX = useMotionValue(-100);
  const rawRingY = useMotionValue(-100);
  const ringX = useSpring(rawRingX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(rawRingY, { stiffness: 150, damping: 20 });
  const ringScale = useSpring(1, { stiffness: 300, damping: 25 });
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia('(hover: none)').matches;
    if (isTouch.current) return;

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      rawRingX.set(e.clientX);
      rawRingY.set(e.clientY);
    };

    const onEnter = () => ringScale.set(1.6);
    const onLeave = () => ringScale.set(1);

    document.addEventListener('mousemove', move);

    const interactables = document.querySelectorAll('a, button, [role="button"]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [dotX, dotY, rawRingX, rawRingY, ringScale]);

  // Don't render on touch devices at all
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#e8c040] pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[rgba(232,192,64,0.45)] pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%', scale: ringScale }}
      />
    </>
  );
}
