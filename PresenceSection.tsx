import { MapPin, Phone, Mail, Clock, ArrowUpRight, Bike, Users, Utensils } from 'lucide-react';

interface PresenceSectionProps {
  onOpenDelivery: () => void;
  onOpenCorporate?: () => void;
}

export function PresenceSection({ onOpenDelivery, onOpenCorporate }: PresenceSectionProps) {
  return (
    <section id="presence" className="py-20 md:py-28 bg-[#FAF4F0] border-b border-[#E3CBC1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[12px] font-mono tracking-widest text-[#CA3232] uppercase block mb-3 font-semibold">
              Locations & Ordering
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261D1A] tracking-tight">
              BRINGING THE TASTE <span className="text-[#CA3232]">HOME.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#6E4F44] max-w-md font-normal leading-relaxed">
            Dine with us in Bengaluru, order through verified delivery partners, or book custom regional meal boxes for gatherings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Outlet 1: Flagship Whitefield */}
          <div className="lg:col-span-4 bg-[#F6ECE6] border-2 border-[#E1CCC0] rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:border-[#CA3232] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white bg-[#CA3232] px-3 py-1 rounded-full font-semibold shadow-xs">
                  Flagship Kitchen
                </span>
                <span className="text-xs text-[#845648] font-mono font-medium">Bengaluru</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#261D1A] mb-2">
                Whitefield, Bengaluru
              </h3>
              <p className="text-xs text-[#634A40] leading-relaxed mb-6">
                Our primary hearth where Gamak first introduced authentic Champaran Ahuna cooking and fresh sattu preparations to urban diners. Over 20,000 guests served.
              </p>

              <div className="space-y-3 text-xs text-[#4E372E] border-t border-[#DEC9BE] pt-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#CA3232] shrink-0 mt-0.5" />
                  <span>4th Floor, Ascendas Park Square Mall, ITPL Main Road, Pattandur Agrahara, Whitefield, Bengaluru, Karnataka 560066</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#CA3232] shrink-0" />
                  <span>Lunch: 12:00 PM – 3:30 PM | Dinner: 7:00 PM – 10:30 PM</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#CA3232] shrink-0" />
                  <a href="tel:+916366882862" className="hover:text-[#CA3232] transition-colors">
                    +91 6366882862
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DEC9BE]">
              <a
                id="whitefield-call-btn"
                href="tel:+916366882862"
                className="w-full py-3 bg-[#CA3232] hover:bg-[#B22424] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer shadow-xs text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Outlet (+91 6366882862)</span>
              </a>
            </div>
          </div>

          {/* Outlet 2: SEZ / Pop-Up & Catering Presence */}
          <div className="lg:col-span-4 bg-[#F6ECE6] border-2 border-[#E1CCC0] rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:border-[#CA3232] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8A5648] bg-[#EBDAD1] px-3 py-1 rounded-full font-semibold">
                  Institutional & SEZ
                </span>
                <span className="text-xs text-[#845648] font-mono font-medium">Coimbatore & Pop-Ups</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#261D1A] mb-2">
                Dalchini & Corporate Pop-ups
              </h3>
              <p className="text-xs text-[#634A40] leading-relaxed mb-6">
                Active presence at Coimbatore SEZ and recurring curated pop-ups for leading institutions including EY, MathCo, and St. John's Hospital.
              </p>

              <div className="space-y-3 text-xs text-[#4E372E] border-t border-[#DEC9BE] pt-4">
                <div className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 text-[#CA3232] shrink-0 mt-0.5" />
                  <span>Corporate event catering, regional festive thalis, and meal boxes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#CA3232] shrink-0" />
                  <a href="mailto:saiprashantiaarnafoods@gmail.com" className="hover:text-[#CA3232] transition-colors">
                    saiprashantiaarnafoods@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DEC9BE]">
              <button
                id="coimbatore-inquiry-btn"
                onClick={onOpenCorporate}
                className="w-full py-3 border-2 border-[#CA3232] text-[#CA3232] hover:bg-[#CA3232] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer shadow-xs"
              >
                Inquire for Pop-up / Catering
              </button>
            </div>
          </div>

          {/* Ordering Partners - Highlight in Dominant Terracotta Red */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#CA3232] to-[#B22424] text-white rounded-2xl p-7 flex flex-col justify-between shadow-xl border border-[#7D2619]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white bg-black/25 px-3 py-1 rounded-full font-semibold">
                  Doorstep Delivery
                </span>
                <Bike className="w-4 h-4 text-[#FFE8E0]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Order Online
              </h3>
              <p className="text-xs text-[#FFDDD4] leading-relaxed mb-6">
                Enjoy hot Ahuna Handi dishes, freshly roasted Littis with desi ghee, and refreshing sattu drinks delivered directly to your doorstep.
              </p>

              <div className="space-y-2.5">
                {/* Ownly */}
                <a
                  href="https://ownly.food/app/brand/BR442608"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/15 hover:bg-white/25 border border-white/25 rounded-xl p-3 flex items-center justify-between transition-all group"
                  title="Order on Ownly (Zero Platform Fee)"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-white block">Ownly</span>
                      <span className="text-[9px] font-mono uppercase bg-white text-[#CA3232] px-1.5 py-0.2 rounded font-bold">
                        Zero Platform Fee
                      </span>
                    </div>
                    <span className="text-[11px] text-[#FFE8DF] font-mono">Direct restaurant price</span>
                  </div>
                  <span className="p-1.5 rounded-full bg-white text-[#CA3232] group-hover:scale-105 transition-transform shadow-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                {/* Swiggy */}
                <a
                  href="https://www.swiggy.com/menu/1348692?source=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl p-3 flex items-center justify-between transition-all group"
                  title="Order on Swiggy"
                >
                  <div>
                    <span className="font-semibold text-sm text-white block">Swiggy</span>
                    <span className="text-[11px] text-[#FFD8CD]">Live outlet menu & fast delivery</span>
                  </div>
                  <span className="p-1.5 rounded-full bg-white/20 group-hover:bg-white/30 text-white group-hover:scale-105 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                {/* Zomato */}
                <a
                  href="https://zomato.onelink.me/xqzv/7lf6jhdr"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl p-3 flex items-center justify-between transition-all group"
                  title="Order on Zomato"
                >
                  <div>
                    <span className="font-semibold text-sm text-white block">Zomato</span>
                    <span className="text-[11px] text-[#FFD8CD]">Whitefield & surrounding delivery</span>
                  </div>
                  <span className="p-1.5 rounded-full bg-white/20 group-hover:bg-white/30 text-white group-hover:scale-105 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                {/* Toing */}
                <a
                  href="https://www.toingit.com/menu/1348692"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl p-3 flex items-center justify-between transition-all group"
                  title="Order on Toing"
                >
                  <div>
                    <span className="font-semibold text-sm text-white block">Toing</span>
                    <span className="text-[11px] text-[#FFD8CD]">Direct online food ordering</span>
                  </div>
                  <span className="p-1.5 rounded-full bg-white/20 group-hover:bg-white/30 text-white group-hover:scale-105 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-white/20">
              <span className="text-[11px] text-[#FFD3C6] font-mono block text-center font-medium">
                Prepared fresh in limited quantities daily
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
