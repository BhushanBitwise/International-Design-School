import React from 'react';
import { philosophyPillars } from '../../data/faculty';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Sparkles, Layers, Eye, Compass, ArrowUpRight } from 'lucide-react';

export default function IntroPhilosophy() {
  const icons = [Layers, Eye, Compass, Sparkles];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E8E8E8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-16 md:pb-20 border-b border-[#E8E8E8]">
          <div className="lg:col-span-5 space-y-4">
            <Badge variant="coral" size="sm" dot>
              Institutional Vision
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              One Creative World.{' '}
              <span className="block text-[#999999] font-normal">
                Endless Possibilities.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              International Design School (IDS) transcends the rigid boundaries of conventional education templates. We view design not as a superficial styling exercise, but as a rigorous intellectual and tactile discipline.
            </p>
            <div className="pt-2">
              <Button to="/about" variant="glass" size="md">
                Learn About Our Pedagogy
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Clean White Specification Card */}
            <div className="chrono-card p-6 sm:p-8 space-y-5 bg-white">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F06445] bg-[#FFF0EA] px-3 py-1 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                Creative Manifesto
              </div>
              <p className="text-[#111111] font-semibold text-lg md:text-xl leading-relaxed">
                Designers are orchestrators of culture, custodians of material resources, and architects of sensory human experiences.
              </p>
              <p className="text-sm md:text-base text-[#666666] leading-relaxed">
                Headquartered with physical studios and fabrication workshops in Pune, India, alongside planned creative exchange hubs in Singapore, the United States, the United Kingdom, and Germany, IDS offers students a genuinely global creative canvas.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E8E8E8]">
                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8]">
                  <div className="font-heading font-bold text-xl text-[#111111]">12</div>
                  <div className="text-[11px] text-[#666666] font-medium">Design Disciplines</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8]">
                  <div className="font-heading font-bold text-xl text-[#111111]">1:12</div>
                  <div className="text-[11px] text-[#666666] font-medium">Mentor to Student</div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8]">
                  <div className="font-heading font-bold text-xl text-[#111111]">5</div>
                  <div className="text-[11px] text-[#666666] font-medium">Global Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy 4 Pillars */}
        <div className="pt-16 md:pt-20">
          <SectionHeading
            eyebrow="Our Educational Philosophy"
            title="Four Pillars of Creative"
            italicTitle="Maturity"
            subtitle="How we teach, make, and critique. Grounded in timeless studio rigor and urgent global challenges."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPillars.map((pillar, idx) => {
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={pillar.number}
                  className="chrono-card p-6 sm:p-7 flex flex-col justify-between group bg-white"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-2xl font-bold text-[#F06445]">
                        {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] flex items-center justify-center text-[#111111] group-hover:bg-[#F06445] group-hover:text-white transition-all shadow-2xs">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#F06445] transition-colors">
                      {pillar.title}
                    </h3>
                    <h4 className="text-xs uppercase tracking-wider text-[#999999] font-mono font-medium mt-1 mb-2.5">
                      {pillar.subtitle}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-medium text-[#111111] group-hover:text-[#F06445] transition-colors">
                    <span>Active in all studios</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-[#F06445] transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
