import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';

const BENEFITS = [
  { sym: '▸', t: 'Full Academy Access', b: 'Complete the Membership and Workers Training curriculum with a cohort of fellow disciples.' },
  { sym: '▸', t: 'Small Group Community', b: 'Be placed in a discipleship group with trained CDN members for consistent accountability.' },
  { sym: '▸', t: 'Curriculum Materials', b: 'Access all CDN study materials, notes, and supplementary resources at no charge.' },
  { sym: '▸', t: 'Leadership Pathway', b: 'For those ready to lead — a clear pathway from disciple to discipler to campus leader.' },
];

export default function Join() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', university: '', state: '', track: '', background: '', testimony: '' });
  const [submitted, setSubmitted] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(p => ({ ...p, [k]: e.target.value }));
  const inputCls = "w-full border border-[#e0ddf0] px-4 py-3 text-sm text-[#1a1f3a] focus:outline-none focus:border-[#2a52be] focus:ring-1 focus:ring-[rgba(42,82,190,0.2)] bg-white placeholder:text-[#b0b5c8] transition-all";

  return (
    <div>
      <PageHero eyebrow="Join CDN" title={<>Join the <em className="not-italic text-gradient-gold">Network</em></>} sub="Membership in CDN is not about events or programmes — it is about committing to a structured, consistent discipleship journey alongside other believers on your campus." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />Membership</p>
              <h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-5">What You <em className="not-italic text-[#2a52be]">Gain</em></h2>
              <p className="text-sm text-[#50556e] leading-[1.85] mb-8">CDN membership is free and open to every student who has personally received Jesus Christ as Lord and Saviour. All CDN resources and training are provided at no cost — always.</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.t} delay={i * 0.07} className="p-5 border border-[#e0ddf0] border-l-[3px] border-l-[#c9a020] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <h4 className="font-bold text-[#1a2355] mb-2 text-sm">{b.t}</h4>
                  <p className="text-xs text-[#50556e] leading-[1.7]">{b.b}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="p-5 bg-[#0d1225] border border-white/[0.08]">
              <p className="font-display italic text-white/85 text-base leading-[1.7] mb-2">"No CDN member is ever charged a fee. All training, all materials, all discipleship — freely given."</p>
              <span className="text-[0.62rem] tracking-[0.15em] uppercase text-[#c9a020] font-bold">CDN Membership Policy</span>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.1}>
            <div className="bg-[#f2f0f8] border border-[#e0ddf0] p-8">
              <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-2"><span className="w-6 h-px bg-[#c9a020]" />Registration</p>
              <h3 className="font-display text-2xl font-semibold text-[#1a2355] mb-6">Network Registration Form</h3>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10">
                    <div className="text-4xl mb-4">✓</div>
                    <h4 className="font-display text-xl text-[#1a2355] mb-2">Welcome to CDN</h4>
                    <p className="text-sm text-[#50556e]">Your registration has been received. You will be contacted by your campus chapter leader within the week. Welcome to the network.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input className={inputCls} placeholder="Full Name" value={form.name} onChange={set('name')} />
                      <input className={inputCls} placeholder="Email Address" type="email" value={form.email} onChange={set('email')} />
                    </div>
                    <input className={inputCls} placeholder="Phone Number" value={form.phone} onChange={set('phone')} />
                    <div className="grid grid-cols-2 gap-4">
                      <input className={inputCls} placeholder="University / Campus" value={form.university} onChange={set('university')} />
                      <input className={inputCls} placeholder="State" value={form.state} onChange={set('state')} />
                    </div>
                    <select className={inputCls} value={form.track} onChange={set('track')}>
                      <option value="">Preferred Training Track</option>
                      <option>Membership Training (Beginners)</option>
                      <option>Workers Training (Advanced)</option>
                      <option>Not Sure Yet</option>
                    </select>
                    <select className={inputCls} value={form.background} onChange={set('background')}>
                      <option value="">Christian Background</option>
                      {['New believer (less than 1 year)', 'Growing believer (1–3 years)', 'Established believer (3+ years)', 'Currently serving in ministry'].map(b => <option key={b}>{b}</option>)}
                    </select>
                    <textarea className={inputCls + ' resize-none'} rows={3} placeholder="Briefly share your salvation testimony..." value={form.testimony} onChange={set('testimony')} />
                    <button onClick={() => setSubmitted(true)} className="w-full py-3.5 bg-[#c9a020] text-[#0d1225] font-bold uppercase tracking-widest text-sm hover:bg-[#e8c040] transition-colors">
                      Join the Network →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
