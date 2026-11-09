import React, { useState, useRef } from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { FileText, Palette, Users, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const [activeStep, setActiveStep] = useState(0);
  const stepRef = useRef(null);
  const totalSteps = steps.length;

  const handleStepScroll = () => {
    if (!stepRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = stepRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const ratio = scrollLeft / maxScroll;
    const idx = Math.round(ratio * (totalSteps - 1));
    setActiveStep(Math.min(Math.max(idx, 0), totalSteps - 1));
  };

  const slideStep = (idx) => {
    if (!stepRef.current) return;
    const itemWidth = window.innerWidth >= 768 ? 320 : 270;
    stepRef.current.scrollTo({
      left: idx * itemWidth,
      behavior: 'smooth'
    });
  };

  const progressPercent = ((activeStep + 1) / totalSteps) * 100;

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

        {/* Mobile controls */}
        <div className="flex md:hidden items-center justify-between mt-6 pb-2 border-b border-[#E8E8E8]">
          <span className="text-xs font-mono text-[#888888]">
            Phase 0{activeStep + 1} of 0{totalSteps}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => slideStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              aria-label="Previous Phase"
              className="w-8 h-8 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => slideStep(Math.min(totalSteps - 1, activeStep + 1))}
              disabled={activeStep >= totalSteps - 1}
              aria-label="Next Phase"
              className="w-8 h-8 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Steps: Horizontal Snap Slider on Mobile, 4-Col Grid on Desktop */}
        <div
          ref={stepRef}
          onScroll={handleStepScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 overflow-x-auto md:overflow-visible scrollbar-none snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 md:shrink snap-start chrono-card p-6 sm:p-7 flex flex-col justify-between group relative bg-white border border-[#E8E8E8] hover:border-[#F06445]/40 hover:shadow-[0_15px_30px_-8px_rgba(240,100,69,0.12)] transition-all duration-300"
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

        {/* Mobile Slim Progress Indicator for Admission Steps */}
        <div className="flex md:hidden items-center justify-between gap-4 mt-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
            <span className="font-bold text-[#111111]">0{activeStep + 1}</span>
            <span>/</span>
            <span>0{totalSteps}</span>
          </div>
          <div className="flex-1 max-w-xs h-1.5 bg-[#E8E8E8] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#F06445] to-[#2638CC] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#888888]">Swipe to explore</span>
        </div>
      </div>
    </section>
  );
}
