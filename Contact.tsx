import React, { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight, ShieldCheck, Clock, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import abstractCurvesImg from '../assets/images/abstract_orange_curves_1791298421474.jpg';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    businessModel: 'both',
    teamSize: '1-10',
    serviceInterest: 'Apex Bundle',
    whatToImprove: '',
    whatToAutomate: '',
    currentChallenges: '',
    preferredContactMethod: 'phone',
    consent: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.businessName.trim()) {
      setErrorMsg('Please complete all required fields (Name, Business Name, Email, and Phone).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate structured submission to backend dispatcher
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#050403]">
      
      {/* Contact Header */}
      <section className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Consultation & System Scoping</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-[1.08] text-balance">
          Book An Inquiry
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#f5f3ef]/70 max-w-2xl mx-auto leading-relaxed">
          Tell us where your business is today, what you’re trying to improve, and where you see an opportunity for AI, automation, marketing, or a better digital system.
        </p>

        {/* Prominent Direct Phone Hotline Callout */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:4317773343"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#ff5a1f]/20 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Primary Line: 431-777-3343</span>
          </a>

          <a
            href="tel:4318775807"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs font-mono flex items-center justify-center gap-2 border border-white/10 transition-all"
          >
            <Phone className="w-4 h-4 text-[#ff5a1f]" />
            <span>Secondary Line: 431-877-5807</span>
          </a>
        </div>
      </section>

      {/* Main Form & Next Steps Layout */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        
        {/* Background with abstract orange glowing curves matching the user's uploaded image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl opacity-50 mix-blend-screen -z-10">
          <img 
            src={abstractCurvesImg} 
            alt="" 
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050403]/70 via-transparent to-[#050403]/70" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0c0907]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Subtle inner ambient reflection from the curves */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ff5a1f]/15 rounded-full blur-3xl pointer-events-none" />
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#ff5a1f]/20 border border-[#ff5a1f]/40 flex items-center justify-center text-[#ff5a1f] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Thank You — Your Inquiry Has Been Received.
                </h3>
                
                <p className="text-sm sm:text-base text-[#f5f3ef]/70 max-w-md mx-auto leading-relaxed">
                  We'll review your information and reach out regarding the next step. Our founders review all submissions within 24 business hours.
                </p>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-[#ff5a1f] max-w-sm mx-auto">
                  Immediate questions? Call directly at 431-777-3343
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b border-white/[0.08] pb-4 mb-6">
                  <h3 className="font-display font-bold text-xl text-white">
                    System Qualification Form
                  </h3>
                  <p className="text-xs text-[#f5f3ef]/50 mt-1">
                    Help us understand your operational scale and integration goals.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                      Full Name <span className="text-[#ff5a1f]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Miller"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-[#ff5a1f] focus:ring-1 focus:ring-[#ff5a1f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                      Business Name <span className="text-[#ff5a1f]">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Miller Roofing & Exterior"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-[#ff5a1f] focus:ring-1 focus:ring-[#ff5a1f]"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                      Email Address <span className="text-[#ff5a1f]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-[#ff5a1f] focus:ring-1 focus:ring-[#ff5a1f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                      Phone Number <span className="text-[#ff5a1f]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-[#ff5a1f] focus:ring-1 focus:ring-[#ff5a1f]"
                    />
                  </div>
                </div>

                {/* Website & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                      Business Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourcompany.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-[#ff5a1f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                      Industry / Sector
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="e.g. Trades, Medical, Commercial B2B, Home Services, Real Estate, Recruitment, Staffing, Adventure & Travel"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-[#ff5a1f]"
                    />
                  </div>
                </div>

                {/* Business Model & Team Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                      Client Model
                    </label>
                    <select
                      name="businessModel"
                      value={formData.businessModel}
                      onChange={handleChange}
                      className="w-full bg-[#140e0a] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff5a1f]"
                    >
                      <option value="b2c">B2C (Consumers & Homeowners)</option>
                      <option value="b2b">B2B (Commercial & Corporate)</option>
                      <option value="both">Both B2B and B2C</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                      Team Size
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full bg-[#140e0a] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff5a1f]"
                    >
                      <option value="1-5">1 – 5 team members</option>
                      <option value="6-20">6 – 20 team members</option>
                      <option value="21-50">21 – 50 team members</option>
                      <option value="50+">50+ team members</option>
                    </select>
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                    Primary Service Interest
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full bg-[#140e0a] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff5a1f]"
                  >
                    <option value="Apex Bundle">Apex Bundle (Everything Integrated)</option>
                    <option value="Modern Website Creation">Modern Website Creation ($3,000)</option>
                    <option value="AI Lead Generation">AI Lead Generation ($500 setup, $1,250/mo)</option>
                    <option value="SMS AI Lead Qualifier">SMS AI Lead Qualifier, Setter & Nurturer ($2,500 setup, $1,000/mo)</option>
                    <option value="24/7 AI Voice Agent">24/7 AI Voice Agent (Inbound Only - $2,500 setup, $1,000/mo)</option>
                    <option value="Custom Automation">Custom Business Automation</option>
                    <option value="Not Sure">Not Sure — I Need Guidance</option>
                  </select>
                </div>

                {/* What would you like to improve & automate */}
                <div>
                  <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                    What would you like Soar Solutions to implement or improve?
                  </label>
                  <textarea
                    rows={3}
                    name="whatToImprove"
                    value={formData.whatToImprove}
                    onChange={handleChange}
                    placeholder="Describe your current bottleneck (e.g. slow response to ad leads, missed phone calls on weekends, outdated website, manual appointment scheduling)..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-[#ff5a1f]"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-mono text-white/80 uppercase mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'phone', label: 'Phone Call' },
                      { id: 'sms', label: 'SMS Text' },
                      { id: 'email', label: 'Email' }
                    ].map(item => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setFormData(prev => ({ ...prev, preferredContactMethod: item.id }))}
                        className={`py-2 px-3 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                          formData.preferredContactMethod === item.id
                            ? 'bg-[#ff5a1f]/20 border-[#ff5a1f] text-white font-semibold'
                            : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Consent checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-0.5 rounded bg-white/10 border-white/20 text-[#ff5a1f] focus:ring-[#ff5a1f]"
                  />
                  <label htmlFor="consent" className="text-[11px] text-[#f5f3ef]/60 leading-normal">
                    I agree to receive communications regarding this inquiry from Soar Solutions via phone, SMS, or email. You can opt out at any time.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a32] disabled:opacity-50 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#ff5a1f]/25 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </span>
                  ) : (
                    <span>Book An Inquiry</span>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* Right Column: Direct Hotlines & What Happens Next (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Phone Assistance Box */}
            <div className="p-8 rounded-3xl bg-[#0c0806] border border-white/10 space-y-6">
              <div>
                <span className="text-[11px] font-mono text-[#ff5a1f] uppercase tracking-wider">
                  Direct Phone Lines
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  Speak With Our Team Directly
                </h3>
                <p className="text-xs text-[#f5f3ef]/60 mt-2 leading-relaxed">
                  Have an urgent service business question or want an immediate breakdown of voice and SMS automation?
                </p>
              </div>

              <div className="space-y-3 font-mono">
                <a
                  href="tel:4317773343"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#ff5a1f]/50 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#ff5a1f]/15 flex items-center justify-center text-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/40 uppercase font-sans">Primary Phone</div>
                      <div className="text-sm font-semibold text-white">431-777-3343</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>

                <a
                  href="tel:4318775807"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#ff5a1f]/50 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#ff5a1f]/15 flex items-center justify-center text-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/40 uppercase font-sans">Secondary Phone</div>
                      <div className="text-sm font-semibold text-white">431-877-5807</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </a>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="p-8 rounded-3xl bg-[#0c0806] border border-white/10 space-y-6">
              <h4 className="font-display font-bold text-xl text-white">
                What Happens Next?
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-[#ff5a1f] text-sm">01.</span>
                  <div>
                    <div className="font-semibold text-white">Founder Review</div>
                    <div className="text-[#f5f3ef]/60 mt-0.5">
                      Rylan Beilman & Kris Gentizon personally review your operational inputs within 24 hours.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-[#ff5a1f] text-sm">02.</span>
                  <div>
                    <div className="font-semibold text-white">Discovery & Architecture Call</div>
                    <div className="text-[#f5f3ef]/60 mt-0.5">
                      A focused consultation to evaluate your existing calendar, CRM, and communication bottlenecks.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono font-bold text-[#ff5a1f] text-sm">03.</span>
                  <div>
                    <div className="font-semibold text-white">System Rollout Roadmap</div>
                    <div className="text-[#f5f3ef]/60 mt-0.5">
                      A clear proposal outlining the exact AI voice, SMS, or web infrastructure designed to scale your business.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs text-[#f5f3ef]/50">
                <ShieldCheck className="w-4 h-4 text-[#ff5a1f]" />
                <span>100% Satisfaction Commitment on all deployments</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};
