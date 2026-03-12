import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import { LOGO_SRC } from '@/assets/logo_b64';
import { STATS, PILLARS, MEMBERSHIP_MODULES, WORKERS_MODULES, PLAYLISTS } from '@/data/content';

const TICKER_ITEMS = ['Biblical Discipleship', 'New Covenant Teaching', 'Systematic Training', 'Campus Leadership', 'Gospel Clarity', 'Maturity Over Numbers'];

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1225]">
        {/* BG layers */}
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 grid-overlay opacity-40" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full -top-24 -right-20"
          style={{ background: 'radial-gradient(circle, rgba(42,82,190,0.18), transparent 70%)', filter: 'blur(60px)' }}
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0], scale: [1, 1.05, 0.97, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full -bottom-20 -left-16"
          style={{ background: 'radial-gradient(circle, rgba(92,47,160,0.15), transparent 70%)', filter: 'blur(60px)' }}
          animate={{ x: [0, -20, 25, 0], y: [0, 15, -10, 0], scale: [1, 0.97, 1.04, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center pt-24 pb-20">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(201,160,32,0.1)] border border-[rgba(201,160,32,0.25)] rounded-full mb-8"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e8c040] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#e8c040]" />
              </span>
              <span className="text-[0.72rem] tracking-[0.15em] uppercase font-bold text-[#e8c040]">
                Active on 12+ Campuses Across Nigeria
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.06] mb-6"
            >
              Raising University<br />
              Believers{' '}
              <em className="not-italic text-gradient-gold">Grounded</em>
              <br />in the Gospel
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="text-white/60 text-base leading-[1.85] max-w-[460px] mb-8"
            >
              A structured discipleship movement equipping students through systematic New Covenant teaching — so every believer on campus grows into maturity, clarity, and fruitfulness in Christ.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/join" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c9a020] text-[#0d1225] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c040] transition-colors">
                Join the Network <ArrowRight size={15} />
              </Link>
              <Link to="/academy" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm uppercase tracking-widest font-semibold hover:bg-white/10 hover:border-white/60 transition-all">
                Explore the Academy
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.6 }}
              className="grid grid-cols-3 border border-white/[0.08]"
            >
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label} className="py-5 text-center border-r border-white/[0.08] last:border-r-0 bg-white/[0.02]">
                  <div className="font-display text-3xl font-bold text-gradient-gold leading-none">
                    <Counter value={s.num} />
                  </div>
                  <div className="text-[0.68rem] tracking-[0.1em] uppercase text-white/35 mt-1.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col gap-5"
          >
            <div className="bg-white/[0.04] border border-white/[0.08] p-10 flex flex-col items-center gap-6">
              <img src={LOGO_SRC} alt="CDN Logo" className="max-w-[200px] drop-shadow-[0_8px_40px_rgba(201,160,32,0.3)]" />
              <p className="font-display italic text-white/50 text-base text-center leading-relaxed">
                "Teaching everyone with all wisdom, that we may present everyone mature in Christ."
                <cite className="not-italic block text-[0.65rem] tracking-[0.15em] uppercase text-[#c9a020] font-bold font-body mt-2">Colossians 1:28</cite>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['New Covenant', 'Gospel Clarity', 'Systematic Training', 'Campus Ministry', 'Maturity'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 border border-white/[0.1] bg-white/[0.03] text-white/45 text-xs font-medium rounded-full">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#c9a020] overflow-hidden flex items-center">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-8 px-8 text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#0d1225]">
                <span className="opacity-40">✦</span>{item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-28 bg-[#f2f0f8]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4">
                <span className="w-6 h-px bg-[#c9a020]" />Who We Are
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1a2355] mb-5 leading-[1.1]">
                A Discipleship <em className="not-italic text-[#2a52be]">Movement</em><br />Built on the Word
              </h2>
              <p className="text-[#50556e] text-base leading-[1.85] mb-4">
                The Campus Discipleship Network exists for one purpose: to raise university students who are not merely enthusiastic about the Christian faith, but are <strong className="text-[#1a2355]">deeply grounded</strong> in it.
              </p>
              <p className="text-[0.88rem] text-[#50556e] leading-[1.75] mb-8">
                CDN is not another campus fellowship programme. It is a structured discipleship culture — one that serves students from every Christian background and equips them to go deeper in their understanding of who they are in Christ.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/about" className="px-6 py-3 bg-[#1e2d6b] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#2a52be] transition-colors">Our Story</Link>
                <Link to="/vision" className="px-6 py-3 border border-[#1e2d6b] text-[#1e2d6b] text-sm font-bold uppercase tracking-widest hover:bg-[#1e2d6b] hover:text-white transition-all">Vision & Mission</Link>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="border-l-[3px] border-[#c9a020] pl-6 bg-white py-7 pr-7 mb-5 relative">
                <span className="absolute top-0 left-4 font-display text-7xl text-[#c9a020] opacity-10 leading-none select-none">"</span>
                <p className="font-display italic text-[#1a2355] text-lg leading-[1.7] relative">
                  "And He gave some as apostles, some as prophets, some as evangelists, some as pastors and teachers, for the equipping of the saints for the work of ministry, for the building up of the body of Christ."
                </p>
                <cite className="block font-body not-italic text-[0.65rem] tracking-[0.15em] uppercase text-[#c9a020] font-bold mt-3">Ephesians 4:11–13</cite>
              </div>
              <div className="grid grid-cols-2 gap-px bg-[#e0ddf0] border border-[#e0ddf0]">
                {[['Gospel', 'Clarity in every teaching'], ['Maturity', 'The goal of every disciple'], ['Grace', 'New Covenant foundation'], ['Campus', 'Our strategic mission field']].map(([t, s]) => (
                  <div key={t} className="bg-white p-6">
                    <div className="font-display text-2xl font-bold text-[#1a2355]">{t}</div>
                    <div className="text-xs text-[#8890aa] mt-1">{s}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal className="mb-12">
            <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-3"><span className="w-6 h-px bg-[#c9a020]" />Our Foundation</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1a2355]">What Defines <em className="not-italic text-[#2a52be]">CDN</em></h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#e0ddf0]">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.08} className="group border-r border-b border-[#e0ddf0] last:border-r-0 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2a52be] to-[#5c2fa0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="p-8 group-hover:bg-[#f2f0f8] transition-colors duration-300">
                  <div className="font-display text-5xl font-light text-[#e0ddf0] group-hover:text-[rgba(201,160,32,0.3)] transition-colors duration-300 leading-none mb-5">{p.num}</div>
                  <div className="font-display text-xl font-semibold text-[#1a2355] mb-3">{p.title}</div>
                  <p className="text-sm text-[#50556e] leading-[1.75]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <div className="bg-[#0d1225] grid grid-cols-2 lg:grid-cols-4 border-t border-white/[0.06]">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="py-14 text-center border-r border-white/[0.06] last:border-r-0 border-b lg:border-b-0">
            <div className="font-display text-5xl font-bold leading-none mb-2 text-gradient-gold">
              <Counter value={s.num} />
            </div>
            <div className="text-[0.68rem] tracking-[0.12em] uppercase text-white/30">{s.label}</div>
          </Reveal>
        ))}
      </div>

      {/* ── BRIDGE PREVIEW ── */}
      <section className="py-28 bg-[#f2f0f8]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="left">
            <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />Discipleship Framework</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1a2355] mb-5">The <em className="not-italic text-[#2a52be]">Bridge</em><br />Reformation Model</h2>
            <p className="text-[#50556e] text-base leading-[1.85] mb-4">The Bridge Reformation Model positions systematic New Covenant teaching as the bridge between where a believer currently stands and where God has called them to be.</p>
            <p className="text-sm text-[#50556e] leading-[1.75] mb-8">Rather than drawing students away from their church communities, CDN disciples believers <em>within</em> their existing fellowships — enriching the entire body.</p>
            <Link to="/bridge" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e2d6b] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#2a52be] transition-colors">
              Understand the Model <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="bg-[#0d1225] border border-white/[0.08] p-8">
              <div className="grid grid-cols-[1fr_40px_1fr] items-center">
                <div className="text-center p-6">
                  <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#e8c040] font-bold mb-2">The Student</div>
                  <div className="font-display text-xl text-white mb-3">Where They Are</div>
                  <div className="text-[0.82rem] text-white/40 leading-relaxed">Saved but untaught<br />Sincere but unstable<br />Hungry but directionless</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-[rgba(201,160,32,0.5)] to-transparent" />
                  <span className="text-[#c9a020] text-xl">✟</span>
                  <span className="text-[#e8c040]">→</span>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-[rgba(201,160,32,0.5)] to-transparent" />
                </div>
                <div className="text-center p-6">
                  <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#e8c040] font-bold mb-2">The Goal</div>
                  <div className="font-display text-xl text-white mb-3">Where God Calls</div>
                  <div className="text-[0.82rem] text-white/40 leading-relaxed">Rooted in truth<br />Grounded in grace<br />Ready to disciple</div>
                </div>
              </div>
              <div className="border-t border-white/[0.08] pt-5 text-center mt-4">
                <div className="text-[0.62rem] tracking-[0.2em] uppercase text-[#c9a020] font-bold mb-1.5">The Bridge</div>
                <div className="font-display italic text-white/85 text-xl">Systematic New Covenant Discipleship</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ACADEMY PREVIEW ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <p className="flex items-center justify-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-3"><span className="w-6 h-px bg-[#c9a020]" />Structured Training</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1a2355]">The CDN <em className="not-italic text-[#2a52be]">Academy</em></h2>
            <p className="text-[#50556e] text-base max-w-lg mx-auto mt-3">A deliberate, curriculum-based journey through the most essential truths of the Christian faith.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Track 1 */}
            <Reveal delay={0.05} className="border border-[#e0ddf0] border-t-[3px] border-t-[#c9a020] p-8">
              <p className="text-[0.62rem] tracking-[0.18em] uppercase text-[#2a52be] font-bold mb-2">Track One</p>
              <h3 className="font-display text-3xl font-semibold text-[#1a2355] mb-3">Membership Training</h3>
              <p className="text-sm text-[#50556e] mb-6">8 foundational modules covering salvation, identity in Christ, grace, the Holy Spirit, faith, and love.</p>
              <div className="grid grid-cols-2 gap-x-4 mb-6">
                {MEMBERSHIP_MODULES.map((m) => (
                  <div key={m.num} className="flex items-start gap-2 py-2 border-b border-[#e0ddf0] last:border-0">
                    <span className="text-[#c9a020] font-bold text-[0.7rem] mt-0.5 flex-shrink-0">{m.num}</span>
                    <span className="text-[0.78rem] text-[#50556e]">{m.title}</span>
                  </div>
                ))}
              </div>
              <Link to="/membership" className="block text-center px-6 py-3 bg-[#1e2d6b] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#2a52be] transition-colors">View Curriculum</Link>
            </Reveal>
            {/* Track 2 */}
            <Reveal delay={0.1} className="border border-[#e0ddf0] border-t-[3px] border-t-[#7b4ec8] p-8">
              <p className="text-[0.62rem] tracking-[0.18em] uppercase text-[#7b4ec8] font-bold mb-2">Track Two</p>
              <h3 className="font-display text-3xl font-semibold text-[#1a2355] mb-3">Workers Training</h3>
              <p className="text-sm text-[#50556e] mb-6">11 advanced modules preparing believers for campus leadership, discipleship multiplication, and kingdom ministry.</p>
              <div className="grid grid-cols-2 gap-x-4 mb-6">
                {WORKERS_MODULES.slice(0, 8).map((m) => (
                  <div key={m.num} className="flex items-start gap-2 py-2 border-b border-[#e0ddf0]">
                    <span className="text-[#7b4ec8] font-bold text-[0.7rem] mt-0.5 flex-shrink-0">{m.num}</span>
                    <span className="text-[0.78rem] text-[#50556e]">{m.title}</span>
                  </div>
                ))}
                <div className="col-span-2 text-[0.78rem] text-[#8890aa] py-2 italic">+ 3 more modules...</div>
              </div>
              <Link to="/workers" className="block text-center px-6 py-3 bg-[#1e2d6b] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#2a52be] transition-colors">View Curriculum</Link>
            </Reveal>
          </div>
          <div className="text-center mt-8">
            <Link to="/academy" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c9a020] text-[#0d1225] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c040] transition-colors">
              Explore the Academy <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP PREVIEW ── */}
      <section className="py-28 bg-[#0d1225]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-start">
          <Reveal direction="left">
            <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#e8c040] mb-4"><span className="w-6 h-px bg-[#e8c040]" />National Leadership</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-5">Led by <em className="not-italic text-gradient-gold">Servants</em><br />of the Word</h2>
            <p className="text-white/55 text-base leading-[1.85] max-w-[420px] mb-8">CDN is led by men who are first and foremost disciples — personally shaped by the truths they teach and deeply committed to raising a generation of university believers into maturity.</p>
            <Link to="/leadership" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a020] text-[#0d1225] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c040] transition-colors">
              Meet the Leadership <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="grid grid-cols-2 gap-4">
            {[
              { initials: 'JA', name: 'Bro John Ayomide Akinola', role: 'National Director', grad: 'from-[#1e2d6b] to-[#2a52be]' },
              { initials: 'EA', name: 'Bro Emmanuel Adefare', role: 'National Deputy Director', grad: 'from-[#243070] to-[#5c2fa0]' },
            ].map((l) => (
              <div key={l.initials} className="bg-white overflow-hidden">
                <div className={`bg-gradient-to-br ${l.grad} h-52 flex flex-col items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,18,37,0.6)] to-transparent" />
                  <span className="font-display text-6xl font-light text-white/85 relative z-10">{l.initials}</span>
                  <span className="text-[0.62rem] tracking-widest uppercase text-white/30 mt-1 relative z-10">Photo coming soon</span>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-[#c9a020] to-[#2a52be]" />
                <div className="p-5">
                  <div className="font-display text-base font-semibold text-[#1a2355] mb-1">{l.name}</div>
                  <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#c9a020] font-bold">{l.role}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── VIDEOS PREVIEW ── */}
      <section className="py-28 bg-[#0d1225]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal className="mb-12">
            <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#e8c040] mb-3"><span className="w-6 h-px bg-[#e8c040]" />Teaching Resources</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">Watch Our <em className="not-italic text-gradient-gold">Discipleship</em> Classes</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {PLAYLISTS.map((pl, i) => (
              <Reveal key={pl.id} delay={i * 0.1}>
                <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#c9a020] font-bold mb-2 flex items-center gap-2"><span className="text-[0.6rem]">▶</span>{pl.label}</div>
                <div className="font-display text-lg text-white mb-3">{pl.title}</div>
                <div className="relative pb-[56.25%] h-0 border border-[rgba(201,160,32,0.25)] mb-3">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/videoseries?list=${pl.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen loading="lazy"
                  />
                </div>
                <p className="text-sm text-white/40 leading-[1.75]">{pl.desc}</p>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/videos" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c9a020] text-[#0d1225] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c040] transition-colors">
              View Full Video Library <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-[#0d1225] relative overflow-hidden text-center">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(201,160,32,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-2xl mx-auto px-6">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#e8c040] mb-4"><span className="w-6 h-px bg-[#e8c040]" />Take the Next Step</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">Ready to Go <em className="not-italic text-gradient-gold">Deeper</em>?</h2>
            <p className="text-white/55 text-base leading-[1.8] mb-10">Whether you are a student seeking grounded discipleship, a believer ready to be trained, or a leader with a campus vision — CDN has a place for you.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/join" className="px-7 py-3.5 bg-[#c9a020] text-[#0d1225] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c040] transition-colors">Join the Network</Link>
              <Link to="/start" className="px-7 py-3.5 border border-white/30 text-white text-sm uppercase tracking-widest font-semibold hover:bg-white/10 hover:border-white/60 transition-all">Start a Fellowship</Link>
              <Link to="/academy" className="px-7 py-3.5 border border-white/30 text-white text-sm uppercase tracking-widest font-semibold hover:bg-white/10 hover:border-white/60 transition-all">Enroll in Academy</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
