import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../../data/events';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Calendar, MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventsWorkshops() {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const categories = ['All Events', 'Masterclass', 'Conference', 'Exhibition', 'Summit'];

  const filteredEvents =
    selectedCategory === 'All Events'
      ? events.slice(0, 8)
      : events.filter((e) => e.category === selectedCategory).slice(0, 8);

  const totalCards = filteredEvents.length;

  useEffect(() => {
    setActiveIndex(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedCategory]);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }
    const ratio = scrollLeft / maxScroll;
    const index = Math.round(ratio * (totalCards - 1));
    setActiveIndex(Math.min(Math.max(index, 0), totalCards - 1));
  };

  const slideTo = (idx) => {
    if (!sliderRef.current) return;
    const itemWidth = window.innerWidth >= 1024 ? 420 : window.innerWidth >= 768 ? 360 : 300;
    sliderRef.current.scrollTo({
      left: idx * itemWidth,
      behavior: 'smooth'
    });
  };

  const handlePrev = () => {
    slideTo(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    slideTo(Math.min(totalCards - 1, activeIndex + 1));
  };

  const progressPercent = totalCards > 1 ? (activeIndex / (totalCards - 1)) * 100 : 100;

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white border-b border-[#E8E8E8] bg-dots">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Events & Dialogues"
          title="Colloquiums, Exhibitions &"
          italicTitle="Masterclasses"
          subtitle="Explore recurring design summits, seasonal runway showcases, and hands-on material fabrication workshops."
          align="split"
          action={
            <Button
              to="/events"
              variant="dark"
              size="md"
              icon
              className="w-full sm:w-auto text-center justify-center whitespace-normal sm:whitespace-nowrap px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium shadow-2xs"
            >
              View All Academic Events
            </Button>
          }
        />

        {/* Filter Pills & Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full sm:max-w-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap focus:outline-none cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white shadow-xs font-bold'
                    : 'bg-white text-[#666666] hover:text-[#111111] hover:bg-[#FAFAFA] border border-[#E8E8E8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Slider Prev / Next Arrows */}
          <div className="flex items-center justify-end gap-2 shrink-0">
            <span className="text-xs font-mono text-[#888888] mr-2 hidden sm:inline">
              {activeIndex + 1} of {totalCards} Events
            </span>
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous Event"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex >= totalCards - 1}
              aria-label="Next Event"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Smooth Slider Carousel */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="w-[85vw] sm:w-[360px] lg:w-[420px] shrink-0 snap-start chrono-card overflow-hidden flex flex-col justify-between group bg-white border border-[#E8E8E8] hover:border-[#2638CC]/40 hover:shadow-[0_15px_35px_-8px_rgba(38,56,204,0.12)] transition-all duration-300"
            >
              <div className="relative h-52 sm:h-60 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                <img
                  src={evt.image}
                  alt={evt.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#F06445] text-white shadow-xs">
                    {evt.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-white/95 text-[#111111] shadow-2xs border border-[#E8E8E8]">
                    {evt.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#666666] mb-2.5">
                    <span className="flex items-center gap-1.5 text-[#F06445] font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {evt.dateLabel}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#999999]" />
                      {evt.location.split('—')[0].trim()}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111111] tracking-tight group-hover:text-[#F06445] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                    {evt.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between">
                  <Link
                    to="/events"
                    className="text-xs sm:text-sm font-medium text-[#111111] group-hover:text-[#F06445] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Event Schedule & Modules</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-[#F06445] transition-transform" />
                  </Link>

                  <span className="text-[11px] text-[#999999] font-mono">
                    Open to Students
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Slim Slider Progress Bar */}
        <div className="flex items-center justify-between gap-4 mt-4 pt-3 border-t border-[#E8E8E8]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
            <span className="font-bold text-[#111111]">{activeIndex + 1}</span>
            <span>/</span>
            <span>{totalCards} Events</span>
          </div>

          <div className="flex-1 max-w-xs sm:max-w-md h-1.5 bg-[#E8E8E8] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#F06445] to-[#2638CC] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.max(15, progressPercent)}%` }}
            />
          </div>

          <span className="text-[11px] font-mono text-[#888888] hidden sm:block">
            Swipe or use arrows to explore
          </span>
        </div>

        {/* Dedicated Mobile Action Button for Seamless Experience */}
        <div className="mt-6 flex sm:hidden justify-center">
          <Button
            to="/events"
            variant="dark"
            size="md"
            icon
            className="w-full text-center justify-center py-3 text-xs font-semibold shadow-xs"
          >
            View All Academic Events
          </Button>
        </div>
      </div>
    </section>
  );
}
