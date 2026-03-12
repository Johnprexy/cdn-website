import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function NotFound() {
  return (
    <div className="flex items-center justify-center text-center px-6" style={{ minHeight: '100vh', background: '#0d1225' }}>
      <div>
        <motion.div
          className="font-display font-light mb-4"
          style={{ fontSize: '8rem', lineHeight: 1, color: 'rgba(255,255,255,0.08)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >404</motion.div>
        <motion.h1
          className="font-display font-semibold text-white mb-3"
          style={{ fontSize: '1.875rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >Page Not Found</motion.h1>
        <motion.p className="mb-8" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '24rem' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
          This page doesn't exist. Let's get you back on track.
        </motion.p>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <Link to="/" className="px-7 py-3.5 font-bold uppercase inline-block" style={{ background: '#c9a020', color: '#0d1225', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
            Return Home →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
