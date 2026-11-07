import React, { useState } from 'react';
import { faqs } from '../../data/faq';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/contact';

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  // Flatten and pick 6 top questions for homepage
  const flatQuestions = faqs.flatMap((c) => c.questions).slice(0, 6);

  const toggleAccordion = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.homepage);

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E8E8E8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column Heading */}
          <div className="lg:col-span-5 space-y-4">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Everything You Need To"
              italicTitle="Know"
              subtitle="Clear, honest answers about our admission criteria, studio qualifications, and global study options."
              className="mb-6"
            />

            <p className="text-sm text-[#666666] leading-relaxed">
              Have specific questions regarding your background, portfolio expectations, or fee schedules? Our academic counsellors are available for personal consultations.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button to="/contact" variant="dark" size="md">
                Ask an Academic Advisor
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 hover:bg-[#25D366] text-emerald-800 hover:text-white border border-emerald-200 transition-all text-xs font-medium shadow-2xs group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white fill-current" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {flatQuestions.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`chrono-card overflow-hidden bg-white transition-all duration-200 ${
                    isOpen ? 'border-[#F06445]/40 shadow-xs' : 'hover:border-[#D1D5DB]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-heading text-base font-bold text-[#111111] tracking-tight">
                      {item.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#F06445] text-white' : 'bg-[#FAFAFA] text-[#666666] border border-[#E8E8E8]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#666666] leading-relaxed border-t border-[#F0F0F0] animate-fadeIn">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
