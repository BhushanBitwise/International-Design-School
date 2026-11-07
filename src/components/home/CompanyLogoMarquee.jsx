import React from 'react';
import { companyLogosRow1, companyLogosRow2 } from '../../data/companyLogos';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { Sparkles, Layers, Cpu } from 'lucide-react';

export default function CompanyLogoMarquee() {
  // Seamless loop by duplicating items
  const row1Items = [...companyLogosRow1, ...companyLogosRow1];
  const row2Items = [...companyLogosRow2, ...companyLogosRow2];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8] overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#EEF0FF]/50 to-transparent pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E8E8E8]">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="blue" size="sm" dot>
                Industry Ecosystem
              </Badge>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
                Tools & Platforms Shaping Modern Design
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              Connected to the{' '}
              <span className="bg-gradient-to-r from-[#2638CC] to-[#3D53E8] bg-clip-text text-transparent">
                Creative Industry
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Explore the tools, platforms and creative ecosystems shaping modern design. From enterprise design systems and 3D architectural engines to generative digital pipelines.
            </p>
          </div>

          {/* Credibility Notice Pill */}
          <div className="shrink-0 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl px-4 py-3 max-w-xs shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
              <Cpu className="w-4 h-4 text-[#2638CC]" />
              <span>Curriculum-Embedded Standards</span>
            </div>
            <p className="text-[11px] text-[#888888] mt-1 leading-normal">
              Students gain hands-on production mastery across industry-standard creative software suites and collaborative digital environments.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Row 1: Leftward Infinite Scroll */}
      <div className="relative w-full overflow-hidden group py-3">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {row1Items.map((brand, idx) => (
            <div
              key={`${brand.name}-r1-${idx}`}
              className="flex items-center gap-3 px-6 py-3.5 mx-3 rounded-2xl border border-[#E8E8E8] bg-white hover:bg-[#FAFAFA] hover:border-[#2638CC]/30 hover:shadow-[0_8px_20px_-6px_rgba(38,56,204,0.12)] transition-all duration-300 cursor-default shrink-0 group/card"
            >
              <div
                className="text-[#666666] group-hover/card:scale-110 transition-all duration-300"
                style={{ color: undefined }}
              >
                {brand.svg || brand.monoPath}
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-sm font-bold text-[#111111] group-hover/card:text-[#2638CC] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] font-mono text-[#888888]">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2: Rightward / Offset Infinite Scroll */}
      <div className="relative w-full overflow-hidden group py-3 mt-2">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {row2Items.map((brand, idx) => (
            <div
              key={`${brand.name}-r2-${idx}`}
              className="flex items-center gap-3 px-6 py-3.5 mx-3 rounded-2xl border border-[#E8E8E8] bg-white hover:bg-[#FAFAFA] hover:border-[#2638CC]/30 hover:shadow-[0_8px_20px_-6px_rgba(38,56,204,0.12)] transition-all duration-300 cursor-default shrink-0 group/card"
            >
              <div className="text-[#666666] group-hover/card:scale-110 transition-all duration-300">
                {brand.monoPath}
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-sm font-bold text-[#111111] group-hover/card:text-[#2638CC] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] font-mono text-[#888888]">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sub-strip with Discipline Highlights */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="pt-6 border-t border-[#E8E8E8] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2638CC]" />
            <span>Creative Industry Software Ecosystem & Digital Toolchains</span>
          </div>
          <div className="flex items-center gap-4">
            <span>UI/UX & Product</span>
            <span>•</span>
            <span>Spatial & Interior CAD</span>
            <span>•</span>
            <span>Couture Tech</span>
            <span>•</span>
            <span>Visual Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}
