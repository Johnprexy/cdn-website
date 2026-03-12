import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';

const STEPS = [
  { n: '01', t: 'Express Interest', b: 'Fill out the fellowship application form below. Tell us about yourself, your campus, and your vision for discipleship in your community.' },
  { n: '02', t: 'Initial Consultation', b: 'A member of the CDN national leadership team will contact you to discuss your application, understand your campus context, and answer your questions.' },
  { n: '03', t: 'Leadership Training', b: 'Before launching, you and any co-leaders will complete an intensive CDN leadership orientation. Chapters are built on trained leaders — never just enthusiasm.' },
  { n: '04', t: 'Chapter Launch', b: 'Your CDN chapter is officially commissioned. You receive full curriculum access, materials, and ongoing support from national leadership as you begin building.' },
];

export default function Start() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', university: '', state: '', year: '', experience: '', vision: '' });
  const [submitted, setSubmitted] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(p => ({ ...p, [k]: e.target.value }));

  const inputCls = "w-full border border-[#e0ddf0] px-4 py-3 text-sm text-[#1a1f3a] focus:outline-none focus:border-[#2a52be] focus:ring-1 focus:ring-[rgba(42,82,190,0.2)] transition-all bg-white placeholder:text-[#b0b5c8]";

  return (
    <div>
      <PageHero eyebrow="Start a Fellowship" title={<>Bring CDN to <em className="not-italic text-gradient-gold">Your Campus</em></>} sub="If God has placed a burden for discipleship on your campus in your heart, we want to partner with you. CDN provides everything a chapter needs — curriculum, training, and ongoing support." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <Reveal>
                <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />How It Works</p>
                <h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-8">From Vision to <em className="not-italic text-[#2a52be]">Chapter</em></h2>
              </Reveal>
              <div className="relative pl-6 border-l border-[#e0ddf0]">
                {STEPS.map((s, i) => (
                  <Reveal key={s.n} delay={i * 0.08} className="relative pb-8 last:pb-0">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#c9a020] shadow-[0_0_0_3px_rgba(201,160,32,0.2)]" />
                    <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[#c9a020] font-bold mb-1">Step {s.n}</div>
                    <div className="font-display text-xl font-semibold text-[#1a2355] mb-1">{s.t}</div>
                    <p className="text-sm text-[#50556e] leading-[1.7]">{s.b}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal direction="right" delay={0.1}>
              <div className="bg-[#f2f0f8] border border-[#e0ddf0] p-8">
                <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-2"><span className="w-6 h-px bg-[#c9a020]" />Application</p>
                <h3 className="font-display text-2xl font-semibold text-[#1a2355] mb-6">Fellowship Application</h3>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10">
                      <div className="text-4xl mb-4">✓</div>
                      <h4 className="font-display text-xl text-[#1a2355] mb-2">Application Received</h4>
                      <p className="text-sm text-[#50556e]">Thank you. A member of the CDN leadership team will be in touch shortly to discuss next steps.</p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input className={inputCls} placeholder="Full Name" value={form.name} onChange={set('name')} />
                        <input className={inputCls} placeholder="Email Address" type="email" value={form.email} onChange={set('email')} />
                      </div>
                      <input className={inputCls} placeholder="Phone Number" value={form.phone} onChange={set('phone')} />
                      <input className={inputCls} placeholder="University / Campus" value={form.university} onChange={set('university')} />
                      <div className="grid grid-cols-2 gap-4">
                        <input className={inputCls} placeholder="State" value={form.state} onChange={set('state')} />
                        <select className={inputCls} value={form.year} onChange={set('year')}>
                          <option value="">Year of Study</option>
                          {['100 Level', '200 Level', '300 Level', '400 Level', '500 Level', 'Postgraduate', 'Staff'].map(y => <option key={y}>{y}</option>)}
                        </select>
                      </div>
                      <select className={inputCls} value={form.experience} onChange={set('experience')}>
                        <option value="">Previous CDN Training</option>
                        <option>Completed Membership Training</option>
                        <option>Completed Workers Training</option>
                        <option>No prior CDN training</option>
                      </select>
                      <textarea className={inputCls + ' resize-none'} rows={4} placeholder="Describe your vision for discipleship on your campus..." value={form.vision} onChange={set('vision')} />
                      <button onClick={() => setSubmitted(true)} className="w-full py-3.5 bg-[#c9a020] text-[#0d1225] font-bold uppercase tracking-widest text-sm hover:bg-[#e8c040] transition-colors">
                        Submit Application →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
