import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Menu } from 'lucide-react';
import { LOGO_SRC } from '@/assets/logo_b64';

const NAV = [
  {
    label: 'About',
    children: [
      { label: 'About CDN', to: '/about' },
      { label: 'Vision & Mission', to: '/vision' },
      { label: 'Leadership', to: '/leadership' },
      { label: 'Statement of Faith', to: '/faith' },
    ],
  },
  {
    label: 'The Bridge',
    children: [
      { label: 'Bridge Reformation Model', to: '/bridge' },
      { label: 'Our Philosophy', to: '/vision' },
    ],
  },
  {
    label: 'Academy',
    children: [
      { label: 'Academy Overview', to: '/academy' },
      { label: 'Membership Training', to: '/membership' },
      { label: 'Workers Training', to: '/workers' },
    ],
  },
  {
    label: 'Campus',
    children: [
      { label: 'Campus Network', to: '/campus' },
      { label: 'Campus Chapters', to: '/chapters' },
      { label: 'Start a Fellowship', to: '/start' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Articles & Teachings', to: '/resources' },
      { label: 'Teaching Videos', to: '/videos' },
    ],
  },
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

  useEffect(() => {
    setMobileOpen(false);
    setOpenDrop(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-8 md:px-12 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(13,18,37,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.05)' : 'none',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={LOGO_SRC} alt="CDN" className="h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-white tracking-wide">Campus Discipleship</span>
            <span className="text-[0.58rem] tracking-[0.22em] uppercase font-bold text-[#e8c040] mt-0.5">Network</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-1">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDrop(item.label)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <button className="flex items-center gap-1 px-3.5 py-2 text-[0.8rem] font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap">
                  {item.label}
                  <ChevronDown size={10} className="opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-200" />
                </button>
                <AnimatePresence>
                  {openDrop === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[220px] bg-[rgba(13,18,37,0.97)] backdrop-blur-2xl border border-white/[0.07] border-t-[#c9a020] border-t-2 shadow-2xl"
                    >
                      <div className="py-2 px-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block px-4 py-2.5 text-[0.8rem] font-medium text-white/60 hover:text-white hover:bg-white/[0.06] rounded transition-all duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to!}
                className="px-3.5 py-2 text-[0.8rem] font-medium text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            to="/join"
            className="hidden lg:block px-5 py-2.5 text-[0.78rem] font-bold uppercase tracking-widest bg-[#c9a020] text-[#0d1225] hover:bg-[#e8c040] transition-colors"
          >
            Join the Network
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-20 z-40 bg-[rgba(13,18,37,0.98)] backdrop-blur-2xl overflow-y-auto px-8 py-8"
          >
            {NAV.map((item) => (
              <div key={item.label} className="mb-2">
                {item.children ? (
                  <>
                    <div className="text-[0.6rem] tracking-[0.2em] uppercase font-bold text-[#c9a020] mt-6 mb-2 first:mt-0">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block py-3 text-white/70 hover:text-white text-base font-medium border-b border-white/[0.05] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={item.to!}
                    className="block py-3 text-white/70 hover:text-white text-base font-medium border-b border-white/[0.05] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/join"
              className="block mt-8 py-4 text-center font-bold uppercase tracking-widest text-sm bg-[#c9a020] text-[#0d1225]"
            >
              Join the Network →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
