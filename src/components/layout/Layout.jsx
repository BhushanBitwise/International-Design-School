import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';
import { WHATSAPP_MESSAGES } from '../../data/contact';
import { disciplines } from '../../data/programs';
import { locations } from '../../data/locations';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Compute smart contextual message based on current route
  let whatsappMessage = WHATSAPP_MESSAGES.homepage;

  if (pathname === '/contact') {
    whatsappMessage = WHATSAPP_MESSAGES.contact;
  } else if (pathname === '/admissions') {
    whatsappMessage = WHATSAPP_MESSAGES.admissions;
  } else if (pathname.startsWith('/programs/')) {
    const slug = pathname.replace('/programs/', '');
    if (slug === 'fashion-design') {
      whatsappMessage = WHATSAPP_MESSAGES.fashion;
    } else if (slug === 'interior-design') {
      whatsappMessage = WHATSAPP_MESSAGES.interior;
    } else if (slug === 'ui-ux-design') {
      whatsappMessage = WHATSAPP_MESSAGES.uiux;
    } else {
      const prog = disciplines.find((d) => d.slug === slug);
      whatsappMessage = WHATSAPP_MESSAGES.program(prog ? prog.name : 'Design');
    }
  } else if (pathname.startsWith('/locations/')) {
    const slug = pathname.replace('/locations/', '');
    const loc = locations.find((l) => l.slug === slug);
    whatsappMessage = WHATSAPP_MESSAGES.campus(loc ? loc.name : 'Global Campus');
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111] font-sans selection:bg-[#F06445] selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-16 sm:pt-20">
        {children}
      </main>
      <Footer />

      {/* Floating Smart WhatsApp CTA Button */}
      <WhatsAppButton message={whatsappMessage} />
    </div>
  );
}
