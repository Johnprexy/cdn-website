import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import { FAQS } from '@/data/content';
export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm(p => ({...p,[k]:e.target.value}));
  const inp = { border: '1px solid #e0ddf0', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#1a1f3a', width: '100%', outline: 'none', background: 'white' } as React.CSSProperties;
  return (
    <div>
      <PageHero eyebrow="Contact CDN" title={<>Get in <span className="text-gradient-gold">Touch</span></>} sub="Have questions about CDN, the Academy, or joining the network? We would love to hear from you." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-bold uppercase mb-4" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: '#c9a020' }}><span className="inline-block w-6 h-px bg-yellow-600" />FAQs</p>
              <h2 className="font-display font-semibold mb-8" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#1a2355' }}>Frequently Asked <em className="not-italic" style={{ color: '#2a52be' }}>Questions</em></h2>
            </Reveal>
            <div style={{ border: '1px solid #e0ddf0' }}>
              {FAQS.map((faq, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div style={{ borderBottom: i < FAQS.length - 1 ? '1px solid #e0ddf0' : 'none' }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left"
                      style={{ background: 'transparent' }}>
                      <span className="font-semibold" style={{ fontSize: '0.875rem', color: '#1a2355' }}>{faq.q}</span>
                      <ChevronDown size={16} style={{ color: '#c9a020', flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                    {openFaq === i && (
                      <p className="px-6 pb-6" style={{ fontSize: '0.875rem', color: '#50556e', lineHeight: '1.85' }}>{faq.a}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal direction="right" delay={0.1}>
            <p className="flex items-center gap-3 font-bold uppercase mb-4" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: '#c9a020' }}><span className="inline-block w-6 h-px bg-yellow-600" />Message Us</p>
            <h2 className="font-display font-semibold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#1a2355' }}>Send a <em className="not-italic" style={{ color: '#2a52be' }}>Message</em></h2>
            {sent ? (
              <div className="text-center py-16" style={{ background: '#f2f0f8', border: '1px solid #e0ddf0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                <h4 className="font-display" style={{ fontSize: '1.25rem', color: '#1a2355', marginBottom: '0.5rem' }}>Message Sent</h4>
                <p style={{ fontSize: '0.875rem', color: '#50556e' }}>We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input style={inp} placeholder="Your Name" value={form.name} onChange={set('name')} />
                  <input style={inp} placeholder="Email Address" type="email" value={form.email} onChange={set('email')} />
                </div>
                <select style={inp} value={form.subject} onChange={set('subject')}>
                  <option value="">Select a Topic</option>
                  {['General Enquiry','The CDN Academy','Joining the Network','Starting a Chapter','Teaching Resources','Partnership'].map(s=><option key={s}>{s}</option>)}
                </select>
                <textarea style={{ ...inp, resize: 'none' }} rows={5} placeholder="Your message..." value={form.message} onChange={set('message')} />
                <button onClick={() => setSent(true)} className="w-full py-3.5 font-bold uppercase transition-colors"
                  style={{ background: '#1e2d6b', color: 'white', fontSize: '0.875rem', letterSpacing: '0.12em', border: 'none', cursor: 'pointer' }}>
                  Send Message →
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
