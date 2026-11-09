import React, { useState, useRef, useEffect } from 'react';
import { PLACEMENT_STATS, PLACED_STUDENTS, PLACEMENT_CONTENT } from '../../data/placements';
import Badge from '../common/Badge';
import Button from '../common/Button';
import {
  Briefcase,
  Building2,
  MapPin,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Compass
} from 'lucide-react';

export default function StudentPlacement() {
  const { eyebrow, heading, subtitle, journeySteps } = PLACEMENT_CONTENT;
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const disciplines = [
    'All',
    'UI/UX & Cognitive Systems',
    'Interior & Spatial Architecture',
    'Fashion Design & Haute Couture',
    'Graphic Design & Typographics',
    'Product & Industrial Design'
  ];

  const filteredStudents = selectedDiscipline === 'All'
    ? PLACED_STUDENTS
    : PLACED_STUDENTS.filter(s => s.discipline === selectedDiscipline);

  // Reset index when filter changes
  useEffect(() => {
    setActiveIndex(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedDiscipline]);

  const totalCards = filteredStudents.length;

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }
    const ratio = scrollLeft / maxScroll;
    const index = Math.round(ratio * (totalCards - 1));
    setActiveIndex(Math.min(Math.max(index, 0), totalCards - 1));
  };

  const slideTo = (idx) => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: idx * (window.innerWidth >= 1024 ? 400 : window.innerWidth >= 768 ? 360 : 310),
      behavior: 'smooth'
    });
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    slideTo(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(totalCards - 1, activeIndex + 1);
    slideTo(nextIdx);
  };

  // Progress percentage for custom slim slider bar
  const progressPercent = totalCards > 1 ? ((activeIndex) / (totalCards - 1)) * 100 : 100;

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E8E8E8] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 pb-6 border-b border-[#E8E8E8]">
          <div className="max-w-3xl space-y-2.5">
            <div className="flex items-center gap-2">
              <Badge variant="blue" size="sm" dot>
                {eyebrow}
              </Badge>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
                National Top Rank Placement Cohort
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              From Studio Apprenticeship to{' '}
              <span className="bg-gradient-to-r from-[#2638CC] to-[#3D53E8] bg-clip-text text-transparent">
                Industry Leadership
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#666666] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Button to="/admissions" variant="primary" size="md">
              Placement Brochure
            </Button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* COMPACT PLACEMENT STATS STRIP                             */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-14">
          {PLACEMENT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#E8E8E8] shadow-2xs hover:border-[#2638CC]/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] group-hover:text-[#2638CC] transition-colors tracking-tight">
                  {stat.value}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EEF0FF] text-[#2638CC] flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
              <h4 className="font-heading text-xs sm:text-sm font-bold text-[#111111]">
                {stat.label}
              </h4>
              <p className="text-[10px] sm:text-[11px] font-mono text-[#888888] mt-0.5">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* SLIDER CONTROLS & DISCIPLINE FILTER BAR                   */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#2638CC] font-bold block mb-0.5">
              CAMPUS RECRUITMENT 2026
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111111]">
              Verified Placed Designers
            </h3>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full sm:max-w-md">
              {disciplines.map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDiscipline(d)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    selectedDiscipline === d
                      ? 'bg-[#111111] text-white shadow-xs font-bold'
                      : 'bg-white text-[#666666] border border-[#E8E8E8] hover:bg-[#FAFAFA]'
                  }`}
                >
                  {d === 'All' ? 'All' : d.split('&')[0].trim()}
                </button>
              ))}
            </div>

            {/* Slider Navigation Arrows (Desktop & Mobile) */}
            <div className="flex items-center gap-1.5 shrink-0 pl-2">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous Student"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex >= totalCards - 1}
                aria-label="Next Student"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HORIZONTAL SMOOTH SLIDER TRACK                            */}
        {/* ========================================================= */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="w-[88vw] sm:w-[350px] lg:w-[380px] shrink-0 snap-start chrono-card group overflow-hidden bg-white flex flex-col justify-between border border-[#E8E8E8] hover:border-[#2638CC]/40 hover:shadow-[0_15px_35px_-8px_rgba(38,56,204,0.12)] transition-all duration-300"
            >
              <div>
                {/* Capstone Project Cover */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <img
                    src={student.projectThumb}
                    alt={student.projectTitle}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                  />
                  
                  {/* Placed Company Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold shadow-xs border ${student.companyBadgeColor}`}>
                      <Building2 className="w-3.5 h-3.5" />
                      Placed @ {student.company}
                    </span>
                  </div>

                  {/* Package Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#111111]/90 text-white backdrop-blur-xs">
                      {student.package}
                    </span>
                  </div>
                </div>

                {/* Student Bio & Placement Details */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-xs shrink-0 bg-[#FAFAFA]">
                      <img
                        src={student.studentPhoto}
                        alt={student.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-heading text-sm sm:text-base font-bold text-[#111111] group-hover:text-[#2638CC] transition-colors">
                          {student.name}
                        </h4>
                        <span className="text-[9px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1 py-0.5 rounded">
                          Placed
                        </span>
                      </div>
                      <span className="text-xs text-[#2638CC] font-medium block truncate max-w-[220px]">
                        {student.role}
                      </span>
                      <span className="text-[10px] font-mono text-[#888888] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {student.location} • {student.batch}
                      </span>
                    </div>
                  </div>

                  {/* Student Quote */}
                  <div className="p-3 rounded-xl bg-[#FAFAFA] border border-[#EFEFEF] text-xs text-[#555555] leading-relaxed italic line-clamp-3">
                    “{student.quote}”
                  </div>

                  {/* Capstone Reference */}
                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#888888] border-t border-[#F0F0F0]">
                    <span>Capstone:</span>
                    <span className="text-[#111111] font-medium truncate max-w-[180px]">
                      {student.projectTitle}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <div className="pt-2.5 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-mono text-[#2638CC] font-bold group-hover:translate-x-1 transition-transform">
                  <span>View Placement Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* CUSTOM SLIM SLIDER PROGRESS BAR                           */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between gap-4 mt-4 sm:mt-6 pt-3 border-t border-[#E8E8E8]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
            <span className="font-bold text-[#111111]">{activeIndex + 1}</span>
            <span>/</span>
            <span>{totalCards} Designers</span>
          </div>

          {/* Slim Progress Track */}
          <div className="flex-1 max-w-xs sm:max-w-md h-1.5 bg-[#E8E8E8] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#2638CC] to-[#3D53E8] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.max(15, progressPercent)}%` }}
            />
          </div>

          <span className="text-[11px] font-mono text-[#888888] hidden sm:block">
            Swipe or use arrows to navigate
          </span>
        </div>

        {/* ========================================================= */}
        {/* 6-STEP STUDIO-TO-CAREER TIMELINE (COMPACT ACCORDION/TABS) */}
        {/* ========================================================= */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mt-12 sm:mt-16 border border-[#E8E8E8] shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E8E8E8]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2638CC] font-bold block mb-0.5">
                CAREER BLUEPRINT
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111111]">
                The Six-Stage Studio-to-Industry Pathway
              </h3>
            </div>
            <span className="text-xs font-mono text-[#888888]">
              Interactive Career Journey
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {journeySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-xl p-3.5 sm:p-4 border transition-all duration-200 relative flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#EEF0FF] border-[#2638CC] shadow-2xs'
                      : 'bg-white border-[#E8E8E8] hover:border-[#2638CC]/40 hover:bg-[#FAFAFA]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          isActive
                            ? 'bg-[#2638CC] text-white'
                            : 'bg-[#FAFAFA] text-[#888888] border border-[#E8E8E8]'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h4
                      className={`font-heading text-xs sm:text-sm font-bold leading-snug mb-1 ${
                        isActive ? 'text-[#2638CC]' : 'text-[#111111]'
                      }`}
                    >
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-[10px] text-[#666666] leading-relaxed line-clamp-2 mt-1">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
