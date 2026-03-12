import { Link } from 'react-router-dom';

const COLS = [
  {
    title: 'About',
    links: [
      { label: 'About CDN', to: '/about' },
      { label: 'Vision & Mission', to: '/vision' },
      { label: 'Leadership', to: '/leadership' },
      { label: 'Statement of Faith', to: '/faith' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'The Bridge Model', to: '/bridge' },
      { label: 'The Academy', to: '/academy' },
      { label: 'Membership Training', to: '/membership' },
      { label: 'Workers Training', to: '/workers' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Campus Network', to: '/campus' },
      { label: 'Find a Chapter', to: '/chapters' },
      { label: 'Teaching Videos', to: '/videos' },
      { label: 'Articles', to: '/resources' },
      { label: 'Join the Network', to: '/join' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1225] text-white/50 pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2a52be] to-[#5c2fa0] flex items-center justify-center border border-[rgba(201,160,32,0.3)]">
                <span className="font-display text-sm font-bold text-white">CDN</span>
              </div>
              <div>
                <div className="font-display text-sm font-bold text-white leading-tight">Campus Discipleship Network</div>
                <div className="text-[0.55rem] tracking-[0.2em] uppercase text-[#c9a020] font-bold mt-0.5">Raising Mature Believers</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/40 max-w-[280px]">
              A structured discipleship movement equipping university students through systematic New Covenant teaching — raising mature believers, one campus at a time.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase font-bold text-[#c9a020] mb-5">{col.title}</div>
              <div className="space-y-1">
                {col.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-[0.83rem] text-white/40 hover:text-white py-1.5 border-b border-white/[0.04] transition-all duration-150 hover:pl-1.5"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <span className="text-[0.75rem] text-white/25">© 2025 Campus Discipleship Network. All rights reserved.</span>
          <span className="font-display italic text-[0.88rem] text-white/25">
            "Teaching everyone with all wisdom, that we may present everyone mature in Christ." — Col. 1:28
          </span>
        </div>
      </div>
    </footer>
  );
}
