import { Heart, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { GamakLogo } from './GamakLogo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1412] text-[#E8D7CE] pt-16 pb-12 border-t-4 border-[#CA3232]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#36211C]">
          
          {/* Brand & Official Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#CA3232] flex items-center justify-center shadow-lg border border-white/20">
                <GamakLogo size={38} color="white" showSubtitle={false} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-3xl font-bold tracking-tight text-white">
                    GAMAK
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded bg-[#CA3232] text-white font-bold">
                    BIHAR CHAPTER
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#FFB0A3]">
                    Sai Prashanthi Aarna Foods
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-[#D1BDB3] max-w-sm leading-relaxed font-light">
              Reviving 5,000 years of East Indian gastronomic civilization — from ancient Magadha and Nalanda to modern tech parks and tables.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono text-xs text-[#FFC4B6] uppercase tracking-widest font-semibold">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs text-[#D1BDB3]">
              <li><a href="#hero-section" className="hover:text-[#FF9F8A] transition-colors">5,000-Year Lineage</a></li>
              <li><a href="#story" className="hover:text-[#FF9F8A] transition-colors">Civilizational Heritage</a></li>
              <li><a href="#ingredients" className="hover:text-[#FF9F8A] transition-colors">Ancient Staples Gallery</a></li>
              <li><a href="#menu" className="hover:text-[#FF9F8A] transition-colors">The 5 Regional Courses</a></li>
              <li><a href="#kitchen" className="hover:text-[#FF9F8A] transition-colors">Clay Pot & Charcoal Hearth</a></li>
              <li><a href="#corporates" className="text-[#FF9F8A] font-semibold hover:text-white transition-colors">Corporate Canteen Deals</a></li>
              <li><a href="#founder" className="hover:text-[#FF9F8A] transition-colors">The Founder (C. Parthasarathy)</a></li>
              <li><a href="#presence" className="hover:text-[#FF9F8A] transition-colors">Bengaluru & Coimbatore Outlets</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-mono text-xs text-[#FFC4B6] uppercase tracking-widest font-semibold">
              Contact & Outlets
            </h5>
            <div className="space-y-2 text-xs text-[#D1BDB3]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#CA3232] shrink-0 mt-0.5" />
                <span>Flagship: 4th Floor, Ascendas Park Square Mall, ITPL Main Road, Pattandur Agrahara, Whitefield, Bengaluru, Karnataka 560066</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#CA3232] shrink-0" />
                <a href="tel:+916366882862" className="hover:text-white transition-colors">
                  +91 6366882862
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#CA3232] shrink-0" />
                <a href="mailto:saiprashantiaarnafoods@gmail.com" className="hover:text-white transition-colors">
                  saiprashantiaarnafoods@gmail.com
                </a>
              </p>
              <div className="pt-2 text-[11px] text-[#A68F84] font-mono">
                <span className="block mb-1.5 text-[#FFC4B6]">Order Gamak Online:</span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://ownly.food/app/brand/BR442608"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FFE8DF] hover:text-white underline underline-offset-2 hover:no-underline"
                  >
                    Ownly (Zero Platform Fee)
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.swiggy.com/menu/1348692?source=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FFE8DF] hover:text-white underline underline-offset-2 hover:no-underline"
                  >
                    Swiggy
                  </a>
                  <span>•</span>
                  <a
                    href="https://zomato.onelink.me/xqzv/7lf6jhdr"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FFE8DF] hover:text-white underline underline-offset-2 hover:no-underline"
                  >
                    Zomato
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.toingit.com/menu/1348692"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FFE8DF] hover:text-white underline underline-offset-2 hover:no-underline"
                  >
                    Toing
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A68F84] font-mono">
          <p>
            © {new Date().getFullYear()} Gamak (Sai Prashanthi Aarna Foods). Dedicated to India's rural soil & heirloom recipes.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#FFC4B6] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
