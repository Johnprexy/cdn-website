import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import { PLAYLISTS } from '@/data/content';

export default function Videos() {
  return (
    <div>
      <PageHero eyebrow="Teaching Videos" title={<>Watch CDN's <em className="not-italic text-gradient-gold">Discipleship</em> Classes</>} sub="Freely accessible video teachings covering the full CDN curriculum — from foundational salvation truths to advanced leadership formation. Freely you have received; freely watch." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {PLAYLISTS.map((pl, i) => (
            <Reveal key={pl.id} delay={i * 0.1} className="mb-16 last:mb-0">
              <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
                <div>
                  <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-3"><span className="w-6 h-px bg-[#c9a020]" />{pl.label}</p>
                  <h2 className="font-display text-3xl font-semibold text-[#1a2355] mb-4 leading-snug">{pl.title}</h2>
                  <p className="text-sm text-[#50556e] leading-[1.8] mb-5">{pl.desc}</p>
                  <div className="space-y-1.5">
                    {pl.topics.map(t => (
                      <div key={t} className="flex items-center gap-2 text-sm text-[#50556e]">
                        <span className="text-[#c9a020]">▸</span>{t}
                      </div>
                    ))}
                  </div>
                  <a href={`https://www.youtube.com/playlist?list=${pl.id}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-[#0d1225] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#c9a020] hover:text-[#0d1225] transition-all">
                    Open on YouTube →
                  </a>
                </div>
                <div className="relative pb-[56.25%] h-0 border border-[#e0ddf0] shadow-md">
                  <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/videoseries?list=${pl.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" title={pl.title} />
                </div>
              </div>
              {i < PLAYLISTS.length - 1 && <hr className="border-[#e0ddf0] mt-16" />}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
