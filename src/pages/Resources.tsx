import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import { ARTICLES } from '@/data/content';

const CATS = ['All','The New Covenant','Grace & Identity','Salvation','Discipleship','Leadership'];

export default function Resources() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? ARTICLES : ARTICLES.filter(a => a.cat === active);

  return (
    <div>
      <PageHero eyebrow="Articles & Teachings" title={<>Written <span className="text-gradient-gold">Resources</span><br />for Every Believer</>} sub="Carefully written articles on the New Covenant, grace, identity in Christ, discipleship, salvation, and Christian leadership." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Filter tabs */}
          <Reveal className="flex flex-wrap gap-2 mb-10">
            {CATS.map(c => (
              <motion.button key={c} onClick={() => setActive(c)}
                className="px-4 py-2 font-bold uppercase relative overflow-hidden"
                style={{ fontSize: '0.75rem', letterSpacing: '0.12em', border: '1px solid', borderColor: active === c ? '#1e2d6b' : '#e0ddf0', color: active === c ? 'white' : '#8890aa' }}
                whileTap={{ scale: 0.95 }}
              >
                {active === c && (
                  <motion.div layoutId="activeFilter" className="absolute inset-0" style={{ background: '#1e2d6b', zIndex: -1 }} transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />
                )}
                {c}
              </motion.button>
            ))}
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {filtered.map((a, i) => (
                <motion.div key={a.title}
                  className="flex flex-col cursor-pointer relative overflow-hidden"
                  style={{ border: '1px solid #e0ddf0' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                >
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: 'linear-gradient(90deg, #2a52be, #5c2fa0)', transformOrigin: 'left' }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block self-start font-bold uppercase mb-3 px-2.5 py-1" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#2a52be', border: '1px solid rgba(42,82,190,0.2)', background: 'rgba(42,82,190,0.05)' }}>{a.cat}</span>
                    <h3 className="font-display font-semibold flex-1 mb-3 leading-snug" style={{ fontSize: '1.1rem', color: '#1a2355' }}>{a.title}</h3>
                    <p className="mb-4" style={{ fontSize: '0.875rem', color: '#50556e', lineHeight: '1.75' }}>{a.excerpt}</p>
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #e0ddf0' }}>
                      <span style={{ fontSize: '0.72rem', color: '#8890aa' }}>{a.read} read</span>
                      <span className="font-bold" style={{ fontSize: '0.75rem', color: '#2a52be' }}>Read →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
