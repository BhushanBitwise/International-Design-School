import React from 'react';
import { Trophy, CheckCircle2 } from 'lucide-react';

export default function AwardCard({
  item,
  className = ''
}) {
  return (
    <div
      className={`chrono-card group overflow-hidden bg-white flex flex-col justify-between hover:border-[#2638CC]/40 transition-all duration-300 ${className}`}
    >
      <div>
        {/* Visual Header */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A] border-b border-[#E8E8E8]">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[#2638CC] px-2.5 py-1 rounded-full border border-[#D7DCFF] shadow-2xs">
              {item.badge}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888] block mb-1">
              {item.category}
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#2638CC] transition-colors leading-snug">
              {item.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
            {item.desc}
          </p>

          <div className="pt-3 border-t border-[#E8E8E8] space-y-2">
            {item.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#555555]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2638CC] shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-7 pt-0">
        <div className="pt-4 border-t border-[#E8E8E8] flex items-center justify-between text-xs font-mono text-[#2638CC]">
          <span>International Benchmarking</span>
          <Trophy className="w-4 h-4 text-[#F06445]" />
        </div>
      </div>
    </div>
  );
}
