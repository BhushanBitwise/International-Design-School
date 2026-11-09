import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { disciplines, academicCategories } from '../../data/programs';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Clock, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DisciplinesGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All Disciplines');
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const filteredDisciplines =
    selectedCategory === 'All Disciplines'
      ? disciplines
      : disciplines.filter((d) => d.category === selectedCategory);

  const totalCards = filteredDisciplines.length;

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
    const itemWidth = window.innerWidth >= 1024 ? 380 : window.innerWidth >= 768 ? 340 : 290;
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
    <section id="explore-disciplines" className="py-16 md:py-24 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Catalog"
          title="Explore Design"
          italicTitle="Disciplines"
          subtitle="Twelve rigorous pathways spanning couture atelier craft, spatial architecture, cognitive user interfaces, and generative media."
          align="split"
          action={
            <Button to="/programs" variant="dark" size="md">
              View All 12 Pathways
            </Button>
          }
        />

        {/* Filter Pills & Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full sm:max-w-xl">
            {academicCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap focus:outline-none cursor-pointer shrink-0 ${
                  selectedCategory === category
                    ? 'bg-[#111111] text-white shadow-xs font-bold'
                    : 'bg-white text-[#666666] hover:text-[#111111] hover:bg-[#FAFAFA] border border-[#E8E8E8]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Slider Prev / Next Arrows */}
          <div className="flex items-center justify-end gap-2 shrink-0">
            <span className="text-xs font-mono text-[#888888] mr-2 hidden sm:inline">
              {activeIndex + 1} of {totalCards} Disciplines
            </span>
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous Discipline"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex >= totalCards - 1}
              aria-label="Next Discipline"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#E8E8E8] text-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs"
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
          {filteredDisciplines.map((d) => (
            <div
              key={d.id}
              className="w-[84vw] sm:w-[340px] lg:w-[380px] shrink-0 snap-start chrono-card overflow-hidden flex flex-col justify-between group bg-white border border-[#E8E8E8] hover:border-[#2638CC]/40 hover:shadow-[0_15px_35px_-8px_rgba(38,56,204,0.12)] transition-all duration-300"
            >
              {/* Card Image Stage */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                <img
                  src={d.heroImage}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#999999] mb-2 font-mono">
                    <span className="text-[10px] font-semibold text-[#2638CC] uppercase tracking-wider">
                      {d.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-[#666666]">
                      <Clock className="w-3 h-3" />
                      {d.duration.split('/')[0].trim()}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111111] tracking-tight group-hover:text-[#2638CC] transition-colors">
                    {d.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                    {d.shortDescription}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-3.5 border-t border-[#E8E8E8] flex items-center justify-between gap-4">
                  <Link
                    to={`/programs/${d.slug}`}
                    className="text-xs sm:text-sm font-medium text-[#111111] group-hover:text-[#F06445] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Curriculum</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-[#F06445] transition-transform" />
                  </Link>

                  <Button
                    to={`/admissions?program=${d.slug}`}
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

        {/* Custom Slim Slider Progress Bar */}
        <div className="flex items-center justify-between gap-4 mt-4 pt-3 border-t border-[#E8E8E8]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
            <span className="font-bold text-[#111111]">{activeIndex + 1}</span>
            <span>/</span>
            <span>{totalCards} Disciplines</span>
          </div>

          <div className="flex-1 max-w-xs sm:max-w-md h-1.5 bg-[#E8E8E8] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#2638CC] to-[#3D53E8] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.max(15, progressPercent)}%` }}
            />
          </div>

          <span className="text-[11px] font-mono text-[#888888] hidden sm:block">
            Swipe or use arrows to explore
          </span>
        </div>
      </div>
    </section>
  );
}
