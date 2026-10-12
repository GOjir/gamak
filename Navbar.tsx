import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ArrowUpRight, Building2 } from 'lucide-react';
import { GamakLogo } from './GamakLogo';

interface NavbarProps {
  onOpenDelivery: () => void;
  onOpenCorporate: () => void;
}

export function Navbar({ onOpenDelivery, onOpenCorporate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '5,000-Yr Heritage', href: '#story' },
    { label: 'Ingredients', href: '#ingredients' },
    { label: 'Menu', href: '#menu' },
    { label: 'The Kitchen', href: '#kitchen' },
    { label: 'Corporate Deals', href: '#corporates', highlight: true },
    { label: 'Founder', href: '#founder' },
    { label: 'Outlets', href: '#presence' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#CA3232] text-[#FFF9F6] py-2.5 shadow-[0_8px_30px_rgba(184,29,36,0.32)] border-b border-[#96131A]'
          : 'bg-[#FAF4F0]/92 backdrop-blur-md text-[#261D1A] py-3.5 border-b border-[#E8D7CE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Bihar Chapter Mark */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className={`w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center transition-all shadow-md group-hover:scale-105 border-2 ${
              isScrolled
                ? 'bg-white border-white/60 shadow-xs'
                : 'bg-[#CA3232] border-white/30 text-white'
            }`}
          >
            <GamakLogo
              size={isScrolled ? 46 : 46}
              color={isScrolled ? 'crimson' : 'white'}
              showSubtitle={false}
              inRoundFrame={true}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span
                className={`font-serif text-2xl md:text-3xl font-black tracking-tight transition-colors ${
                  isScrolled ? 'text-white' : 'text-[#CA3232] group-hover:text-[#B22424]'
                }`}
              >
                GAMAK
              </span>
              <span
                className={`text-[9px] md:text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded font-bold ${
                  isScrolled
                    ? 'bg-[#B22424] text-[#FFE4E6]'
                    : 'bg-[#FCE8E8] text-[#CA3232] border border-[#F3CBCD]'
                }`}
              >
                BIHAR CHAPTER
              </span>
            </div>
            <span
              className={`text-[10px] sm:text-[11px] tracking-wider uppercase font-sans font-medium transition-colors ${
                isScrolled ? 'text-[#FFD2D5]' : 'text-[#7A5B51]'
              }`}
            >
              5,000-Year-Old East Indian Cuisine
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-7 text-[14px] font-medium tracking-wide ${
            isScrolled ? 'text-[#FFECE5]' : 'text-[#5C453E]'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`py-1 relative transition-colors ${
                link.highlight
                  ? isScrolled
                    ? 'text-white font-bold underline underline-offset-4 decoration-white'
                    : 'text-[#CA3232] font-bold hover:text-[#B22424]'
                  : isScrolled
                  ? 'hover:text-white after:bg-white'
                  : 'hover:text-[#CA3232] after:bg-[#CA3232]'
              } ${
                !link.highlight
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] hover:after:w-full after:transition-all after:duration-200"
                  : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Corporate Deals Direct Button */}
          <button
            id="nav-corporate-deals-btn"
            onClick={onOpenCorporate}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[12px] font-semibold rounded-full transition-all cursor-pointer ${
              isScrolled
                ? 'bg-[#B22424] text-[#FFE8DF] hover:bg-[#730D12] border border-[#B32A30]'
                : 'bg-[#FCE8E8] text-[#96131A] hover:bg-[#F9D5D7] border border-[#F3CBCD]'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-[#CA3232]" />
            <span>Corporate Canteens</span>
          </button>

          <button
            id="nav-order-online-btn"
            onClick={onOpenDelivery}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold rounded-full transition-all shadow-xs cursor-pointer ${
              isScrolled
                ? 'bg-white text-[#CA3232] hover:bg-[#FFEAE2]'
                : 'bg-[#CA3232] text-white hover:bg-[#B22424]'
            }`}
          >
            <span>Order Online</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg focus:outline-none transition-colors ${
            isScrolled ? 'text-white hover:bg-white/10' : 'text-[#CA3232] hover:bg-[#FCE8E8]'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden fixed top-[64px] inset-x-0 bg-[#FAF4F0] border-b border-[#E8D7CE] px-6 py-8 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#F0DFD7]">
              <div className="w-10 h-10 rounded-full bg-[#CA3232] flex items-center justify-center">
                <GamakLogo size={32} color="white" showSubtitle={false} />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-[#261D1A] block">
                  GAMAK
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#CA3232] font-bold">
                  BIHAR CHAPTER
                </span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-serif pb-2 border-b border-[#F0DFD7] font-semibold transition-colors ${
                  link.highlight
                    ? 'text-[#CA3232] flex items-center justify-between'
                    : 'text-[#261D1A] hover:text-[#CA3232]'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-[10px] font-mono uppercase bg-[#FCE8E8] text-[#CA3232] px-2 py-0.5 rounded-full font-bold">
                    B2B Deals
                  </span>
                )}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCorporate();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold bg-[#261D1A] text-[#FFE8DF] rounded-full shadow-xs flex items-center justify-center gap-2"
              >
                <Building2 className="w-3.5 h-3.5 text-[#FF9E8A]" />
                <span>Corporate Canteen Deals (Inquire)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDelivery();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold bg-[#CA3232] text-white rounded-full shadow-xs hover:bg-[#B22424] flex items-center justify-center gap-1.5"
              >
                <span>Order Online (Ownly / Swiggy / Zomato / Toing)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
