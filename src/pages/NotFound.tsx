import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1225] text-center px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="font-display text-9xl font-light text-white/10 leading-none mb-4">404</div>
        <h1 className="font-display text-3xl font-semibold text-white mb-3">Page Not Found</h1>
        <p className="text-white/45 mb-8 max-w-sm">This page doesn't exist. Let's get you back on track.</p>
        <Link to="/" className="px-7 py-3.5 bg-[#c9a020] text-[#0d1225] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c040] transition-colors inline-block">
          Return Home →
        </Link>
      </motion.div>
    </div>
  );
}
