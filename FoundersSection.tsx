import React from 'react';
import { Code2, Palette, ShieldCheck, ArrowUpRight } from 'lucide-react';
import abstractCurvesImg from '../assets/images/abstract_orange_curves_1791298421474.jpg';

interface FoundersSectionProps {
  onNavigate: (path: string) => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onNavigate }) => {
  return (
    <section id="founders" className="relative py-28 bg-[#070503] border-t border-white/[0.08] overflow-hidden">
      
      {/* Abstract warm curves in background from generated asset (matching Reference 2 & 3) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 pointer-events-none mix-blend-screen overflow-hidden">
        <img 
          src={abstractCurvesImg} 
          alt="" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070503] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono tracking-widest text-[#ff5a1f] uppercase mb-3">
            Leadership & Engineering
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15] text-balance">
            Built by a Young Team Obsessed with What's Possible.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#f5f3ef]/70 leading-relaxed">
            We’re 19 years old, and we believe business systems shouldn’t be slow, bloated, or weighed down by manual repetition. We combine deep software discipline with modern design to help companies move faster.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Rylan Beilman */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0806] border border-white/[0.08] hover:border-[#ff5a1f]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white transition-colors">
                  <Palette className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff5a1f] bg-[#ff5a1f]/10 px-2.5 py-1 rounded-full border border-[#ff5a1f]/20">
                    Age 19 • Co-Founder
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                Rylan Beilman
              </h3>
              
              <div className="text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-4">
                Web Design & Marketing
              </div>

              <p className="text-sm text-[#f5f3ef]/70 leading-relaxed mb-6">
                3+ years of focused experience crafting conversion-focused web architecture and modern marketing systems. Dedicated to turning business value into clean, high-converting digital presence.
              </p>

              <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-[#f5f3ef]/60">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff5a1f]">✦</span>
                  <span>3+ years experience in bespoke web architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff5a1f]">✦</span>
                  <span>Specialized in conversion design & visual identity</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff5a1f]">✦</span>
                  <span>Acquisition campaigns across Meta, Instagram & Google</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs font-mono text-white/40">
              Co-Founder • Design & Marketing Architecture
            </div>
          </div>

          {/* Kris Gentizon */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0806] border border-white/[0.08] hover:border-[#ff5a1f]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white transition-colors">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff5a1f] bg-[#ff5a1f]/10 px-2.5 py-1 rounded-full border border-[#ff5a1f]/20">
                    Age 19 • Co-Founder
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                Kris Gentizon
              </h3>
              
              <div className="text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-4">
                Software Engineering & Automation
              </div>

              <p className="text-sm text-[#f5f3ef]/70 leading-relaxed mb-6">
                3+ years of hands-on software development and complex automation orchestrations. Specialized in constructing autonomous SMS responders, inbound voice pipelines, and seamless CRM integrations.
              </p>

              <div className="space-y-2 pt-4 border-t border-white/[0.06] text-xs text-[#f5f3ef]/60">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff5a1f]">✦</span>
                  <span>3+ years experience in software engineering & workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff5a1f]">✦</span>
                  <span>Autonomous 24/7 SMS qualification & voice integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff5a1f]">✦</span>
                  <span>Complex API integrations, webhook pipelines & dispatch logic</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs font-mono text-white/40">
              Co-Founder • Software Engineering & Automation
            </div>
          </div>

        </div>

        {/* Commitment Statement */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#ff5a1f] shrink-0" />
            <div className="text-xs sm:text-sm text-[#f5f3ef]/80">
              Direct founder access on every implementation. No corporate bureaucracy, no third-party outsourced account managers.
            </div>
          </div>

          <button
            onClick={() => onNavigate('/contact')}
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#ff5a1f] hover:text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
          >
            Speak With The Founders
          </button>
        </div>

      </div>
    </section>
  );
};
