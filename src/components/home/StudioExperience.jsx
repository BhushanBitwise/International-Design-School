import React, { useState, useRef } from 'react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import BrandedCampusImage from '../common/BrandedCampusImage';
import { Scissors, Hammer, Monitor, Box, Eye, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StudioExperience() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);
  const facilityRef = useRef(null);

  const campusPhotos = [
    {
      src: '/campus/International Design School Entrance.webp',
      title: 'Flagship Campus Main Entrance & Architectural Gateway',
      location: 'Pune Flagship Campus',
      tag: 'Campus Entrance'
    },
    {
      src: '/campus/IDS International Design School Atrium.webp',
      title: 'Multi-Level Central Atrium & Creative Hub',
      location: 'Pune Flagship Campus',
      tag: 'Central Atrium'
    },
    {
      src: '/campus/Design School Reception Lobby.webp',
      title: 'Executive Admissions & Design Reception Lobby',
      location: 'Administration Suite',
      tag: 'Reception Lobby'
    },
    {
      src: '/campus/IDS Design School Courtyard-1.webp',
      title: 'Landscaped Architectural Courtyard & Open-Air Studio',
      location: 'Central Courtyard',
      tag: 'Design Courtyard'
    },
    {
      src: '/campus/International Design School Lobby.webp',
      title: 'Contemporary Design Welcome Foyer & Student Gallery',
      location: 'Main Pavilion',
      tag: 'Welcome Foyer'
    },
    {
      src: '/campus/Modern Design School Reception.webp',
      title: 'Front Office Reception & Consultation Suite',
      location: 'Executive Wing',
      tag: 'Office Reception'
    }
  ];

  const facilities = [
    {
      icon: Scissors,
      title: 'Haute Couture & Draping Atelier',
      desc: 'French couture dressmaker mannequins, industrial lockstitch and serger machinery, multi-layer cutting tables, and fabric inspection bays.'
    },
    {
      icon: Hammer,
      title: 'Rapid Prototyping & Woodshop',
      desc: 'Precision laser cutters, 3-axis CNC routing equipment, additive 3D resin printers, and traditional timber joinery benches.'
    },
    {
      icon: Monitor,
      title: 'Digital Experience & VR Testing Lab',
      desc: 'Color-calibrated Eizo and Apple Retina displays, eye-tracking telemetry, and mixed reality headsets for spatial UI exploration.'
    },
    {
      icon: Box,
      title: 'Physical Material Archive',
      desc: 'Over 2,000 tactile swatches: architectural limestone, acoustic biocomposites, recycled polymers, sustainable organic silks, and metals.'
    },
    {
      icon: Eye,
      title: 'White-Cube Exhibition Gallery',
      desc: 'Museum-grade directional spotlighting, mobile plinths, and high-resolution projection screens for student project defenses and vernissages.'
    },
    {
      icon: Coffee,
      title: 'Courtyard & Creative Lounge',
      desc: 'Open-air shaded courtyards with local terracotta screens and an artisanal espresso bar where faculty and students exchange spontaneous ideas.'
    }
  ];

  const totalFacilities = facilities.length;

  const handleFacilityScroll = () => {
    if (!facilityRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = facilityRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const ratio = scrollLeft / maxScroll;
    const idx = Math.round(ratio * (totalFacilities - 1));
    setActiveFacilityIndex(Math.min(Math.max(idx, 0), totalFacilities - 1));
  };

  const slideFacility = (idx) => {
    if (!facilityRef.current) return;
    const itemWidth = window.innerWidth >= 768 ? 360 : 280;
    facilityRef.current.scrollTo({
      left: idx * itemWidth,
      behavior: 'smooth'
    });
  };

  const progressPercent = ((activeFacilityIndex + 1) / totalFacilities) * 100;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8] bg-dots">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <Badge variant="coral" size="sm" dot>
              Immersion & Infrastructure
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              Built for Obsessive{' '}
              <span className="block text-[#999999] font-normal">
                Makers.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Design excellence cannot be learned through a projector screen. Our spaces are configured as living working ateliers where mistakes are encouraged, tactile instincts are forged, and masterpieces take shape.
            </p>
            <div className="pt-2">
              <Button to="/student-life" variant="glass" size="md">
                Tour Student Life & Studios
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="chrono-card overflow-hidden p-2.5 bg-white">
              <BrandedCampusImage
                src={campusPhotos[activePhoto].src}
                title={campusPhotos[activePhoto].title}
                location={campusPhotos[activePhoto].location}
                aspectRatio="aspect-[16/10] sm:aspect-[16/10]"
              />
            </div>

            {/* Quick Campus Photo Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              {campusPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(idx)}
                  className={`text-left p-2.5 rounded-xl border text-[11px] font-mono transition-all cursor-pointer ${
                    activePhoto === idx
                      ? 'bg-[#EEF0FF] border-[#2638CC] text-[#2638CC] font-bold shadow-2xs'
                      : 'bg-white border-[#E8E8E8] text-[#666666] hover:bg-[#FAFAFA]'
                  }`}
                >
                  <span className="block truncate">{photo.tag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Facilities Section Header with Slider Controls for Mobile */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E8E8]">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
              Specialized Studio Workshops & Laboratories
            </h3>
            <p className="text-xs text-[#666666] mt-1 font-mono">
              Professional fabrication equipment & material archives
            </p>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => slideFacility(Math.max(0, activeFacilityIndex - 1))}
              disabled={activeFacilityIndex === 0}
              aria-label="Previous Facility"
              className="w-8 h-8 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => slideFacility(Math.min(totalFacilities - 1, activeFacilityIndex + 1))}
              disabled={activeFacilityIndex >= totalFacilities - 1}
              aria-label="Next Facility"
              className="w-8 h-8 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Studio Facilities: Smooth Swipeable Slider on Mobile, 3-Col Grid on Desktop */}
        <div
          ref={facilityRef}
          onScroll={handleFacilityScroll}
          className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible scrollbar-none snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {facilities.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="w-[82vw] sm:w-[340px] lg:w-auto shrink-0 lg:shrink snap-start chrono-card p-6 sm:p-7 flex flex-col justify-between group bg-white border border-[#E8E8E8] hover:border-[#2638CC]/40 hover:shadow-[0_15px_30px_-8px_rgba(38,56,204,0.1)] transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] text-[#111111] flex items-center justify-center mb-4 group-hover:bg-[#2638CC] group-hover:text-white transition-all shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#2638CC] transition-colors">
                    {f.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-[10px] font-mono text-[#999999] flex justify-between">
                  <span>Facility 0{idx + 1}</span>
                  <span className="text-[#2638CC] font-semibold">Active Studio</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Slim Progress Indicator for Facilities */}
        <div className="flex lg:hidden items-center justify-between gap-4 mt-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
            <span className="font-bold text-[#111111]">0{activeFacilityIndex + 1}</span>
            <span>/</span>
            <span>0{totalFacilities}</span>
          </div>
          <div className="flex-1 max-w-xs h-1.5 bg-[#E8E8E8] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#2638CC] to-[#3D53E8] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#888888]">Swipe</span>
        </div>
      </div>
    </section>
  );
}
