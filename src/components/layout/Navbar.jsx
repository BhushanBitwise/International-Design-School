import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CONTACT_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/contact';
import IDSBrandLogo from '../common/IDSBrandLogo';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change (in-render state transition pattern)
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMobileOpen(false);
  }

  // Subtle scroll border detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.homepage);

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/programs', label: 'Programs' },
    { to: '/locations', label: 'Global Locations' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/student-life', label: 'Student Life' },
    { to: '/events', label: 'Events' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E8E8E8] shadow-[0_2px_15px_-4px_rgba(0,0,0,0.04)] py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#E8E8E8]/60 py-4'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: IDS Brand Logo with Refined Blue Identity */}
          <IDSBrandLogo variant="full" size="md" />

          {/* Center: Minimal Text Navigation Links with Generous Spacing */}
          <nav className="hidden xl:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[13px] font-medium tracking-tight transition-colors duration-150 ${
                    isActive
                      ? 'text-[#F06445] font-semibold'
                      : 'text-[#111111] hover:text-[#F06445]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Phone + WhatsApp + Apply Now Pill */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phones[1].raw}`}
              className="text-xs font-mono font-medium text-[#111111] hover:text-[#F06445] transition-colors flex items-center gap-1.5"
              title="Official Admissions Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#F06445]" />
              <span>{CONTACT_INFO.phones[1].display}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#25D366] transition-colors p-1"
              title="Direct WhatsApp Admissions"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
            </a>

            <Link
              to="/admissions"
              className="px-5 py-2 rounded-full bg-[#F06445] hover:bg-[#D95336] text-white text-xs font-medium tracking-tight shadow-xs transition-all duration-200 active:scale-95 flex items-center gap-1.5"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Hotline"
              className="w-8 h-8 rounded-full bg-emerald-50 text-[#25D366] flex items-center justify-center border border-emerald-200/60 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileOpen}
              className="p-2 rounded-lg text-[#111111] hover:bg-gray-100 transition-colors"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean White Mobile Menu Drawer */}
      {isMobileOpen && (
        <div className="xl:hidden bg-white border-b border-[#E8E8E8] shadow-lg animate-fadeIn px-5 py-6 space-y-4">
          <div className="flex flex-col space-y-3 pb-4 border-b border-[#E8E8E8]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium py-1 transition-colors ${
                    isActive ? 'text-[#F06445] font-semibold' : 'text-[#111111]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#666666]">
              <span>Official Phone:</span>
              <a
                href={`tel:${CONTACT_INFO.phones[1].raw}`}
                className="font-bold text-[#111111] hover:text-[#F06445]"
              >
                {CONTACT_INFO.phones[1].display}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <Link
                to="/admissions"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#F06445] text-white text-xs font-medium shadow-xs"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
