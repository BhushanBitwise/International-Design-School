import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { disciplines, academicCategories } from '../../data/programs';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Clock, Award, ArrowUpRight } from 'lucide-react';

export default function DisciplinesGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All Disciplines');

  const filteredDisciplines =
    selectedCategory === 'All Disciplines'
      ? disciplines
      : disciplines.filter((d) => d.category === selectedCategory);

  return (
    <section id="explore-disciplines" className="py-20 md:py-28 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Catalog"
          title="Explore Design"
          italicTitle="Disciplines"
          subtitle="Twelve rigorous pathways spanning couture atelier craft, spatial architecture, cognitive user interfaces, and generative media."
          align="split"
          action={
            <Button to="/programs" variant="dark" size="md">
              View Complete Course Directory
            </Button>
          }
        />

        {/* Category Filter Pills (Minimal ChronoTask Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {academicCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap focus:outline-none ${
                selectedCategory === category
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'bg-white text-[#666666] hover:text-[#111111] hover:bg-[#FAFAFA] border border-[#E8E8E8]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Disciplines Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDisciplines.map((d) => (
            <div
              key={d.id}
              className="chrono-card overflow-hidden flex flex-col justify-between group bg-white"
            >
              {/* Card Image Stage (Clean, No Artificial Overlays) */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                <img
                  src={d.heroImage}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#999999] mb-2 font-mono">
                    <span className="text-[11px] font-semibold text-[#2638CC] uppercase tracking-wider">
                      {d.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[#666666]">
                      <Clock className="w-3 h-3" />
                      {d.duration.split('/')[0].trim()}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#111111] tracking-tight group-hover:text-[#2638CC] transition-colors">
                    {d.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                    {d.shortDescription}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between gap-4">
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
      </div>
    </section>
  );
}
