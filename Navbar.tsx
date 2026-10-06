import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050403]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/80' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark & Minimalist Logo (Bird above Orange Sun) */}
        <button 
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-3 group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a1f]"
          aria-label="Soar Solutions Home"
        >
          <Logo size="md" className="group-hover:scale-105 transition-transform" />
          <span className="font-display font-bold text-lg tracking-tight text-[#f5f3ef] uppercase group-hover:text-white transition-colors">
            Soar Solutions
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#f5f3ef]/70">
          <button 
            onClick={() => handleLinkClick('/')}
            className={`transition-colors hover:text-white cursor-pointer ${
              currentPath === '/' ? 'text-[#ff5a1f] font-semibold' : ''
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleLinkClick('/services')}
            className={`transition-colors hover:text-white cursor-pointer ${
              currentPath === '/services' ? 'text-[#ff5a1f] font-semibold' : ''
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => {
              if (currentPath !== '/') {
                onNavigate('/#founders');
              } else {
                const el = document.getElementById('founders');
                el?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="transition-colors hover:text-white cursor-pointer"
          >
            Founders
          </button>
          <button 
            onClick={() => handleLinkClick('/contact')}
            className={`transition-colors hover:text-white cursor-pointer ${
              currentPath === '/contact' ? 'text-[#ff5a1f] font-semibold' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Direct Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <a 
            href="tel:4317773343" 
            className="flex items-center gap-2 text-xs text-[#f5f3ef]/60 hover:text-white transition-colors font-mono tracking-tight"
            title="Call Soar Solutions"
          >
            <Phone className="w-3.5 h-3.5 text-[#ff5a1f]" />
            <span>431-777-3343</span>
          </a>
          <button
            onClick={() => handleLinkClick('/contact')}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold tracking-wide uppercase transition-all duration-200 shadow-lg shadow-[#ff5a1f]/20 hover:shadow-[#ff5a1f]/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Book An Inquiry
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => handleLinkClick('/contact')}
            className="px-3 py-1.5 rounded-full bg-[#ff5a1f] text-white text-xs font-semibold uppercase"
          >
            Inquiry
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#f5f3ef]/80 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0705] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 text-base">
            <button 
              onClick={() => handleLinkClick('/')}
              className={`text-left py-2 font-medium ${currentPath === '/' ? 'text-[#ff5a1f]' : 'text-white/80'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleLinkClick('/services')}
              className={`text-left py-2 font-medium ${currentPath === '/services' ? 'text-[#ff5a1f]' : 'text-white/80'}`}
            >
              Services & Pricing
            </button>
            <button 
              onClick={() => {
                handleLinkClick('/#founders');
                setTimeout(() => {
                  document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-left py-2 text-white/80 font-medium"
            >
              Founders
            </button>
            <button 
              onClick={() => handleLinkClick('/contact')}
              className={`text-left py-2 font-medium ${currentPath === '/contact' ? 'text-[#ff5a1f]' : 'text-white/80'}`}
            >
              Contact
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="text-xs text-white/50 uppercase tracking-wider">Direct Phone Lines</div>
            <div className="grid grid-cols-1 gap-2">
              <a 
                href="tel:4317773343" 
                className="flex items-center gap-2 text-sm text-[#f5f3ef] bg-white/5 p-2.5 rounded-lg border border-white/5 font-mono"
              >
                <Phone className="w-4 h-4 text-[#ff5a1f]" />
                431-777-3343
              </a>
              <a 
                href="tel:4318775807" 
                className="flex items-center gap-2 text-sm text-[#f5f3ef] bg-white/5 p-2.5 rounded-lg border border-white/5 font-mono"
              >
                <Phone className="w-4 h-4 text-[#ff5a1f]" />
                431-877-5807
              </a>
            </div>

            <button
              onClick={() => handleLinkClick('/contact')}
              className="w-full mt-3 py-3 rounded-xl bg-[#ff5a1f] text-white text-center font-semibold uppercase text-xs tracking-wider shadow-lg shadow-[#ff5a1f]/20"
            >
              Book An Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
