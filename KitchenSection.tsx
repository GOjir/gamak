import kitchenFireImg from '../assets/images/gamak_kitchen_fire_1789188597660.jpg';
import { Flame, Clock, ShieldCheck, Heart } from 'lucide-react';

export function KitchenSection() {
  return (
    <section id="kitchen" className="py-20 md:py-28 bg-[#F6ECE6] border-b border-[#E3CBC1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Full-width Tactile Atmospheric Image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl border-2 border-[#CA3232]/30 bg-[#261D1A]">
          <img
            src={kitchenFireImg}
            alt="Traditional rustic Indian village kitchen hearth with seasoned cast iron and earthen pots over wood fire"
            referrerPolicy="no-referrer"
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-center filter contrast-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#261D1A]/95 via-[#261D1A]/50 to-transparent flex flex-col justify-end p-8 sm:p-12 text-white">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFCDBF] mb-2 font-semibold">
              The Hearth • Champaran & Beyond
            </span>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl max-w-2xl text-[#FFF3EE] font-normal leading-snug">
              "No timers. No pressure cookers. Just raw earthenware, wood embers, and the patience our ancestors took for granted."
            </p>
          </div>
        </div>

        {/* Grounded Honest Editorial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <span className="text-[12px] font-mono tracking-widest text-[#CA3232] uppercase block mb-3 font-semibold">
              5,000-Year Ancient Hearth Technology
            </span>
            {/* Required Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261D1A] tracking-tight leading-[1.15]">
              SLOW FOOD. <br />
              <span className="text-[#CA3232]">REAL INGREDIENTS.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#5A4238] leading-relaxed">
            <p>
              We are not a fast-food shortcut, nor do we dilute five millennia of gastronomic wisdom with industrial shortcuts. Our kitchen operates exactly like the ancient hearths of Magadha, Mithila, and rural Champaran.
            </p>
            <p>
              When an Ahuna handi is prepared, whole cloves of unpeeled garlic, pasture meats or tender seasonal vegetables, hand-crushed whole spices, and cold raw mustard oil are blended inside a porous, unglazed earthen pot. Sealed hermetically with a rope of raw wheat dough, the pot simmers in its own internal vapour over smouldering charcoal for hours, stirred rhythmically.
            </p>
            <p>
              When the ancient dough seal breaks, the aroma—the primal <em>gamak</em>—that fills the air is pure earth, wood smoke, and sweet slow-melted garlic. This is the enduring 5,000-year-old taste of Eastern India.
            </p>

            {/* Tactile Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="border border-[#E3CBC1] bg-[#FFF9F6] p-5 rounded-xl border-l-4 border-l-[#CA3232] shadow-xs">
                <h4 className="font-serif font-bold text-lg text-[#261D1A] mb-1">
                  Unglazed Terracotta
                </h4>
                <p className="text-xs text-[#6B5045] leading-relaxed">
                  Clay breathes and absorbs excess acidity, imparting a natural alkaline mineral earthiness impossible in stainless steel.
                </p>
              </div>

              <div className="border border-[#E3CBC1] bg-[#FFF9F6] p-5 rounded-xl border-l-4 border-l-[#CA3232] shadow-xs">
                <h4 className="font-serif font-bold text-lg text-[#261D1A] mb-1">
                  Gentle Charcoal Embers
                </h4>
                <p className="text-xs text-[#6B5045] leading-relaxed">
                  Low, continuous radiant heat breaks down connective tissues and fibres without scorching delicate whole spices.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
