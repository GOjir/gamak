import React from 'react';
import { Quote, Sparkles, Award, ShieldCheck, Mail, Building2 } from 'lucide-react';
import { GamakLogo } from './GamakLogo';
import founderImage from '../founder-image.jpg';

interface FounderSectionProps {
  onOpenCorporateInquiry?: () => void;
}

export function FounderSection({ onOpenCorporateInquiry }: FounderSectionProps) {
  return (
    <section
      id="founder"
      className="py-24 md:py-32 bg-gradient-to-b from-[#FAF4F0] via-[#FDF5F2] to-[#FAF4F0] border-t border-b border-[#E8D7CE] relative overflow-hidden"
    >
      {/* Subtle Background Watermark Graphic */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <GamakLogo size={520} color="crimson" showSubtitle={false} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE8E8] border border-[#F3CBCD] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#CA3232]" />
            <span className="text-[11px] font-mono tracking-widest text-[#96131A] uppercase font-bold">
              The Visionary Behind Gamak
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#261D1A] leading-tight">
            A CIVILIZATIONAL MISSION <br />
            <span className="text-[#CA3232]">LED BY C. PARTHASARATHY.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5C453E] font-normal leading-relaxed">
            Bridging 5,000 years of rustic East Indian gastronomy with modern urban lives and corporate campuses—without a single culinary shortcut.
          </p>
        </div>

        {/* Founder Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative framing box */}
              <div className="absolute -inset-3 bg-[#F8D8DA] rounded-2xl rotate-1 border border-[#F0B8BB] -z-10"></div>

              {/* Founder Image Card: Full image, object-contain, w-full, h-auto, zero cropping */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#CA3232]/30 bg-[#261D1A]">
                <img
                  src={founderImage}
                  alt="Mr. C. Parthasarathy - Founder & Managing Director, Gamak & Sai Prashanthi Aarna Foods"
                  className="w-full h-auto object-contain block"
                />

                {/* Earthen Seal Emblem */}
                <div className="absolute top-4 right-4 bg-[#CA3232] text-white p-2 rounded-xl shadow-lg border border-white/20 z-20">
                  <GamakLogo size={36} color="white" showSubtitle={false} />
                </div>
              </div>

              {/* Founder Title & Organization Badge - placed cleanly below so the full photo is visible */}
              <div className="mt-3.5 p-4 bg-[#261D1A] rounded-xl border border-[#CA3232]/30 shadow-md text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#CA3232]"></span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC4B6] font-bold">
                    Founder &amp; Managing Director
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  C. Parthasarathy
                </h3>
                <p className="text-xs text-[#E8D7CE] font-sans font-light mt-0.5">
                  Sai Prashanthi Aarna Foods Pvt. Ltd.
                </p>
              </div>

              {/* Official Corporate Email Contact */}
              <div className="mt-4 p-3.5 bg-white border border-[#E8D7CE] rounded-xl flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-[#FCE8E8] text-[#CA3232] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#7A5B51] block font-semibold">
                      Official Email Address
                    </span>
                    <a
                      href="mailto:saiprashantiaarnafoods@gmail.com"
                      className="text-xs sm:text-sm font-bold text-[#261D1A] hover:text-[#CA3232] transition-colors truncate block"
                    >
                      saiprashantiaarnafoods@gmail.com
                    </a>
                  </div>
                </div>
                <a
                  href="mailto:saiprashantiaarnafoods@gmail.com"
                  className="text-[11px] font-mono text-[#CA3232] font-bold bg-[#FCE8E8] px-2.5 py-1 rounded-full hover:bg-[#F9D0D2] transition-colors shrink-0"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Editorial Biography & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The Founder's Manifesto Quote */}
            <div className="relative pl-6 border-l-4 border-[#CA3232] py-2 bg-[#FFF8F5] pr-6 rounded-r-xl border-y border-r border-[#F0DFD7]">
              <Quote className="w-8 h-8 text-[#CA3232]/20 absolute -top-3 left-4" />
              <p className="font-serif text-lg sm:text-xl text-[#261D1A] italic leading-relaxed">
                "Gamak was never conceived as just another restaurant brand. It is a civilizational restoration project. For five thousand years along the Gangetic plains, food was prepared in earthenware as medicine, daily ritual, and slow alchemy. We refused every modern shortcut—no palm oil, no artificial essences, no factory gravies—to bring that true taste back to urban plates and corporate desks."
              </p>
              <div className="mt-3 text-right">
                <span className="text-xs font-mono uppercase tracking-widest text-[#CA3232] font-bold">
                  — C. Parthasarathy
                </span>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 text-sm sm:text-base text-[#4A3831] leading-relaxed font-normal">
              <p>
                When modern restaurant trends shifted toward standardized gravies, industrial vegetable oils, and heavy cream adaptations, <strong className="text-[#261D1A] font-semibold">C. Parthasarathy</strong> recognized that India was quietly losing touch with its most foundational, gut-friendly culinary wisdom.
              </p>
              <p>
                He established <strong className="text-[#CA3232] font-semibold">Gamak (Bihar Chapter)</strong> under <em>Sai Prashanthi Aarna Foods</em> to serve living heritage: sourcing unglazed porous handis handcrafted by generational rural potters, cold-pressing mustard seed in small wooden ghanis, and using whole-pod spices that simmer for hours in their own trapped steam.
              </p>
              <p>
                Beyond the dining room, Parthasarathy pioneered <strong className="text-[#261D1A] font-semibold">institutional corporate wellness dining</strong>, delivering over 700+ daily employee meal boxes and live canteen tuck-in counters for multinational enterprises including <strong className="text-[#261D1A]">EY (Ernst & Young)</strong>, <strong className="text-[#261D1A]">The Math Company</strong>, and healthcare campuses.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8D7CE]">
              <div className="bg-white p-4 rounded-xl border border-[#E8D7CE] shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#CA3232] mb-2" />
                <h4 className="font-serif text-base font-bold text-[#261D1A]">Zero Shortcuts</h4>
                <p className="text-xs text-[#7A5B51] mt-1 leading-snug">
                  Strictly 100% cold-pressed raw mustard oil, no commercial palm oils or synthetic food coloring.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E8D7CE] shadow-xs">
                <Award className="w-5 h-5 text-[#CA3232] mb-2" />
                <h4 className="font-serif text-base font-bold text-[#261D1A]">Potter Guilds</h4>
                <p className="text-xs text-[#7A5B51] mt-1 leading-snug">
                  Direct artisan partnerships with traditional terracotta potters for single use handis.
                </p>
                <p className="text-xs text-[#7A5B51] mt-2 leading-relaxed">
                  It provides profound, structural economic benefits to the potters and fundamentally changes their financial reality in several ways—securing consistent fair wages, eliminating intermediaries, and sustaining ancestral terracotta livelihoods.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E8D7CE] shadow-xs">
                <Building2 className="w-5 h-5 text-[#CA3232] mb-2" />
                <h4 className="font-serif text-base font-bold text-[#261D1A]">Institutional Scale</h4>
                <p className="text-xs text-[#7A5B51] mt-1 leading-snug">
                  FSSAI-certified central production delivering 700+ daily corporate boxes with 100% consistency.
                </p>
              </div>
            </div>

            {/* Actions for Visitors & Corporates */}
            {onOpenCorporateInquiry && (
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  id="founder-corporate-deal-btn"
                  onClick={onOpenCorporateInquiry}
                  className="px-6 py-3 bg-[#CA3232] hover:bg-[#B22424] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full transition-colors shadow-md cursor-pointer inline-flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Discuss Corporate Canteen Partnership</span>
                </button>

                <a
                  href="mailto:saiprashantiaarnafoods@gmail.com"
                  className="px-6 py-3 border border-[#CA3232] text-[#CA3232] hover:bg-[#FCE8E8] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Connect with Founder Desk</span>
                </a>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default FounderSection;
