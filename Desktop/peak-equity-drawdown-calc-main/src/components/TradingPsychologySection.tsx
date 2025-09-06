import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, TrendingUp, Shield, Lightbulb, Users } from "lucide-react";
const TradingPsychologySection = () => {
  const insights = [{
    icon: Brain,
    title: "Psychology First",
    description: "Controlling drawdown is 80% psychology, 20% strategy. When you know your maximum risk, you trade with confidence.",
    color: "primary"
  }, {
    icon: Target,
    title: "2% Rule",
    description: "Keep your drawdown under 2% for consistent growth. This allows your account to recover quickly from any losses.",
    color: "success"
  }, {
    icon: Shield,
    title: "Risk Management",
    description: "Professional traders focus on preserving capital first, making profits second. Drawdown control is your safety net.",
    color: "primary"
  }, {
    icon: TrendingUp,
    title: "Scaling Strategy",
    description: "Low drawdown allows you to scale position sizes confidently. Higher risk means smaller positions and slower growth.",
    color: "success"
  }];
  const tips = ["Set a maximum daily drawdown limit and stick to it religiously", "Use position sizing that ensures no single trade can cause >1% account drawdown", "Track your drawdown weekly to identify patterns in your trading behavior", "Take a break from trading when approaching your maximum drawdown limit", "Focus on risk-reward ratios rather than win rates for consistent profits"];
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Brain className="w-4 h-4" />
            Trading Psychology
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Drawdown Control Matters
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the psychology behind drawdown management is crucial for long-term trading success.
          </p>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {insights.map((insight, index) => {
          const Icon = insight.icon;
          return <Card key={index} className="trading-card group hover:scale-[1.02] transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${insight.color === 'success' ? 'bg-success/20 text-success' : 'bg-primary/20 text-primary'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{insight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Professional Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="trading-card">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold">Pro Tips for Drawdown Control</h3>
            </div>
            
            <div className="space-y-4">
              {tips.map((tip, index) => <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                </div>)}
            </div>
          </div>

          <div className="trading-card">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-success" />
              <h3 className="text-2xl font-bold">Prop Firm Standards</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="font-semibold text-success mb-2">Conservative Firms (2-5%)</div>
                <p className="text-sm text-muted-foreground">All prop firms typically allow 2-5% maximum drawdown. These limits ensure trader discipline and firm capital protection.</p>
              </div>
              
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="font-semibold text-primary mb-2">Aggressive Firms (5-10%)</div>
                <p className="text-sm text-muted-foreground">
                  Some firms allow higher drawdowns but require better risk-reward ratios and 
                  stricter profit targets to compensate for increased risk.
                </p>
              </div>
              
              <div className="p-4 bg-muted/50 border border-border rounded-lg">
                <div className="font-semibold mb-2">Success Rate Impact</div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>&lt;2% Drawdown:</span>
                    <span className="text-success font-medium">~90% pass rate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2-5% Drawdown:</span>
                    <span className="text-primary font-medium">~60% pass rate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>&gt;5% Drawdown:</span>
                    <span className="text-danger font-medium">~20% pass rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TradingPsychologySection;