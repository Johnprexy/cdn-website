import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';

export default function Vision() {
  return (
    <div>
      <PageHero eyebrow="Vision & Mission" title={<><em className="not-italic text-gradient-gold">Maturity</em> Over<br />Geography</>} sub="We are not a movement trying to be everywhere. We are a movement committed to going deep — trusting that genuine depth will, in time, produce enduring breadth." />
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal><p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-3"><span className="w-6 h-px bg-[#c9a020]" />Vision Statement</p></Reveal>
          <Reveal><h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-5">Our <em className="not-italic text-[#2a52be]">Vision</em></h2></Reveal>
          <Reveal><div className="font-display text-2xl font-light leading-[1.5] text-[#1a2355] border-l-[3px] border-[#c9a020] pl-7 my-8">"To see every university campus populated with mature, doctrinally-grounded believers who understand the gospel of the New Covenant, know who they are in Christ, and are equipped to disciple others."</div></Reveal>
          <Reveal><p className="text-sm text-[#50556e] leading-[1.85]">This vision is rooted in Colossians 1:28 — that every believer can be presented mature in Christ through faithful proclamation and patient teaching.</p></Reveal>
          <hr className="border-[#e0ddf0] my-16" />
          <Reveal><p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-3"><span className="w-6 h-px bg-[#c9a020]" />Mission</p></Reveal>
          <Reveal><h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-8">Our <em className="not-italic text-[#2a52be]">Mission</em></h2></Reveal>
          {[
            { n: '1', t: 'Teach the New Covenant Systematically', b: 'We create structured learning environments where believers progress through a comprehensive curriculum — from salvation and identity to spiritual leadership and discipleship multiplication.' },
            { n: '2', t: 'Disciple Within Existing Fellowships', b: "CDN operates alongside local churches — not in competition. We strengthen the body from within, equipping believers to be more valuable members of their own congregations." },
            { n: '3', t: 'Multiply Disciple-Makers', b: 'Every CDN graduate is not just a disciple — they are a trained discipler. Our mission succeeds when those we have taught begin to teach others, sustaining the movement across every campus.' },
          ].map((m, i) => (
            <Reveal key={m.n} delay={i * 0.08} className="flex gap-5 py-6 border-b border-[#e0ddf0] last:border-0">
              <div className="font-display text-2xl font-light text-[#c9a020] min-w-8">{m.n}</div>
              <div><div className="font-bold text-[#1a2355] mb-2">{m.t}</div><p className="text-sm text-[#50556e] leading-[1.75]">{m.b}</p></div>
            </Reveal>
          ))}
          <hr className="border-[#e0ddf0] my-16" />
          <Reveal><p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-3"><span className="w-6 h-px bg-[#c9a020]" />Philosophy</p></Reveal>
          <Reveal><h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-5">Maturity Over <em className="not-italic text-[#2a52be]">Geography</em></h2></Reveal>
          <Reveal><p className="text-sm text-[#50556e] leading-[1.85] mb-4">In an era when success is measured by reach and attendance, CDN has deliberately chosen a different standard: depth. We believe that ten deeply rooted disciples will do more lasting kingdom work than a hundred enthusiastic but untaught believers.</p></Reveal>
          <Reveal><p className="text-sm text-[#50556e] leading-[1.85]">This philosophy means we take our time. We do not skip content for the sake of speed. We trust that faithfulness to the Word, consistently delivered over time, is the only strategy that produces lasting fruit.</p></Reveal>
        </div>
      </section>
    </div>
  );
}
