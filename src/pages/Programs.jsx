import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { disciplines, academicCategories } from '../data/programs';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { Search, Clock, Award, ArrowUpRight, X } from 'lucide-react';

export default function Programs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Disciplines');

  const filtered = useMemo(() => {
    return disciplines.filter((d) => {
      const matchesCategory =
        selectedCategory === 'All Disciplines' || d.category === selectedCategory;
      const matchesSearch =
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.careerOpportunities.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-white pb-24">
      {/* Header with Dotted Background */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-12 md:pb-16 border-b border-[#E8E8E8] bg-white bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="coral" size="sm" dot className="mb-4">
            Academic Catalog 2026–27
          </Badge>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] max-w-4xl">
            Design Disciplines &{' '}
            <span className="block text-[#999999] font-normal">
              Studio Pathways.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed">
            Twelve specialized creative courses spanning physical ateliers, spatial architecture, typographic systems, and digital interfaces.
          </p>

          {/* Search and Category Filter Bar */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Box */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-[#999999] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search disciplines, careers, or software..."
                className="w-full pl-11 pr-10 py-3 rounded-full border border-[#E8E8E8] bg-white text-sm text-[#111111] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#F06445]/20 focus:border-[#F06445]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear Search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#999999] hover:text-[#111111]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="md:col-span-7 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {academicCategories.map((cat) => (
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
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E8E8]">
            <span className="text-xs uppercase font-mono tracking-wider text-[#666666]">
              Showing {filtered.length} of {disciplines.length} Disciplines
            </span>

            {searchQuery && (
              <span className="text-xs text-[#F06445] font-semibold">
                Filtering by &quot;{searchQuery}&quot;
              </span>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <h3 className="font-heading text-2xl font-bold text-[#111111]">
                No matching programs found
              </h3>
              <p className="text-sm text-[#666666]">
                Try adjusting your search query or selecting &quot;All Disciplines&quot;.
              </p>
              <Button
                variant="glass"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Disciplines');
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((d) => (
                <div
                  key={d.id}
                  className="chrono-card overflow-hidden flex flex-col justify-between group bg-white"
                >
                  {/* Image Stage (Clean, No Artificial Overlays) */}
                  <div className="relative h-60 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                    <img
                      src={d.heroImage}
                      alt={d.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#999999] mb-2 font-mono">
                        <span className="text-[11px] font-semibold text-[#2638CC] uppercase tracking-wider">
                          {d.category}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[#666666]">
                          <Clock className="w-3.5 h-3.5" />
                          {d.duration.split('/')[0].trim()}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl font-bold text-[#111111] tracking-tight group-hover:text-[#F06445] transition-colors">
                        {d.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#F06445] font-medium line-clamp-1">
                        {d.headline}
                      </p>

                      <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                        {d.shortDescription}
                      </p>

                      <div className="mt-4 pt-3 border-t border-[#F0F0F0]">
                        <span className="text-[11px] font-semibold text-[#111111] block mb-1.5">
                          Key Career Outcomes:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {d.careerOpportunities.slice(0, 3).map((career, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAFAFA] text-[#666666] border border-[#E8E8E8]"
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between gap-3">
                      <Link
                        to={`/programs/${d.slug}`}
                        className="text-xs sm:text-sm font-medium text-[#111111] group-hover:text-[#F06445] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Detailed Syllabus</span>
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
          )}
        </div>
      </section>
    </div>
  );
}
