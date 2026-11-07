import React from 'react';
import Hero from '../components/home/Hero';
import IntroPhilosophy from '../components/home/IntroPhilosophy';
import DisciplinesGrid from '../components/home/DisciplinesGrid';
import FeaturedPrograms from '../components/home/FeaturedPrograms';
import GlobalPresence from '../components/home/GlobalPresence';
import CompanyLogoMarquee from '../components/home/CompanyLogoMarquee';
import StudentPortfolio from '../components/home/StudentPortfolio';
import MeetOurTeam from '../components/home/MeetOurTeam';
import StudioExperience from '../components/home/StudioExperience';
import StudentPlacement from '../components/home/StudentPlacement';
import AwardsShowcase from '../components/home/AwardsShowcase';
import EventsWorkshops from '../components/home/EventsWorkshops';
import AdmissionJourney from '../components/home/AdmissionJourney';
import HomeFAQ from '../components/home/HomeFAQ';
import EnquirySection from '../components/home/EnquirySection';

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* 01: Existing ChronoTask-inspired Hero with new Blue Brand Emblem */}
      <Hero />

      {/* 02: IDS Introduction & Design Philosophy */}
      <IntroPhilosophy />

      {/* 03: Explore 12 Design Disciplines & Featured Programs */}
      <DisciplinesGrid />
      <FeaturedPrograms />

      {/* 04: Global Locations (Pune Flagship & Global Creative Hubs) */}
      <GlobalPresence />

      {/* 05: Creative Industry Ecosystem — Company Logo Marquee (UPGRADE 3) */}
      <CompanyLogoMarquee />

      {/* 06: Student Projects & Portfolio Showcase — Ideas Made Visible (UPGRADE 6) */}
      <StudentPortfolio />

      {/* 07: Meet Our Team — Exact Modular Mosaic Grid Following Reference (UPGRADE 5) */}
      <MeetOurTeam />

      {/* 08: Learning and Studio Experience — Branded Campus Photos (UPGRADE 2) */}
      <StudioExperience />

      {/* 09: Student Placement & Career Pathways — From Learning to Careers (UPGRADE 4) */}
      <StudentPlacement />

      {/* 10: Awards & Recognition — Celebrating Creativity & Excellence (UPGRADE 7) */}
      <AwardsShowcase />

      {/* 11: Student Life, Workshops and Events */}
      <EventsWorkshops />

      {/* 12: Visual Step-by-Step Admission Journey */}
      <AdmissionJourney />

      {/* 13: Frequently Asked Questions */}
      <HomeFAQ />

      {/* 14: Admissions Enquiry CTA Section */}
      <EnquirySection />
    </div>
  );
}
