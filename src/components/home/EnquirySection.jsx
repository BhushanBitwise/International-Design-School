import React from 'react';
import EnquiryForm from '../forms/EnquiryForm';
import Badge from '../common/Badge';
import { CONTACT_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/contact';
import { MapPin, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';

export default function EnquirySection() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.admissions);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8] bg-dots">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <Badge variant="coral" size="sm" dot>
                Admissions Desk Active
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] mt-3 leading-[1.12]">
                Shape Your Creative{' '}
                <span className="block text-[#999999] font-normal">
                  Future Today.
                </span>
              </h2>
              <p className="mt-3.5 text-sm sm:text-base text-[#666666] leading-relaxed">
                Connect directly with our admissions faculty in Pune or submit an international study enquiry. We assist with discipline selection, portfolio assessment, and campus visit scheduling.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <div className="chrono-card p-4 sm:p-5 flex items-start gap-3.5 bg-white">
                <MapPin className="w-5 h-5 text-[#F06445] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#111111]">
                    Pune Flagship Campus
                  </h4>
                  <p className="text-xs text-[#666666] mt-0.5">
                    {CONTACT_INFO.campus.address}
                  </p>
                </div>
              </div>

              <div className="chrono-card p-4 sm:p-5 flex items-start gap-3.5 bg-white">
                <Phone className="w-5 h-5 text-[#F06445] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-heading text-sm font-bold text-[#111111]">
                    Official Phone Lines
                  </h4>
                  <div className="flex flex-col gap-1 text-xs">
                    {CONTACT_INFO.phones.map((p, idx) => (
                      <a
                        key={idx}
                        href={`tel:${p.raw}`}
                        className="font-mono font-medium text-[#111111] hover:text-[#F06445] transition-colors"
                      >
                        {p.display} <span className="text-[10px] text-[#999999]">({p.label.split('&')[0].trim()})</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-4 sm:p-5 bg-emerald-50 border border-emerald-200 shadow-2xs flex items-start gap-3.5">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5 fill-current" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-emerald-950">
                    Official WhatsApp Admissions
                  </h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-emerald-800 hover:underline block mt-0.5"
                  >
                    {CONTACT_INFO.whatsapp.display} (Chat with Admissions)
                  </a>
                </div>
              </div>

              <div className="chrono-card p-4 sm:p-5 flex items-start gap-3.5 bg-white">
                <Mail className="w-5 h-5 text-[#F06445] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#111111]">
                    Admissions & International Desk
                  </h4>
                  <p className="text-xs text-[#666666] mt-0.5 font-mono">
                    <a href={`mailto:${CONTACT_INFO.emails.admissions}`} className="hover:text-[#F06445]">
                      {CONTACT_INFO.emails.admissions}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <div className="flex items-center gap-2 text-xs text-[#666666]">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Application Fee for Early Portfolio Review Rounds</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reusable Validated Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              formType="admissions"
              title="Apply for Studio Admission"
              subtitle="Submit your details for personalized syllabus counseling and studio tour scheduling."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
