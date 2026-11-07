import React from 'react';
import { Link } from 'react-router-dom';
import { locations } from '../data/locations';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function Locations() {
  const pune = locations.find((l) => l.id === 'pune');
  const international = locations.filter((l) => l.id !== 'pune');

  return (
    <div className="bg-white pb-24">
      {/* Header with Dotted Background */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 border-b border-[#E8E8E8] bg-white bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="coral" size="sm" dot className="mb-4">
            Global Creative Network
          </Badge>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] max-w-4xl">
            Five International Design Hubs.{' '}
            <span className="block text-[#999999] font-normal">
              One Global Perspective.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed">
            International Design School is anchored in our flagship operational campus in Pune, India, with planned creative exchange hubs connecting students to Singapore, the UK, Germany, and the United States.
          </p>
        </div>
      </section>

      {/* Flagship Pune Campus Section */}
      {pune && (
        <section className="py-16 md:py-24 border-b border-[#E8E8E8]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="chrono-card p-8 sm:p-12 md:p-14 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-1 bg-[#FAFAFA] rounded-xl border border-[#E8E8E8]">{pune.flag}</span>
                    <Badge variant="coral" size="sm" dot dotColor="bg-emerald-500">
                      Primary Operational Campus
                    </Badge>
                  </div>

                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                    {pune.name}
                  </h2>
                  <p className="text-sm font-medium text-[#F06445]">
                    {pune.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {pune.description}
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] space-y-1.5 text-xs text-[#111111]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#F06445] shrink-0 mt-0.5" />
                      <span className="font-medium">{pune.address}</span>
                    </div>
                    <div className="text-emerald-700 font-medium pl-6">
                      Active: Admissions, Atelier Workshops, Model Fab Labs, Design Cafeteria
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button to={`/locations/${pune.slug}`} variant="primary" size="md">
                      Explore Pune Campus
                    </Button>
                    <Button to="/contact" variant="glass" size="md">
                      Schedule In-Person Visit
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-6 relative rounded-xl overflow-hidden h-[320px] sm:h-[440px] border border-[#E8E8E8]">
                  <img
                    src={pune.heroImage}
                    alt={pune.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 text-white text-xs font-mono">
                    Pune Flagship Campus Architecture & Studios
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Planned Global Locations */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="International Hubs"
            title="Global Creative"
            italicTitle="Exchange Hubs"
            subtitle="Conceived to offer international studio residencies, summer masterclasses, and cross-continental design juries."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12">
            {international.map((loc) => (
              <div
                key={loc.id}
                className="chrono-card overflow-hidden flex flex-col justify-between group bg-white"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <img
                    src={loc.heroImage}
                    alt={loc.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                  />
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="text-2xl p-1 bg-white/95 rounded-lg shadow-2xs border border-[#E8E8E8]" role="img" aria-label={loc.country}>
                      {loc.flag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#111111] font-mono font-medium text-[10px] shadow-2xs border border-[#E8E8E8]">
                      Planned Global Hub
                    </span>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#111111] group-hover:text-[#F06445] transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-[#F06445] font-medium mt-0.5">
                      {loc.tagline}
                    </p>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {loc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E8E8] flex items-center justify-between">
                    <Link
                      to={`/locations/${loc.slug}`}
                      className="text-xs sm:text-sm font-medium text-[#111111] group-hover:text-[#F06445] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Hub Details & Programs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-[#F06445] transition-transform" />
                    </Link>

                    <Button
                      to={`/contact?campus=${loc.slug}`}
                      variant="glass"
                      size="sm"
                      className="text-xs px-3.5 py-1.5"
                      icon={false}
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
