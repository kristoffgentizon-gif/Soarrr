import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  PhoneOff, 
  Zap, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowUpRight,
  Calculator,
  Sliders,
  BarChart3,
  Flame,
  ArrowRight
} from 'lucide-react';

interface AgentRoiAnalyticsProps {
  onNavigate: (path: string) => void;
}

export const AgentRoiAnalytics: React.FC<AgentRoiAnalyticsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'speed' | 'comparison'>('calculator');

  // Interactive Calculator State
  const [monthlyInbound, setMonthlyInbound] = useState<number>(250);
  const [dealValue, setDealValue] = useState<number>(1800);
  const [hourlyWage, setHourlyWage] = useState<number>(26);
  const [activeNiche, setActiveNiche] = useState<string>('Trades');

  // Dynamic Financial Calculations
  // Estimated manual hours spent answering, qualifying, and chasing leads (approx 18 mins per inbound lead)
  const manualHoursSpent = Math.round((monthlyInbound * 18) / 60);
  const manualLaborCost = Math.round(manualHoursSpent * hourlyWage);
  // Traditional missed call rate is roughly 22% during peak/after-hours
  const estimatedMissedLeads = Math.round(monthlyInbound * 0.22);
  // Recovering even 18% of those previously lost leads at average deal value
  const recoveredDeals = Math.max(1, Math.round(estimatedMissedLeads * 0.25));
  const recoveredMonthlyRevenue = Math.round(recoveredDeals * dealValue);
  
  // Soar AI monthly operational cost benchmark ($1,000/mo for voice or SMS agent)
  const soarEstimatedMonthlyCost = 1000;
  const netLaborSavings = Math.max(0, manualLaborCost - soarEstimatedMonthlyCost);
  const totalMonthlyImpact = netLaborSavings + recoveredMonthlyRevenue;
  const estimatedAnnualRoi = Math.round((totalMonthlyImpact * 12) / (soarEstimatedMonthlyCost * 12 + 2500) * 100);

  // Industry Preset Profiles (Trades, Medical, Commercial B2B, Home Services, Real Estate, Recruitment, Staffing, Adventure & Travel)
  const nichePresets = [
    { name: 'Trades', inbound: 180, deal: 2400, wage: 28 },
    { name: 'Medical', inbound: 350, deal: 850, wage: 25 },
    { name: 'Commercial B2B', inbound: 120, deal: 4500, wage: 32 },
    { name: 'Home Services', inbound: 450, deal: 1200, wage: 26 },
    { name: 'Real Estate', inbound: 160, deal: 5500, wage: 30 },
    { name: 'Recruitment', inbound: 220, deal: 3800, wage: 30 },
    { name: 'Staffing', inbound: 400, deal: 1500, wage: 27 },
    { name: 'Adventure & Travel', inbound: 290, deal: 2100, wage: 24 }
  ];

  const applyPreset = (presetName: string, inbound: number, deal: number, wage: number) => {
    setActiveNiche(presetName);
    setMonthlyInbound(inbound);
    setDealValue(deal);
    setHourlyWage(wage);
  };

  return (
    <section className="relative py-28 bg-[#050403] border-t border-white/[0.08] overflow-hidden">
      
      {/* Background illumination matching the reference images */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#ff5a1f]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Economic & Operational ROI Engine</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15] text-balance">
            Cut Payroll Costs. Reply in Seconds. <br />
            <span className="bg-gradient-to-r from-white via-[#f5f3ef] to-[#ff5a1f] bg-clip-text text-transparent">
              Eliminate Missed Opportunities.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#f5f3ef]/70 leading-relaxed">
            See the exact mathematical impact when our autonomous 24/7 SMS and Inbound Phone agents take over front-desk triage, lead qualification, and after-hours emergency dispatch.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 gap-1.5">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'calculator'
                  ? 'bg-[#ff5a1f] text-white font-semibold shadow-lg shadow-[#ff5a1f]/30'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>ROI & Cost Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab('speed')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'speed'
                  ? 'bg-[#ff5a1f] text-white font-semibold shadow-lg shadow-[#ff5a1f]/30'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Speed-to-Lead Velocity</span>
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'comparison'
                  ? 'bg-[#ff5a1f] text-white font-semibold shadow-lg shadow-[#ff5a1f]/30'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Head-to-Head Comparison</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE ROI & COST CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="rounded-3xl bg-[#0c0907] border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
            
            {/* Quick Presets Bar */}
            <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase">
                <Sliders className="w-3.5 h-3.5 text-[#ff5a1f]" />
                <span>Select Industry Profile Preset:</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {nichePresets.map((niche) => (
                  <button
                    key={niche.name}
                    onClick={() => applyPreset(niche.name, niche.inbound, niche.deal, niche.wage)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeNiche === niche.name
                        ? 'bg-[#ff5a1f] text-white font-semibold shadow-md shadow-[#ff5a1f]/30 border border-[#ff5a1f]'
                        : 'bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white/80 hover:text-white'
                    }`}
                  >
                    {niche.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Sliders Column (7 cols) */}
              <div className="lg:col-span-6 space-y-7">
                
                {/* Slider 1: Monthly Inbound Leads/Calls */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono uppercase text-white/80 flex items-center gap-2">
                      <span>Monthly Inbound Calls & Leads</span>
                      <span className="text-[10px] text-white/40">(Phone calls, ad leads, web forms)</span>
                    </label>
                    <span className="font-display font-bold text-xl text-[#ff5a1f] tabular-nums">
                      {monthlyInbound} <span className="text-xs font-mono text-white/50 font-normal">inquiries</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="800"
                    step="10"
                    value={monthlyInbound}
                    onChange={(e) => setMonthlyInbound(Number(e.target.value))}
                    className="w-full accent-[#ff5a1f] bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/30">
                    <span>40 inquiries/mo</span>
                    <span>400 inquiries/mo</span>
                    <span>800+ inquiries/mo</span>
                  </div>
                </div>

                {/* Slider 2: Average Customer / Job Value */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono uppercase text-white/80 flex items-center gap-2">
                      <span>Average Ticket / Customer Value</span>
                      <span className="text-[10px] text-white/40">(Per completed job/sale)</span>
                    </label>
                    <span className="font-display font-bold text-xl text-white tabular-nums">
                      ${dealValue.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="6000"
                    step="100"
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="w-full accent-[#ff5a1f] bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/30">
                    <span>$300</span>
                    <span>$3,000</span>
                    <span>$6,000+</span>
                  </div>
                </div>

                {/* Slider 3: Current Staff Hourly Wage */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono uppercase text-white/80 flex items-center gap-2">
                      <span>Staff Hourly Labor Cost</span>
                      <span className="text-[10px] text-white/40">(Front-desk, receptionist, scheduler)</span>
                    </label>
                    <span className="font-display font-bold text-xl text-white tabular-nums">
                      ${hourlyWage} <span className="text-xs font-mono text-white/50 font-normal">/ hour</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="45"
                    step="1"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(Number(e.target.value))}
                    className="w-full accent-[#ff5a1f] bg-white/10 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/30">
                    <span>$18 / hr</span>
                    <span>$30 / hr</span>
                    <span>$45 / hr</span>
                  </div>
                </div>

                {/* Automated Operational Diagnostics */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-white/40 font-mono text-[10px] uppercase">Manual Labor Consumed</span>
                    <div className="font-display font-bold text-lg text-white tabular-nums mt-0.5">
                      ~{manualHoursSpent} hrs <span className="text-xs text-white/50 font-normal">/ month</span>
                    </div>
                    <div className="text-[10px] text-white/40 font-mono mt-0.5">
                      Spent dialling, qualifying & data entry
                    </div>
                  </div>

                  <div>
                    <span className="text-white/40 font-mono text-[10px] uppercase">Typically Lost Inbounds</span>
                    <div className="font-display font-bold text-lg text-rose-400 tabular-nums mt-0.5">
                      ~{estimatedMissedLeads} leads <span className="text-xs text-white/50 font-normal">/ month</span>
                    </div>
                    <div className="text-[10px] text-rose-400/80 font-mono mt-0.5">
                      Lost to voicemails & delayed responses
                    </div>
                  </div>
                </div>

              </div>

              {/* Dynamic Financial Results Card (6 cols) */}
              <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#18110b] via-[#120d09] to-[#0a0705] border-2 border-[#ff5a1f]/40 p-6 sm:p-8 shadow-2xl shadow-[#ff5a1f]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5a1f]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div>
                      <div className="text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider">
                        Projected Economic Value
                      </div>
                      <div className="font-display font-bold text-xl text-white mt-0.5">
                        Net Monthly Financial Upside
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {estimatedAnnualRoi}% ROI
                      </span>
                    </div>
                  </div>

                  {/* Big Number Highlight */}
                  <div className="py-2">
                    <div className="text-xs font-mono text-white/50 uppercase">
                      Estimated Combined Monthly Value:
                    </div>
                    <div className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mt-1 tabular-nums">
                      +${totalMonthlyImpact.toLocaleString()}
                      <span className="text-base font-normal text-white/50 ml-1">/ month</span>
                    </div>
                    <div className="text-xs font-mono text-emerald-400 mt-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Equivalent to +${(totalMonthlyImpact * 12).toLocaleString()} / year in net bottom-line gain</span>
                    </div>
                  </div>

                  {/* Financial Breakdown Grid */}
                  <div className="space-y-3 pt-2 border-t border-white/[0.08]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/70 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#ff5a1f]" />
                        <span>Recovered Revenue from Zero Missed Leads:</span>
                      </span>
                      <span className="font-mono font-semibold text-white tabular-nums">
                        +${recoveredMonthlyRevenue.toLocaleString()} / mo
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/70 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Administrative Payroll Savings:</span>
                      </span>
                      <span className="font-mono font-semibold text-white tabular-nums">
                        +${netLaborSavings.toLocaleString()} / mo
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/70 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white/40" />
                        <span>Hours Reclaimed for Core Operations:</span>
                      </span>
                      <span className="font-mono font-semibold text-white tabular-nums">
                        {manualHoursSpent} hours / mo
                      </span>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <button
                      onClick={() => onNavigate('/contact')}
                      className="w-full py-3.5 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#ff5a1f]/30 flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>Implement Inbound AI For Your Numbers</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <div className="text-[10px] font-mono text-white/40 text-center mt-2">
                      * Illustrative financial model based on standard service industry benchmarks.
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: SPEED-TO-LEAD VELOCITY MATRIX */}
        {activeTab === 'speed' && (
          <div className="rounded-3xl bg-[#0c0907] border border-white/10 p-6 sm:p-10 shadow-2xl relative">
            <div className="max-w-3xl mb-8">
              <span className="text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider">
                Harvard Business Review Lead Response Studies
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                Speed-to-Lead: Why Seconds Determine Revenue
              </h3>
              <p className="text-sm text-[#f5f3ef]/70 mt-2 leading-relaxed">
                78% of customers buy from the company that responds first. When a prospect contacts you, their buying intent decays exponentially every passing minute.
              </p>
            </div>

            {/* Decay Timeline Graph */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
              
              <div className="p-5 rounded-2xl bg-gradient-to-b from-[#1c120a] to-[#0f0a06] border-2 border-[#ff5a1f] relative">
                <div className="flex items-center justify-between text-xs font-mono text-[#ff5a1f] mb-3">
                  <span className="font-bold flex items-center gap-1.5">
                    <Flame className="w-4 h-4" />
                    Under 45 Seconds
                  </span>
                  <span className="bg-[#ff5a1f] text-white px-2 py-0.5 rounded text-[10px] font-bold">Soar AI</span>
                </div>
                <div className="font-display font-bold text-3xl text-white tabular-nums">
                  391%
                </div>
                <div className="text-xs text-emerald-400 font-mono mt-1 font-semibold">
                  Peak Qualification Probability
                </div>
                <p className="text-[11px] text-[#f5f3ef]/60 mt-3 leading-relaxed">
                  Lead is still looking at their screen. Zero chance to call your local competitors.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3">
                  <span>5 – 15 Minutes</span>
                  <span className="text-[10px]">Delayed</span>
                </div>
                <div className="font-display font-bold text-3xl text-white/70 tabular-nums">
                  -64%
                </div>
                <div className="text-xs text-amber-400 font-mono mt-1">
                  Conversion Decay
                </div>
                <p className="text-[11px] text-[#f5f3ef]/50 mt-3 leading-relaxed">
                  Prospect has opened 2-3 competitor tabs or returned to their workday task.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3">
                  <span>1 – 4 Hours</span>
                  <span className="text-[10px]">Standard Office</span>
                </div>
                <div className="font-display font-bold text-3xl text-white/50 tabular-nums">
                  -82%
                </div>
                <div className="text-xs text-rose-400 font-mono mt-1">
                  Lead Went Cold
                </div>
                <p className="text-[11px] text-[#f5f3ef]/50 mt-3 leading-relaxed">
                  Prospect has already spoken to a competitor who picked up immediately.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3">
                  <span>Next Day / Voicemail</span>
                  <span className="text-[10px]">Failure</span>
                </div>
                <div className="font-display font-bold text-3xl text-white/30 tabular-nums">
                  -94%
                </div>
                <div className="text-xs text-rose-500 font-mono mt-1">
                  Dead Opportunity
                </div>
                <p className="text-[11px] text-[#f5f3ef]/40 mt-3 leading-relaxed">
                  Ad spend completely burned. No customer callback or appointment set.
                </p>
              </div>

            </div>

            {/* Response Workflow Highlight */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5a1f]/15 flex items-center justify-center text-[#ff5a1f] shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Soar Autonomous Speed Guarantee
                  </div>
                  <div className="text-xs text-[#f5f3ef]/60">
                    Inbound phone calls answered in &lt; 2 rings. Ad leads and web forms texted in &lt; 25 seconds.
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="px-6 py-2.5 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Responding in Seconds
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: HEAD-TO-HEAD COMPARISON MATRIX */}
        {activeTab === 'comparison' && (
          <div className="rounded-3xl bg-[#0c0907] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-x-auto">
            <div className="max-w-3xl mb-8">
              <span className="text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider">
                Full-Time Staff vs. Soar AI Systems
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                The Operational Comparison
              </h3>
              <p className="text-sm text-[#f5f3ef]/70 mt-2">
                Why modern service businesses systemize their front-desk rather than constantly recruiting and managing manual staff.
              </p>
            </div>

            <table className="w-full text-left text-xs min-w-[600px]">
              <thead className="bg-white/[0.02] border-b border-white/[0.08] text-white font-mono text-xs uppercase">
                <tr>
                  <th className="py-4 px-5">Operational Factor</th>
                  <th className="py-4 px-5 text-white/50">Traditional Receptionist / Staff</th>
                  <th className="py-4 px-5 text-[#ff5a1f] font-bold">Soar Solutions 24/7 AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-[#f5f3ef]/80">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-5 font-semibold text-white">Operating Coverage</td>
                  <td className="py-4 px-5 text-white/60">40 hours/week (Mon–Fri 9am–5pm)</td>
                  <td className="py-4 px-5 text-emerald-400 font-semibold font-mono">168 hours/week (24/7/365 coverage)</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-5 font-semibold text-white">Speed-to-Lead Response</td>
                  <td className="py-4 px-5 text-white/60">2 to 4 hours average (delayed)</td>
                  <td className="py-4 px-5 text-emerald-400 font-semibold font-mono">Under 30 seconds autonomous</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-5 font-semibold text-white">Concurrent Call Capacity</td>
                  <td className="py-4 px-5 text-white/60">1 caller (others get busy tone or voicemail)</td>
                  <td className="py-4 px-5 text-emerald-400 font-semibold font-mono">Unlimited concurrent calls & texts</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-5 font-semibold text-white">Monthly Cost Benchmark</td>
                  <td className="py-4 px-5 text-rose-300 font-mono">$3,800 – $5,200/mo (wage + taxes + benefits)</td>
                  <td className="py-4 px-5 text-emerald-400 font-bold font-mono">$1,000/mo flat predictable fee</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-5 font-semibold text-white">Training & Turnover</td>
                  <td className="py-4 px-5 text-white/60">Weeks of onboarding, frequent staff turnover</td>
                  <td className="py-4 px-5 text-emerald-400 font-semibold font-mono">Zero turnover, instant prompt updates</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-5 font-semibold text-white">Emergency Tech Dispatch</td>
                  <td className="py-4 px-5 text-white/60">Requires on-call coordinator on overtime</td>
                  <td className="py-4 px-5 text-emerald-400 font-semibold font-mono">Instant automated SMS/pager routing</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-5 font-semibold text-white">CRM & Calendar Sync</td>
                  <td className="py-4 px-5 text-white/60">Manual data entry, frequent human typos</td>
                  <td className="py-4 px-5 text-emerald-400 font-semibold font-mono">Instant API synchronization</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#f5f3ef]/50 font-mono">
                Ready to cut operational overhead and capture every inbound lead?
              </span>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-6 py-3 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Book An Inquiry
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
