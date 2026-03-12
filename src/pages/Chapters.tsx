import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import PageHero from '@/components/sections/PageHero';
import { CHAPTERS } from '@/data/content';

export default function Chapters() {
  const total = CHAPTERS.reduce((a, c) => a + c.members, 0);
  return (
    <div>
      <PageHero eyebrow="Campus Chapters" title={<><em className="not-italic text-gradient-gold">{CHAPTERS.length} Active</em><br />Campus Chapters</>} sub="CDN currently operates active discipleship chapters across major universities in Nigeria. Each chapter is led by trained disciples committed to systematic New Covenant teaching." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-3 border border-[#e0ddf0] mb-16">
            {[{ n: String(CHAPTERS.length) + '+', l: 'Active Chapters' }, { n: String(total) + '+', l: 'Disciples Trained' }, { n: '6+', l: 'States Represented' }].map((s) => (
              <div key={s.l} className="py-10 text-center border-r border-[#e0ddf0] last:border-r-0">
                <div className="font-display text-4xl font-bold text-[#1e2d6b] mb-1"><Counter value={s.n} /></div>
                <div className="text-[0.68rem] tracking-[0.1em] uppercase text-[#8890aa]">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHAPTERS.map((ch, i) => (
              <Reveal key={ch.name} delay={i * 0.07} className="group border border-[#e0ddf0] p-6 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2a52be] to-[#5c2fa0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-0 right-0 font-display text-8xl font-light text-[#f2f0f8] leading-none select-none pointer-events-none z-0">{i + 1}</div>
                <div className="relative z-10">
                  <div className="text-[0.6rem] tracking-[0.2em] uppercase text-[#c9a020] font-bold mb-2">Chapter {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-display text-xl font-semibold text-[#1a2355] mb-1">{ch.name}</h3>
                  <p className="text-sm text-[#8890aa] mb-4">{ch.location}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-[#e0ddf0] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#2a52be] to-[#5c2fa0] rounded-full transition-all duration-700" style={{ width: `${(ch.members / 50) * 100}%` }} />
                    </div>
                    <span className="text-[0.72rem] font-bold text-[#1a2355] whitespace-nowrap">{ch.members} disciples</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
