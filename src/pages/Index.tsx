import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ListingStrategySection from "@/components/ListingStrategySection";
import MarketAnalysisSection from "@/components/MarketAnalysisSection";
import StrategicMarketingSection from "@/components/StrategicMarketingSection";
import CommunicationSection from "@/components/CommunicationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ListingStrategySection />
      <MarketAnalysisSection />
      <StrategicMarketingSection />
      <CommunicationSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
