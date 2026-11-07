import React from 'react';
import EnquiryForm from '../components/forms/EnquiryForm';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import { faqs } from '../data/faq';
import {
  FileText,
  Palette,
  Users,
  CheckCircle,
  HelpCircle,
  Clock,
  Sparkles,
  Calendar
} from 'lucide-react';

export default function Admissions() {
  const admissionFaqs = faqs.find((f) => f.category === 'Admissions & Eligibility')?.questions || [];

  const steps = [
    {
      num: '01',
      title: 'Online Expression of Interest',
      desc: 'Submit your fundamental educational background and select your intended design discipline and campus preference.',
      timeframe: 'Day 1'
    },
    {
      num: '02',
      title: 'Statement of Creative Intent & Sketchbook',
      desc: 'Share observational drawings, moodboards, or an essay on what design problems you wish to solve. No software mastery needed.',
      timeframe: 'Within 5 Days'
    },
    {
      num: '03',
      title: 'One-on-One Faculty Interview',
      desc: 'An informal 30-minute dialogue with studio directors to assess spatial awareness, curiosity, and artistic maturity.',
      timeframe: 'Scheduled Round'
    },
    {
      num: '04',
      title: 'Offer Decision & Studio Seat Confirmation',
      desc: 'Successful applicants receive formal admission letters with fee schedules, scholarship awards, and studio briefing packets.',
      timeframe: 'Within 48 Hours'
    }
  ];

  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 border-b border-[#E8E8E8] bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="coral" size="sm" dot className="mb-4">
            Admissions Intake 2026–27
          </Badge>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#111111] leading-[1.08] max-w-4xl">
            Begin Your Studio Journey.{' '}
            <span className="font-editorial italic font-normal text-[#999999] block sm:inline">
              Creative Admissions.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed">
            Our admissions process is designed to discover creative potential, visual curiosity, and genuine commitment rather than rote exam cramming.
          </p>
        </div>
      </section>

      {/* Visual Step-by-Step Journey */}
      <section className="py-16 md:py-24 border-b border-[#E8E8E8] bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Application Process"
            title="Four Steps to Studio"
            italicTitle="Enrollment"
            subtitle="Transparent evaluation criteria focused on your creative instincts, aesthetic drive, and problem-solving mindset."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="chrono-card p-7 flex flex-col justify-between hover:border-[#111111] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-[#F06445]">
                      {st.num}
                    </span>
                    <Badge variant="default" size="xs">
                      {st.timeframe}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#111111]">
                    {st.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E8E8] text-[11px] font-mono text-[#999999]">
                  Stage {idx + 1} of 4
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Guidelines Strip */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="default" size="sm">
                Academic Prerequisites
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
                Eligibility & Entrance Guidelines
              </h2>
              <p className="text-sm text-[#666666] leading-relaxed">
                We accept students from diverse academic streams (Arts, Commerce, Sciences) who demonstrate visual aptitude and spatial intuition.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="chrono-card p-7 space-y-2.5">
                <span className="font-mono text-xs font-bold text-[#F06445] uppercase tracking-wider">Pathway 01</span>
                <h4 className="font-heading text-lg font-bold text-[#111111]">Professional Diplomas</h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Successful completion of 10+2 (Higher Secondary) or equivalent international qualification. No prior design background strictly required.
                </p>
              </div>

              <div className="chrono-card p-7 space-y-2.5">
                <span className="font-mono text-xs font-bold text-[#2684F7] uppercase tracking-wider">Pathway 02</span>
                <h4 className="font-heading text-lg font-bold text-[#111111]">Postgraduate & Executive</h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Graduation in any discipline (B.Des, B.Arch, B.A., B.Sc., B.Com, or B.Tech) or demonstrable creative industry portfolio experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Integrated Application Form */}
      <section className="py-16 md:py-24 border-b border-[#E8E8E8] bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <EnquiryForm
              formType="admissions"
              title="Official Admissions Application"
              subtitle="Submit your initial portfolio expression and connect with our Pune admissions panel."
            />
          </div>
        </div>
      </section>

      {/* Admissions FAQs */}
      <section className="pt-16 md:pt-24 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl font-black text-[#111111] tracking-tight text-center mb-8">
            Admissions FAQs & Counselling Policies
          </h2>

          <div className="space-y-4">
            {admissionFaqs.map((faq, idx) => (
              <div key={idx} className="chrono-card p-6">
                <h4 className="font-heading text-base sm:text-lg font-bold text-[#111111]">
                  {faq.q}
                </h4>
                <p className="mt-2 text-sm text-[#666666] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
