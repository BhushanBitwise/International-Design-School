import React from 'react';
import { Maximize2, ArrowUpRight } from 'lucide-react';

export default function PortfolioCard({
  project,
  onSelect,
  className = ''
}) {
  return (
    <div
      onClick={() => onSelect && onSelect(project)}
      className={`chrono-card group cursor-pointer overflow-hidden bg-white flex flex-col justify-between hover:border-[#2638CC]/50 transition-all duration-400 ${className}`}
    >
      <div>
        {/* Project Cover Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#EAEAEA] border-b border-[#E8E8E8]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
          />

          {/* Hover Inspect Icon Pill */}
          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white text-[#2638CC] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Discipline Badge Top-Left */}
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[#111111] px-2.5 py-1 rounded-full border border-[#E8E8E8] shadow-2xs">
              {project.discipline}
            </span>
          </div>

          {/* Year pill top-right */}
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-mono text-white/90 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-full">
              {project.year}
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-5 sm:p-6 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#2638CC] font-bold block">
            {project.term}
          </span>
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
}
