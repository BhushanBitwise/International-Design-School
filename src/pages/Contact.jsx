import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import EnquiryForm from '../components/forms/EnquiryForm';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { CONTACT_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/contact';
import { locations } from '../data/locations';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  Building,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const campusParam = searchParams.get('campus') || 'pune';
  const [activeTab, setActiveTab] = useState('visit'); // 'visit' | 'general'

  const pune = locations.find((l) => l.id === 'pune');
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.contact);

  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 border-b border-[#E8E8E8] bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="coral" size="sm" dot className="mb-4">
            Connect With Admissions & Studios
          </Badge>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#111111] leading-[1.06] max-w-4xl">
            Let&apos;s Start a{' '}
            <span className="font-editorial italic font-normal text-[#999999] block sm:inline">
              Conversation.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed">
            Have a question about our programs, admissions, or global learning opportunities? Our team is here to help.
          </p>
        </div>
      </section>

      {/* 4 Premium Contact Cards (Phone Support, WhatsApp, Admissions, General) */}
      <section className="py-12 md:py-16 border-b border-[#E8E8E8] bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Official Phone Support */}
            <div className="chrono-card p-7 flex flex-col justify-between hover:border-[#111111] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0EA] text-[#F06445] flex items-center justify-center mb-5 border border-[#F06445]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#111111]">
                  Phone Support
                </h3>
                <p className="text-xs text-[#666666] mt-1 mb-4 leading-relaxed">
                  Call our admissions and academic counselling desk directly:
                </p>

                <div className="space-y-2.5">
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8]">
                      <a
                        href={`tel:${phone.raw}`}
                        className="text-xs font-bold text-[#111111] hover:text-[#F06445] transition-colors block"
                      >
                        {phone.display}
                      </a>
                      <span className="text-[10px] text-[#999999] block mt-0.5 font-mono">
                        {phone.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E8E8E8] text-[11px] text-[#999999] font-mono">
                Mon – Sat: 9:00 AM – 6:30 PM IST
              </div>
            </div>

            {/* Card 2: WhatsApp Enquiries */}
            <div className="chrono-card p-7 border-emerald-200/80 hover:border-emerald-500 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-200">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-lg font-bold text-[#111111]">
                    WhatsApp Enquiries
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                </div>
                <p className="text-xs text-[#666666] mt-1 mb-4 leading-relaxed">
                  Instant message our admissions directors for prospectus and syllabus PDFs:
                </p>

                <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-800 font-bold block">
                    Official WhatsApp
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-900 hover:underline block"
                  >
                    {CONTACT_INFO.whatsapp.display}
                  </a>
                  <span className="text-[11px] text-emerald-700 block">
                    Direct one-to-one counseling
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3">
                <Button
                  href={whatsappUrl}
                  variant="whatsapp"
                  size="sm"
                  className="w-full text-xs"
                  icon={false}
                  customIcon={<ExternalLink className="w-3.5 h-3.5 ml-1" />}
                >
                  Start WhatsApp Chat
                </Button>
              </div>
            </div>

            {/* Card 3: Admissions Assistance */}
            <div className="chrono-card p-7 flex flex-col justify-between hover:border-[#111111] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#2684F7] flex items-center justify-center mb-5 border border-[#2684F7]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#111111]">
                  Admissions Assistance
                </h3>
                <p className="text-xs text-[#666666] mt-1 mb-4 leading-relaxed">
                  For formal portfolio evaluation, transcript review, and international scholarships:
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8]">
                    <span className="text-[10px] text-[#999999] block uppercase font-mono">
                      Admissions Email
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.emails.admissions}`}
                      className="font-bold text-[#111111] hover:text-[#F06445] transition-colors"
                    >
                      {CONTACT_INFO.emails.admissions}
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8]">
                    <span className="text-[10px] text-[#999999] block uppercase font-mono">
                      Global Exchange Desk
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.emails.international}`}
                      className="font-bold text-[#111111] hover:text-[#F06445] transition-colors"
                    >
                      {CONTACT_INFO.emails.international}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E8E8E8] text-[11px] text-[#999999] font-mono">
                Response within 24 business hours
              </div>
            </div>

            {/* Card 4: General Enquiries & Campus Visits */}
            <div className="chrono-card p-7 flex flex-col justify-between hover:border-[#111111] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAFAFA] text-[#111111] flex items-center justify-center mb-5 border border-[#E8E8E8]">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#111111]">
                  Pune Studio Campus
                </h3>
                <p className="text-xs text-[#666666] mt-1 mb-4 leading-relaxed">
                  Flagship operational campus location in Pune, Maharashtra:
                </p>

                <div className="p-3 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] text-xs text-[#111111] space-y-1">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F06445] shrink-0 mt-0.5" />
                    <span>{CONTACT_INFO.campus.address}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3">
                <Button
                  to="#contact-form-section"
                  variant="glass"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => setActiveTab('visit')}
                >
                  Book Studio Walkthrough
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Location Details */}
      <section id="contact-form-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Campus Information */}
            <div className="lg:col-span-5 space-y-8">
              {/* Pune Flagship Primary Box */}
              <div className="chrono-card p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="default" size="xs" dot dotColor="bg-emerald-500">
                    Flagship Operational Campus
                  </Badge>
                  <span className="text-xl">🇮🇳</span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#111111]">
                    Pune Flagship Campus
                  </h3>
                  <p className="text-xs text-[#F06445] font-semibold mt-0.5">
                    Creative Corridor • Maharashtra, India
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-[#666666]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#F06445] shrink-0 mt-0.5" />
                    <span>{pune?.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#F06445] shrink-0" />
                    <a
                      href={`tel:${CONTACT_INFO.phones[0].raw}`}
                      className="font-bold text-[#111111] hover:text-[#F06445]"
                    >
                      {CONTACT_INFO.phones[0].display}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-600 hover:underline"
                    >
                      WhatsApp: {CONTACT_INFO.whatsapp.display}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#666666] shrink-0" />
                    <span>{CONTACT_INFO.campus.hours}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E8E8E8]">
                  <p className="text-[11px] text-[#666666] leading-relaxed">
                    Guided studio tours run Monday through Saturday. Experience our Couture Atelier, Rapid Prototyping Workshop, and Digital UI Labs.
                  </p>
                </div>
              </div>

              {/* International Hub Contacts Box */}
              <div className="chrono-card p-8 bg-[#FAFAFA] space-y-4">
                <h4 className="font-heading text-lg font-bold text-[#111111]">
                  Planned Global Hub Liaisons
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  For international exchange terms and planned study hubs in Singapore, London, Berlin, and the US:
                </p>

                <div className="space-y-2.5 text-xs text-[#111111]">
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-[#E8E8E8]">
                    <span>🇸🇬 Singapore Hub:</span>
                    <a href="mailto:singapore.hub@ids-edu.com" className="font-mono text-[11px] text-[#666666] hover:text-[#F06445]">
                      singapore.hub@ids-edu.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-[#E8E8E8]">
                    <span>🇬🇧 London UK Studio:</span>
                    <a href="mailto:london.hub@ids-edu.com" className="font-mono text-[11px] text-[#666666] hover:text-[#F06445]">
                      london.hub@ids-edu.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-[#E8E8E8]">
                    <span>🇩🇪 Berlin Germany Hub:</span>
                    <a href="mailto:berlin.hub@ids-edu.com" className="font-mono text-[11px] text-[#666666] hover:text-[#F06445]">
                      berlin.hub@ids-edu.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-[#E8E8E8]">
                    <span>🇺🇸 United States Hub:</span>
                    <a href="mailto:usa.hub@ids-edu.com" className="font-mono text-[11px] text-[#666666] hover:text-[#F06445]">
                      usa.hub@ids-edu.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Reusable Form with Tabbed Intent & WhatsApp Support */}
            <div className="lg:col-span-7">
              {/* Form Mode Selector */}
              <div className="flex items-center gap-2 mb-6 p-1.5 rounded-full bg-[#FAFAFA] border border-[#E8E8E8] max-w-md">
                <button
                  type="button"
                  onClick={() => setActiveTab('visit')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all ${
                    activeTab === 'visit'
                      ? 'bg-white text-[#111111] shadow-xs border border-[#E8E8E8]'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  Schedule Studio Tour
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('general')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all ${
                    activeTab === 'general'
                      ? 'bg-white text-[#111111] shadow-xs border border-[#E8E8E8]'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  General Academic Inquiry
                </button>
              </div>

              <EnquiryForm
                formType={activeTab === 'visit' ? 'campus-visit' : 'general'}
                initialCampus={campusParam}
                title={
                  activeTab === 'visit'
                    ? 'Schedule a Pune Studio Tour'
                    : 'Send an Academic Inquiry'
                }
                subtitle={
                  activeTab === 'visit'
                    ? 'Tour our active ateliers, inspect fabrication tools, and meet current students and mentors.'
                    : 'Submit your query regarding programs, portfolio preparation, or admissions.'
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
