import React, { useState } from 'react';
import { STUDENT_PROJECTS, PORTFOLIO_CATEGORIES } from '../../data/portfolios';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Maximize2, ArrowUpRight, Sparkles, Filter, X, Layers } from 'lucide-react';

export default function StudentPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Disciplines');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All Disciplines'
    ? STUDENT_PROJECTS
    : STUDENT_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E8E8E8] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[#E8E8E8]">
          <div className="max-w-2xl space-y-3">
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
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              A showcase of creative thinking, experimentation and design in action. Explore student graduation portfolios spanning spatial architecture, couture ateliers, digital operating systems, and material science.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Button to="/gallery" variant="glass" size="md">
              Full Gallery Archive
            </Button>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2638CC] text-white shadow-sm'
                    : 'bg-white border border-[#E8E8E8] text-[#555555] hover:text-[#111111] hover:border-[#2638CC]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* BEHANCE-INSPIRED EDITORIAL PORTFOLIO GRID                */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredProjects.map((project) => {
            // Asymmetric layout accents: make first and 4th card slightly wider or distinct
            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="chrono-card group cursor-pointer overflow-hidden bg-white flex flex-col justify-between hover:border-[#2638CC]/50 transition-all duration-400"
              >
                <div>
                  {/* Project Cover Image (Clean, No Artificial Badges) */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EAEAEA] border-b border-[#E8E8E8]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                    />

                    {/* Hover Inspect Icon */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white text-[#2638CC] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="uppercase tracking-wider text-[#2638CC] font-bold">
                        {project.discipline}
                      </span>
                      <span className="text-[#888888]">
                        {project.year} • {project.term}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-[#111111] group-hover:text-[#2638CC] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-3 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-mono text-[#888888] group-hover:text-[#2638CC] transition-colors">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
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
                aria-label="Close Modal"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Header */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#1A1A1A]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#2638CC] px-3 py-1 rounded-full shadow-md">
                    {activeModalProject.discipline}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#888888] mb-2">
                    <span>{activeModalProject.term}</span>
                    <span>•</span>
                    <span>Studio Session {activeModalProject.year}</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111]">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-sm text-[#555555] mt-3 leading-relaxed">
                    {activeModalProject.summary}
                  </p>
                </div>

                {/* Deliverables & Materials Swatches */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E8E8]">
                  <div className="bg-[#FAFAFA] rounded-xl p-4 border border-[#E8E8E8]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2638CC] font-bold block mb-2">
                      Studio Deliverables
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#555555]">
                      {activeModalProject.deliverables?.map((d, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2638CC]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#FAFAFA] rounded-xl p-4 border border-[#E8E8E8]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#F06445] font-bold block mb-2">
                      Materials & Technology
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#555555]">
                      {activeModalProject.materials?.map((m, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F06445]" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#888888]">
                    International Design School • Studio Archive
                  </span>
                  <Button to="/admissions" variant="primary" size="sm">
                    Inquire About This Discipline
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
