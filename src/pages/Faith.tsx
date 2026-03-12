import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import { FAITH_ARTICLES } from '@/data/content';

export default function Faith() {
  return (
    <div>
      <PageHero eyebrow="Our Beliefs" title={<>What CDN <em className="not-italic text-gradient-gold">Believes</em></>} sub="CDN's discipleship is anchored in clear theological conviction. The following ten articles represent the core doctrinal commitments that shape everything we teach." />
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal className="border-l-[3px] border-[#c9a020] pl-6 bg-[#f2f0f8] py-6 pr-6 mb-16 relative">
            <span className="absolute top-0 left-4 font-display text-7xl text-[#c9a020] opacity-10 leading-none select-none">"</span>
            <p className="font-display italic text-[#1a2355] text-base leading-[1.7] relative">"All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work."</p>
            <cite className="block font-body not-italic text-[0.65rem] tracking-[0.15em] uppercase text-[#c9a020] font-bold mt-3">2 Timothy 3:16–17 — ESV</cite>
          </Reveal>
          <div>
            {FAITH_ARTICLES.map((a, i) => (
              <Reveal key={a.num} delay={i * 0.05} className="py-7 border-b border-[#e0ddf0] last:border-0 flex gap-6 group hover:bg-[#f9f8fc] transition-colors px-2 -mx-2">
                <div className="font-display text-2xl font-light text-[#c9a020] opacity-60 group-hover:opacity-100 transition-opacity min-w-[2.5rem] flex-shrink-0 mt-1">{a.num}</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#1a2355] mb-2">{a.title}</h3>
                  <p className="text-sm text-[#50556e] leading-[1.85]">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
