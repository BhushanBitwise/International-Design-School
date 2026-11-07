import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * TeamPortraitCard
 * Individual portrait tile designed to reproduce the visual language of the reference screenshots:
 * - Crisp white diagonal arrow ↗ in corner
 * - High-contrast black & white by default (or full color for featured lead)
 * - Subtle grayscale-to-color transition and gentle image zoom on hover
 * - Clean metadata overlay revealing role and discipline
 */
export default function TeamPortraitCard({
  member,
  isTall = false,
  className = ''
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-[#1A1A1A] cursor-pointer select-none ${
        isTall ? 'h-full min-h-[380px] sm:min-h-[460px] lg:min-h-full' : 'aspect-square min-h-[220px]'
      } ${className}`}
    >
      {/* Portrait Image (Ultra-Sharp, High-Resolution, No Blur) */}
      <img
        src={member.image}
        alt={member.alt || member.role}
        loading="lazy"
        decoding="async"
        onError={() => setImageError(true)}
        className={`w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105 [image-rendering:auto] ${
          member.isColor
            ? 'contrast-[1.05] brightness-100'
            : 'grayscale contrast-[1.14] brightness-[0.98] group-hover:grayscale-0 group-hover:contrast-105'
        }`}
      />

      {/* Fallback pattern if image is loading / missing */}
      {imageError && (
        <div className="absolute inset-0 bg-[#222222] flex flex-col items-center justify-center p-4 text-center">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
            <span className="text-white font-mono text-sm">IDS</span>
          </div>
          <span className="text-xs text-white/70 font-mono">{member.role}</span>
        </div>
      )}

      {/* Ambient Gradient Overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

      {/* White Diagonal Arrow ↗ (Top-Right Corner — Matching Reference Exactly) */}
      <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10">
        <div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-xs flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-[#2638CC] group-hover:border-white transition-all duration-300 shadow-sm">
          <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Bottom Editorial Caption (Clean Typography, No Artificial Badges) */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 z-10">
        <span className="block text-[10px] font-mono font-medium uppercase tracking-wider text-white/75 mb-0.5">
          {member.discipline}
        </span>
        <h4 className="font-heading text-xs sm:text-sm font-bold text-white leading-tight">
          {member.role}
        </h4>
      </div>
    </div>
  );
}
