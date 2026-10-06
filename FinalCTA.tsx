import React from 'react';
import { ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';
import dashboardBackdrop from '../assets/images/dashboard_backdrop_texture_1791298439072.jpg';

interface FinalCTAProps {
  onNavigate: (path: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-32 bg-[#050403] border-t border-white/[0.08] overflow-hidden text-center">
      
      {/* 1:1 reference-inspired atmospheric texture with glowing orange horizon line */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
        <img 
          src={dashboardBackdrop} 
          alt="" 
          className="w-full h-full object-cover object-bottom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>100% Satisfaction Commitment</span>
        </div>

        {/* Brand Slogan */}
        <div className="mb-5">
          <span className="font-display italic text-xl sm:text-3xl text-white tracking-wide font-semibold">
            “Why walk when you can <span className="text-[#ff5a1f]">soar</span>.”
          </span>
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-[1.08] text-balance">
          Your Business Can <br />
          <span className="bg-gradient-to-r from-white via-[#f5f3ef] to-[#ff5a1f] bg-clip-text text-transparent">
            Run Smarter.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#f5f3ef]/70 max-w-xl mx-auto leading-relaxed">
          Let’s identify where AI, automation, marketing, or a better digital system could create the most value for your business.
        </p>

        {/* Primary Action Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-2xl shadow-[#ff5a1f]/35 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Book An Inquiry</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Direct Phone Lines */}
        <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#f5f3ef]/60">
          <span className="font-mono uppercase text-white/40">Or Call Direct:</span>
          <div className="flex items-center gap-6 font-mono">
            <a 
              href="tel:4317773343" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5a1f]" />
              <span>431-777-3343</span>
            </a>
            <span>·</span>
            <a 
              href="tel:4318775807" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5a1f]" />
              <span>431-877-5807</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
