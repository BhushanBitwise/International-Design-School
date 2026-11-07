import React from 'react';
import { Link } from 'react-router-dom';

/**
 * IDSBrandLogo
 * Refined blue brand identity component for International Design School.
 * Features the signature squircle node monogram and refined blue typography.
 *
 * @param {'full'|'compact'|'monogram'|'text-only'} variant
 * @param {'sm'|'md'|'lg'|'xl'} size
 * @param {'blue'|'white'|'dark'} theme
 * @param {boolean} linkToHome
 * @param {string} className
 */
export default function IDSBrandLogo({
  variant = 'full',
  size = 'md',
  theme = 'blue',
  linkToHome = true,
  className = ''
}) {
  // Sizing matrix
  const sizeMap = {
    sm: {
      emblem: 'w-7 h-7',
      node: 'w-2 h-2',
      gap: 'gap-0.5',
      title: 'text-xs sm:text-sm',
      sub: 'text-[9px]',
      containerGap: 'gap-2.5'
    },
    md: {
      emblem: 'w-9 h-9',
      node: 'w-2.5 h-2.5',
      gap: 'gap-1',
      title: 'text-sm sm:text-base font-bold',
      sub: 'text-[10px]',
      containerGap: 'gap-3'
    },
    lg: {
      emblem: 'w-11 h-11',
      node: 'w-3 h-3',
      gap: 'gap-1.5',
      title: 'text-base sm:text-lg font-extrabold',
      sub: 'text-[11px]',
      containerGap: 'gap-3.5'
    },
    xl: {
      emblem: 'w-14 h-14',
      node: 'w-3.5 h-3.5',
      gap: 'gap-1.5',
      title: 'text-lg sm:text-2xl font-extrabold',
      sub: 'text-xs',
      containerGap: 'gap-4'
    }
  };

  const s = sizeMap[size] || sizeMap.md;

  // Color configurations based on theme
  const isWhite = theme === 'white';
  const emblemBg = isWhite
    ? 'bg-white/10 border-white/20'
    : 'bg-[#EEF0FF] border-[#D7DCFF] shadow-[0_2px_10px_-2px_rgba(38,56,204,0.12)]';

  const titleColor = isWhite
    ? 'text-white'
    : 'bg-gradient-to-r from-[#1B2799] via-[#2638CC] to-[#3B4FE4] bg-clip-text text-transparent';

  const subColor = isWhite ? 'text-white/70' : 'text-[#64748B]';

  const content = (
    <div className={`flex items-center ${s.containerGap} group focus:outline-none select-none ${className}`}>
      {/* Signature Monogram Squircle */}
      {variant !== 'text-only' && (
        <div
          className={`${s.emblem} rounded-xl ${emblemBg} border flex items-center justify-center p-1.5 shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_16px_-2px_rgba(38,56,204,0.25)]`}
          aria-hidden="true"
        >
          <div className={`grid grid-cols-2 ${s.gap} place-items-center`}>
            {/* Top-Left: Coral creative impulse */}
            <span className={`${s.node} rounded-sm bg-[#F06445] transition-transform duration-200 group-hover:rotate-12`} />
            {/* Top-Right: Brand Blue */}
            <span className={`${s.node} rounded-sm bg-[#2638CC] transition-transform duration-200 group-hover:-rotate-12`} />
            {/* Bottom-Left: Deep Royal Blue */}
            <span className={`${s.node} rounded-sm bg-[#1B2799] transition-transform duration-200 group-hover:-rotate-12`} />
            {/* Bottom-Right: Vibrant Blue Circle */}
            <span className={`${s.node} rounded-full bg-[#3D53E8] transition-transform duration-200 group-hover:scale-110`} />
          </div>
        </div>
      )}

      {/* Typography Lockup */}
      {variant !== 'monogram' && (
        <div className="flex flex-col text-left">
          <span
            className={`font-heading tracking-tight leading-tight ${s.title} ${titleColor} transition-colors duration-200`}
          >
            International Design School
          </span>
          {variant === 'full' && (
            <span
              className={`font-mono font-semibold tracking-wider uppercase ${s.sub} ${subColor} mt-0.5 hidden xs:block`}
            >
              Global Creative Academy • Pune
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="inline-flex items-center focus:outline-none"
        aria-label="International Design School Homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
}
