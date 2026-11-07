import React, { useState } from 'react';
import { CONTACT_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../../data/contact';

export default function WhatsAppButton({
  message = WHATSAPP_MESSAGES.homepage,
  className = '',
  showTooltip = true
}) {
  const [isHovered, setIsHovered] = useState(false);
  const href = getWhatsAppUrl(message);

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop Tooltip */}
      {showTooltip && (
        <div
          className={`hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-heading font-medium tracking-tight shadow-subtle border border-[#E8E8E8]/20 transition-all duration-300 pointer-events-none ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
          role="tooltip"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat with our team</span>
        </div>
      )}

      {/* Floating Circular WhatsApp Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with International Design School"
        className="relative group w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(37,211,102,0.7)] transition-all duration-300 transform hover:scale-108 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Subtle Radar Ripple Ping */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-40 group-hover:opacity-70" />

        {/* Authentic WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform duration-300 group-hover:rotate-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2 30l6.77-2.09A13.91 13.91 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.55c-2.31 0-4.48-.68-6.31-1.85l-.45-.29-4.22 1.3 1.33-4.11-.3-.46A11.45 11.45 0 0 1 4.45 16C4.45 9.63 9.63 4.45 16 4.45S27.55 9.63 27.55 16 22.37 27.55 16 27.55zm7.04-8.58c-.39-.19-2.3-1.13-2.66-1.26-.35-.13-.61-.19-.87.19-.26.39-1 1.26-1.22 1.52-.23.26-.45.29-.84.1-.39-.19-1.63-.6-3.11-1.92-1.15-1.03-1.93-2.3-2.15-2.69-.23-.39-.02-.6.17-.79.18-.18.39-.45.58-.68.19-.23.26-.39.39-.65.13-.26.06-.48-.03-.68-.1-.19-.87-2.1-1.2-2.88-.31-.75-.64-.65-.87-.66-.23-.01-.48-.01-.74-.01-.26 0-.68.1-.1.03.48 1.16 1.84 2.87 4.54 2.87 2.7 0 4.67-1.39 5.44-2.39.77-1 1.1-2.23 1.1-3.61 0-1.39-.77-2.68-1.74-3.65-.97-.97-2.26-1.74-3.65-1.74z" />
          <path d="M20.52 18.06c-.22.37-.95 1.57-1.17 1.82-.22.25-.43.28-.8.1-.37-.19-1.57-.58-2.99-1.84-1.1-1-1.85-2.2-2.07-2.57-.22-.37-.02-.57.16-.76.17-.17.37-.43.56-.65.18-.22.25-.37.37-.62.13-.25.06-.46-.03-.65-.09-.19-.84-2.01-1.15-2.76-.3-.72-.61-.62-.84-.63-.22-.01-.46-.01-.71-.01-.25 0-.65.09-.99.46-.34.37-1.3 1.27-1.3 3.1 0 1.83 1.33 3.6 1.52 3.85.19.25 2.62 4.01 6.36 5.62.89.38 1.58.61 2.12.79.89.28 1.7.24 2.34.15.71-.11 2.2-.9 2.51-1.77.31-.87.31-1.62.22-1.77-.1-.16-.36-.25-.74-.44z" />
        </svg>
      </a>
    </div>
  );
}
