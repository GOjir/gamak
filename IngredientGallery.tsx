import { useState } from 'react';
import { INGREDIENTS_DATA } from './ingredientsData';
import { Ingredient } from '../types';
import ingredientsImg from './gamak_ingredients_1789188608898.jpg';
import { Sparkles, MapPin, Wind, Flame } from 'lucide-react';

export function IngredientGallery() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>(INGREDIENTS_DATA[0]);

  return (
    <section id="ingredients" className="py-20 md:py-28 bg-[#FAF4F0] border-b border-[#E3CBC1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[12px] font-mono tracking-widest text-[#CA3232] uppercase block mb-3 font-semibold">
              Provenance & Soil
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261D1A] tracking-tight">
              IT STARTS WITH WHAT <span className="text-[#CA3232]">GOES INTO THE POT.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#6E4F44] max-w-md font-normal leading-relaxed">
            Select an ingredient to explore its origin, why we refuse to substitute it, and the tactile memory it carries.
          </p>
        </div>

        {/* Interactive Grid / Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Discovery Selector (Grid of 8 ingredients) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INGREDIENTS_DATA.map((item) => {
              const isSelected = selectedIngredient.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIngredient(item)}
                  className={`text-left p-4 rounded-xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#FCEBE4] border-[#CA3232] shadow-sm ring-1 ring-[#CA3232]'
                      : 'bg-[#FFF9F6] hover:bg-[#FDF0E9] border-[#E8D4C8]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-serif text-base font-bold ${isSelected ? 'text-[#CA3232]' : 'text-[#261D1A]'}`}>
                      {item.name}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#CA3232]"></span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-[#9C6D5F] block mb-2 font-medium">
                    {item.hindiName}
                  </span>
                  <p className="text-xs text-[#6A5147] line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Tactile Card with Documentary Photo & Details */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 bg-[#F6ECE6] border-2 border-[#E1CCC0] rounded-2xl p-6 sm:p-8 shadow-md">
              
              {/* Top Photo Strip */}
              <div className="relative rounded-xl overflow-hidden mb-6 h-48 sm:h-56 bg-[#261D1A] border border-[#DDBBB0]">
                <img
                  src={ingredientsImg}
                  alt={selectedIngredient.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#261D1A]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FFCDBF] font-semibold">
                    Documentary Still • Stone Grinding
                  </span>
                  <span className="text-[11px] bg-[#CA3232] px-2.5 py-0.5 rounded text-white font-medium shadow-xs">
                    {selectedIngredient.category}
                  </span>
                </div>
              </div>

              {/* Title & Hindi Script */}
              <div className="border-b border-[#E1CCC0] pb-4 mb-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#261D1A]">
                    {selectedIngredient.name}
                  </h3>
                  <span className="font-serif text-xl font-bold text-[#CA3232]">
                    {selectedIngredient.hindiName}
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-[#8A5749] font-mono mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#CA3232]" />
                  <span>Harvest Origin: {selectedIngredient.origin}</span>
                </div>
              </div>

              {/* Narrative Breakdown */}
              <div className="space-y-4 text-sm text-[#46312A] leading-relaxed">
                <p className="font-serif text-base text-[#2E1F1A] italic font-medium">
                  "{selectedIngredient.shortDescription}"
                </p>
                
                <p className="text-[13px] text-[#5A433A] leading-relaxed">
                  {selectedIngredient.details}
                </p>

                <div className="pt-4 border-t border-[#E1CCC0] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-[#FFF9F6] p-3 rounded-lg border border-[#E8D4C8]">
                    <span className="font-mono text-[10px] text-[#CA3232] uppercase tracking-wider block mb-1 font-semibold">
                      Aroma & Palate
                    </span>
                    <span className="font-medium text-[#261D1A]">
                      {selectedIngredient.flavorProfile}
                    </span>
                  </div>

                  <div className="bg-[#FFF9F6] p-3 rounded-lg border border-[#E8D4C8]">
                    <span className="font-mono text-[10px] text-[#CA3232] uppercase tracking-wider block mb-1 font-semibold">
                      Traditional Use
                    </span>
                    <span className="font-medium text-[#261D1A]">
                      {selectedIngredient.traditionalUse}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
