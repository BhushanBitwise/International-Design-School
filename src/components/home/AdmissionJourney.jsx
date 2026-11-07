import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { FileText, Palette, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function AdmissionJourney() {
  const steps = [
    {
      step: '01',
      icon: FileText,
      title: 'Select Pathway & Enquire',
      desc: 'Browse our 12 design disciplines, review studio requirements, and connect with an academic advisor for personalised guidance.'
    },
    {
      step: '02',
      icon: Palette,
      title: 'Creative Intent Portfolio',
      desc: 'Submit observational sketches, moodboards, or written statements of creative vision. We value curious minds over software mastery.'
    },
    {
      step: '03',
      icon: Users,
      title: 'Interactive Faculty Dialogue',
      desc: 'Engage in a 30-minute creative discussion with studio mentors to evaluate design instincts, spatial curiosity, and learning goals.'
    },
    {
      step: '04',
      icon: CheckCircle,
      title: 'Offer & Studio Induction',
      desc: 'Receive your formal admission offer and join the campus orientation, studio safety briefing, and creative cohort induction.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8] bg-dots">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Admissions Pathway"
          title="Your Journey Into The"
          italicTitle="Studio"
          subtitle="A transparent, four-stage creative evaluation process designed to identify authentic potential and artistic drive."
          align="split"
          action={
            <Button to="/admissions" variant="dark" size="md">
              Start Application
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="chrono-card p-7 flex flex-col justify-between group relative bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-bold text-[#F06445]">
                      {st.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] text-[#111111] flex items-center justify-center group-hover:bg-[#F06445] group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#F06445] transition-colors">
                    {st.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E8E8] text-[11px] font-mono text-[#999999] flex items-center justify-between">
                  <span>Phase {idx + 1}</span>
                  {idx < steps.length - 1 ? (
                    <ArrowRight className="w-3.5 h-3.5 text-[#CCCCCC] group-hover:text-[#F06445] group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <span className="text-emerald-600 font-bold">Enrolled</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
