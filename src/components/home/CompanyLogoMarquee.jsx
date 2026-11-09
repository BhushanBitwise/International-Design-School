import React, { useState } from 'react';
import { companyLogosRow1, companyLogosRow2 } from '../../data/companyLogos';
import Badge from '../common/Badge';
import { Cpu, Play, Pause } from 'lucide-react';

export default function CompanyLogoMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E8E8E8] overflow-hidden relative">
      {/* Scoped CSS for guaranteed slow, silky-smooth 60fps auto-scrolling */}
      <style>{`
        @keyframes idsMarqueeForward {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes idsMarqueeBackward {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .ids-auto-marquee-forward, .animate-marquee {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          width: max-content !important;
          animation: idsMarqueeForward 48s linear infinite !important;
          will-change: transform;
        }
        .ids-auto-marquee-backward, .animate-marquee-reverse {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          width: max-content !important;
          animation: idsMarqueeBackward 52s linear infinite !important;
          will-change: transform;
        }
        @media (hover: hover) and (pointer: fine) {
          .ids-auto-marquee-forward:hover,
          .animate-marquee:hover,
          .ids-auto-marquee-backward:hover,
          .animate-marquee-reverse:hover {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#EEF0FF]/50 to-transparent pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E8E8]">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="blue" size="sm" dot>
                Industry Hiring Partners
              </Badge>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
                Premier Studios & Global Brands
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              Connected to the{' '}
              <span className="bg-gradient-to-r from-[#2638CC] to-[#3D53E8] bg-clip-text text-transparent">
                Creative Industry
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#666666] leading-relaxed">
              Our students intern, collaborate, and launch design careers across India’s leading creative ateliers, architectural studios, and multinational design practices.
            </p>
          </div>

          {/* Interactive Status & Live Ticker Pill */}
          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] hover:border-[#2638CC]/40 text-xs font-mono font-medium text-[#111111] transition-all cursor-pointer shadow-2xs"
              title={isPaused ? 'Resume live scrolling' : 'Pause scrolling'}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'
                }`}
              />
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#2638CC]" />
                  <span>Resume Auto-Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#666666]" />
                  <span>Smooth Auto-Scroll</span>
                </>
              )}
            </button>

            <div className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl px-3.5 py-2 text-xs font-mono text-[#666666] flex items-center gap-2 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#2638CC]" />
              <span>16 Verified Partners</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Row 1: Leftward Infinite Auto-Scroll (Calibrated Slow & Smooth) */}
      <div className="relative w-full overflow-hidden py-2.5">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div
          className="ids-auto-marquee-forward animate-marquee flex w-max shrink-0"
          style={{
            animation: 'idsMarqueeForward 48s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
            willChange: 'transform'
          }}
        >
          {/* Track 1 */}
          <div className="flex items-center gap-3.5 px-2 shrink-0">
            {companyLogosRow1.map((brand, idx) => (
              <div
                key={`r1-a-${idx}`}
                className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border border-[#E8E8E8] bg-white hover:bg-[#FAFAFA] hover:border-[#2638CC]/40 hover:shadow-[0_10px_25px_-6px_rgba(38,56,204,0.14)] transition-all duration-300 cursor-default shrink-0 group/card"
              >
                <div className="group-hover/card:scale-105 transition-transform duration-300">
                  {brand.svg}
                </div>
                <div className="flex flex-col border-l border-[#EFEFEF] pl-3.5">
                  <span className="font-heading text-xs font-bold text-[#111111] group-hover/card:text-[#2638CC] transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#888888] whitespace-nowrap">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 (Exact Duplicate for Seamless Infinite Loop) */}
          <div className="flex items-center gap-3.5 px-2 shrink-0" aria-hidden="true">
            {companyLogosRow1.map((brand, idx) => (
              <div
                key={`r1-b-${idx}`}
                className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border border-[#E8E8E8] bg-white hover:bg-[#FAFAFA] hover:border-[#2638CC]/40 hover:shadow-[0_10px_25px_-6px_rgba(38,56,204,0.14)] transition-all duration-300 cursor-default shrink-0 group/card"
              >
                <div className="group-hover/card:scale-105 transition-transform duration-300">
                  {brand.svg}
                </div>
                <div className="flex flex-col border-l border-[#EFEFEF] pl-3.5">
                  <span className="font-heading text-xs font-bold text-[#111111] group-hover/card:text-[#2638CC] transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#888888] whitespace-nowrap">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Row 2: Rightward / Offset Infinite Auto-Scroll (Calibrated Slow & Smooth) */}
      <div className="relative w-full overflow-hidden py-2.5 mt-2">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div
          className="ids-auto-marquee-backward animate-marquee-reverse flex w-max shrink-0"
          style={{
            animation: 'idsMarqueeBackward 52s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
            willChange: 'transform'
          }}
        >
          {/* Track 1 */}
          <div className="flex items-center gap-3.5 px-2 shrink-0">
            {companyLogosRow2.map((brand, idx) => (
              <div
                key={`r2-a-${idx}`}
                className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border border-[#E8E8E8] bg-white hover:bg-[#FAFAFA] hover:border-[#2638CC]/40 hover:shadow-[0_10px_25px_-6px_rgba(38,56,204,0.14)] transition-all duration-300 cursor-default shrink-0 group/card"
              >
                <div className="group-hover/card:scale-105 transition-transform duration-300">
                  {brand.svg}
                </div>
                <div className="flex flex-col border-l border-[#EFEFEF] pl-3.5">
                  <span className="font-heading text-xs font-bold text-[#111111] group-hover/card:text-[#2638CC] transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#888888] whitespace-nowrap">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 (Exact Duplicate for Seamless Infinite Loop) */}
          <div className="flex items-center gap-3.5 px-2 shrink-0" aria-hidden="true">
            {companyLogosRow2.map((brand, idx) => (
              <div
                key={`r2-b-${idx}`}
                className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border border-[#E8E8E8] bg-white hover:bg-[#FAFAFA] hover:border-[#2638CC]/40 hover:shadow-[0_10px_25px_-6px_rgba(38,56,204,0.14)] transition-all duration-300 cursor-default shrink-0 group/card"
              >
                <div className="group-hover/card:scale-105 transition-transform duration-300">
                  {brand.svg}
                </div>
                <div className="flex flex-col border-l border-[#EFEFEF] pl-3.5">
                  <span className="font-heading text-xs font-bold text-[#111111] group-hover/card:text-[#2638CC] transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#888888] whitespace-nowrap">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
