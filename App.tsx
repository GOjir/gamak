import { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Philosophy } from './Philosophy';
import { IngredientGallery } from './IngredientGallery';
import { MenuSection } from './MenuSection';
import { KitchenSection } from './KitchenSection';
import { CorporateSection } from './CorporateSection';
import { FounderSection } from './FounderSection';
import { PresenceSection } from './PresenceSection';
import { Footer } from './Footer';
import { DeliveryModal } from './DeliveryModal';
import { CorporateInquiryModal } from './CorporateInquiryModal';

export default function App() {
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF4F0] text-[#261D1A] flex flex-col font-sans">
      {/* Top Fixed Header */}
      <Navbar
        onOpenDelivery={() => setIsDeliveryOpen(true)}
        onOpenCorporate={() => setIsCorporateOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. HERO - 5,000-Year Ancient East Indian Cuisine */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onExploreStory={() => scrollToSection('story')}
          onExploreCorporate={() => scrollToSection('corporates')}
        />

        {/* 2. CIVILIZATIONAL PHILOSOPHY */}
        <Philosophy />

        {/* 3. ANCIENT STAPLES & INGREDIENTS */}
        <IngredientGallery />

        {/* 4. THE 5,000-YEAR REGIONAL MENU */}
        <MenuSection />

        {/* 5. THE ANCIENT HEARTH & KITCHEN */}
        <KitchenSection />

        {/* 6. CORPORATE CANTEEN DEALS & WORKPLACE DINING */}
        <CorporateSection
          onOpenCorporateInquiry={() => setIsCorporateOpen(true)}
        />

        {/* 7. THE FOUNDER - C. PARTHASARATHY */}
        <FounderSection
          onOpenCorporateInquiry={() => setIsCorporateOpen(true)}
        />

        {/* 8. LOCATIONS & PRESENCE */}
        <PresenceSection
          onOpenDelivery={() => setIsDeliveryOpen(true)}
          onOpenCorporate={() => setIsCorporateOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <DeliveryModal
        isOpen={isDeliveryOpen}
        onClose={() => setIsDeliveryOpen(false)}
      />

      <CorporateInquiryModal
        isOpen={isCorporateOpen}
        onClose={() => setIsCorporateOpen(false)}
      />
    </div>
  );
}
