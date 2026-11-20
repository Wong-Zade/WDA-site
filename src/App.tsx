import React, { useEffect, useState } from 'react';
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
  type Page = 'home' | 'services' | 'projects' | 'about';
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const pageByPath: Record<string, Page> = {
    '/': 'home',
    '/services': 'services',
    '/projects': 'projects',
    '/about': 'about',
  };
  const page = pageByPath[currentPath] ?? 'home';
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [inquiryServices, setInquiryServices] = useState<string[]>([]);

  useEffect(() => {
    if (currentPath === '/client-reviews') {
      window.location.replace('/#testimonials');
      return;
    }

    const pageTitles = {
      home: "Wong's Digital Arts — Independent Design Studio",
      services: "Services — Wong's Digital Arts",
      projects: "Projects — Wong's Digital Arts",
      about: "About — Wong's Digital Arts",
    };
    document.title = pageTitles[page];
  }, [currentPath, page]);

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
    <div className="min-h-screen bg-[#121214] text-neutral-100 flex flex-col font-sans selection:bg-[#4c2f87] selection:text-white">
      {/* Top Bar */}
      <Header onOpenInquiry={handleOpenInquiry} />

      {/* Main Studio Surfaces */}
      <main className="flex-1">
        {page === 'home' && (
          <>
            <Hero
              onOpenInquiry={handleOpenInquiry}
              onExploreWorks={handleExploreWorks}
            />
            <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />
            <BrandFitCheck onPrepopulateInquiry={handlePrepopulateFromDiagnostic} />
            <ClientProof />
          </>
        )}
        {page === 'services' && (
          <Capabilities onSelectService={handleSelectService} isPage />
        )}
        {page === 'projects' && (
          <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} isPage />
        )}
        {page === 'about' && (
          <SoloStudioEthos onOpenInquiry={handleOpenInquiry} isPage />
        )}
      </main>

      {/* Studio Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Case Study Deep Dive Modal */}
      {(page === 'home' || page === 'projects') && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquireAboutProject={handleInquireAboutProject}
        />
      )}

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
