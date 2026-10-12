import { X, ArrowUpRight, Bike } from 'lucide-react';

interface DeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeliveryModal({ isOpen, onClose }: DeliveryModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="delivery-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1C1A]/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        id="delivery-modal-content"
        className="bg-[#FAF7F2] border border-[#D9CFC4] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#786E65] hover:text-[#24201D] hover:bg-[#EFE8DC] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Bike className="w-4 h-4 text-[#CA3232]" />
            <span className="text-[11px] font-mono tracking-widest text-[#CA3232] uppercase font-bold">
              Fresh Hot Dispatch
            </span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#24201D]">
            Order Gamak Online
          </h3>
          <p className="text-xs text-[#786E65] mt-1">
            Hand-packed in insulated earthenware-friendly packaging so your food arrives piping hot with its original aroma intact.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {/* Rapido's Ownly Partner */}
          <a
            id="order-link-ownly"
            href="https://ownly.food/app/brand/BR442608"
            target="_blank"
            rel="noreferrer"
            className="block p-4 rounded-xl bg-[#FCE8E8] border-2 border-[#CA3232]/60 hover:border-[#CA3232] transition-all group shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#24201D]">Ownly (by Rapido)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#CA3232] text-white font-bold">
                    Zero Platform Fee
                  </span>
                </div>
                <p className="text-xs text-[#635951] mt-1">
                  Direct restaurant menu pricing with zero hidden commission.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#CA3232] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
            </div>
          </a>

          {/* Swiggy */}
          <a
            id="order-link-swiggy"
            href="https://www.swiggy.com/menu/1348692?source=sharing"
            target="_blank"
            rel="noreferrer"
            className="block p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD3C5] hover:border-[#CA3232] hover:bg-[#FFF8F5] transition-all group shadow-2xs hover:shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#24201D]">Swiggy</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-orange-100 text-orange-800 font-semibold">
                    Live Menu
                  </span>
                </div>
                <p className="text-xs text-[#635951] mt-0.5">
                  Direct outlet menu with fast courier delivery across IT corridors.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#786E65] group-hover:text-[#CA3232] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
            </div>
          </a>

          {/* Zomato */}
          <a
            id="order-link-zomato"
            href="https://zomato.onelink.me/xqzv/7lf6jhdr"
            target="_blank"
            rel="noreferrer"
            className="block p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD3C5] hover:border-[#CA3232] hover:bg-[#FFF8F5] transition-all group shadow-2xs hover:shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#24201D]">Zomato</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-red-100 text-red-800 font-semibold">
                    Verified Outlet
                  </span>
                </div>
                <p className="text-xs text-[#635951] mt-0.5">
                  Order directly on Zomato app or web in Whitefield & East Bengaluru.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#786E65] group-hover:text-[#CA3232] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
            </div>
          </a>

          {/* Toing */}
          <a
            id="order-link-toing"
            href="https://www.toingit.com/menu/1348692"
            target="_blank"
            rel="noreferrer"
            className="block p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD3C5] hover:border-[#CA3232] hover:bg-[#FFF8F5] transition-all group shadow-2xs hover:shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#24201D]">Toing</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-semibold">
                    Direct Order
                  </span>
                </div>
                <p className="text-xs text-[#635951] mt-0.5">
                  Order fresh clay-pot dishes directly via Toing online menu.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#786E65] group-hover:text-[#CA3232] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
            </div>
          </a>
        </div>

        <div className="text-center pt-2 border-t border-[#E8D7CE]">
          <p className="text-[11px] text-[#786E65] font-mono">
            For direct bulk catering or corporate deals: email <a href="mailto:saiprashantiaarnafoods@gmail.com" className="text-[#CA3232] font-bold hover:underline">saiprashantiaarnafoods@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
