import React, { useState } from 'react';
import { galleryItems } from '../../data/gallery';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Lightbox from '../common/Lightbox';
import { Maximize2, ArrowUpRight } from 'lucide-react';

export default function StudentWorkShowcase() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Take 6 curated works for homepage showcase
  const showcaseItems = galleryItems.slice(0, 6);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E8E8E8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio & Graduation Show"
          title="Student Creative"
          italicTitle="Showcase"
          subtitle="Explore award-worthy student outcomes spanning experimental typography, sustainable couture, architectural scale models, and digital product designs."
          align="split"
          action={
            <Button to="/gallery" variant="dark" size="md">
              View Full Gallery
            </Button>
          }
        />

        {/* Curated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {showcaseItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer chrono-card overflow-hidden flex flex-col justify-between bg-white"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4 text-[#F06445]" />
                  </div>
                </div>

                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/95 text-[#111111] shadow-2xs border border-[#E8E8E8]">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#F06445] uppercase font-semibold">
                    {item.discipline}
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#111111] mt-1 group-hover:text-[#F06445] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#666666] line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-medium text-[#111111]">
                  <span>Studio Exhibition</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-[#F06445] transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={showcaseItems}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
}
