import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import StatsStrip from '@/components/StatsStrip';
import FeaturedServices from '@/components/FeaturedServices';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Dynamic Header with Desktop Dropdowns & Mobile Drawer */}
      <Header />

      <main className="flex-grow">
        {/* Full-Width Split Hero Slider (Synchronized Content & Large Visual) */}
        <HeroSlider />

        {/* 4-KPI Statistics Strip Immediately Below Hero */}
        <StatsStrip />

        {/* Featured Services: Strictly 2 Cards per Row on Mobile, 4 on Desktop */}
        <FeaturedServices />

        {/* 3-Step Interactive Enquiry Funnel with Dependent Location-Area Fields */}
        <EnquiryForm />
      </main>

      {/* Production-Ready Footer */}
      <Footer />

      {/* Persistent Mobile Bottom Sticky Bar (Call | WhatsApp | Quote) */}
      <MobileStickyBar />
    </div>
  );
}
