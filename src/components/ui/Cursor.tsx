import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 150, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 150, damping: 18, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    setIsTouch(false);

    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); setVisible(true); };
    const down = () => setClicked(true);
    const up   = () => setClicked(false);
    const over = (e: MouseEvent) => {
      setHovered(!!(e.target as HTMLElement).closest('a, button, [data-cursor]'));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mouseover', over);
    };
  }, [mx, my]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        style={{ x: mx, y: my, translateX: '-50%', translateY: '-50%', background: '#c9a020', position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none', width: '8px', height: '8px', borderRadius: '50%' }}
        animate={{ scale: clicked ? 0.5 : hovered ? 1.5 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%', border: '1.5px solid rgba(201,160,32,0.5)', position: 'fixed', top: 0, left: 0, zIndex: 9998, pointerEvents: 'none', width: '36px', height: '36px', borderRadius: '50%' }}
        animate={{ scale: clicked ? 0.8 : hovered ? 1.8 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
