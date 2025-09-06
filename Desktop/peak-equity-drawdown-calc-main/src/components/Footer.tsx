import { Button } from "@/components/ui/button";
import { TrendingUp, Twitter, MessageCircle, Users, Youtube, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Peak Drawdown Calculator</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Professional trading tools for risk management and drawdown analysis. 
              Built for traders who take their risk seriously.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" className="hover:border-primary/50" asChild>
                <a href="https://x.com/Clarity_funding" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </a>
              </Button>
              <Button variant="outline" size="sm" className="hover:border-primary/50" asChild>
                <a href="https://t.me/ProFundedCFL" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Telegram
                </a>
              </Button>
              <Button variant="outline" size="sm" className="hover:border-primary/50" asChild>
                <a href="https://discord.gg/7K9dXWBEM3" target="_blank" rel="noopener noreferrer">
                  <Users className="w-4 h-4 mr-2" />
                  Discord
                </a>
              </Button>
              <Button variant="outline" size="sm" className="hover:border-primary/50" asChild>
                <a href="https://www.youtube.com/@clarityfunding" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#calculator" className="hover:text-primary transition-colors">Drawdown Calculator</a></li>
              <li><a href="#education" className="hover:text-primary transition-colors">Trading Education</a></li>
              <li><a href="#psychology" className="hover:text-primary transition-colors">Trading Psychology</a></li>
              <li><a href="#risk-management" className="hover:text-primary transition-colors">Risk Management</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Prop Firm Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trading Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Risk Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trading Journal</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">© 2025 Peak Drawdown Calculator. Built for professional traders.</div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <div className="mb-2">
                <strong className="text-primary">Disclaimer:</strong> For educational purposes only. Not financial advice.
              </div>
              <div>
                Trade responsibly. Past performance does not guarantee future results.
              </div>
            </div>
          </div>
          
          {/* Co-Sponsorship Section */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-4">Co-sponsored by</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://x.com/free_propfirm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
                PropFirm Knowledge
              </a>
              <span className="text-muted-foreground hidden sm:block">•</span>
              <a href="https://x.com/Clarity_funding" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
                Clarity Funding Ltd
              </a>
            </div>
          </div>

          {/* Clarity Funding CTA */}
          <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Ready to put your risk management skills to the test?
            </p>
            <Button variant="hero" size="sm" className="text-slate-50" asChild>
              <a href="https://discord.gg/7K9dXWBEM3" target="_blank" rel="noopener noreferrer">
                <Mail className="w-4 h-4 mr-2" />
                Contact Clarity Funding LTD
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
