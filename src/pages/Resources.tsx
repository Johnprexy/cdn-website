import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import { ARTICLES } from '@/data/content';

const CATS = ['All', 'The New Covenant', 'Grace & Identity', 'Salvation', 'Discipleship', 'Leadership'];

export default function Resources() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? ARTICLES : ARTICLES.filter(a => a.cat === active);

  return (
    <div>
      <PageHero eyebrow="Articles & Teachings" title={<>Written <em className="not-italic text-gradient-gold">Resources</em><br />for Every Believer</>} sub="Carefully written articles on the New Covenant, grace, identity in Christ, discipleship, salvation, and Christian leadership." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal className="flex flex-wrap gap-2 mb-10">
            {CATS.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-all duration-200 ${active === c ? 'bg-[#1e2d6b] text-white border-[#1e2d6b]' : 'border-[#e0ddf0] text-[#8890aa] hover:border-[#1e2d6b] hover:text-[#1e2d6b]'}`}>{c}</button>
            ))}
          </Reveal>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filtered.map((a, i) => (
                <motion.div key={a.title} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group border border-[#e0ddf0] flex flex-col hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden cursor-pointer">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2a52be] to-[#5c2fa0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block text-[0.6rem] tracking-[0.15em] uppercase font-bold text-[#2a52be] border border-[rgba(42,82,190,0.2)] bg-[rgba(42,82,190,0.05)] px-2.5 py-1 mb-3 self-start">{a.cat}</span>
                    <h3 className="font-display text-lg font-semibold text-[#1a2355] leading-snug mb-3 flex-1">{a.title}</h3>
                    <p className="text-sm text-[#50556e] leading-[1.75] mb-4">{a.excerpt}</p>
                    <div className="flex items-center justify-between border-t border-[#e0ddf0] pt-4">
                      <span className="text-[0.72rem] text-[#8890aa]">{a.read} read</span>
                      <span className="text-xs font-bold text-[#2a52be] group-hover:text-[#c9a020] transition-colors">Read →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
