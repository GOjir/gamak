import { useState } from 'react';
import { Building2, Users, Utensils, CheckCircle2, ArrowRight, ShieldCheck, Award, Sparkles, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import corporateDiningImg from './corporate_canteen_dining_1789189368978.jpg';

interface CorporateSectionProps {
  onOpenCorporateInquiry: () => void;
}

export function CorporateSection({ onOpenCorporateInquiry }: CorporateSectionProps) {
  const [activeTab, setActiveTab] = useState<'daily' | 'boxes' | 'popups' | 'events'>('daily');

  const clientLogos = [
    { name: 'EY (Ernst & Young)', label: 'Corporate Offsites & Festivals', role: 'Professional Services' },
    { name: 'The Math Company', label: 'Tech Park Campus Dining', role: 'Analytics & AI' },
    { name: "St. John's", label: 'Institutional Meal Programs', role: 'Healthcare & Academics' },
    { name: 'Big 4 Consulting', label: 'Executive Boardroom Lunches', role: 'Global Advisory' },
    { name: 'HungerBox / KitchenBells', label: 'Cafeteria Tech Aggregation', role: 'Food Court Platforms' },
  ];

  const models = [
    {
      id: 'daily',
      title: 'Dedicated Canteen Tuck-In',
      badge: 'Most Popular for Tech Parks',
      description: 'A permanent or rotational regional counter inside your corporate cafeteria or tech park food court.',
      features: [
        'Live Ahuna handi stewing and wood-charcoal roasting on display',
        'Daily rotational menus: Champaran Handi, Litti Chokha, Pitha, Sattu beverages',
        'Seamless POS / RFID integration with HungerBox, KitchenBells, or SmartQ',
        'FSSAI-certified kitchen staff in traditional rustic chef uniforms',
      ],
      idealFor: 'Tech parks & companies with 300+ daily on-premise workforce',
    },
    {
      id: 'boxes',
      title: 'Daily Employee Meal Boxes',
      badge: '700+ Daily Capacity',
      description: 'Pre-packed, tamper-evident biodegradable meal boxes delivered warm directly to office floors.',
      features: [
        'Zero palm oil, zero synthetic food colors — 100% cold-pressed mustard oil',
        'High-protein native grains, sand-roasted sattu, and unpolished pulses',
        'Separate hot compartments with leak-proof earthenware-inspired containers',
        'Guaranteed 30-minute delivery window for team project war rooms & shifts',
      ],
      idealFor: 'Late night shifts, hackathons, team scrums, and executive desks',
    },
    {
      id: 'popups',
      title: 'Heritage Food Festivals (2–5 Days)',
      badge: 'High Engagement',
      description: 'Turn your corporate cafeteria into a lively 5,000-year-old culinary festival with live stations.',
      features: [
        'Live charcoal sigri stalls with handcrafted Litti Chokha dipped in cow ghee',
        'Traditional clay handi slow-cooking demonstration with chef storytelling',
        'Refreshing native welcome drinks: Namkeen Sattu Sharbat & Bael coolers',
        'Custom corporate branding, digital menu kiosks, and festive decor',
      ],
      idealFor: 'Culture weeks, Diwali/Chhath celebrations, and quarterly townhalls',
    },
    {
      id: 'events',
      title: 'Executive Boardroom Catering',
      badge: 'VIP Hospitality',
      description: 'Curated heritage dining setups for leadership summits, foreign client visits, and retreats.',
      features: [
        'Individual brass and unglazed terracotta serviceware',
        'Signature Champaran Ahuna Mutton, Handi Paneer, and Mithila Kheer',
        'Dedicated senior hospitality stewards and sommelier-style beverage service',
      ],
      idealFor: 'Board meetings, global CXO delegations, and annual galas',
    },
  ];

  return (
    <section id="corporates" className="py-20 md:py-28 bg-[#F5EBE6] border-b border-[#E3CBC1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEBE4] border border-[#F2CFBF] mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#CA3232]" />
            <span className="text-[11px] font-mono tracking-widest text-[#9A3020] uppercase font-semibold">
              Corporate Dining Solutions • Sai Prashanthi Aarna Foods
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#261D1A] tracking-tight mb-4">
            CORPORATE CANTEEN DEALS & <br className="hidden sm:inline" />
            <span className="text-[#CA3232]">WORKPLACE DINING.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#63483E] leading-relaxed">
            Replace homogenized, oily cafeteria food with 5,000-year-old wholesome East Indian gastronomy. Pure ingredients, high-protein native grains, and authentic slow clay-pot cooking tailored for modern workforces.
          </p>
        </div>

        {/* Highlight Stats / Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-[#FAF4F0] p-5 rounded-xl border border-[#DFC9BD] text-center shadow-xs">
            <span className="block font-serif text-3xl md:text-4xl font-bold text-[#CA3232] mb-1">
              700+
            </span>
            <span className="text-xs uppercase font-mono tracking-wider text-[#63483E] font-semibold">
              Daily Meal Boxes Delivered
            </span>
          </div>

          <div className="bg-[#FAF4F0] p-5 rounded-xl border border-[#DFC9BD] text-center shadow-xs">
            <span className="block font-serif text-3xl md:text-4xl font-bold text-[#CA3232] mb-1">
              100%
            </span>
            <span className="text-xs uppercase font-mono tracking-wider text-[#63483E] font-semibold">
              Cold-Pressed Raw Mustard
            </span>
          </div>

          <div className="bg-[#FAF4F0] p-5 rounded-xl border border-[#DFC9BD] text-center shadow-xs">
            <span className="block font-serif text-3xl md:text-4xl font-bold text-[#CA3232] mb-1">
              Zero
            </span>
            <span className="text-xs uppercase font-mono tracking-wider text-[#63483E] font-semibold">
              Palm Oil & Artificial Colors
            </span>
          </div>

          <div className="bg-[#FAF4F0] p-5 rounded-xl border border-[#DFC9BD] text-center shadow-xs">
            <span className="block font-serif text-3xl md:text-4xl font-bold text-[#CA3232] mb-1">
              2-Hr
            </span>
            <span className="text-xs uppercase font-mono tracking-wider text-[#63483E] font-semibold">
              Corporate Proposal Turnaround
            </span>
          </div>
        </div>

        {/* Main Content Grid: Image + Interactive Models */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Visual Showcase & Enterprise Credibility */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#DFC9BD] shadow-xl bg-[#261D1A]">
              <img
                src={corporateDiningImg}
                alt="Corporate cafeteria food counter featuring traditional Indian terracotta handis and live counter"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[380px] object-cover object-center filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#261D1A]/90 via-[#261D1A]/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-mono tracking-widest text-[#FFC4B6] uppercase block font-semibold">
                  Live Tech Park Operations
                </span>
                <h4 className="font-serif text-xl font-bold text-white mb-1">
                  Fresh Clay Pot Simmering on Campus
                </h4>
                <p className="text-xs text-[#E3D1C8] leading-relaxed">
                  Employees experience the comforting aroma of hand-crushed spices and slow charcoal heat right inside their cafeteria.
                </p>
              </div>
            </div>

            {/* Trusted By Grid */}
            <div className="bg-[#FAF4F0] p-6 rounded-2xl border border-[#DFC9BD]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#845648] font-bold">
                  Trusted By Industry Leaders
                </span>
                <ShieldCheck className="w-4 h-4 text-[#CA3232]" />
              </div>
              <div className="space-y-3">
                {clientLogos.map((client) => (
                  <div
                    key={client.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/70 border border-[#ECD9CE] text-xs"
                  >
                    <div>
                      <strong className="text-[#261D1A] font-semibold block">{client.name}</strong>
                      <span className="text-[#7A5B51] text-[11px]">{client.label}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#9A3020] bg-[#FDEEE8] px-2 py-0.5 rounded font-medium">
                      {client.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Service Packages */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Model Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#EADBD3] p-1.5 rounded-xl border border-[#DECBC1]">
              {[
                { id: 'daily', label: 'Canteen Counter' },
                { id: 'boxes', label: 'Meal Boxes' },
                { id: 'popups', label: 'Food Pop-Ups' },
                { id: 'events', label: 'Executive Dinners' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#CA3232] text-white shadow-sm'
                      : 'text-[#5C453E] hover:text-[#261D1A] hover:bg-white/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Model Card */}
            {(() => {
              const currentModel = models.find((m) => m.id === activeTab) || models[0];
              return (
                <div className="bg-[#FAF4F0] rounded-2xl p-7 md:p-8 border border-[#DFC9BD] shadow-md relative">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#CA3232] font-bold bg-[#FCEBE4] border border-[#F2CFBF] px-3 py-1 rounded-full">
                      {currentModel.badge}
                    </span>
                    <span className="text-xs text-[#7A5B51] font-sans font-medium">
                      Tailored SLA & Corporate Invoicing
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#261D1A] mb-3">
                    {currentModel.title}
                  </h3>

                  <p className="text-sm md:text-base text-[#614D45] leading-relaxed mb-6">
                    {currentModel.description}
                  </p>

                  <div className="border-t border-b border-[#EADBD3] py-5 mb-6">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-[#845648] font-bold mb-3">
                      Key Deliverables & Specifications:
                    </h5>
                    <ul className="space-y-2.5">
                      {currentModel.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E2B25]">
                          <CheckCircle2 className="w-4 h-4 text-[#CA3232] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs text-[#7A5B51]">
                      <span className="font-semibold block text-[#261D1A]">Best Suited For:</span>
                      <span>{currentModel.idealFor}</span>
                    </div>

                    <button
                      id="corporate-inquiry-cta-btn"
                      onClick={onOpenCorporateInquiry}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#CA3232] hover:bg-[#B22424] text-white rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-colors cursor-pointer group"
                    >
                      <span>Inquire About This Deal</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* Why Gamak for Tech Parks & HR Leaders */}
            <div className="bg-[#FFFDFB] rounded-2xl p-6 border border-[#DFC9BD] shadow-xs">
              <h4 className="font-serif text-lg font-bold text-[#261D1A] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#CA3232]" />
                Why Corporate Wellness & Facility Teams Choose Gamak
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#63483E] leading-relaxed">
                <div className="border-l-2 border-[#CA3232] pl-3">
                  <strong className="block text-[#261D1A] mb-0.5">Digestive Wellness</strong>
                  Slow clay pot cooking retains moisture naturally without hydrogenated fats, preventing post-lunch fatigue.
                </div>
                <div className="border-l-2 border-[#CA3232] pl-3">
                  <strong className="block text-[#261D1A] mb-0.5">High Native Protein</strong>
                  Sand-roasted Sattu and unpolished horse gram (Kulthi) deliver authentic plant protein for active minds.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Corporate Contact Banner */}
        <div className="bg-[#CA3232] text-white rounded-2xl p-8 md:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFD8CD] block mb-2 font-semibold">
              Ready to Upgrade Your Cafeteria Experience?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
              Schedule a Complimentary Tasting Box for Your Office
            </h3>
            <p className="text-sm text-[#FFECE5] leading-relaxed">
              We send a curated tasting kit featuring our Champaran Ahuna Handi, Litti Chokha, and Sattu coolers directly to your administrative or cafeteria committee.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenCorporateInquiry}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#CA3232] hover:bg-[#FFEAE2] rounded-full text-sm font-bold tracking-wide shadow-lg transition-all cursor-pointer text-center whitespace-nowrap"
            >
              Request Canteen Proposal
            </button>
            <a
              href="tel:+916366882862"
              className="w-full sm:w-auto px-6 py-4 border-2 border-white/40 hover:border-white text-white rounded-full text-sm font-semibold tracking-wide transition-all text-center flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>+91 63668 82862</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
