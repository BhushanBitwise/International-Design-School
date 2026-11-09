import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  eyebrow,
  title,
  italicTitle,
  subtitle,
  align = 'left',
  action,
  className = '',
  light = false
}) {
  const isCentered = align === 'center';
  const isSplit = align === 'split';

  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 ${className}`}>
      {isSplit ? (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 pb-5 border-b border-[#E8E8E8]">
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="mb-2.5 sm:mb-3">
                <Badge variant={light ? 'dark' : 'coral'} size="sm" dot>
                  {eyebrow}
                </Badge>
              </div>
            )}
            <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] ${light ? 'text-white' : 'text-[#111111]'}`}>
              {title}{' '}
              {italicTitle && (
                <span className="text-[#999999] font-normal">
                  {italicTitle}
                </span>
              )}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end lg:items-center justify-between gap-4 max-w-xl">
            {subtitle && (
              <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${light ? 'text-gray-300' : 'text-[#666666]'}`}>
                {subtitle}
              </p>
            )}
            {action && <div className="shrink-0 w-full sm:w-auto">{action}</div>}
          </div>
        </div>
      ) : (
        <div className={`max-w-3xl ${isCentered ? 'mx-auto text-center' : ''}`}>
          {eyebrow && (
            <div className={`mb-3.5 ${isCentered ? 'flex justify-center' : ''}`}>
              <Badge variant={light ? 'dark' : 'coral'} size="sm" dot>
                {eyebrow}
              </Badge>
            </div>
          )}
          <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] ${light ? 'text-white' : 'text-[#111111]'}`}>
            {title}{' '}
            {italicTitle && (
              <span className="text-[#999999] font-normal">
                {italicTitle}
              </span>
            )}
          </h2>
          {subtitle && (
            <p className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-[#666666]'} ${isCentered ? 'mx-auto' : ''}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
