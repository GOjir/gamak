import { Flame, Landmark, Sprout, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import ancientHeritageImg from './ancient_east_heritage_1789189350150.jpg';

export function Philosophy() {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#F5EBE6] border-b border-[#E3CBC1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCEBE4] border border-[#F2CFBF] mb-3">
            <Landmark className="w-3.5 h-3.5 text-[#CA3232]" />
            <span className="text-[11px] font-mono tracking-widest text-[#9A3020] uppercase font-semibold">
              Civilizational Gastronomy • Circa 3000 BCE to Today
            </span>
          </div>

          {/* Dominant Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#261D1A] tracking-tight mb-6">
            5,000 YEARS OF CIVILIZATION. <br />
            <span className="text-[#CA3232]">ONE ENDURING FLAME.</span>
          </h2>

          <p className="font-serif text-xl sm:text-2xl md:text-[24px] leading-relaxed text-[#3B2923] italic max-w-3xl mx-auto">
            “Long before the advent of fast-food shortcuts and homogenised commercial gravies, the fertile riverbanks of the Ganges in Eastern India gave birth to a culinary science over five millennia old. From the ancient monastic kitchens of Nalanda to the royal feasts of Magadha and the rustic mud-husk hearths of Champaran, food was cooked to nourish both mind and body.”
          </p>
          <div className="w-20 h-[2px] bg-[#CA3232] mx-auto mt-6"></div>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6 text-[#523C35] text-sm sm:text-base leading-relaxed">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#261D1A]">
              Where Ancient Wisdom Meets the Modern Table
            </h3>
            
            <p>
              Ancient Eastern Indian cuisine was founded on three non-negotiable principles: <strong className="text-[#261D1A]">unglazed porous earth</strong> that allows food to breathe, <strong className="text-[#261D1A]">gentle wood-charcoal heat</strong> that coaxes deep collagen and aroma without scorching, and <strong className="text-[#261D1A]">native superfoods</strong> like sand-roasted Sattu, unpolished horse gram (Kulthi), and raw pungent mustard oil.
            </p>

            <p>
              In the ancient universities of <strong>Nalanda</strong> and <strong>Vikramashila</strong>, over ten thousand residential scholars were fed daily with high-protein lentils, sprouted seeds, and clay-steamed pithas. Meanwhile, across the forests of Champaran, travelers and warriors preserved meats and vegetables by slow-braising them in airtight terracotta pots buried under smoldering ash.
            </p>

            <p>
              <strong className="text-[#CA3232]">Gamak</strong> was born to revive this 5,000-year-old gastronomic soul. We source unhybridised heirloom seeds, press mustard oil cold in small wooden batches, and refuse all modern industrial additives, thickeners, or palm oils.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <div>
                <span className="font-serif text-2xl font-bold text-[#CA3232] block">3000 BCE</span>
                <span className="text-xs text-[#845648] uppercase font-mono">Earthen Pot Roots</span>
              </div>
              <div className="h-8 w-px bg-[#DFC9BD]"></div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#CA3232] block">Zero</span>
                <span className="text-xs text-[#845648] uppercase font-mono">Modern Additives</span>
              </div>
              <div className="h-8 w-px bg-[#DFC9BD]"></div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#CA3232] block">100%</span>
                <span className="text-xs text-[#845648] uppercase font-mono">Native Wood Fire</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#DFC9BD] bg-[#261D1A]">
              <img
                src={ancientHeritageImg}
                alt="5000 year old ancient East Indian culinary heritage still life with earthenware handis and grains"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#261D1A]/85 via-[#261D1A]/20 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono tracking-widest text-[#FFC4B6] uppercase block font-semibold">
                  Archaeological Living Tradition
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#FFF3EE]">
                  The Primordial Gangetic Table
                </h4>
                <p className="text-xs text-[#E3D1C8] mt-1">
                  Clay vessels, roasted grains, and whole spices that sustained five millennia of scholars and dynasties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars of the 5,000-Year Heritage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-12 border-t border-[#DFCDC4]">
          <div className="bg-[#FAF4F0] p-6 rounded-xl border border-[#E5D0C6] shadow-xs relative overflow-hidden group hover:border-[#CA3232] transition-colors">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CA3232]"></div>
            <span className="font-mono text-xs text-[#CA3232] uppercase tracking-wider block mb-2 font-semibold">
              Lineage 01 • The Hand
            </span>
            <h3 className="font-serif text-xl font-bold text-[#261D1A] mb-2">Ancestral Cookery</h3>
            <p className="text-sm text-[#614D45] leading-relaxed">
              Cooks hailing from generational culinary lineages in Champaran and Mithila. They do not cook with timers; they cook by aroma, sizzle, and tactile instinct passed through centuries.
            </p>
          </div>

          <div className="bg-[#FAF4F0] p-6 rounded-xl border border-[#E5D0C6] shadow-xs relative overflow-hidden group hover:border-[#CA3232] transition-colors">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CA3232]"></div>
            <span className="font-mono text-xs text-[#CA3232] uppercase tracking-wider block mb-2 font-semibold">
              Lineage 02 • The Soil
            </span>
            <h3 className="font-serif text-xl font-bold text-[#261D1A] mb-2">Original Ancient Staples</h3>
            <p className="text-sm text-[#614D45] leading-relaxed">
              Native Sattu roasted in river sand, pungent cold-pressed Kacchi Ghani mustard oil, sun-dried amchur, and whole pod garlic. Zero synthetic extracts or industrial refined oils.
            </p>
          </div>

          <div className="bg-[#FAF4F0] p-6 rounded-xl border border-[#E5D0C6] shadow-xs relative overflow-hidden group hover:border-[#CA3232] transition-colors">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#CA3232]"></div>
            <span className="font-mono text-xs text-[#CA3232] uppercase tracking-wider block mb-2 font-semibold">
              Lineage 03 • The Vessel
            </span>
            <h3 className="font-serif text-xl font-bold text-[#261D1A] mb-2">Dough-Sealed Clay</h3>
            <p className="text-sm text-[#614D45] leading-relaxed">
              Unglazed terracotta handis sealed with wheat dough and gently rotated over wood charcoal embers. The food simmers in its own internal vapour for hours, producing an unmistakable smokiness.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
