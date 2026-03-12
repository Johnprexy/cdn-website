import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="flex items-center justify-center text-center px-6" style={{ minHeight: '100vh', background: '#0d1225' }}>
      <div>
        <div className="font-display font-light mb-4" style={{ fontSize: '8rem', lineHeight: 1, color: 'rgba(255,255,255,0.08)' }}>404</div>
        <h1 className="font-display font-semibold text-white mb-3" style={{ fontSize: '1.875rem' }}>Page Not Found</h1>
        <p className="mb-8" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '24rem' }}>This page doesn't exist. Let's get you back on track.</p>
        <Link to="/" className="px-7 py-3.5 font-bold uppercase inline-block transition-colors" style={{ background: '#c9a020', color: '#0d1225', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
          Return Home →
        </Link>
      </div>
    </div>
  );
}
