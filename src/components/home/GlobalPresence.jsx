import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { locations } from '../../data/locations';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GlobalPresence() {
  const pune = locations.find((l) => l.id === 'pune');
  const international = locations.filter((l) => l.id !== 'pune');
  const [activeLocIndex, setActiveLocIndex] = useState(0);
  const locRef = useRef(null);
  const totalLoc = international.length;

  const handleLocScroll = () => {
    if (!locRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = locRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const ratio = scrollLeft / maxScroll;
    const idx = Math.round(ratio * (totalLoc - 1));
    setActiveLocIndex(Math.min(Math.max(idx, 0), totalLoc - 1));
  };

  const slideLoc = (idx) => {
    if (!locRef.current) return;
    const itemWidth = window.innerWidth >= 768 ? 320 : 270;
    locRef.current.scrollTo({
      left: idx * itemWidth,
      behavior: 'smooth'
    });
  };

  const progressPercent = ((activeLocIndex + 1) / totalLoc) * 100;

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E8E8E8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Global Footprint"
          title="Five Cities. One Creative"
          italicTitle="Vision."
          subtitle="Anchored in Pune, India as our primary operational campus, with planned design hubs spanning Singapore, London, Berlin, and the United States."
          align="split"
          action={
            <Button to="/locations" variant="dark" size="md">
              Explore All Locations
            </Button>
          }
        />

        {/* Primary Pune Campus Spotlight Banner */}
        {pune && (
          <div className="mb-12 chrono-card overflow-hidden bg-white border border-[#E8E8E8]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E8E8E8]">
                <img
                  src={pune.heroImage}
                  alt="IDS Pune Primary Campus"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-104"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/95 text-emerald-800 shadow-2xs border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Primary Operational Campus
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-white/95 text-[#111111] shadow-2xs border border-[#E8E8E8]">
                    {pune.flag} India
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 font-semibold mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Now Enrolling • Full Studio Facilities Active
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                    {pune.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#F06445] font-medium">
                    {pune.tagline}
                  </p>
                  <p className="mt-3.5 text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {pune.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#E8E8E8] space-y-2 text-xs text-[#666666]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#F06445] shrink-0 mt-0.5" />
                      <span>{pune.address}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button to={`/locations/${pune.slug}`} variant="primary" size="md">
                    Explore Pune Campus
                  </Button>
                  <Button to="/contact" variant="glass" size="md">
                    Book Studio Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Header & Controls for International Hubs */}
        <div className="flex items-center justify-between pb-3 mb-4">
          <div>
            <h4 className="font-heading text-lg sm:text-xl font-bold text-[#111111] tracking-tight">
              Planned Global Creative Hubs
            </h4>
            <p className="text-xs text-[#666666] font-mono">
              International studio satellites for semester abroad & research
            </p>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => slideLoc(Math.max(0, activeLocIndex - 1))}
              disabled={activeLocIndex === 0}
              aria-label="Previous Location"
              className="w-8 h-8 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => slideLoc(Math.min(totalLoc - 1, activeLocIndex + 1))}
              disabled={activeLocIndex >= totalLoc - 1}
              aria-label="Next Location"
              className="w-8 h-8 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Planned International Hubs: Swipeable Carousel on Mobile, 4-Col Grid on Desktop */}
        <div
          ref={locRef}
          onScroll={handleLocScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible scrollbar-none snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {international.map((loc) => (
            <div
              key={loc.id}
              className="w-[82vw] sm:w-auto shrink-0 sm:shrink snap-start chrono-card overflow-hidden flex flex-col justify-between group bg-white border border-[#E8E8E8] hover:border-[#2638CC]/40 hover:shadow-[0_15px_30px_-8px_rgba(38,56,204,0.12)] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                <img
                  src={loc.heroImage}
                  alt={loc.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-xl p-1 bg-white/95 rounded-lg shadow-2xs border border-[#E8E8E8]" role="img" aria-label={loc.country}>
                    {loc.flag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#111111] font-mono font-medium text-[10px] shadow-2xs border border-[#E8E8E8]">
                    Planned Hub
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h5 className="font-heading text-lg font-bold text-[#111111] group-hover:text-[#F06445] transition-colors">
                    {loc.name}
                  </h5>
                  <p className="text-xs text-[#F06445] font-medium mt-0.5">
                    {loc.country}
                  </p>
                  <p className="mt-2.5 text-xs text-[#666666] leading-relaxed line-clamp-3">
                    {loc.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#E8E8E8] flex items-center justify-between">
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="text-xs font-medium text-[#111111] group-hover:text-[#F06445] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Hub Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-[#F06445] transition-transform" />
                  </Link>

                  <span className="text-[10px] text-[#999999] font-mono">
                    Global Vision
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slim Progress Indicator for Hubs */}
        <div className="flex sm:hidden items-center justify-between gap-4 mt-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
            <span className="font-bold text-[#111111]">0{activeLocIndex + 1}</span>
            <span>/</span>
            <span>0{totalLoc}</span>
          </div>
          <div className="flex-1 max-w-xs h-1.5 bg-[#E8E8E8] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#2638CC] to-[#3D53E8] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#888888]">Swipe to explore</span>
        </div>
      </div>
    </section>
  );
}
