import { Link } from 'react-router-dom';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import { MEMBERSHIP_MODULES } from '@/data/content';

export default function Membership() {
  return (
    <div>
      <PageHero eyebrow="Academy — Track One" title={<><em className="not-italic text-gradient-gold">Membership</em> Training</>} sub="The foundational discipleship curriculum of the CDN Academy — 8 essential modules that establish every new believer in the bedrock truths of salvation, grace, identity, and spiritual growth." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">
          <Reveal direction="left">
            <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />About This Track</p>
            <h2 className="font-display text-3xl font-semibold text-[#1a2355] mb-5">What Membership Training <em className="not-italic text-[#2a52be]">Establishes</em></h2>
            <p className="text-sm text-[#50556e] mb-5">A carefully sequenced 8-module course designed to ground every new believer in the essential realities of their faith:</p>
            <ul className="space-y-1 mb-7">
              {['What salvation truly means and how to be certain of it', 'Their identity as a new creation in Christ', 'The nature and sufficiency of God\'s grace', 'The person and work of the Holy Spirit', 'The nature and practice of speaking in tongues', 'How to grow spiritually in a consistent and purposeful way', 'The foundational nature of faith and how to walk in it', 'What it means to walk in love as the defining mark of maturity'].map((item, i) => (
                <li key={i} className="flex gap-3 items-start py-2 border-b border-[#e0ddf0] text-sm text-[#50556e]">
                  <span className="text-[#c9a020] font-bold text-xs mt-0.5 flex-shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
            <div className="p-5 bg-[#f2f0f8] border-l-[3px] border-[#2a52be] mb-6">
              <p className="text-[0.72rem] tracking-[0.12em] uppercase text-[#2a52be] font-bold mb-1">Open To All</p>
              <p className="text-sm text-[#50556e]">Membership Training requires no prior theological background — only genuine faith in Jesus Christ and a hunger to grow.</p>
            </div>
            <Link to="/join" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a020] text-[#0d1225] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c040] transition-colors">Enroll Now →</Link>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />The Curriculum</p>
            <h2 className="font-display text-3xl font-semibold text-[#1a2355] mb-6">8 <em className="not-italic text-[#2a52be]">Core Modules</em></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MEMBERSHIP_MODULES.map((m) => (
                <div key={m.num} className="border border-[#e0ddf0] border-l-[3px] border-l-[#2a52be] p-4 hover:border-l-[#c9a020] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#c9a020] font-bold mb-1.5">{m.num}</div>
                  <div className="font-display text-base font-semibold text-[#1a2355] leading-snug mb-2">{m.title}</div>
                  <div className="text-[0.75rem] text-[#8890aa] italic border-t border-[#e0ddf0] pt-2">{m.verse}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
