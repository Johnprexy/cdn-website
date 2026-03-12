import { Link } from 'react-router-dom';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';

const PHASES = [
  { n: '01', t: 'Establish', b: 'A core group of trained disciples is identified on a campus. They begin meeting consistently under CDN leadership to lay the foundation of a new chapter.' },
  { n: '02', t: 'Train', b: 'The core group is taken through Membership Training and, subsequently, Workers Training — ensuring that the chapter is built on doctrinally grounded leaders.' },
  { n: '03', t: 'Multiply', b: 'Trained disciples begin to disciple others. The chapter grows organically from within — never through recruitment drives, but through genuine gospel transformation.' },
];

export default function Campus() {
  return (
    <div>
      <PageHero eyebrow="Campus Network" title={<>A Movement <em className="not-italic text-gradient-gold">Rooted</em><br />on Every Campus</>} sub="CDN's campus strategy is simple: go deep before going wide. We plant discipleship communities that are built to last — not to impress." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
            <Reveal direction="left">
              <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />Our Network Model</p>
              <h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-5">How the <em className="not-italic text-[#2a52be]">Network</em> Works</h2>
              <p className="text-sm text-[#50556e] leading-[1.85] mb-4">Each CDN campus chapter operates semi-autonomously under the oversight of the national leadership. Chapters share the same curriculum, the same theological commitments, and the same mission — but are contextualised to the unique culture of each campus community.</p>
              <p className="text-sm text-[#50556e] leading-[1.85] mb-6">Chapter leaders are graduates of both Membership Training and Workers Training, ensuring that every CDN community is led by equipped, grounded believers.</p>
              <div className="p-5 bg-[#f2f0f8] border-l-[3px] border-[#c9a020]">
                <p className="text-sm font-bold text-[#1a2355] mb-1">Not a church. Not a para-church competition.</p>
                <p className="text-sm text-[#50556e]">CDN chapters meet separately for discipleship training, but every member remains active in their own local fellowship or church.</p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />Expansion Strategy</p>
              <h2 className="font-display text-3xl font-semibold text-[#1a2355] mb-6">The 3-Phase <em className="not-italic text-[#2a52be]">Expansion Model</em></h2>
              <div className="relative pl-6 border-l border-[#e0ddf0]">
                {PHASES.map((ph, i) => (
                  <div key={ph.n} className="relative pb-8 last:pb-0">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#c9a020]" />
                    <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[#c9a020] font-bold mb-1">Phase {ph.n}</div>
                    <div className="font-display text-xl font-semibold text-[#1a2355] mb-1">{ph.t}</div>
                    <p className="text-sm text-[#50556e] leading-[1.7]">{ph.b}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <hr className="border-[#e0ddf0] mb-16" />
          <div className="text-center">
            <Reveal>
              <h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-3">Want to Bring CDN to <em className="not-italic text-[#2a52be]">Your Campus</em>?</h2>
              <p className="text-[#50556e] text-base max-w-lg mx-auto mb-8">If you are a student with a burden for discipleship on your campus, we want to hear from you. CDN provides training, materials, and leadership support for every new chapter.</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/start" className="px-7 py-3.5 bg-[#c9a020] text-[#0d1225] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c040] transition-colors">Start a Fellowship</Link>
                <Link to="/chapters" className="px-7 py-3.5 border border-[#1e2d6b] text-[#1e2d6b] font-bold text-sm uppercase tracking-widest hover:bg-[#1e2d6b] hover:text-white transition-all">View All Chapters</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
