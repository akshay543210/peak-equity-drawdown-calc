import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Plus, Trash2, TrendingDown, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
interface EquityPoint {
  id: number;
  value: number;
  type: 'peak' | 'low';
}
const DrawdownCalculator = () => {
  const [startingBalance, setStartingBalance] = useState<number>(100000);
  const [equityPoints, setEquityPoints] = useState<EquityPoint[]>([{
    id: 1,
    value: 108000,
    type: 'peak'
  }, {
    id: 2,
    value: 101000,
    type: 'low'
  }]);
  const [results, setResults] = useState<{
    peakDrawdown: number;
    worstDrawdown: number;
    currentBalance: number;
  } | null>(null);
  const {
    toast
  } = useToast();
  const addEquityPoint = (type: 'peak' | 'low') => {
    const newPoint: EquityPoint = {
      id: Date.now(),
      value: startingBalance,
      type
    };
    setEquityPoints([...equityPoints, newPoint]);
  };
  const removeEquityPoint = (id: number) => {
    setEquityPoints(equityPoints.filter(point => point.id !== id));
  };
  const updateEquityPoint = (id: number, value: number) => {
    setEquityPoints(equityPoints.map(point => point.id === id ? {
      ...point,
      value
    } : point));
  };
  const calculateDrawdown = () => {
    if (equityPoints.length === 0) {
      toast({
        title: "No Data",
        description: "Please add some equity points to calculate drawdown.",
        variant: "destructive"
      });
      return;
    }

    // Sort points chronologically (assuming they're added in order)
    const sortedPoints = [...equityPoints];
    let peakValue = startingBalance;
    let maxDrawdown = 0;
    let currentBalance = startingBalance;

    // Calculate running peak and drawdown
    for (const point of sortedPoints) {
      currentBalance = point.value;
      if (point.type === 'peak' || point.value > peakValue) {
        peakValue = Math.max(peakValue, point.value);
      }
      const drawdown = (peakValue - point.value) / peakValue * 100;
      maxDrawdown = Math.max(maxDrawdown, drawdown);
    }

    // Calculate final drawdown from current peak
    const finalDrawdown = (peakValue - currentBalance) / peakValue * 100;
    setResults({
      peakDrawdown: Math.max(maxDrawdown, finalDrawdown),
      worstDrawdown: maxDrawdown,
      currentBalance
    });
    toast({
      title: "Calculation Complete",
      description: `Peak drawdown: ${Math.max(maxDrawdown, finalDrawdown).toFixed(2)}%`,
      variant: "default"
    });
  };
  const clearAll = () => {
    setEquityPoints([]);
    setResults(null);
    setStartingBalance(100000);
  };
  return <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Calculator className="w-4 h-4" />
            Interactive Calculator
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your Peak Drawdown
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Input your trading data and get instant professional-grade drawdown analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <Card className="trading-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-success" />
                Trading Data Input
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Starting Balance */}
              <div className="space-y-2">
                <Label htmlFor="starting-balance">Starting Balance ($)</Label>
                <Input id="starting-balance" type="number" value={startingBalance} onChange={e => setStartingBalance(Number(e.target.value))} className="font-mono text-lg" />
              </div>

              {/* Equity Points */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Equity Points</Label>
                  <div className="flex gap-2">
                    <Button variant="success" size="sm" onClick={() => addEquityPoint('peak')}>
                      <Plus className="w-4 h-4 mr-1" />
                      Peak
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => addEquityPoint('low')}>
                      <Plus className="w-4 h-4 mr-1" />
                      Low
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {equityPoints.map((point, index) => <div key={point.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${point.type === 'peak' ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'}`}>
                            {point.type === 'peak' ? 'PEAK' : 'LOW'} #{index + 1}
                          </span>
                        </div>
                        <Input type="number" value={point.value} onChange={e => updateEquityPoint(point.id, Number(e.target.value))} className="font-mono" />
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeEquityPoint(point.id)} className="text-danger hover:text-danger hover:bg-danger/10">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>)}
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={calculateDrawdown} variant="hero" className="flex-1 text-slate-50">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Drawdown
                </Button>
                <Button onClick={clearAll} variant="outline">
                  Clear All
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="trading-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-danger" />
                Drawdown Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              {results ? <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 bg-danger/10 border border-danger/20 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Peak Drawdown</div>
                      <div className="text-3xl font-bold text-danger font-mono">
                        {results.peakDrawdown.toFixed(2)}%
                      </div>
                    </div>
                    
                    <div className="p-4 bg-muted/50 border border-border rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Current Balance</div>
                      <div className="text-2xl font-bold font-mono">
                        ${results.currentBalance.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Risk Assessment */}
                  <div className="p-4 rounded-lg border" style={{
                backgroundColor: results.peakDrawdown <= 2 ? 'hsl(var(--success-muted))' : results.peakDrawdown <= 5 ? 'hsl(var(--primary) / 0.1)' : 'hsl(var(--danger-muted))',
                borderColor: results.peakDrawdown <= 2 ? 'hsl(var(--success) / 0.3)' : results.peakDrawdown <= 5 ? 'hsl(var(--primary) / 0.3)' : 'hsl(var(--danger) / 0.3)'
              }}>
                    <div className="font-semibold mb-2">Risk Assessment</div>
                    <div className="text-sm">
                      {results.peakDrawdown <= 2 ? "🟢 Excellent - Conservative risk management" : results.peakDrawdown <= 5 ? "🟡 Acceptable - Monitor your risk carefully" : "🔴 High Risk - Consider reducing position sizes"}
                    </div>
                  </div>

                  {/* Prop Firm Status */}
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="font-semibold mb-2">Prop Firm Status</div>
                    <div className="text-sm">
                      {results.peakDrawdown <= 5 ? "✅ Would pass most prop firm rules (5% limit)" : results.peakDrawdown <= 10 ? "⚠️ Check individual prop firm limits" : "❌ Exceeds most prop firm limits"}
                    </div>
                  </div>
                </div> : <div className="text-center text-muted-foreground py-12">
                  <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter your trading data and click "Calculate Drawdown" to see your results.</p>
                </div>}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default DrawdownCalculator;