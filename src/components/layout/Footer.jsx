import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { disciplines } from '../../data/programs';
import { locations } from '../../data/locations';
import { CONTACT_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/contact';
import IDSBrandLogo from '../common/IDSBrandLogo';
import {
  Send,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
    }
  };

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.homepage);

  return (
    <footer className="bg-white text-[#111111] pt-16 md:pt-20 pb-12 border-t border-[#E8E8E8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Minimal Banner */}
        <div className="pb-12 md:pb-16 border-b border-[#E8E8E8] grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-[#F06445] font-mono font-semibold">
              Global Creative Institution
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] mt-2 leading-[1.1]">
              Design Your Perspective.{' '}
              <span className="block text-[#999999] font-normal">
                Shape The Future.
              </span>
            </h2>
            <p className="mt-4 text-[#666666] text-sm md:text-base max-w-xl leading-relaxed">
              An international creative learning experience for the next generation of designers, thinkers, and innovators across Singapore, USA, UK, Germany, and Pune.
            </p>
          </div>

          {/* Quick WhatsApp & Newsletter Box (Clean White Card) */}
          <div className="lg:col-span-5 chrono-card p-6 sm:p-7 bg-white">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#E8E8E8]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F06445] font-bold">
                  Instant Admissions Hotline
                </span>
                <h4 className="font-heading text-base font-bold text-[#111111] mt-0.5">
                  Direct WhatsApp Support
                </h4>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 hover:bg-[#25D366] text-emerald-800 hover:text-white border border-emerald-200 text-xs font-semibold transition-all shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current text-[#25D366] hover:text-white" />
                <span>Chat Now</span>
              </a>
            </div>

            <div className="pt-3">
              <p className="text-xs text-[#666666] mb-3">
                Subscribe to The IDS Design Dispatch for curated essays on contemporary typography, material futures, and admissions advisories.
              </p>

              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold py-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you. You have been added to the editorial dispatch list.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="your.email@studio.com"
                    required
                    className="bg-[#FAFAFA] border border-[#E8E8E8] text-[#111111] text-xs px-4 py-2.5 rounded-full flex-1 focus:outline-none focus:border-[#F06445] placeholder-[#999999]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#F06445] text-white text-xs font-semibold rounded-full hover:bg-[#D95336] transition-colors shrink-0 flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main 5-Column Navigation Links */}
        <div className="py-12 md:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-b border-[#E8E8E8]">
          {/* Col 1: Identity & Official Contact Numbers */}
          <div className="col-span-2 space-y-4">
            <IDSBrandLogo variant="full" size="lg" linkToHome={true} />

            <p className="text-xs text-[#666666] leading-relaxed max-w-sm">
              International Design School (IDS) nurtures creative practitioners across spatial architecture, couture fashion, interactive digital systems, and visual identity.
            </p>

            {/* Official Contact Phone Numbers (All Clickable) */}
            <div className="pt-2 space-y-2.5 text-xs text-[#555555]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F06445] shrink-0 mt-0.5" />
                <span>Pune Flagship: {CONTACT_INFO.campus.address}</span>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F06445] block font-semibold">
                  Official Contact Hotlines:
                </span>
                {CONTACT_INFO.phones.map((phone, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#F06445] shrink-0" />
                    <a
                      href={`tel:${phone.raw}`}
                      className="text-[#111111] hover:text-[#F06445] font-mono font-medium transition-colors"
                    >
                      {phone.display}
                    </a>
                    <span className="text-[10px] text-[#999999]">({phone.label.split('&')[0].trim()})</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline font-mono font-medium"
                >
                  WhatsApp: {CONTACT_INFO.whatsapp.display}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F06445] shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.emails.admissions}`}
                  className="hover:text-[#F06445] transition-colors"
                >
                  {CONTACT_INFO.emails.admissions}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Academics / Disciplines */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#999999] font-bold">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-[#666666]">
              {disciplines.slice(0, 6).map((d) => (
                <li key={d.id}>
                  <Link
                    to={`/programs/${d.slug}`}
                    className="hover:text-[#F06445] transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/programs"
                  className="text-[#F06445] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  All 12 Disciplines →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: More Disciplines */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#999999] font-bold">
              Specializations
            </h4>
            <ul className="space-y-2 text-xs text-[#666666]">
              {disciplines.slice(6, 12).map((d) => (
                <li key={d.id}>
                  <Link
                    to={`/programs/${d.slug}`}
                    className="hover:text-[#F06445] transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Global Hubs */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#999999] font-bold">
              Global Presence
            </h4>
            <ul className="space-y-2 text-xs text-[#666666]">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="hover:text-[#F06445] transition-colors flex items-center justify-between"
                  >
                    <span>{loc.flag} {loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Institutional */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#999999] font-bold">
              Institution
            </h4>
            <ul className="space-y-2 text-xs text-[#666666]">
              <li>
                <Link to="/about" className="hover:text-[#F06445] transition-colors">
                  About IDS
                </Link>
              </li>
              <li>
                <Link to="/student-life" className="hover:text-[#F06445] transition-colors">
                  Student Life & Studios
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F06445] transition-colors">
                  Exhibition Gallery
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#F06445] transition-colors">
                  Workshops & Calendar
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#F06445] transition-colors">
                  Admissions Journey
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F06445] transition-colors font-semibold text-[#111111]">
                  Contact & Studio Tour
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#999999]">
          <div>
            © {new Date().getFullYear()} International Design School (IDS). All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/about" className="hover:text-[#111111] transition-colors">
              Educational Philosophy
            </Link>
            <Link to="/admissions" className="hover:text-[#111111] transition-colors">
              Admission Policies
            </Link>
            <span className="text-[#E8E8E8]">•</span>
            <span>Pune (Primary Campus) • Singapore • USA • UK • Germany (Planned Hubs)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
