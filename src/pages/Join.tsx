import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
const BENEFITS = [
  { t:'Full Academy Access', b:'Complete the Membership and Workers Training curriculum with a cohort of fellow disciples.' },
  { t:'Small Group Community', b:'Be placed in a discipleship group with trained CDN members for consistent accountability.' },
  { t:'Curriculum Materials', b:'Access all CDN study materials, notes, and supplementary resources at no charge.' },
  { t:'Leadership Pathway', b:'For those ready to lead — a clear pathway from disciple to discipler to campus leader.' },
];
export default function Join() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', university:'', state:'', track:'', background:'', testimony:'' });
  const [submitted, setSubmitted] = useState(false);
  const set = (k:string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm(p=>({...p,[k]:e.target.value}));
  const inp = { border:'1px solid #e0ddf0', padding:'0.75rem 1rem', fontSize:'0.875rem', color:'#1a1f3a', width:'100%', outline:'none', background:'white' } as React.CSSProperties;
  return (
    <div>
      <PageHero eyebrow="Join CDN" title={<>Join the <span className="text-gradient-gold">Network</span></>} sub="Membership in CDN is not about events or programmes — it is about committing to a structured, consistent discipleship journey alongside other believers on your campus." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-bold uppercase mb-4" style={{ fontSize:'0.68rem', letterSpacing:'0.22em', color:'#c9a020' }}><span className="inline-block w-6 h-px bg-yellow-600" />Membership</p>
              <h2 className="font-display font-semibold mb-5" style={{ fontSize:'clamp(1.75rem,3vw,2.5rem)', color:'#1a2355' }}>What You <em className="not-italic" style={{ color:'#2a52be' }}>Gain</em></h2>
              <p className="mb-8" style={{ fontSize:'0.875rem', color:'#50556e', lineHeight:'1.85' }}>CDN membership is free and open to every student who has personally received Jesus Christ as Lord and Saviour. All resources and training are provided at no cost — always.</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {BENEFITS.map((b,i) => (
                <Reveal key={b.t} delay={i*0.07} className="p-5" style={{ border:'1px solid #e0ddf0', borderLeft:'3px solid #c9a020' }}>
                  <h4 className="font-bold mb-2" style={{ fontSize:'0.875rem', color:'#1a2355' }}>{b.t}</h4>
                  <p style={{ fontSize:'0.75rem', color:'#50556e', lineHeight:'1.7' }}>{b.b}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal direction="right" delay={0.1}>
            <div className="p-8" style={{ background:'#f2f0f8', border:'1px solid #e0ddf0' }}>
              <p className="flex items-center gap-3 font-bold uppercase mb-2" style={{ fontSize:'0.68rem', letterSpacing:'0.22em', color:'#c9a020' }}><span className="inline-block w-6 h-px bg-yellow-600" />Registration</p>
              <h3 className="font-display font-semibold mb-6" style={{ fontSize:'1.5rem', color:'#1a2355' }}>Network Registration Form</h3>
              {submitted ? (
                <div className="text-center py-10">
                  <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>✓</div>
                  <h4 className="font-display" style={{ fontSize:'1.25rem', color:'#1a2355', marginBottom:'0.5rem' }}>Welcome to CDN</h4>
                  <p style={{ fontSize:'0.875rem', color:'#50556e' }}>Your registration has been received. You will be contacted by your campus chapter leader within the week.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input style={inp} placeholder="Full Name" value={form.name} onChange={set('name')} />
                    <input style={inp} placeholder="Email Address" type="email" value={form.email} onChange={set('email')} />
                  </div>
                  <input style={inp} placeholder="Phone Number" value={form.phone} onChange={set('phone')} />
                  <div className="grid grid-cols-2 gap-4">
                    <input style={inp} placeholder="University / Campus" value={form.university} onChange={set('university')} />
                    <input style={inp} placeholder="State" value={form.state} onChange={set('state')} />
                  </div>
                  <select style={inp} value={form.track} onChange={set('track')}>
                    <option value="">Preferred Training Track</option>
                    <option>Membership Training (Beginners)</option>
                    <option>Workers Training (Advanced)</option>
                    <option>Not Sure Yet</option>
                  </select>
                  <select style={inp} value={form.background} onChange={set('background')}>
                    <option value="">Christian Background</option>
                    {['New believer (less than 1 year)','Growing believer (1–3 years)','Established believer (3+ years)','Currently serving in ministry'].map(b=><option key={b}>{b}</option>)}
                  </select>
                  <textarea style={{ ...inp, resize:'none' }} rows={3} placeholder="Briefly share your salvation testimony..." value={form.testimony} onChange={set('testimony')} />
                  <button onClick={() => setSubmitted(true)} className="w-full py-3.5 font-bold uppercase transition-colors"
                    style={{ background:'#c9a020', color:'#0d1225', fontSize:'0.875rem', letterSpacing:'0.12em', border:'none', cursor:'pointer' }}>
                    Join the Network →
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
