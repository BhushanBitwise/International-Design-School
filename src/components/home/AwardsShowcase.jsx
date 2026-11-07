import React, { useState, useEffect } from 'react';
import { AWARDS_DATA } from '../../data/awards';
import Badge from '../common/Badge';
import Button from '../common/Button';
import {
  Trophy,
  Maximize2,
  X,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function AwardsShowcase() {
  const { eyebrow, subtitle, featured, secondary, distinctions } = AWARDS_DATA;
  const [inspectImage, setInspectImage] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setInspectImage(null);
    };
    if (inspectImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [inspectImage]);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#EEF0FF]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16 pb-8 border-b border-[#E8E8E8]">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="blue" size="sm" dot>
                {eyebrow}
              </Badge>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
                Institutional Distinction
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              Celebrating Creativity.{' '}
              <span className="bg-gradient-to-r from-[#2638CC] to-[#3D53E8] bg-clip-text text-transparent">
                Inspiring Excellence.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Design Philosophy Callout */}
          <div className="shrink-0 bg-[#FAFAFA] border border-[#E8E8E8] rounded-2xl p-5 max-w-sm shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-[#2638CC]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2638CC] font-bold">
                BENCHMARKING PHILOSOPHY
              </span>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Curricula and studio capstones are evaluated against rigorous European and Asian creative academy rubrics to ensure global distinction without artificial inflation.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* EDITORIAL AWARDS LAYOUT: FEATURED PHOTO + SECONDARY GRID  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT: Large Featured Photograph & Architectural Distinction (Col 7) */}
          <div className="lg:col-span-7 chrono-card p-4 sm:p-6 bg-white flex flex-col justify-between group">
            <div>
              {/* Photo Stage (Clean, No Artificial Badges/Pills) */}
              <div
                onClick={() => setInspectImage({
                  src: featured.image,
                  title: featured.title,
                  category: featured.category,
                  caption: featured.caption
                })}
                className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#111111] cursor-pointer border border-[#E8E8E8]"
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                
                {/* Inspection Trigger on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#2638CC] text-xs font-mono font-bold shadow-lg transform scale-95 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect Trophy Detail</span>
                  </div>
                </div>
              </div>

              {/* Editorial Content Below Image */}
              <div className="pt-6 sm:pt-7 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#2638CC] font-bold">
                      {featured.category}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mt-1">
                      {featured.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#EEF0FF] text-[#2638CC] flex items-center justify-center shrink-0 border border-[#D7DCFF]">
                    <Trophy className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {featured.description}
                </p>

                {/* Benchmark Rubric Points */}
                <div className="pt-3 border-t border-[#E8E8E8] grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {featured.benchmarks.map((bm, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#444444]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2638CC] shrink-0 mt-0.5" />
                      <span className="leading-snug">{bm}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Supporting Secondary Photographs & Institutional Distinctions (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            {secondary.map((item) => (
              <div
                key={item.id}
                className="chrono-card p-4 sm:p-5 bg-white group flex flex-col justify-between"
              >
                {/* Secondary Image Stage */}
                <div
                  onClick={() => setInspectImage({
                    src: item.image,
                    title: item.title,
                    category: item.category,
                    caption: item.caption
                  })}
                  className="relative rounded-xl overflow-hidden aspect-[16/9] bg-[#111111] cursor-pointer border border-[#E8E8E8]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#2638CC] text-[11px] font-mono font-bold shadow-md">
                      <Maximize2 className="w-3 h-3" />
                      <span>Inspect</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Content Below Image */}
                <div className="pt-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888]">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#2638CC] font-semibold">
                      IDS Platform
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#111111] group-hover:text-[#2638CC] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* DISTINCTION INDICATORS MATRIX                             */}
        {/* ========================================================= */}
        <div className="bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E8E8E8]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2638CC]" />
              <span className="font-heading text-sm font-bold text-[#111111]">
                Academic Distinction & Verification Framework
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#888888]">
              Calibrated Against International Creative Academies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {distinctions.map((d, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2638CC]" />
                  <h5 className="font-heading text-xs sm:text-sm font-bold text-[#111111]">
                    {d.label}
                  </h5>
                </div>
                <p className="text-xs text-[#666666] leading-relaxed pl-3.5">
                  {d.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-[#EEF0FF] rounded-2xl border border-[#D7DCFF] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-heading text-base font-bold text-[#1B2799]">
              Annual Graduation Awards & External Critique Juries
            </h4>
            <p className="text-xs text-[#4A5D9E] max-w-xl">
              Every academic year culminates in the IDS Annual Showcase where top student capstones receive distinction honors judged by senior industry practitioners.
            </p>
          </div>
          <Button to="/events" variant="primary" size="md">
            View Exhibition Calendar
          </Button>
        </div>

      </div>

      {/* ========================================================= */}
      {/* INTERACTIVE IMAGE ENLARGEMENT / INSPECTION MODAL          */}
      {/* ========================================================= */}
      {inspectImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setInspectImage(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-white/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E8E8E8] flex items-center justify-between bg-white">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#2638CC] font-bold block">
                  {inspectImage.category}
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#111111]">
                  {inspectImage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectImage(null)}
                aria-label="Close Inspection Modal"
                className="w-9 h-9 rounded-full bg-[#FAFAFA] hover:bg-[#EEF0FF] text-[#111111] hover:text-[#2638CC] flex items-center justify-center transition-colors border border-[#E8E8E8]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="bg-[#0A0A0A] flex-1 flex items-center justify-center overflow-hidden max-h-[60vh] sm:max-h-[68vh] p-2">
              <img
                src={inspectImage.src}
                alt={inspectImage.title}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="p-4 sm:p-5 border-t border-[#E8E8E8] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <p className="text-[#666666] leading-relaxed max-w-2xl">
                {inspectImage.caption}
              </p>
              <span className="text-[10px] font-mono text-[#888888] shrink-0 uppercase tracking-wider">
                International Design School • Studio Archive
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
