import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, BarChart3 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Theme Toggle - Fixed Position */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_hsl(var(--primary))_0%,_transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_hsl(var(--success))_0%,_transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <div className="mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
              <TrendingUp className="w-4 h-4" />
              Professional Trading Tools
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
              Understand & Calculate Your
              <span className="block text-primary">Peak Drawdown</span>
              <span className="block text-2xl md:text-4xl font-normal text-muted-foreground mt-4">
                Like a Pro Trader
              </span>
            </h1>
          </div>

          {/* Sub-headline */}
          <div className="mb-12 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Measure your true risk, track your equity drops, and improve consistency 
              with professional-grade drawdown analysis.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button variant="hero" size="lg" onClick={scrollToCalculator} className="group text-white">
              <Calculator className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Calculate Now
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary/50 hover:bg-primary/5">
              <BarChart3 className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="trading-card text-center">
              <div className="text-3xl font-bold text-success mb-2">2%</div>
              <div className="text-sm text-muted-foreground">Recommended Max DD</div>
            </div>
            
            <div className="trading-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Prop Firm Success Rate</div>
            </div>
            
            <div className="trading-card text-center">
              <div className="text-3xl font-bold text-danger mb-2">5%</div>
              <div className="text-sm text-muted-foreground">Average Trader DD</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;