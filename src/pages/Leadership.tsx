import Reveal from '@/components/ui/Reveal'; import PageHero from '@/components/sections/PageHero'; import { LEADERS } from '@/data/content';
const LV = [
  { n: '01', t: 'The Word Above All', b: 'Every teaching, direction, and decision flows from and is accountable to Scripture. We do not add to the Word, and we do not subtract from it.' },
  { n: '02', t: 'Discipleship as Primary Ministry', b: 'Before any CDN leader manages or plans, they disciple. The primary ministry of every CDN leader is the patient, faithful, systematic formation of believers in their care.' },
  { n: '03', t: 'Doctrinal Clarity Without Harshness', b: 'We teach with conviction and compassion. CDN leaders are clear about what they believe and why — holding truth in love, welcoming questions, and creating space for understanding.' },
  { n: '04', t: 'Raising the Next Generation', b: 'The most important thing a CDN leader can accomplish is raising the next CDN leader. We measure success by what those we have discipled go on to build.' },
];
export default function Leadership() {
  return <div>
    <PageHero eyebrow="National Leadership" title={<>Led by <em className="not-italic text-gradient-gold">Servants</em><br />of the Word</>} sub="CDN is led by men who are first and foremost disciples — personally shaped by the truths they teach and deeply committed to raising a generation of university believers into maturity in Christ." />
    <section className="py-28"><div className="max-w-6xl mx-auto px-6 md:px-12">
      <Reveal className="mb-12"><p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-3"><span className="w-6 h-px bg-[#c9a020]" />Meet the Team</p><h2 className="font-display text-4xl font-semibold text-[#1a2355]">The Men Behind the <em className="not-italic text-[#2a52be]">Movement</em></h2></Reveal>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mb-20">
        {LEADERS.map((l, i) => (
          <Reveal key={l.initials} delay={i * 0.1} className="bg-white border border-[#e0ddf0] overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
            <div className={`bg-gradient-to-br ${l.color} h-72 flex flex-col items-center justify-center relative`}>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,18,37,0.6)] to-transparent" />
              <span className="font-display text-7xl font-light text-white/85 relative z-10">{l.initials}</span>
              <span className="text-[0.6rem] tracking-widest uppercase text-white/30 mt-1 relative z-10">Photo coming soon</span>
            </div>
            <div className="h-0.5 bg-gradient-to-r from-[#c9a020] to-[#2a52be]" />
            <div className="p-6">
              <div className="font-display text-xl font-semibold text-[#1a2355] mb-1">{l.name}</div>
              <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#c9a020] font-bold mb-3">{l.role}</div>
              <p className="text-sm text-[#50556e] leading-[1.8]">{l.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <hr className="border-[#e0ddf0] mb-16" />
      <Reveal><h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-10">What CDN Leaders <em className="not-italic text-[#2a52be]">Believe</em> About Leading</h2></Reveal>
      <div className="grid md:grid-cols-2 gap-4">
        {LV.map((v, i) => (
          <Reveal key={v.n} delay={i * 0.07} className="p-7 border border-[#e0ddf0] hover:border-[rgba(42,82,190,0.25)] hover:shadow-md hover:-translate-y-1 transition-all duration-200 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2a52be] to-[#5c2fa0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <p className="text-[0.62rem] tracking-[0.18em] uppercase text-[#c9a020] font-bold mb-2">Value {v.n}</p>
            <h4 className="font-display text-xl font-semibold text-[#1a2355] mb-2">{v.t}</h4>
            <p className="text-sm text-[#50556e] leading-[1.75]">{v.b}</p>
          </Reveal>
        ))}
      </div>
    </div></section>
  </div>;
}
