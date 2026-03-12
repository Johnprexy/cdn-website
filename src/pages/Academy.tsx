import { Link } from 'react-router-dom';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';

export default function Academy() {
  return (
    <div>
      <PageHero eyebrow="Discipleship Training" title={<>The CDN <em className="not-italic text-gradient-gold">Academy</em></>} sub="A structured, curriculum-based training program designed to bring every believer from the foundations of salvation into the fullness of their identity in Christ — and into active service as a disciple-maker." />
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <Reveal direction="left">
              <p className="flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase font-bold text-[#c9a020] mb-4"><span className="w-6 h-px bg-[#c9a020]" />About the Academy</p>
              <h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-5">A School of <em className="not-italic text-[#2a52be]">Discipleship</em></h2>
              <p className="text-sm text-[#50556e] leading-[1.85] mb-4">The CDN Academy is not a conventional Bible school. It is a deliberate, curriculum-based discipleship environment where believers move from basic gospel understanding to advanced New Covenant theology — and from passive learners to active teachers.</p>
              <p className="text-sm text-[#50556e] leading-[1.85] mb-6">The Academy operates in two sequential tracks. Every believer begins with Membership Training. Those who complete it progress to Workers Training — the advanced leadership formation pathway.</p>
              <div className="border-l-[3px] border-[#c9a020] pl-5 bg-[#f2f0f8] py-5 pr-5 relative">
                <p className="font-display italic text-[#1a2355] text-base leading-[1.7]">"Study to show yourself approved to God, a worker who has no need to be ashamed, rightly handling the word of truth."</p>
                <cite className="block font-body not-italic text-[0.65rem] tracking-[0.15em] uppercase text-[#c9a020] font-bold mt-2">2 Timothy 2:15</cite>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1} className="space-y-4">
              <div className="border border-[#e0ddf0] border-t-[3px] border-t-[#c9a020] p-7">
                <p className="text-[0.62rem] tracking-[0.18em] uppercase text-[#2a52be] font-bold mb-2">Track One</p>
                <h3 className="font-display text-2xl font-semibold text-[#1a2355] mb-3">Membership Training</h3>
                <p className="text-sm text-[#50556e] mb-4">8 foundational modules establishing every new believer in salvation, grace, identity in Christ, the Holy Spirit, faith, and love.</p>
                <Link to="/membership" className="block text-center py-3 bg-[#1e2d6b] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#2a52be] transition-colors">View Curriculum →</Link>
              </div>
              <div className="border border-[#e0ddf0] border-t-[3px] border-t-[#7b4ec8] p-7">
                <p className="text-[0.62rem] tracking-[0.18em] uppercase text-[#7b4ec8] font-bold mb-2">Track Two</p>
                <h3 className="font-display text-2xl font-semibold text-[#1a2355] mb-3">Workers Training</h3>
                <p className="text-sm text-[#50556e] mb-4">11 advanced modules preparing believers for campus leadership, discipleship multiplication, spiritual warfare, and kingdom ministry.</p>
                <Link to="/workers" className="block text-center py-3 bg-[#1e2d6b] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#2a52be] transition-colors">View Curriculum →</Link>
              </div>
            </Reveal>
          </div>
          <hr className="border-[#e0ddf0] mb-16" />
          <Reveal><h2 className="font-display text-4xl font-semibold text-[#1a2355] mb-10">The Academy <em className="not-italic text-[#2a52be]">Produces</em></h2></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { sym: '✦', color: 'border-t-[#2a52be]', title: 'Gospel Clarity', body: 'Believers who understand what the New Covenant means and can articulate it clearly to others.' },
              { sym: '⊕', color: 'border-t-[#c9a020]', title: 'Identity Confidence', body: 'Students who know who they are in Christ and live from that place of security and grace.' },
              { sym: '◈', color: 'border-t-[#7b4ec8]', title: 'Spiritual Maturity', body: 'Disciples characterised by faith, love, and a consistent Spirit-led walk in daily life.' },
              { sym: '⊗', color: 'border-t-[#1e2d6b]', title: 'Leadership Readiness', body: 'Trained workers capable of leading groups, sharing the faith, and discipling others.' },
            ].map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08} className={`p-7 bg-[#f2f0f8] border-t-[3px] ${o.color} text-center`}>
                <div className="text-2xl mb-3">{o.sym}</div>
                <div className="font-bold text-[#1a2355] mb-2">{o.title}</div>
                <p className="text-sm text-[#50556e] leading-[1.75]">{o.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
