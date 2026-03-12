import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(useMotionValue(-100), { stiffness: 150, damping: 20 });
  const ringY = useSpring(useMotionValue(-100), { stiffness: 150, damping: 20 });
  const ringScale = useSpring(1, { stiffness: 300, damping: 25 });
  const isVisible = useRef(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      (ringX as ReturnType<typeof useSpring>).set(e.clientX);
      (ringY as ReturnType<typeof useSpring>).set(e.clientY);
      if (!isVisible.current) isVisible.current = true;
    };

    const onEnter = () => ringScale.set(1.6);
    const onLeave = () => ringScale.set(1);

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', move);
    };
  }, []);

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
