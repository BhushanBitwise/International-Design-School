import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Lightbox({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onNavigate
}) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    },
    [isOpen, onClose, onNavigate, currentIndex, items.length]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Header bar */}
      <div
        className="flex items-center justify-between w-full max-w-7xl mx-auto text-white z-10 py-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#F06445] font-semibold">
            {currentItem.category || 'Gallery'}
          </span>
          <span className="text-xs text-white/50">•</span>
          <span className="text-xs text-white/70">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2.5 rounded-full bg-white/10 hover:bg-[#F06445] text-white transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {items.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
            aria-label="Previous Image"
            className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-[#F06445] text-white backdrop-blur-sm transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div className="max-h-[75vh] w-full flex flex-col items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title || 'Exhibition Image'}
            className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
          />
        </div>

        {items.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex + 1) % items.length)}
            aria-label="Next Image"
            className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-[#F06445] text-white backdrop-blur-sm transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Caption & Metadata Footer */}
      <div
        className="w-full max-w-4xl mx-auto text-center text-white pb-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="font-heading text-lg md:text-xl font-semibold tracking-tight text-white">
          {currentItem.title}
        </h4>
        {currentItem.caption && (
          <p className="mt-1 text-xs md:text-sm text-[#999999] font-light max-w-2xl mx-auto">
            {currentItem.caption}
          </p>
        )}
      </div>
    </div>
  );
}
