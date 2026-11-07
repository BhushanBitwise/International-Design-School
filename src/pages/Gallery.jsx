import React, { useState, useMemo } from 'react';
import { galleryItems, galleryCategories } from '../data/gallery';
import Lightbox from '../components/common/Lightbox';
import Badge from '../components/common/Badge';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All Works');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All Works') {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white pb-24">
      {/* Header with Dotted Background */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-12 md:pb-16 border-b border-[#E8E8E8] bg-white bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="coral" size="sm" dot className="mb-4">
            Curated Visual Archive
          </Badge>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] max-w-4xl">
            Exhibition Gallery &{' '}
            <span className="block text-[#999999] font-normal">
              Studio Artifacts.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed">
            A visual documentation of original student collections, architectural prototypes, studio life, and international exchange residencies.
          </p>

          {/* Category Filter Bar */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-white text-[#666666] hover:text-[#111111] hover:bg-[#FAFAFA] border border-[#E8E8E8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E8E8]">
            <span className="text-xs uppercase font-mono tracking-wider text-[#666666]">
              Showing {filteredItems.length} Curated Photographs
            </span>
            <span className="text-xs text-[#999999]">
              Click any photograph to view high-resolution details
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className="group cursor-pointer chrono-card overflow-hidden bg-white"
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
                      <Maximize2 className="w-4 h-4 text-[#2638CC]" />
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#2638CC] mb-1 font-semibold">
                    <span>{item.category} • {item.discipline}</span>
                    <span className="text-[#999999] font-normal">{item.year}</span>
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#F06445] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#666666] line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Keyboard Navigation */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </div>
  );
}
