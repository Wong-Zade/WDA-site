import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { BrandFitCheck } from './components/BrandFitCheck';
import { Capabilities } from './components/Capabilities';
import { SoloStudioEthos } from './components/SoloStudioEthos';
import { ClientProof } from './components/ClientProof';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { InquiryModal } from './components/InquiryModal';
import { CaseStudy } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [inquiryServices, setInquiryServices] = useState<string[]>([]);

  const handleOpenInquiry = () => {
    setInquiryNotes('');
    setInquiryServices([]);
    setInquiryOpen(true);
  };

  const handleExploreWorks = () => {
    const el = document.querySelector('#works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireAboutProject = (projectTitle: string) => {
    setInquiryNotes(`Interested in commissioning a project with similar craft and scope to "${projectTitle}".`);
    setInquiryServices(['Brand Identity & Logo', 'Visual Communication & Art Direction']);
    setInquiryOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setInquiryNotes(`Interested in exploring studio engagement for: ${serviceName}.`);
    setInquiryServices([serviceName]);
    setInquiryOpen(true);
  };

  const handlePrepopulateFromDiagnostic = (notes: string, suggestedServices: string[]) => {
    setInquiryNotes(notes);
    setInquiryServices(suggestedServices);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121214] text-neutral-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Bar */}
      <Header onOpenInquiry={handleOpenInquiry} />

      {/* Main Studio Surfaces */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenInquiry={handleOpenInquiry}
          onExploreWorks={handleExploreWorks}
        />

        {/* Selected Works Bento Monograph */}
        <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive Studio Brand Fit Check */}
        <BrandFitCheck onPrepopulateInquiry={handlePrepopulateFromDiagnostic} />

        {/* Capabilities & Disciplines */}
        <Capabilities onSelectService={handleSelectService} />

        {/* Solo Studio Ethos & Operational Contrast */}
        <SoloStudioEthos onOpenInquiry={handleOpenInquiry} />

        {/* Quantitative Client Proof */}
        <ClientProof />
      </main>

      {/* Studio Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireAboutProject={handleInquireAboutProject}
      />

      {/* Interactive Project Inquiry & Booking Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialNotes={inquiryNotes}
        initialServices={inquiryServices}
      />
    </div>
  );
}
