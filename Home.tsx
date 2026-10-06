import React from 'react';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { ProblemSection } from '../components/ProblemSection';
import { WhatSoarDoes } from '../components/WhatSoarDoes';
import { LeadGenAnalytics } from '../components/LeadGenAnalytics';
import { SmsChatbotDemo } from '../components/SmsChatbotDemo';
import { ServicesOverview } from '../components/ServicesOverview';
import { AgentRoiAnalytics } from '../components/AgentRoiAnalytics';
import { FoundersSection } from '../components/FoundersSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <main className="min-h-screen">
      <Hero onNavigate={onNavigate} />
      <TrustSection />
      <ProblemSection />
      <WhatSoarDoes />
      <LeadGenAnalytics />
      <SmsChatbotDemo />
      <ServicesOverview onNavigate={onNavigate} />
      <AgentRoiAnalytics onNavigate={onNavigate} />
      <FoundersSection onNavigate={onNavigate} />
      <FinalCTA onNavigate={onNavigate} />
    </main>
  );
};
