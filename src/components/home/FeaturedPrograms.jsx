import React from 'react';
import { disciplines } from '../../data/programs';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Check } from 'lucide-react';

export default function FeaturedPrograms() {
  const featured = disciplines.filter((d) =>
    ['fashion-design', 'interior-design', 'ui-ux-design'].includes(d.id)
  );

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E8E8E8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Flagship Specializations"
          title="Curated Studio"
          italicTitle="Pathways"
          subtitle="Explore in-depth curriculums designed to forge an unshakeable creative identity and commercial portfolio."
          align="split"
        />

        <div className="space-y-12">
          {featured.map((prog, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={prog.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center chrono-card p-6 sm:p-8 md:p-10 bg-white"
              >
                {/* Visual Image Stage (Clean, No Artificial Badges or Watermarks) */}
                <div
                  className={`lg:col-span-6 relative rounded-xl overflow-hidden h-[280px] sm:h-[360px] md:h-[400px] border border-[#E8E8E8] ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={prog.heroImage}
                    alt={prog.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-104"
                  />
                </div>

                {/* Content Details */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#2638CC] font-bold">
                        {prog.level.split('/')[0].trim()}
                      </span>
                      <span className="text-xs text-[#CCCCCC]">•</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#666666] font-mono font-medium">
                        Discipline 0{idx + 1} ({prog.duration})
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                      {prog.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#2638CC] font-medium">
                      {prog.headline}
                    </p>
                  </div>

                  <p className="text-sm md:text-base text-[#666666] leading-relaxed">
                    {prog.overview}
                  </p>

                  {/* Core competencies */}
                  <div className="pt-2">
                    <h4 className="font-heading text-xs uppercase tracking-wider font-bold text-[#111111] mb-2.5">
                      Key Competencies:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#555555]">
                      {prog.learningOutcomes.slice(0, 4).map((outcome, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#2684F7] shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <Button to={`/programs/${prog.slug}`} variant="primary" size="md">
                      View Syllabus
                    </Button>
                    <Button to={`/admissions?program=${prog.slug}`} variant="glass" size="md">
                      Apply for Pathway
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
