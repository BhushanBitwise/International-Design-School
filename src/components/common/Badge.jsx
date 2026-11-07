import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  dot = false,
  dotColor = 'bg-[#F06445]'
}) {
  const variants = {
    default: 'bg-white text-[#111111] border-[#E8E8E8] shadow-2xs',
    coral: 'bg-[#FFF0EA] text-[#F06445] border-[#FED7AA] shadow-2xs',
    blue: 'bg-[#EBF4FF] text-[#2684F7] border-[#BFDBFE] shadow-2xs',
    peach: 'bg-[#FFF0EA] text-[#D95336] border-[#FED7AA]',
    dark: 'bg-[#111111] text-white border-[#111111]',
    outline: 'bg-white text-[#666666] border-[#E8E8E8]'
  };

  const sizes = {
    xs: 'text-[10px] px-2.5 py-0.5 font-medium tracking-wide',
    sm: 'text-xs px-3 py-1 font-medium tracking-wide',
    md: 'text-sm px-4 py-1.5 font-medium'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border transition-all ${variants[variant] || variants.default} ${sizes[size]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />}
      <span>{children}</span>
    </span>
  );
}
