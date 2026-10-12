import { useState, FormEvent } from 'react';
import { X, Building2, Users, Mail, Phone, Calendar, CheckCircle2, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { CorporateInquiryDetails } from '../types';

interface CorporateInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CorporateInquiryModal({ isOpen, onClose }: CorporateInquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<CorporateInquiryDetails>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: 'Bengaluru',
    techParkOrLocation: '',
    serviceType: 'daily_canteen',
    headcount: '100-300',
    approxDateOrStartDate: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto-reset after a short duration
    }, 4000);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="corporate-inquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        id="corporate-inquiry-modal"
        className="bg-[#FAF4F0] border border-[#DFC9BD] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden text-[#261D1A] animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#CA3232] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl md:text-2xl font-bold tracking-wide">
                  Corporate Canteen & Catering Deals
                </h3>
                <span className="text-[10px] uppercase font-mono tracking-wider bg-white/20 px-2 py-0.5 rounded-full font-semibold">
                  B2B
                </span>
              </div>
              <p className="text-xs text-[#FFD8CD] font-sans">
                Sai Prashanthi Aarna Foods • Dedicated Tech Park & Institutional Food Services
              </p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-[#EBF7EE] text-[#1E7E34] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#C3E6CB]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#261D1A] mb-2">
                Canteen Deal Inquiry Received
              </h4>
              <p className="text-sm text-[#614D45] max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-[#261D1A]">{formData.contactPerson}</strong>. Our Corporate Dining Solutions team at <strong>Sai Prashanthi Aarna Foods</strong> will review your requirement for <strong>{formData.companyName}</strong> and contact you within 2 business hours with our corporate rate card and sample tasting schedule.
              </p>

              <div className="bg-[#FFF8F5] border border-[#F0D0C2] rounded-xl p-4 max-w-md mx-auto text-left mb-6 text-xs space-y-2 text-[#684C42]">
                <div className="flex justify-between">
                  <span className="font-medium text-[#261D1A]">Service Model:</span>
                  <span className="capitalize">{formData.serviceType.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#261D1A]">Estimated Headcount:</span>
                  <span>{formData.headcount} employees</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#261D1A]">Location:</span>
                  <span>{formData.techParkOrLocation || formData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#261D1A]">Official Email:</span>
                  <span className="font-mono text-xs">saiprashantiaarnafoods@gmail.com</span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="px-6 py-2.5 bg-[#CA3232] text-white rounded-full text-sm font-medium hover:bg-[#B22424] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-[#FBECE6] border border-[#F2CFBF] rounded-xl p-3.5 flex items-start gap-3 text-xs text-[#7A3E31]">
                <ShieldCheck className="w-5 h-5 shrink-0 text-[#CA3232] mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#9A3020]">Trusted by Big 4 & Tech Parks</strong>
                  <span>Serving over 700+ daily employee meal boxes and live canteen tuck-in counters for companies like EY, The Math Company, and St. John's.</span>
                </div>
              </div>

              {/* Company & Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5A453F] mb-1 uppercase tracking-wider">
                    Company / Tech Park *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. EY, The MathCo, Bagmane Tech Park"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DFC9BD] text-sm text-[#261D1A] focus:outline-none focus:border-[#CA3232] focus:ring-1 focus:ring-[#CA3232]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5A453F] mb-1 uppercase tracking-wider">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma (Facility / HR Head)"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DFC9BD] text-sm text-[#261D1A] focus:outline-none focus:border-[#CA3232] focus:ring-1 focus:ring-[#CA3232]"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5A453F] mb-1 uppercase tracking-wider">
                    Corporate Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DFC9BD] text-sm text-[#261D1A] focus:outline-none focus:border-[#CA3232] focus:ring-1 focus:ring-[#CA3232]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5A453F] mb-1 uppercase tracking-wider">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DFC9BD] text-sm text-[#261D1A] focus:outline-none focus:border-[#CA3232] focus:ring-1 focus:ring-[#CA3232]"
                  />
                </div>
              </div>

              {/* Service Type & Headcount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5A453F] mb-1 uppercase tracking-wider">
                    Canteen / Service Model *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        serviceType: e.target.value as CorporateInquiryDetails['serviceType'],
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DFC9BD] text-sm text-[#261D1A] focus:outline-none focus:border-[#CA3232] focus:ring-1 focus:ring-[#CA3232]"
                  >
                    <option value="daily_canteen">Daily Canteen Tuck-in (Dedicated Regional Counter)</option>
                    <option value="bulk_meal_boxes">Daily Employee Meal Boxes (Lunch / Dinner)</option>
                    <option value="live_counter">Live Ahuna Handi & Litti Food Station</option>
                    <option value="pop_up">Corporate Heritage Food Festival (2-5 Days Pop-up)</option>
                    <option value="executive_catering">Executive Boardroom & Offsite Catering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5A453F] mb-1 uppercase tracking-wider">
                    Expected Employee Headcount *
                  </label>
                  <select
                    value={formData.headcount}
                    onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DFC9BD] text-sm text-[#261D1A] focus:outline-none focus:border-[#CA3232] focus:ring-1 focus:ring-[#CA3232]"
                  >
                    <option value="50-100">50 – 100 Employees</option>
                    <option value="100-300">100 – 300 Employees</option>
                    <option value="300-600">300 – 600 Employees</option>
                    <option value="600-1500">600 – 1,500 Employees</option>
                    <option value="1500+">1,500+ Campus / Multi-floor</option>
                  </select>
                </div>
              </div>

              {/* City & Tech Park / Campus */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5A453F] mb-1 uppercase tracking-wider">
                    City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DFC9BD] text-sm text-[#261D1A] focus:outline-none focus:border-[#CA3232] focus:ring-1 focus:ring-[#CA3232]"
                  >
                    <option value="Bengaluru">Bengaluru (Whitefield, ORR, E-City, Manyata, Koramangala)</option>
                    <option value="Coimbatore">Coimbatore (Tidel Park, SEZ, Peelamedu)</option>
                    <option value="Other">Other Metro Region</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5A453F] mb-1 uppercase tracking-wider">
                    Office / Tech Park Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ITPL, Prestige Tech Park, Embassy GolfLinks"
                    value={formData.techParkOrLocation}
                    onChange={(e) => setFormData({ ...formData, techParkOrLocation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#DFC9BD] text-sm text-[#261D1A] focus:outline-none focus:border-[#CA3232] focus:ring-1 focus:ring-[#CA3232]"
                  />
                </div>
              </div>

              {/* Additional Requirements / Specific Request */}
              <div>
                <label className="block text-xs font-semibold text-[#5A453F] mb-1 uppercase tracking-wider">
                  Specific Requirements or Target Start Date
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Looking for a live Litti Chokha counter from next Monday, or sample tasting box required for 5 cafeteria committee members..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#DFC9BD] text-sm text-[#261D1A] focus:outline-none focus:border-[#CA3232] focus:ring-1 focus:ring-[#CA3232] resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#845648] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#CA3232]" />
                  <span>Free corporate tasting box available on request</span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 sm:flex-none px-5 py-2.5 border border-[#DFC9BD] rounded-full text-sm font-medium text-[#684C42] hover:bg-[#F3E3DB] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-7 py-2.5 bg-[#CA3232] hover:bg-[#B22424] text-white rounded-full text-sm font-medium shadow-md transition-colors font-semibold"
                  >
                    Request Canteen Proposal
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer info strip */}
        <div className="bg-[#F5E6DF] border-t border-[#DFC9BD] px-6 py-3 text-xs text-[#754E41] flex flex-wrap items-center justify-between gap-2">
          <span>Official Corporate Office: <strong>Sai Prashanthi Aarna Foods</strong></span>
          <a href="mailto:saiprashantiaarnafoods@gmail.com" className="font-mono text-[11px] text-[#CA3232] hover:underline font-semibold">saiprashantiaarnafoods@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
