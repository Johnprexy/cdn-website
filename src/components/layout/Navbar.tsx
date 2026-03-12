import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_SRC } from '@/assets/logo_b64';

const NAV = [
  { label: 'About', children: [
    { label: 'About CDN', to: '/about' },
    { label: 'Vision & Mission', to: '/vision' },
    { label: 'Leadership', to: '/leadership' },
    { label: 'Statement of Faith', to: '/faith' },
  ]},
  { label: 'The Bridge', children: [
    { label: 'Bridge Reformation Model', to: '/bridge' },
  ]},
  { label: 'Academy', children: [
    { label: 'Academy Overview', to: '/academy' },
    { label: 'Membership Training', to: '/membership' },
    { label: 'Workers Training', to: '/workers' },
  ]},
  { label: 'Campus', children: [
    { label: 'Campus Network', to: '/campus' },
    { label: 'Campus Chapters', to: '/chapters' },
    { label: 'Start a Fellowship', to: '/start' },
  ]},
  { label: 'Resources', children: [
    { label: 'Articles & Teachings', to: '/resources' },
    { label: 'Teaching Videos', to: '/videos' },
  ]},
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenDrop(null); }, [location]);
  useEffect(() => { document.body.style.overflow = mobileOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-6 md:px-12"
        animate={{
          background: scrolled ? 'rgba(13,18,37,0.96)' : 'rgba(0,0,0,0)',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.05)' : 'none',
        }}
        transition={{ duration: 0.4 }}
        style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none' }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={LOGO_SRC} alt="CDN" className="h-12 w-auto object-contain" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }} />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-white" style={{ letterSpacing: '0.05em' }}>Campus Discipleship</span>
            <span className="font-bold text-yellow-400" style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: '2px' }}>Network</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-1">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="relative"
                onMouseEnter={() => setOpenDrop(item.label)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <button className="flex items-center gap-1 px-3.5 py-2 font-medium transition-colors"
                  style={{ color: openDrop === item.label ? 'white' : 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>
                  {item.label}
                  <motion.span animate={{ rotate: openDrop === item.label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={10} style={{ opacity: 0.5 }} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openDrop === item.label && (
                    <motion.div
                      className="absolute top-full left-1/2 mt-3 min-w-52"
                      style={{ transform: 'translateX(-50%)', background: 'rgba(13,18,37,0.98)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.07)', borderTop: '2px solid #c9a020', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="py-2 px-2">
                        {item.children.map((child, i) => (
                          <motion.div key={child.to}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                          >
                            <Link to={child.to}
                              className="block px-4 py-2.5 font-medium transition-colors rounded"
                              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}
                              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                            >
                              {child.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={item.label} to={item.to!}
                className="px-3.5 py-2 font-medium transition-colors"
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link to="/join" className="hidden lg:block px-5 py-2.5 font-bold uppercase transition-colors"
            style={{ background: '#c9a020', color: '#0d1225', fontSize: '0.78rem', letterSpacing: '0.12em' }}>
            Join the Network
          </Link>
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.span>
                : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={22} /></motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 top-20 z-40 overflow-y-auto px-8 py-8"
            style={{ background: 'rgba(13,18,37,0.99)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV.map((item, i) => (
              <motion.div key={item.label} className="mb-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                {item.children ? (
                  <>
                    <div className="mt-6 mb-2 first:mt-0 font-bold" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a020' }}>
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link key={child.to} to={child.to}
                        className="block py-3 text-base font-medium border-b"
                        style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.05)' }}>
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link to={item.to!} className="block py-3 text-base font-medium border-b"
                    style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.05)' }}>
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV.length * 0.05 + 0.1 }}
            >
              <Link to="/join" className="block mt-8 py-4 text-center font-bold uppercase"
                style={{ background: '#c9a020', color: '#0d1225', letterSpacing: '0.12em', fontSize: '0.85rem' }}>
                Join the Network →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
