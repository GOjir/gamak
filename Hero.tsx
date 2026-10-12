import { ArrowDown, Flame, Building2, Landmark, Sparkles } from 'lucide-react';
import heroHandiImg from '../assets/images/champaran_handi_sealed_1791463556801.jpg';
import { GamakLogo } from './GamakLogo';

interface HeroProps {
  onExploreMenu: () => void;
  onExploreStory: () => void;
  onExploreCorporate: () => void;
}

export function Hero({ onExploreMenu, onExploreStory, onExploreCorporate }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 md:pt-36 pb-12 bg-gradient-to-b from-[#FAF4F0] via-[#FAF1EB] to-[#FCE8E8] border-b border-[#E8C5C7]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-1">
        
        {/* Editorial Text Column */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
          {/* Brand & Ancient Lineage Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-[#FCE8E8] border border-[#F3CBCD] w-fit shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#CA3232] animate-pulse"></span>
            <span className="text-[11px] font-mono tracking-widest text-[#96131A] uppercase font-bold flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-[#CA3232]" />
              5,000-Year Ancient Lineage • Magadha, Mithila & Champaran
            </span>
          </div>

          {/* Dominant Headline: 5,000-Year-Old East Indian Cuisines */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#261D1A] leading-[1.06] mb-6">
            5,000 YEARS OF <br />
            <span className="text-[#CA3232]">EAST INDIAN CUISINE.</span>
          </h1>

          {/* Dominant Supporting Copy */}
          <p className="text-lg md:text-xl text-[#5C453E] leading-relaxed max-w-xl mb-8 font-normal">
            Born along the fertile banks of the Ganges—from the scholarly monastic kitchens of ancient Nalanda to the slow wood-ash hearths of Champaran. Earthen pots that breathe, native superfoods, and five millennia of living culinary memory.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <button
              id="hero-primary-cta"
              onClick={onExploreMenu}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#CA3232] hover:bg-[#B22424] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(184,29,36,0.32)] cursor-pointer group"
            >
              <span>EXPLORE THE 5,000-YR MENU</span>
              <span className="ml-2 transform group-hover:translate-y-0.5 transition-transform">↓</span>
            </button>

            <button
              id="hero-corporate-cta"
              onClick={onExploreCorporate}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#261D1A] hover:bg-[#3E2F2A] text-[#FFE8DF] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full transition-all duration-300 shadow-md cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#FF9E8A]" />
              <span>CORPORATE CANTEEN DEALS</span>
            </button>

            <button
              id="hero-secondary-cta"
              onClick={onExploreStory}
              className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-[#CA3232] text-[#CA3232] hover:bg-[#CA3232] hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full transition-all duration-300 cursor-pointer shadow-xs"
            >
              CIVILIZATIONAL STORY
            </button>
          </div>

          {/* Civilizational Provenance Grid */}
          <div className="pt-6 border-t border-[#E8D4C8] grid grid-cols-3 gap-3 sm:gap-4 text-left">
            <div className="border-l-2 border-[#CA3232] pl-3">
              <span className="block font-serif text-base sm:text-lg font-bold text-[#261D1A]">Magadha Roots</span>
              <span className="text-xs text-[#7A5B51] leading-tight">Ancient Gangetic grain & pulse culture</span>
            </div>
            <div className="border-l-2 border-[#CA3232] pl-3">
              <span className="block font-serif text-base sm:text-lg font-bold text-[#261D1A]">Ahuna Handi</span>
              <span className="text-xs text-[#7A5B51] leading-tight">Dough-sealed clay slow simmer</span>
            </div>
            <div className="border-l-2 border-[#CA3232] pl-3">
              <span className="block font-serif text-base sm:text-lg font-bold text-[#261D1A]">Raw Mustard</span>
              <span className="text-xs text-[#7A5B51] leading-tight">Cold-pressed pure Kacchi Ghani</span>
            </div>
          </div>
        </div>

        {/* Visual Composition featuring Official Logo & Documentary Handi */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative">
            {/* Background earthy crimson framing */}
            <div className="absolute -inset-2 sm:-inset-4 bg-[#F8D8DA] rounded-2xl -rotate-1 pointer-events-none border border-[#F0B8BB]"></div>

            {/* Main Featured Photo with Integrated Floating Official Brand Emblem */}
            <div className="relative overflow-hidden rounded-2xl bg-[#261D1A] shadow-2xl border-2 border-[#CA3232]/40">
              <img
                src={heroHandiImg}
                alt="Authentic Champaran Ahuna Handi with unglazed earthenware clay lid sealed with raw wheat dough covering the rim over charcoal embers"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[430px] lg:h-[490px] object-cover object-center filter contrast-[1.03] saturate-[1.05]"
              />

              {/* Official Brand Emblem Badge (Exact replica of user uploaded logo on dominant crimson) */}
              <div className="absolute top-4 right-4 bg-[#CA3232] text-white p-3 rounded-2xl shadow-xl border border-white/25 flex flex-col items-center justify-center text-center">
                <GamakLogo size={58} color="white" showSubtitle={true} />
              </div>

              {/* Floating Ancestral Mini-Badge Card */}
              <div className="absolute top-4 left-4 bg-[#FAF4F0]/95 backdrop-blur-md border border-[#DFC9BD] rounded-xl p-3 shadow-lg max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#CA3232]"></span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#96131A] font-bold">
                    Archaeological Roots
                  </span>
                </div>
                <p className="text-[11px] text-[#422C24] leading-tight font-serif italic">
                  "Clay pots breathe. Food simmers in its own steam over firewood and cow dung cakes"
                </p>
              </div>

              {/* Documentary Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#261D1A]/95 via-[#261D1A]/60 to-transparent p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#FFC4B6] uppercase block font-semibold">
                      Gamak • Bihar Chapter
                    </span>
                    <p className="font-serif text-base sm:text-lg text-[#FFF3EE] italic mt-0.5">
                      "Clay pots breathe. Food simmers in its own steam over firewood and cow dung cakes"
                    </p>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-mono px-3 py-1 rounded bg-[#CA3232] text-white font-semibold shadow-xs">
                    5,000 Yrs Old
                  </span>
                </div>
              </div>
            </div>

            {/* Corporate Mini Banner Below Photo */}
            <div
              onClick={onExploreCorporate}
              className="mt-3 bg-[#FAF4F0] border border-[#DFC9BD] rounded-xl p-3.5 flex items-center justify-between shadow-xs hover:border-[#CA3232] cursor-pointer transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FCE8E8] flex items-center justify-center text-[#CA3232]">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#261D1A] block group-hover:text-[#CA3232] transition-colors">
                    Corporate Canteen Deals & Cafeteria tuck-ins
                  </span>
                  <span className="text-[11px] text-[#7A5B51]">
                    700+ daily employee meal boxes & live tech park counters.
                  </span>
                </div>
              </div>
              <span className="text-xs text-[#CA3232] font-bold whitespace-nowrap group-hover:translate-x-0.5 transition-transform">
                Explore Deals →
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Gentle Scroll Guide */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-6 flex justify-between items-center text-xs text-[#9A6454] font-mono">
        <span>5,000 YEARS OF ANCIENT EAST INDIAN CULINARY CIVILIZATION</span>
        <a
          href="#story"
          className="inline-flex items-center gap-1.5 text-[#CA3232] hover:text-[#B22424] font-bold transition-colors"
        >
          <span>Explore Heritage</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
