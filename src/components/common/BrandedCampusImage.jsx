import React from 'react';

/**
 * BrandedCampusImage
 * Clean component for displaying architectural campus photography
 * with physically integrated IDS branding in the environment,
 * strictly free from artificial overlay pills or badges.
 */
export default function BrandedCampusImage({
  src,
  alt,
  title,
  location,
  aspectRatio = 'aspect-[16/10]',
  className = ''
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] group ${aspectRatio} ${className}`}>
      <img
        src={src}
        alt={alt || title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
      />

      {/* Subtle bottom shadow vignette strictly for text legibility */}
      {(title || location) && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-5 pointer-events-none flex flex-col justify-end">
          {location && (
            <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest font-semibold block mb-0.5">
              {location}
            </span>
          )}
          {title && (
            <h4 className="font-heading text-sm sm:text-base font-bold text-white drop-shadow-sm">
              {title}
            </h4>
          )}
        </div>
      )}
    </div>
  );
}
