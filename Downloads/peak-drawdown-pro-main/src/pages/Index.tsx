import HeroSection from "@/components/HeroSection";
import EducationalSection from "@/components/EducationalSection";
import DrawdownCalculator from "@/components/DrawdownCalculator";
import TradingPsychologySection from "@/components/TradingPsychologySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EducationalSection />
      <DrawdownCalculator />
      <TradingPsychologySection />
      <Footer />
    </div>
  );
};

export default Index;
