import React, { useState } from 'react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import BrandedCampusImage from '../common/BrandedCampusImage';
import { Scissors, Hammer, Monitor, Box, Eye, Coffee, Sparkles, Building2, MapPin } from 'lucide-react';

export default function StudioExperience() {
  const [activePhoto, setActivePhoto] = useState(0);

  const campusPhotos = [
    {
      src: '/images/ids/reception/ids-reception-lobby.webp',
      title: 'Flagship Campus Reception with Integrated 3D Architectural Signage',
      location: 'Pune Flagship Campus',
      tag: 'Reception Lobby'
    },
    {
      src: '/images/ids/campus/ids-pune-campus-entrance.webp',
      title: 'Main Entrance & Pedestrian Walkway with Monument Architectural Wall',
      location: 'Pune Flagship Campus',
      tag: 'Campus Entrance'
    },
    {
      src: '/images/ids/fashion/ids-fashion-design-studio.webp',
      title: 'Haute Couture Atelier with Dedicated Draping Stations & IDS Studio Wall',
      location: 'Couture Studio 01',
      tag: 'Fashion Atelier'
    },
    {
      src: '/images/ids/interior/ids-interior-design-studio.webp',
      title: 'Spatial Architecture Studio with Material Library & Model Drafting',
      location: 'Built Environments Studio 03',
      tag: 'Interior Studio'
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
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

        {/* 6 Studio Facilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="chrono-card p-6 sm:p-7 flex flex-col justify-between group bg-white"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] text-[#111111] flex items-center justify-center mb-4 group-hover:bg-[#F06445] group-hover:text-white transition-all shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#F06445] transition-colors">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
