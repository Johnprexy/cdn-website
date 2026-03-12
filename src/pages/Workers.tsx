import { Link } from 'react-router-dom'; import Reveal from '@/components/ui/Reveal'; import PageHero from '@/components/sections/PageHero'; import { WORKERS_MODULES } from '@/data/content';
export default function Workers() {
  return <div>
    <PageHero eyebrow="Academy — Track Two" title={<><em className="not-italic text-gradient-gold">Workers</em> Training</>} sub="The advanced leadership formation pathway of the CDN Academy — 11 modules preparing believers for campus leadership, discipleship multiplication, spiritual warfare, and gospel ministry." />
    <section className="py-28"><div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">
      <Reveal direction="left">
        <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />About This Track</p>
        <h2 className="font-display text-3xl font-semibold text-[#1a2355] mb-5">What Workers Training <em className="not-italic text-[#7b4ec8]">Produces</em></h2>
        <p className="text-sm text-[#50556e] mb-5">Workers Training prepares believers who have completed Membership Training to become active disciple-makers and campus ministry leaders. This track equips for:</p>
        <ul className="space-y-1 mb-7">{['Campus leadership and small group facilitation', 'Discipleship multiplication and mentoring', 'Effective personal evangelism and faith sharing', 'Understanding and engaging in spiritual warfare', 'Kingdom understanding and the believer\'s authority', 'Ministry ethics, small group dynamics, and purpose-driven living'].map((item, i) => (
          <li key={i} className="flex gap-3 items-start py-2 border-b border-[#e0ddf0] text-sm text-[#50556e]"><span className="text-[#7b4ec8] font-bold text-xs mt-0.5 flex-shrink-0">✓</span>{item}</li>
        ))}</ul>
        <div className="p-5 bg-[#f2f0f8] border-l-[3px] border-[#7b4ec8] mb-6"><p className="text-[0.72rem] tracking-[0.12em] uppercase text-[#7b4ec8] font-bold mb-1">Prerequisite</p><p className="text-sm text-[#50556e]">Completion of Membership Training is required before enrolling in Workers Training.</p></div>
        <Link to="/join" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e2d6b] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#2a52be] transition-colors">Apply for Workers Training →</Link>
      </Reveal>
      <Reveal direction="right" delay={0.1}>
        <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />The Curriculum</p>
        <h2 className="font-display text-3xl font-semibold text-[#1a2355] mb-6">11 <em className="not-italic text-[#7b4ec8]">Leadership Modules</em></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {WORKERS_MODULES.map((m) => (
            <div key={m.num} className={`border border-[#e0ddf0] border-l-[3px] ${m.special ? 'border-l-[#c9a020] col-span-2' : 'border-l-[#7b4ec8]'} p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}>
              <div className={`text-[0.62rem] tracking-[0.18em] uppercase font-bold mb-1.5 ${m.special ? 'text-[#c9a020]' : 'text-[#7b4ec8]'}`}>{m.special ? 'Special Module' : m.num}</div>
              <div className="font-display text-base font-semibold text-[#1a2355] leading-snug">{m.title}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div></section>
  </div>;
}
