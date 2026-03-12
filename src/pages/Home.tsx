import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import { LOGO_SRC } from '@/assets/logo_b64';
import { STATS, PILLARS, MEMBERSHIP_MODULES, WORKERS_MODULES, PLAYLISTS } from '@/data/content';

const TICKER = ['Biblical Discipleship','New Covenant Teaching','Systematic Training','Campus Leadership','Gospel Clarity','Maturity Over Numbers'];

const ORBS = [
  { w: 500, h: 500, top: '-10%', left: '-5%',  color: 'rgba(42,82,190,0.18)',  dur: 8,  delay: 0 },
  { w: 400, h: 400, top: '20%',  right: '-8%', color: 'rgba(92,47,160,0.14)',  dur: 11, delay: 2 },
  { w: 300, h: 300, bottom:'5%', left: '30%',  color: 'rgba(201,160,32,0.07)', dur: 9,  delay: 4 },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '100vh', background: '#0d1225' }}>
        {/* Animated orbs */}
        {ORBS.map((orb, i) => (
          <motion.div key={i}
            className="absolute rounded-full pointer-events-none"
            style={{ width: orb.w, height: orb.h, top: orb.top, left: (orb as any).left, right: (orb as any).right, bottom: (orb as any).bottom, background: `radial-gradient(circle, ${orb.color}, transparent 70%)`, filter: 'blur(60px)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: orb.dur, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
          />
        ))}

        {/* Grid overlay */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 rounded-full px-3 py-1.5"
              style={{ background: 'rgba(201,160,32,0.1)', border: '1px solid rgba(201,160,32,0.25)' }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-400" />
              </span>
              <span className="font-bold text-yellow-400" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Active on 12+ Campuses Across Nigeria
              </span>
            </motion.div>

            <motion.h1
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.06' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Raising University<br />
              Believers{' '}
              <span className="text-gradient-gold">Grounded</span>
              <br />in the Gospel
            </motion.h1>

            <motion.p
              className="mb-8 text-base leading-loose max-w-lg"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              A structured discipleship movement equipping students through systematic New Covenant teaching — so every believer on campus grows into maturity, clarity, and fruitfulness in Christ.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/join" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold uppercase"
                  style={{ background: '#c9a020', color: '#0d1225', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
                  Join the Network <ArrowRight size={15} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/academy" className="inline-flex items-center px-7 py-3.5 font-semibold uppercase"
                  style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
                  Explore the Academy
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-3"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {STATS.slice(0,3).map((s) => (
                <div key={s.label} className="py-5 text-center" style={{ borderRight: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
                  <div className="font-display font-bold text-gradient-gold" style={{ fontSize: '1.875rem', lineHeight: 1 }}>
                    <Counter value={s.num} />
                  </div>
                  <div className="uppercase mt-1.5" style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right card */}
          <motion.div
            className="hidden lg:flex flex-col gap-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex flex-col items-center gap-6 p-10"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              whileHover={{ borderColor: 'rgba(201,160,32,0.3)', background: 'rgba(255,255,255,0.06)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={LOGO_SRC} alt="CDN Logo"
                style={{ maxWidth: '200px', filter: 'drop-shadow(0 8px 40px rgba(201,160,32,0.3))' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <p className="font-display italic text-center leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
                "Teaching everyone with all wisdom, that we may present everyone mature in Christ."
                <cite className="not-italic block font-body font-bold mt-2" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a020' }}>Colossians 1:28</cite>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center overflow-hidden" style={{ height: '2.5rem', background: '#c9a020' }}>
          <motion.div
            style={{ display: 'flex', whiteSpace: 'nowrap' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {[...TICKER, ...TICKER].map((item, i) => (
              <span key={i} className="flex items-center gap-6 px-8 font-bold uppercase" style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: '#0d1225' }}>
                <span style={{ opacity: 0.4 }}>✦</span>{item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-28" style={{ background: '#f2f0f8' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <p className="flex items-center gap-3 font-bold uppercase mb-4" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: '#c9a020' }}>
                <span className="inline-block w-6 h-px bg-yellow-600" />Who We Are
              </p>
              <h2 className="font-display font-semibold mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, color: '#1a2355' }}>
                A Discipleship <em className="not-italic" style={{ color: '#2a52be' }}>Movement</em><br />Built on the Word
              </h2>
              <p className="text-base leading-loose mb-4" style={{ color: '#50556e' }}>
                The Campus Discipleship Network exists for one purpose: to raise university students who are not merely enthusiastic about the Christian faith, but are <strong style={{ color: '#1a2355' }}>deeply grounded</strong> in it.
              </p>
              <p className="mb-8 leading-loose" style={{ fontSize: '0.88rem', color: '#50556e' }}>
                CDN is not another campus fellowship programme. It is a structured discipleship culture — equipping students from every Christian background to go deeper in their understanding of who they are in Christ.
              </p>
              <div className="flex gap-4 flex-wrap">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/about" className="px-6 py-3 font-bold uppercase" style={{ background: '#1e2d6b', color: 'white', fontSize: '0.85rem', letterSpacing: '0.12em' }}>Our Story</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/vision" className="px-6 py-3 font-bold uppercase" style={{ border: '1px solid #1e2d6b', color: '#1e2d6b', fontSize: '0.85rem', letterSpacing: '0.12em' }}>Vision & Mission</Link>
                </motion.div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="mb-5 py-7 pr-7 pl-6 relative" style={{ borderLeft: '3px solid #c9a020', background: 'white' }}>
                <p className="font-display italic leading-loose" style={{ color: '#1a2355', fontSize: '1.1rem' }}>
                  "And He gave some as apostles, some as prophets, some as evangelists, some as pastors and teachers, for the equipping of the saints for the work of ministry."
                </p>
                <cite className="block font-body not-italic font-bold mt-3" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a020' }}>Ephesians 4:11–13</cite>
              </div>
              <div className="grid grid-cols-2 gap-px" style={{ background: '#e0ddf0', border: '1px solid #e0ddf0' }}>
                {[['Gospel','Clarity in every teaching'],['Maturity','The goal of every disciple'],['Grace','New Covenant foundation'],['Campus','Our strategic mission field']].map(([t,s]) => (
                  <motion.div key={t} className="bg-white p-6" whileHover={{ background: '#f2f0f8' }} transition={{ duration: 0.2 }}>
                    <div className="font-display font-bold" style={{ fontSize: '1.5rem', color: '#1a2355' }}>{t}</div>
                    <div style={{ fontSize: '0.75rem', color: '#8890aa', marginTop: '4px' }}>{s}</div>
                  </motion.div>
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
            <p className="flex items-center gap-3 font-bold uppercase mb-3" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: '#c9a020' }}><span className="inline-block w-6 h-px bg-yellow-600" />Our Foundation</p>
            <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a2355' }}>What Defines <em className="not-italic" style={{ color: '#2a52be' }}>CDN</em></h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ border: '1px solid #e0ddf0' }}>
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.08}>
                <motion.div
                  className="p-8 h-full relative overflow-hidden"
                  style={{ borderRight: '1px solid #e0ddf0', borderBottom: '1px solid #e0ddf0' }}
                  whileHover={{ background: '#f2f0f8' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: 'linear-gradient(90deg, #2a52be, #5c2fa0)', transformOrigin: 'left' }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="font-display font-light mb-5" style={{ fontSize: '3rem', lineHeight: 1, color: '#e0ddf0' }}>{p.num}</div>
                  <div className="font-display font-semibold mb-3" style={{ fontSize: '1.1rem', color: '#1a2355' }}>{p.title}</div>
                  <p style={{ fontSize: '0.875rem', color: '#50556e', lineHeight: '1.75' }}>{p.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4" style={{ background: '#0d1225', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="py-14 text-center" style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="font-display font-bold text-gradient-gold mb-2" style={{ fontSize: '3rem', lineHeight: 1 }}><Counter value={s.num} /></div>
            <div className="uppercase" style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
          </Reveal>
        ))}
      </div>

      {/* ── ACADEMY PREVIEW ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <p className="flex items-center justify-center gap-3 font-bold uppercase mb-3" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: '#c9a020' }}><span className="inline-block w-6 h-px bg-yellow-600" />Structured Training</p>
            <h2 className="font-display font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a2355' }}>The CDN <em className="not-italic" style={{ color: '#2a52be' }}>Academy</em></h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { track: 'Track One', color: '#c9a020', label: 'Membership Training', desc: '8 foundational modules covering salvation, identity, grace, the Holy Spirit, faith, and love.', modules: MEMBERSHIP_MODULES, to: '/membership' },
              { track: 'Track Two', color: '#7b4ec8', label: 'Workers Training', desc: '11 advanced modules preparing believers for campus leadership, discipleship multiplication, and kingdom ministry.', modules: WORKERS_MODULES.slice(0,8), to: '/workers' },
            ].map((card, ci) => (
              <Reveal key={card.track} delay={ci * 0.1}>
                <motion.div className="p-8 h-full" style={{ border: '1px solid #e0ddf0', borderTop: `3px solid ${card.color}` }} whileHover={{ boxShadow: '0 8px 32px rgba(0,0,0,0.08)', y: -4 }} transition={{ duration: 0.3 }}>
                  <p className="font-bold uppercase mb-2" style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: card.color }}>{card.track}</p>
                  <h3 className="font-display font-semibold mb-3" style={{ fontSize: '1.875rem', color: '#1a2355' }}>{card.label}</h3>
                  <p className="mb-5" style={{ fontSize: '0.875rem', color: '#50556e' }}>{card.desc}</p>
                  <div className="grid grid-cols-2 gap-x-4 mb-6">
                    {card.modules.map(m => (
                      <div key={m.num} className="flex items-start gap-2 py-2" style={{ borderBottom: '1px solid #e0ddf0' }}>
                        <span className="font-bold flex-shrink-0" style={{ fontSize: '0.7rem', color: card.color, marginTop: '2px' }}>{m.num}</span>
                        <span style={{ fontSize: '0.78rem', color: '#50556e' }}>{m.title}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={card.to} className="block text-center py-3 font-bold uppercase transition-colors" style={{ background: '#1e2d6b', color: 'white', fontSize: '0.85rem', letterSpacing: '0.12em' }}>View Curriculum</Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section className="py-28" style={{ background: '#0d1225' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal className="mb-12">
            <p className="flex items-center gap-3 font-bold uppercase mb-3" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: '#e8c040' }}><span className="inline-block w-6 h-px" style={{ background: '#e8c040' }} />Teaching Resources</p>
            <h2 className="font-display font-semibold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Watch Our <span className="text-gradient-gold">Discipleship</span> Classes</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {PLAYLISTS.map((pl, i) => (
              <Reveal key={pl.id} delay={i * 0.1}>
                <p className="font-bold uppercase mb-2" style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: '#c9a020' }}>▶ {pl.label}</p>
                <p className="font-display text-white mb-3" style={{ fontSize: '1.1rem' }}>{pl.title}</p>
                <div className="relative mb-3" style={{ paddingBottom: '56.25%', height: 0, border: '1px solid rgba(201,160,32,0.25)' }}>
                  <iframe className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/videoseries?list=${pl.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen loading="lazy" title={pl.title} />
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.75' }}>{pl.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 text-center relative overflow-hidden" style={{ background: '#0d1225' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(201,160,32,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-2xl mx-auto px-6">
          <Reveal>
            <p className="flex items-center justify-center gap-3 font-bold uppercase mb-4" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: '#e8c040' }}><span className="inline-block w-6 h-px" style={{ background: '#e8c040' }} />Take the Next Step</p>
            <h2 className="font-display font-semibold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Ready to Go <span className="text-gradient-gold">Deeper</span>?</h2>
            <p className="mb-10 text-base leading-loose" style={{ color: 'rgba(255,255,255,0.55)' }}>Whether you are a student seeking grounded discipleship, a believer ready to be trained, or a leader with a campus vision — CDN has a place for you.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/join" className="px-7 py-3.5 font-bold uppercase inline-block" style={{ background: '#c9a020', color: '#0d1225', fontSize: '0.85rem', letterSpacing: '0.12em' }}>Join the Network</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/start" className="px-7 py-3.5 font-semibold uppercase inline-block" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontSize: '0.85rem', letterSpacing: '0.12em' }}>Start a Fellowship</Link>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
