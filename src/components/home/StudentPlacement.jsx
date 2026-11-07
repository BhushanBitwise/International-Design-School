import React, { useState } from 'react';
import { PLACEMENT_CONTENT } from '../../data/placements';
import Badge from '../common/Badge';
import Button from '../common/Button';
import {
  Compass,
  Briefcase,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Layers,
  Award
} from 'lucide-react';

export default function StudentPlacement() {
  const { heading, subtitle, journeySteps, careerCategories, studentShowcases } = PLACEMENT_CONTENT;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E8E8E8]">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="blue" size="sm" dot>
                Career Pathways & Outcomes
              </Badge>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
                Professional Readiness
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Button to="/admissions" variant="primary" size="md">
              Career Advisory Session
            </Button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6-STEP PLACEMENT & PROFESSIONAL JOURNEY TIMELINE          */}
        {/* ========================================================= */}
        <div className="mb-20">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111111] flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#2638CC]" />
              <span>The Six-Stage Studio-to-Industry Pathway</span>
            </h3>
            <span className="text-xs font-mono text-[#888888] hidden sm:block">
              Interactive Career Journey
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
            {journeySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#EEF0FF] border-[#2638CC] shadow-[0_10px_25px_-5px_rgba(38,56,204,0.15)]'
                      : 'bg-white border-[#E8E8E8] hover:border-[#2638CC]/40 hover:bg-[#FAFAFA]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                          isActive
                            ? 'bg-[#2638CC] text-white'
                            : 'bg-[#FAFAFA] text-[#888888] border border-[#E8E8E8]'
                        }`}
                      >
                        {step.number}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#2638CC] animate-ping" />
                      )}
                    </div>
                    <h4
                      className={`font-heading text-sm font-bold leading-snug mb-2 ${
                        isActive ? 'text-[#2638CC]' : 'text-[#111111]'
                      }`}
                    >
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#666666] leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* STUDENT SHOWCASE & PORTFOLIO SPOTLIGHT CARDS             */}
        {/* ========================================================= */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2638CC] font-bold block">
                PORTFOLIO EXCELLENCE
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111111] mt-0.5">
                Student Portfolios & Career Trajectories
              </h3>
            </div>
            <span className="text-xs font-mono text-[#888888]">
              Verified Studio Outcomes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {studentShowcases.map((card) => (
              <div
                key={card.id}
                className="chrono-card group overflow-hidden bg-white flex flex-col justify-between"
              >
                <div>
                  {/* Project preview header (Clean Photo, No Artificial Overlays) */}
                  <div className="relative h-48 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                    <img
                      src={card.projectThumb}
                      alt={card.projectTitle}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Student & Project Details */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2638CC]">
                        {card.specialization.split('&')[0]}
                      </span>
                      <span className="text-[10px] font-mono text-[#888888]">
                        {card.portfolioStatus}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E8E8E8] border border-[#E8E8E8] shrink-0">
                        <img
                          src={card.studentPhoto}
                          alt={card.studentName}
                          loading="lazy"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#111111]">
                          {card.studentName}
                        </h4>
                        <span className="text-[11px] text-[#777777] font-mono block">
                          {card.specialization}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#E8E8E8]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#2638CC] font-bold block mb-1">
                        Target Career Track
                      </span>
                      <p className="text-xs font-semibold text-[#111111]">
                        {card.careerTrack}
                      </p>
                      <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                        Capstone: <span className="italic font-medium text-[#111111]">{card.projectTitle}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-3 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-mono text-[#2638CC] group-hover:translate-x-1 transition-transform">
                    <span>View Project Narrative</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* CREATIVE INDUSTRY DISCIPLINES MATRIX                      */}
        {/* ========================================================= */}
        <div className="bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E8E8E8]">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#2638CC]" />
              <span className="font-heading text-sm font-bold text-[#111111]">
                Career Pathways by Design Discipline
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#888888]">
              Curriculum Aligned to Real Industry Titles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerCategories.map((cat) => (
              <div key={cat.name} className="space-y-1">
                <h5 className="font-heading text-xs font-bold text-[#111111] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2638CC]" />
                  <span>{cat.name}</span>
                </h5>
                <p className="text-[11px] text-[#666666] pl-3.5 leading-relaxed">
                  {cat.roles}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
