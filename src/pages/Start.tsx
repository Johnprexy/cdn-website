import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
const STEPS = [
  { n:'01', t:'Express Interest', b:'Fill out the fellowship application form below. Tell us about yourself, your campus, and your vision for discipleship in your community.' },
  { n:'02', t:'Initial Consultation', b:'A member of the CDN national leadership team will contact you to discuss your application, understand your campus context, and answer your questions.' },
  { n:'03', t:'Leadership Training', b:'Before launching, you and any co-leaders will complete a CDN leadership orientation. Chapters are built on trained leaders — never just enthusiasm.' },
  { n:'04', t:'Chapter Launch', b:'Your CDN chapter is officially commissioned. You receive full curriculum access, materials, and ongoing support from national leadership.' },
];
export default function Start() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', university:'', state:'', year:'', experience:'', vision:'' });
  const [submitted, setSubmitted] = useState(false);
  const set = (k:string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm(p=>({...p,[k]:e.target.value}));
  const inp = { border:'1px solid #e0ddf0', padding:'0.75rem 1rem', fontSize:'0.875rem', color:'#1a1f3a', width:'100%', outline:'none', background:'white' } as React.CSSProperties;
  return (
    <div>
      <PageHero eyebrow="Start a Fellowship" title={<>Bring CDN to <span className="text-gradient-gold">Your Campus</span></>} sub="If God has placed a burden for discipleship on your campus in your heart, we want to partner with you." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-bold uppercase mb-4" style={{ fontSize:'0.68rem', letterSpacing:'0.22em', color:'#c9a020' }}><span className="inline-block w-6 h-px bg-yellow-600" />How It Works</p>
              <h2 className="font-display font-semibold mb-8" style={{ fontSize:'clamp(1.75rem,3vw,2.5rem)', color:'#1a2355' }}>From Vision to <em className="not-italic" style={{ color:'#2a52be' }}>Chapter</em></h2>
            </Reveal>
            <div className="relative pl-6" style={{ borderLeft:'1px solid #e0ddf0' }}>
              {STEPS.map((s,i) => (
                <Reveal key={s.n} delay={i*0.08} className="relative pb-8 last:pb-0">
                  <div className="absolute rounded-full" style={{ left:'-21px', top:'4px', width:'10px', height:'10px', background:'#c9a020', boxShadow:'0 0 0 3px rgba(201,160,32,0.2)' }} />
                  <p className="font-bold uppercase mb-1" style={{ fontSize:'0.62rem', letterSpacing:'0.15em', color:'#c9a020' }}>Step {s.n}</p>
                  <p className="font-display font-semibold mb-1" style={{ fontSize:'1.25rem', color:'#1a2355' }}>{s.t}</p>
                  <p style={{ fontSize:'0.875rem', color:'#50556e', lineHeight:'1.7' }}>{s.b}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal direction="right" delay={0.1}>
            <div className="p-8" style={{ background:'#f2f0f8', border:'1px solid #e0ddf0' }}>
              <p className="flex items-center gap-3 font-bold uppercase mb-2" style={{ fontSize:'0.68rem', letterSpacing:'0.22em', color:'#c9a020' }}><span className="inline-block w-6 h-px bg-yellow-600" />Application</p>
              <h3 className="font-display font-semibold mb-6" style={{ fontSize:'1.5rem', color:'#1a2355' }}>Fellowship Application</h3>
              {submitted ? (
                <div className="text-center py-10">
                  <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>✓</div>
                  <h4 className="font-display" style={{ fontSize:'1.25rem', color:'#1a2355', marginBottom:'0.5rem' }}>Application Received</h4>
                  <p style={{ fontSize:'0.875rem', color:'#50556e' }}>Thank you. A member of the CDN leadership team will be in touch shortly.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input style={inp} placeholder="Full Name" value={form.name} onChange={set('name')} />
                    <input style={inp} placeholder="Email Address" type="email" value={form.email} onChange={set('email')} />
                  </div>
                  <input style={inp} placeholder="Phone Number" value={form.phone} onChange={set('phone')} />
                  <input style={inp} placeholder="University / Campus" value={form.university} onChange={set('university')} />
                  <div className="grid grid-cols-2 gap-4">
                    <input style={inp} placeholder="State" value={form.state} onChange={set('state')} />
                    <select style={inp} value={form.year} onChange={set('year')}>
                      <option value="">Year of Study</option>
                      {['100 Level','200 Level','300 Level','400 Level','500 Level','Postgraduate','Staff'].map(y=><option key={y}>{y}</option>)}
                    </select>
                  </div>
                  <select style={inp} value={form.experience} onChange={set('experience')}>
                    <option value="">Previous CDN Training</option>
                    <option>Completed Membership Training</option>
                    <option>Completed Workers Training</option>
                    <option>No prior CDN training</option>
                  </select>
                  <textarea style={{ ...inp, resize:'none' }} rows={4} placeholder="Describe your vision for discipleship on your campus..." value={form.vision} onChange={set('vision')} />
                  <button onClick={() => setSubmitted(true)} className="w-full py-3.5 font-bold uppercase transition-colors"
                    style={{ background:'#c9a020', color:'#0d1225', fontSize:'0.875rem', letterSpacing:'0.12em', border:'none', cursor:'pointer' }}>
                    Submit Application →
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
