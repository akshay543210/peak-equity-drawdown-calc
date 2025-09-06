import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, AlertTriangle, BookOpen } from "lucide-react";

const EducationalSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <BookOpen className="w-4 h-4" />
            Trading Education
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is Peak Equity Drawdown?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding drawdown is crucial for risk management and long-term trading success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Explanation */}
          <div className="space-y-6">
            <div className="trading-card">
              <h3 className="text-2xl font-bold mb-4 text-primary">Simple Definition</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Peak Equity Drawdown</strong> is the biggest percentage fall 
                from your highest account balance to a later low point. It shows the maximum risk you 
                actually experienced during your trading period.
              </p>
            </div>

            <div className="trading-card">
              <h3 className="text-2xl font-bold mb-4 text-success">Real Example</h3>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between items-center">
                  <span>Starting Balance:</span>
                  <span className="font-mono font-bold">$100,000</span>
                </div>
                <div className="flex justify-between items-center text-success">
                  <span>Peak Balance:</span>
                  <span className="font-mono font-bold">$108,000</span>
                </div>
                <div className="flex justify-between items-center text-danger">
                  <span>Lowest After Peak:</span>
                  <span className="font-mono font-bold">$101,000</span>
                </div>
                <div className="border-t pt-3 flex justify-between items-center text-xl font-bold">
                  <span>Peak Drawdown:</span>
                  <span className="font-mono text-danger">6.48%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Chart */}
          <div className="trading-card">
            <h3 className="text-xl font-bold mb-6 text-center">Equity Curve Example</h3>
            <div className="relative h-64 bg-background/50 rounded-lg p-4 overflow-hidden">
              {/* Grid Lines */}
              <div className="absolute inset-4 opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="absolute w-full border-t border-border" style={{ top: `${i * 25}%` }}></div>
                ))}
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="absolute h-full border-l border-border" style={{ left: `${i * 25}%` }}></div>
                ))}
              </div>
              
              {/* Equity Line */}
              <svg className="absolute inset-4 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polyline
                  fill="none"
                  stroke="hsl(var(--success))"
                  strokeWidth="2"
                  points="0,80 20,70 40,50 60,40 80,45 100,60"
                  className="drop-shadow-sm"
                />
                {/* Peak Point */}
                <circle cx="60" cy="40" r="3" fill="hsl(var(--success))" className="animate-pulse-glow" />
                {/* Drawdown Point */}
                <circle cx="80" cy="45" r="3" fill="hsl(var(--danger))" className="animate-pulse-glow" />
                
                {/* Drawdown Area */}
                <path
                  d="M 60,40 L 80,45 L 80,40 Z"
                  fill="hsl(var(--danger))"
                  fillOpacity="0.2"
                />
              </svg>
              
              {/* Labels */}
              <div className="absolute top-6 right-8 text-success font-bold text-sm">Peak: $108K</div>
              <div className="absolute top-12 right-8 text-danger font-bold text-sm">Low: $101K</div>
              <div className="absolute bottom-6 right-8 text-danger font-bold">-6.48% DD</div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-success/20 bg-success-muted">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-success">
                <TrendingUp className="w-5 h-5" />
                Why It Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Drawdown shows your real risk exposure and helps you understand 
                if your trading strategy aligns with your risk tolerance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <AlertTriangle className="w-5 h-5" />
                Risk Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Professional traders typically keep drawdown under 2-3% 
                to maintain consistent growth and psychological stability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-danger/20 bg-danger-muted">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-danger">
                <TrendingDown className="w-5 h-5" />
                Prop Firm Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Most prop trading firms have strict drawdown limits (usually 5-10%). 
                Understanding your DD helps you stay within their rules.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;