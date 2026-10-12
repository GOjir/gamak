import { useState, useMemo } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES } from '.menuData';
import { MenuItem } from '../types';
import { Search, Flame, Sparkles, Filter, Leaf, Info, ArrowUpRight, Bike } from 'lucide-react';
import littiPotImg from '../assets/images/gamak_litti_pot_1789188623797.jpg';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesDiet =
        dietaryFilter === 'all'
          ? true
          : dietaryFilter === 'veg'
          ? item.isVegetarian
          : !item.isVegetarian;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.provenance && item.provenance.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.nativeName && item.nativeName.includes(searchQuery));

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF4F0] border-b border-[#E3CBC1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[12px] font-mono tracking-widest text-[#CA3232] uppercase block mb-3 font-semibold">
            Pure Regional Taste
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261D1A] tracking-tight mb-4">
            FOOD WITH A <span className="text-[#CA3232]">MEMORY.</span>
          </h2>
          <p className="text-base text-[#684C42] leading-relaxed">
            Recipes passed down through rural households. Cooked with native grains, cold-pressed oils, and whole hand-ground spices without modern shortcuts.
          </p>
        </div>

        {/* Signature Highlight Banner */}
        <div className="mb-14 bg-gradient-to-r from-[#FCEBE4] via-[#F7DFD5] to-[#FCEBE4] border-2 border-[#E1C2B4] rounded-2xl overflow-hidden p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md">
          <div className="lg:col-span-4 rounded-xl overflow-hidden shadow-md h-56 lg:h-64 bg-[#261D1A] border-2 border-[#CA3232]/30">
            <img
              src={littiPotImg}
              alt="Traditional Litti Chokha Thali with melted cow ghee"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-[1.03]"
            />
          </div>
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-[#CA3232] text-white uppercase font-semibold shadow-xs">
                The Heritage Signature
              </span>
              <span className="text-xs text-[#8A584A] font-mono font-semibold">Bhojpur & Magadh Tradition</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#261D1A]">
              Traditional Litti & Chokha (3 Pcs) with Charred Garlic & Pure Cow Ghee
            </h3>
            <p className="text-sm sm:text-base text-[#5A4036] leading-relaxed">
              Dough balls kneaded from whole grain flour, generously stuffed with sattu (roasted chana flour, ajwain, mangrela, green chillies, raw mustard oil, and pickle masala). Roasted directly over wood embers until crusty, then cracked by hand and immersed in pure melted cow ghee. Served alongside fire-roasted baingan-tamatar chokha.
            </p>
            <div className="flex items-center gap-6 pt-2">
              <span className="font-serif text-3xl font-bold text-[#CA3232]">₹168</span>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-sm border border-emerald-700 flex items-center justify-center p-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                </span>
                <span className="text-xs font-medium text-emerald-900">Pure Vegetarian</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="sticky top-[64px] z-30 bg-[#FAF4F0]/95 backdrop-blur-md py-4 border-y border-[#E8D4C8] mb-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full sm:w-auto">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#CA3232] text-white shadow-md'
                        : 'bg-[#F4ECE7] hover:bg-[#ECDCD4] text-[#5A4036] border border-[#E3D1C8]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Dietary & Search Controls */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              
              {/* Dietary Toggle */}
              <div className="inline-flex bg-[#F0DFD7] rounded-full p-0.5 border border-[#DECCC2] text-xs">
                <button
                  onClick={() => setDietaryFilter('all')}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                    dietaryFilter === 'all' ? 'bg-[#CA3232] text-white shadow-xs' : 'text-[#6D4F45]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter('veg')}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 ${
                    dietaryFilter === 'veg' ? 'bg-white text-emerald-800 shadow-xs' : 'text-[#6D4F45]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
                  Veg
                </button>
                <button
                  onClick={() => setDietaryFilter('nonveg')}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 ${
                    dietaryFilter === 'nonveg' ? 'bg-[#CA3232] text-white shadow-xs' : 'text-[#6D4F45]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  Non-Veg
                </button>
              </div>

              {/* Search Box */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#A66E60] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-xs bg-[#FFF9F6] border border-[#DECCC2] rounded-full focus:outline-none focus:border-[#CA3232] text-[#261D1A] placeholder:text-[#9A766B] w-32 sm:w-44"
                />
              </div>

            </div>

          </div>
        </div>

        {/* Dishes Listing Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#F6ECE6] rounded-2xl border border-[#E3CBC1]">
            <p className="font-serif text-xl text-[#6D4F45]">No dishes found matching your selection.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#CA3232] underline font-semibold"
            >
              Reset filters to see all authentic preparations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFF8F5] hover:bg-[#FDF0E9] border border-[#E8D4C8] hover:border-[#CA3232] rounded-xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Top Bar: Veg/Non-Veg + Provenance Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {item.isVegetarian ? (
                        <span
                          title="Pure Vegetarian"
                          className="w-3.5 h-3.5 rounded-sm border border-emerald-700 flex items-center justify-center p-0.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
                        </span>
                      ) : (
                        <span
                          title="Non-Vegetarian"
                          className="w-3.5 h-3.5 rounded-sm border border-[#CA3232] flex items-center justify-center p-0.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CA3232]"></span>
                        </span>
                      )}

                      {item.nativeName && (
                        <span className="text-xs font-serif text-[#9C6D5F] font-medium">
                          {item.nativeName}
                        </span>
                      )}
                    </div>

                    {item.signature && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#CA3232] bg-[#FCEBE4] border border-[#F2CFBF] px-2 py-0.5 rounded-full font-semibold">
                        House Classic
                      </span>
                    )}
                  </div>

                  {/* Dish Name */}
                  <h4 className="font-serif text-xl font-bold text-[#261D1A] group-hover:text-[#CA3232] transition-colors mb-2">
                    {item.name}
                  </h4>

                  {/* One-Line Tactile Description */}
                  <p className="text-xs sm:text-[13px] text-[#5E483E] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Bar: Price & Technique */}
                <div className="pt-3 border-t border-[#EFE0D7] flex items-baseline justify-between mt-2">
                  <div className="text-[11px] font-mono text-[#996D60]">
                    {item.portion && (
                      <span className="font-semibold text-[#8C4A3E] mr-1.5">{item.portion} •</span>
                    )}
                    {item.cookingMethod || item.provenance}
                  </div>
                  <div className="font-serif text-xl font-bold text-[#CA3232]">
                    ₹{item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Online Ordering Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FFF6F2] border-2 border-[#E8D0C4] shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Bike className="w-4 h-4 text-[#CA3232]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#CA3232] font-bold">
                  Craving Gamak Right Now?
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#261D1A]">
                Order Fresh to Your Doorstep
              </h3>
              <p className="text-xs text-[#6B5147] mt-0.5">
                Cooked fresh in unglazed clay pots and dispatched hot with insulated packaging.
              </p>
            </div>

            {/* Direct 4 Partner Links */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <a
                id="menu-order-ownly"
                href="https://ownly.food/app/brand/BR442608"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#CA3232] hover:bg-[#9B151B] text-white text-xs font-bold transition-all shadow-xs hover:shadow-sm"
              >
                <span>Ownly (Zero Platform Fee)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="menu-order-swiggy"
                href="https://www.swiggy.com/menu/1348692?source=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#E0CEC2] hover:border-[#CA3232] text-[#261D1A] hover:text-[#CA3232] text-xs font-semibold transition-all shadow-2xs"
              >
                <span>Swiggy</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#CA3232]" />
              </a>

              <a
                id="menu-order-zomato"
                href="https://zomato.onelink.me/xqzv/7lf6jhdr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#E0CEC2] hover:border-[#CA3232] text-[#261D1A] hover:text-[#CA3232] text-xs font-semibold transition-all shadow-2xs"
              >
                <span>Zomato</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#CA3232]" />
              </a>

              <a
                id="menu-order-toing"
                href="https://www.toingit.com/menu/1348692"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#E0CEC2] hover:border-[#CA3232] text-[#261D1A] hover:text-[#CA3232] text-xs font-semibold transition-all shadow-2xs"
              >
                <span>Toing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#CA3232]" />
              </a>
            </div>
          </div>
        </div>

        {/* Dietary & Sourcing Assurance Footnote */}
        <div className="mt-8 p-6 bg-[#F6ECE6] border border-[#E1CCC0] rounded-xl text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-xs text-[#63483E] leading-relaxed">
            <strong className="text-[#CA3232]">Note on authenticity:</strong> We do not use commercial curry gravies, cream shortcuts, or refined food colour. Ahuna meat is prepared in limited batches daily in individual clay pots.
          </p>
        </div>

      </div>
    </section>
  );
}
