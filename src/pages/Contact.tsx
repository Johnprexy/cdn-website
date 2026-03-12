import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import { FAQS } from '@/data/content';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm(p => ({ ...p, [k]: e.target.value }));
  const inputCls = "w-full border border-[#e0ddf0] px-4 py-3 text-sm text-[#1a1f3a] focus:outline-none focus:border-[#2a52be] focus:ring-1 focus:ring-[rgba(42,82,190,0.2)] bg-white placeholder:text-[#b0b5c8] transition-all";

  return (
    <div>
      <PageHero eyebrow="Contact CDN" title={<>Get in <em className="not-italic text-gradient-gold">Touch</em></>} sub="Have questions about CDN, the Academy, or joining the network? We would love to hear from you." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />FAQs</p>
              <h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-8">Frequently Asked <em className="not-italic text-[#2a52be]">Questions</em></h2>
            </Reveal>
            <div className="border border-[#e0ddf0]">
              {FAQS.map((faq, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="border-b border-[#e0ddf0] last:border-b-0">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#f9f8fc] transition-colors">
                      <span className="font-semibold text-[#1a2355] text-sm">{faq.q}</span>
                      <ChevronDown size={16} className={`text-[#c9a020] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                          <p className="px-6 pb-6 text-sm text-[#50556e] leading-[1.85]">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal direction="right" delay={0.1}>
            <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />Message Us</p>
            <h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-6">Send a <em className="not-italic text-[#2a52be]">Message</em></h2>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="sent" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16 bg-[#f2f0f8] border border-[#e0ddf0]">
                  <div className="text-4xl mb-4">✓</div>
                  <h4 className="font-display text-xl text-[#1a2355] mb-2">Message Sent</h4>
                  <p className="text-sm text-[#50556e]">We will get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input className={inputCls} placeholder="Your Name" value={form.name} onChange={set('name')} />
                    <input className={inputCls} placeholder="Email Address" type="email" value={form.email} onChange={set('email')} />
                  </div>
                  <select className={inputCls} value={form.subject} onChange={set('subject')}>
                    <option value="">Select a Topic</option>
                    {['General Enquiry', 'The CDN Academy', 'Joining the Network', 'Starting a Chapter', 'Teaching Resources', 'Partnership'].map(s => <option key={s}>{s}</option>)}
                  </select>
                  <textarea className={inputCls + ' resize-none'} rows={5} placeholder="Your message..." value={form.message} onChange={set('message')} />
                  <button onClick={() => setSent(true)} className="w-full py-3.5 bg-[#1e2d6b] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#2a52be] transition-colors">
                    Send Message →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
