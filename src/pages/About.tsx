import { Link } from 'react-router-dom';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';

const VALUES = [
  { num: 'I', title: 'Scriptural Authority', body: 'Every teaching, every decision, and every direction in CDN is anchored in and accountable to the Word of God. We do not teach opinions — we teach Scripture.' },
  { num: 'II', title: 'New Covenant Grace', body: 'We are committed to preaching the full realities of grace — the unconditional love, complete forgiveness, and righteousness freely given to every believer in Christ.' },
  { num: 'III', title: 'Maturity as the Measure', body: 'We do not measure success by numbers or energy. We measure it by depth — by believers who know who they are in Christ and can stand firm through any season.' },
  { num: 'IV', title: 'Church-Strengthening Ministry', body: "CDN does not compete with or replace the local church. We serve alongside it — equipping believers who return to their fellowships as stronger, more grounded members." },
  { num: 'V', title: 'Leadership Multiplication', body: 'Every mature disciple is a potential discipler. CDN exists not to create dependence, but to raise equipped believers who can reproduce what they have received.' },
];

const TIMELINE = [
  { year: 'The Beginning', title: 'A Campus Bible Study', body: 'CDN begins as a small, intentional discipleship group committed to systematic New Covenant teaching on a single campus.' },
  { year: 'Formation', title: 'The Academy is Structured', body: 'A formal two-track training curriculum is developed — Membership Training and Workers Training — providing a complete discipleship pathway.' },
  { year: 'Expansion', title: 'The Network Grows', body: 'CDN chapters emerge across Nigeria. The Bridge Reformation Model is articulated as the theological DNA of the movement.' },
  { year: 'Today', title: 'A National Movement', body: 'CDN operates across 12+ campuses, with hundreds of trained disciples and a growing vision for every university in Nigeria and beyond.' },
];

export default function About() {
  return (
    <div>
      <PageHero eyebrow="About CDN" title={<>We Are a Structured<br /><em className="not-italic text-gradient-gold">Discipleship Movement</em></>} sub="Born from a conviction that every university student deserves more than surface-level Christianity — CDN exists to raise believers genuinely grounded in the Word." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <Reveal direction="left">
              <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />Our Story</p>
              <h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-5">How CDN <em className="not-italic text-[#2a52be]">Began</em></h2>
              <p className="text-sm text-[#50556e] leading-[1.85] mb-4">The Campus Discipleship Network was born from a specific burden — the recognition that many university believers were passionate about their faith but had never been systematically taught the realities of the New Covenant. They were saved but not grounded. Sincere but untaught. Enthusiastic but easily shaken by questions they had never been equipped to answer.</p>
              <p className="text-sm text-[#50556e] leading-[1.85] mb-4">CDN began as a simple, deliberate answer to that need: a discipleship environment where the Word of God is taught systematically, where questions are welcomed, and where every believer is treated as someone with genuine potential for spiritual maturity and leadership.</p>
              <p className="text-sm text-[#50556e] leading-[1.85]">Today, CDN serves students across multiple campuses in Nigeria — not through programmes and events, but through consistent, structured, biblical discipleship.</p>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="bg-[#0d1225] p-8 mb-6">
                <p className="font-display text-xl italic text-white/85 leading-[1.6] mb-3">"The greatest need of the university campus is not more Christian activity — it is more Christian maturity."</p>
                <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[#c9a020] font-bold">— CDN Core Conviction</span>
              </div>
              <div className="relative pl-8 border-l border-[#e0ddf0]">
                {TIMELINE.map((t, i) => (
                  <div key={i} className="relative pb-8 last:pb-0">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#c9a020] shadow-[0_0_0_3px_rgba(201,160,32,0.2)]" />
                    <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[#c9a020] font-bold mb-1">{t.year}</div>
                    <div className="font-display text-lg font-semibold text-[#1a2355] mb-1">{t.title}</div>
                    <p className="text-sm text-[#50556e] leading-[1.7]">{t.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <hr className="border-[#e0ddf0] my-20" />
          <Reveal><p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-3"><span className="w-6 h-px bg-[#c9a020]" />Our Core Values</p></Reveal>
          <Reveal><h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-10">What <em className="not-italic text-[#2a52be]">Defines</em> Us</h2></Reveal>
          <div>
            {VALUES.map((v, i) => (
              <Reveal key={v.num} delay={i * 0.06} className="flex gap-5 py-6 border-b border-[#e0ddf0] last:border-0">
                <div className="font-display text-2xl font-light text-[#c9a020] min-w-8 flex-shrink-0">{v.num}</div>
                <div>
                  <div className="font-bold text-[#1a2355] mb-2">{v.title}</div>
                  <p className="text-sm text-[#50556e] leading-[1.75]">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
