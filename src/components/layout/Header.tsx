import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden lg:flex items-center justify-between py-2 text-sm border-b border-muted">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">24/7 Emergency: </span>
              <a href="tel:5551234357" className="text-primary font-medium hover:text-primary-dark">
                (555) 123-HELP
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:info@homemax.com" className="text-primary font-medium hover:text-primary-dark">
                info@homemax.com
              </a>
            </div>
          </div>
          <div className="text-muted-foreground">
            Licensed & Insured • Satisfaction Guaranteed
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <div className="text-white font-bold text-xl">HM</div>
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">HomeMax Services</div>
                <div className="text-sm text-muted-foreground">Your Trusted Local Experts</div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-foreground hover:text-primary transition-smooth font-medium",
                  isActive(item.href) && "text-primary font-semibold"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="hero" size="lg">
              Get Free Quote
            </Button>
            <a
              href="tel:5551234357"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }), "flex items-center space-x-2")}
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-muted py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-foreground hover:text-primary transition-smooth font-medium",
                    isActive(item.href) && "text-primary font-semibold"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-muted">
                <Button variant="hero" className="w-full">
                  Get Free Quote
                </Button>
                <a
                  href="tel:5551234357"
                  className={cn(buttonVariants({ variant: "cta" }), "w-full flex items-center justify-center space-x-2")}
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;