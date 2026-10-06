import React from 'react';
import { ArrowUpRight, Sparkles, Phone, MessageSquare, Calendar, BellRing } from 'lucide-react';
import heroGlowImg from '../assets/images/hero_atmospheric_glow_1791298400309.jpg';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-20 overflow-hidden bg-[#050403]">
      
      {/* 1:1 Reference-inspired atmospheric background with warm glowing orange horizon */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src={heroGlowImg} 
          alt="" 
          className="w-full h-full object-cover object-top opacity-60 mix-blend-screen scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft radial overlay for perfect text contrast and ambient luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050403]/80 via-transparent to-[#050403]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff5a1f]/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* High-Impact Slogan Pill that POPS */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff5a1f]/25 via-[#ff5a1f]/35 to-[#ff5a1f]/25 border-2 border-[#ff5a1f]/60 mb-6 backdrop-blur-md shadow-2xl shadow-[#ff5a1f]/30 animate-in fade-in slide-in-from-bottom-3 duration-700 hover:scale-105 transition-transform cursor-default">
          <span className="w-2 h-2 rounded-full bg-[#ff5a1f] animate-ping" />
          <span className="text-xs sm:text-sm font-display font-bold tracking-wider text-white uppercase drop-shadow-sm">
            “Why walk when you can soar.”
          </span>
        </div>

        {/* Eyebrow Label */}
        <div className="block mb-6">
          <span className="text-[11px] font-mono tracking-widest text-[#f5f3ef]/60 uppercase bg-white/[0.04] px-3.5 py-1 rounded-full border border-white/10">
            AI • Marketing • Automation
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white max-w-4xl mx-auto leading-[1.08] text-balance">
          Build a Business <br />
          <span className="bg-gradient-to-r from-white via-[#f5f3ef] to-[#ff5a1f] bg-clip-text text-transparent">
            That Runs Smarter.
          </span>
        </h1>

        {/* Secondary Editorial Hook */}
        <p className="mt-4 text-base sm:text-lg font-mono text-[#ff5a1f] tracking-wide uppercase font-medium">
          Let AI Handle The Repetition.
        </p>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-[#f5f3ef]/70 max-w-2xl mx-auto leading-relaxed font-normal">
          Soar Solutions builds AI-powered marketing, automation, websites, and intelligent business systems that help service businesses respond faster, reduce repetitive work, capture more opportunities, and scale with less operational friction.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-sm font-semibold tracking-wide uppercase transition-all duration-200 shadow-xl shadow-[#ff5a1f]/25 hover:shadow-[#ff5a1f]/45 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Book An Inquiry</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => onNavigate('/services')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.09] text-white text-sm font-semibold tracking-wide border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore Our Services</span>
          </button>
        </div>

        {/* Direct dial prompt */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#f5f3ef]/50">
          <span>Need immediate implementation?</span>
          <a href="tel:4317773343" className="text-[#ff5a1f] hover:underline font-mono inline-flex items-center gap-1">
            <Phone className="w-3 h-3" />
            431-777-3343
          </a>
        </div>

        {/* Illustrative System Workflow Preview (Reference-Inspired UI) */}
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl bg-[#0c0907]/90 border border-white/10 p-4 sm:p-6 backdrop-blur-xl shadow-2xl shadow-black/80">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5a1f] animate-ping" />
              <span className="font-mono text-[#f5f3ef]/60 uppercase tracking-wider text-[11px]">
                Illustrative Business Operating System
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#ff5a1f]">
              Average Response Time: 32 Seconds
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 text-left">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center justify-between text-xs text-[#f5f3ef]/50 mb-1.5">
                <span>01. Inbound</span>
                <Sparkles className="w-3.5 h-3.5 text-[#ff5a1f]" />
              </div>
              <div className="text-sm font-medium text-white">New Lead Inbound</div>
              <div className="text-[11px] text-[#f5f3ef]/40 mt-1">Google / Meta / Web</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center justify-between text-xs text-[#f5f3ef]/50 mb-1.5">
                <span>02. Response</span>
                <MessageSquare className="w-3.5 h-3.5 text-[#ff5a1f]" />
              </div>
              <div className="text-sm font-medium text-white">AI SMS & Voice</div>
              <div className="text-[11px] text-emerald-400 font-mono mt-1">&lt; 45s qualification</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center justify-between text-xs text-[#f5f3ef]/50 mb-1.5">
                <span>03. Calendar</span>
                <Calendar className="w-3.5 h-3.5 text-[#ff5a1f]" />
              </div>
              <div className="text-sm font-medium text-white">Appointment Set</div>
              <div className="text-[11px] text-[#f5f3ef]/40 mt-1">Synced to your CRM</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center justify-between text-xs text-[#f5f3ef]/50 mb-1.5">
                <span>04. Team</span>
                <BellRing className="w-3.5 h-3.5 text-[#ff5a1f]" />
              </div>
              <div className="text-sm font-medium text-white">Dispatch Notified</div>
              <div className="text-[11px] text-[#f5f3ef]/40 mt-1">Instant SMS/Slack alert</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
