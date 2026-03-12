import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';

const PRINCIPLES = [
  { color: 'border-[#2a52be]', title: 'The Gospel Is Richer Than We Think', body: 'The New Covenant is not just the door by which we entered salvation — it is the atmosphere in which every believer must live. CDN teaches the full breadth of what Christ accomplished.' },
  { color: 'border-[#2a52be]', title: 'Transformation Comes Through Renewal', body: 'Romans 12:2 is our core methodology: behaviour changes when beliefs change. Teaching is not academic — it is the primary tool of spiritual transformation.' },
  { color: 'border-[#c9a020]', title: 'Discipleship Within, Not Apart From, Fellowship', body: 'CDN disciples students within their existing church communities. We strengthen the body — we do not create alternatives to it.' },
  { color: 'border-[#c9a020]', title: 'Systematic and Relational Formation', body: 'Truth is transmitted through relationship. Curriculum and community work together in CDN — so that doctrine becomes life, not just information.' },
  { color: 'border-[#7b4ec8]', title: 'Every Disciple is a Discipler', body: 'The model is designed to reproduce itself. As believers are trained, they become capable of training others — turning students into movement multipliers.' },
  { color: 'border-[#7b4ec8]', title: 'Maturity is Definable and Achievable', body: 'CDN believes maturity can be taught toward and recognised. A mature believer knows the gospel, walks in identity, lives in grace, and multiplies disciples.' },
];

export default function Bridge() {
  return (
    <div>
      <PageHero eyebrow="Discipleship Framework" title={<>The <em className="not-italic text-gradient-gold">Bridge</em><br />Reformation Model</>} sub="A theological framework defining how CDN disciples believers — by positioning systematic New Covenant teaching as the bridge from where a student is to where God has called them to be." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <Reveal direction="left">
              <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />The Model Explained</p>
              <h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-5">What is the <em className="not-italic text-[#2a52be]">Bridge</em>?</h2>
              <p className="text-sm text-[#50556e] leading-[1.85] mb-4">The Bridge Reformation Model begins with an honest diagnosis: there is a significant gap between what most university believers know about the gospel and what the Scriptures actually reveal. Many students are saved — but they have never been taught the full implications of what salvation means.</p>
              <p className="text-sm text-[#50556e] leading-[1.85] mb-4">The Bridge is CDN's response. Through systematic teaching of the New Covenant, CDN builds a bridge — a structured pathway connecting where students are to where God intends them to be.</p>
              <p className="text-sm text-[#50556e] leading-[1.85]">The word "Reformation" is intentional. Just as the Protestant Reformation was sparked by a return to clear biblical teaching of grace, CDN believes every generation needs a personal reformation — a renewed encounter with the truths of the gospel.</p>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="bg-[#0d1225] border border-white/[0.08] p-8 mb-5">
                <div className="grid grid-cols-[1fr_40px_1fr] items-center">
                  <div className="text-center p-5">
                    <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#e8c040] font-bold mb-2">The Student</div>
                    <div className="font-display text-xl text-white mb-3">Where They Are</div>
                    <div className="text-sm text-white/40 leading-relaxed">Saved but untaught<br />Sincere but shallow<br />Hungry but directionless</div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-8 bg-gradient-to-b from-transparent via-[rgba(201,160,32,0.5)] to-transparent" />
                    <span className="text-[#c9a020] text-xl">✟</span>
                    <span className="text-[#e8c040]">→</span>
                    <div className="w-px h-8 bg-gradient-to-b from-transparent via-[rgba(201,160,32,0.5)] to-transparent" />
                  </div>
                  <div className="text-center p-5">
                    <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#e8c040] font-bold mb-2">The Goal</div>
                    <div className="font-display text-xl text-white mb-3">Where God Calls</div>
                    <div className="text-sm text-white/40 leading-relaxed">Rooted in the Word<br />Grounded in grace<br />Ready to disciple</div>
                  </div>
                </div>
                <div className="border-t border-white/[0.08] pt-5 text-center mt-4">
                  <div className="text-[0.62rem] tracking-[0.2em] uppercase text-[#c9a020] font-bold mb-1.5">The Bridge</div>
                  <div className="font-display italic text-white/85 text-xl">Systematic New Covenant Discipleship</div>
                </div>
              </div>
              <div className="border-l-[3px] border-[#c9a020] pl-6 bg-[#f2f0f8] py-6 pr-6 relative">
                <span className="absolute top-0 left-4 font-display text-7xl text-[#c9a020] opacity-10 leading-none">"</span>
                <p className="font-display italic text-[#1a2355] text-base leading-[1.7] relative">"So then, as you received Christ Jesus the Lord, so walk in him, rooted and built up in him and established in the faith."</p>
                <cite className="block font-body not-italic text-[0.65rem] tracking-[0.15em] uppercase text-[#c9a020] font-bold mt-3">Colossians 2:6–7 — ESV</cite>
              </div>
            </Reveal>
          </div>
          <hr className="border-[#e0ddf0] my-20" />
          <Reveal><p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-3"><span className="w-6 h-px bg-[#c9a020]" />Key Principles</p></Reveal>
          <Reveal><h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-10">Six Pillars of the <em className="not-italic text-[#2a52be]">Bridge Model</em></h2></Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={i} delay={i * 0.07} className={`p-6 border-l-[3px] ${p.color} bg-[#f2f0f8]`}>
                <div className="font-bold text-[#1a2355] mb-2">{p.title}</div>
                <p className="text-sm text-[#50556e] leading-[1.75]">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
