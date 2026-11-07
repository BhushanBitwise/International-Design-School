import React from 'react';
import { Link } from 'react-router-dom';
import { locations } from '../../data/locations';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function GlobalPresence() {
  const pune = locations.find((l) => l.id === 'pune');
  const international = locations.filter((l) => l.id !== 'pune');

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
          <div className="mb-12 chrono-card overflow-hidden bg-white">
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

        {/* 4 Planned International Hubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {international.map((loc) => (
            <div
              key={loc.id}
              className="chrono-card overflow-hidden flex flex-col justify-between group bg-white"
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
                  <h4 className="font-heading text-lg font-bold text-[#111111] group-hover:text-[#F06445] transition-colors">
                    {loc.name}
                  </h4>
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
      </div>
    </section>
  );
}
