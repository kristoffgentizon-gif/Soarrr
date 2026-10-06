import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#050403] overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ff5a1f]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono tracking-widest text-[#ff5a1f] uppercase mb-3">
            Operational Friction vs. Intelligent Systems
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15] text-balance">
            Your Business Shouldn't Depend on Repetition.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#f5f3ef]/65 leading-relaxed">
            Businesses often lose time and opportunities to repetitive work, slow response times, disconnected systems, and manual processes. When the same administrative friction happens every single day, it quietly caps your growth.
          </p>
        </div>

        {/* High-End Comparative Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: The Manual Operating Reality */}
          <div className="rounded-3xl bg-[#0c0806] border border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-rose-400/90 mb-6">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>The Manual Bottleneck</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl text-white font-semibold mb-4">
                Fragmented tools & manual firefighting
              </h3>
              
              <ul className="space-y-4 text-sm text-[#f5f3ef]/60">
                <li className="flex items-start gap-3">
                  <span className="text-rose-400/80 font-mono text-xs mt-0.5">✕</span>
                  <span><strong>Speed-to-lead latency:</strong> Inbound leads wait hours for a reply while prospects contact your competitors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400/80 font-mono text-xs mt-0.5">✕</span>
                  <span><strong>Missed phone calls:</strong> Evenings, weekends, and peak field hours turn into missed revenue and unanswered jobs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400/80 font-mono text-xs mt-0.5">✕</span>
                  <span><strong>Manual qualification:</strong> Staff spending 15+ minutes on the phone with unqualified or out-of-scope prospects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400/80 font-mono text-xs mt-0.5">✕</span>
                  <span><strong>Leads going cold:</strong> No automated nurturing or follow-up between the initial inquiry and the appointment.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs font-mono text-white/40">
              Result: High overhead, owner operational fatigue & lost deals.
            </div>
          </div>

          {/* Column 2: The Soar Solutions Operating System */}
          <div className="rounded-3xl bg-gradient-to-b from-[#130d09] to-[#0a0705] border border-[#ff5a1f]/30 p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-[#ff5a1f]/10 relative overflow-hidden group">
            
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5a1f]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#ff5a1f] mb-6">
                <CheckCircle2 className="w-4 h-4 text-[#ff5a1f]" />
                <span>The Soar Intelligent System</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl text-white font-semibold mb-4">
                Automated capture, instant qualification & dispatch
              </h3>
              
              <ul className="space-y-4 text-sm text-[#f5f3ef]/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5a1f] shrink-0 mt-0.5" />
                  <span><strong>Under 45s SMS response:</strong> AI immediately texts the lead, asks exact qualifying criteria, and collects project details.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5a1f] shrink-0 mt-0.5" />
                  <span><strong>24/7 natural phone agent:</strong> Inbound phone calls are answered immediately with a customized natural voice that collects info and books visits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5a1f] shrink-0 mt-0.5" />
                  <span><strong>Direct calendar synchronization:</strong> Only qualified prospects book directly onto your team's available calendar slots.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5a1f] shrink-0 mt-0.5" />
                  <span><strong>Automated technician dispatch:</strong> Emergency trades or urgent requests trigger immediate alerts to the assigned worker.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] relative z-10 flex items-center justify-between text-xs font-mono text-[#ff5a1f]">
              <span>Result: Zero lead leakage, lower friction & predictable scaling.</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
