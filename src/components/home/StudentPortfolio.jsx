import React, { useState, useRef, useEffect } from 'react';
import { STUDENT_PROJECTS, PORTFOLIO_CATEGORIES } from '../../data/portfolios';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Maximize2, ArrowUpRight, X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

export default function StudentPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Disciplines');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const filteredProjects = selectedCategory === 'All Disciplines'
    ? STUDENT_PROJECTS
    : STUDENT_PROJECTS.filter((p) => p.category === selectedCategory);

  const totalCards = filteredProjects.length;

  useEffect(() => {
    setActiveIndex(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedCategory]);

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
    const itemWidth = window.innerWidth >= 1024 ? 330 : window.innerWidth >= 768 ? 320 : 280;
    sliderRef.current.scrollTo({
      left: idx * itemWidth,
      behavior: 'smooth'
    });
  };

  const handlePrev = () => {
    slideTo(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    slideTo(Math.min(totalCards - 1, activeIndex + 1));
  };

  const progressPercent = totalCards > 1 ? (activeIndex / (totalCards - 1)) * 100 : 100;

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E8E8E8] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 pb-6 border-b border-[#E8E8E8]">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <Badge variant="blue" size="sm" dot>
                Student Portfolio Showcase
              </Badge>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
                Studio Capstone Archive
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              Ideas Made{' '}
              <span className="bg-gradient-to-r from-[#2638CC] to-[#3D53E8] bg-clip-text text-transparent">
                Visible.
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#666666] leading-relaxed">
              Explore student graduation portfolios spanning spatial architecture, couture ateliers, digital operating systems, and material science.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Button to="/gallery" variant="glass" size="md">
              Full Gallery Archive
            </Button>
          </div>
        </div>

        {/* Filter Bar & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full sm:max-w-xl">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-[#2638CC] text-white shadow-xs font-bold'
                      : 'bg-white border border-[#E8E8E8] text-[#555555] hover:text-[#111111] hover:border-[#2638CC]/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Slider Prev / Next Arrows */}
          <div className="flex items-center justify-end gap-2 shrink-0">
            <span className="text-xs font-mono text-[#888888] mr-2 hidden sm:inline">
              {activeIndex + 1} of {totalCards} Projects
            </span>
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous Project"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex >= totalCards - 1}
              aria-label="Next Project"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HORIZONTAL SMOOTH PROJECT CAROUSEL                        */}
        {/* ========================================================= */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="w-[82vw] sm:w-[320px] lg:w-[340px] shrink-0 snap-start chrono-card group cursor-pointer overflow-hidden bg-white flex flex-col justify-between hover:border-[#2638CC]/50 transition-all duration-300"
            >
              <div>
                {/* Project Cover Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EAEAEA] border-b border-[#E8E8E8]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                  />

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-[#2638CC] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="uppercase tracking-wider text-[#2638CC] font-bold">
                      {project.discipline}
                    </span>
                    <span className="text-[#888888]">
                      {project.year} • {project.term}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-[#111111] group-hover:text-[#2638CC] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Footer Metadata */}
              <div className="p-5 pt-0">
                <div className="pt-2.5 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-mono text-[#888888] group-hover:text-[#2638CC] transition-colors">
                  <span>Inspect Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slim Slider Progress Bar */}
        <div className="flex items-center justify-between gap-4 mt-4 pt-3 border-t border-[#E8E8E8]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
            <span className="font-bold text-[#111111]">{activeIndex + 1}</span>
            <span>/</span>
            <span>{totalCards} Projects</span>
          </div>

          <div className="flex-1 max-w-xs sm:max-w-md h-1.5 bg-[#E8E8E8] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#2638CC] to-[#3D53E8] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.max(15, progressPercent)}%` }}
            />
          </div>

          <span className="text-[11px] font-mono text-[#888888] hidden sm:block">
            Swipe or use arrows to view portfolios
          </span>
        </div>

        {/* Project Inspection Modal / Lightbox */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E8E8E8] shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Large Image Header */}
              <div className="h-64 sm:h-80 w-full overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-[#EEF0FF] text-[#2638CC] font-bold">
                    {activeModalProject.discipline}
                  </span>
                  <span className="text-[#888888]">
                    Cohort {activeModalProject.year} • {activeModalProject.term}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111]">
                    {activeModalProject.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#666666] leading-relaxed">
                    {activeModalProject.fullDescription}
                  </p>
                </div>

                {/* Key Artifacts & Prototypes */}
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#111111] uppercase tracking-wider mb-3">
                    Project Deliverables & Artifacts
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.artifacts.map((art, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-center gap-2 text-xs text-[#555555] bg-[#FAFAFA] p-2.5 rounded-xl border border-[#E8E8E8]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2638CC]" />
                        <span>{art}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used Pills */}
                <div>
                  <h4 className="font-heading text-xs font-bold text-[#888888] uppercase tracking-wider mb-2">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.toolsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white border border-[#E8E8E8] text-[#111111]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E8E8] flex justify-end">
                  <Button to="/admissions" variant="primary" size="md">
                    Apply to This Discipline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
