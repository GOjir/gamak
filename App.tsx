import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { IngredientGallery } from './components/IngredientGallery';
import { MenuSection } from './components/MenuSection';
import { KitchenSection } from './components/KitchenSection';
import { CorporateSection } from './components/CorporateSection';
import { FounderSection } from './components/FounderSection';
import { PresenceSection } from './components/PresenceSection';
import { Footer } from './components/Footer';
import { DeliveryModal } from './components/DeliveryModal';
import { CorporateInquiryModal } from './components/CorporateInquiryModal';

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
