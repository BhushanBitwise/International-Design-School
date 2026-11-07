import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  iconType = 'diagonal',
  customIcon = null,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-heading font-medium tracking-tight transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F06445] disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-full';

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs sm:text-sm px-6 py-2.5 sm:py-3 gap-2',
    lg: 'text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-3.5 gap-2.5'
  };

  const variants = {
    // IDS Coral primary
    primary:
      'bg-[#F06445] text-white hover:bg-[#D95336] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',

    // ChronoTask signature clean blue
    blue:
      'bg-[#2684F7] text-white hover:bg-[#1E70D4] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',

    // ChronoTask secondary clean white card pill
    glass:
      'bg-white text-[#111111] border border-[#E8E8E8] hover:bg-[#FAFAFA] hover:border-[#D1D5DB] shadow-2xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',

    secondary:
      'bg-white text-[#111111] border border-[#E8E8E8] hover:bg-[#FAFAFA] hover:border-[#D1D5DB] shadow-2xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',

    // Clean black pill
    dark:
      'bg-[#111111] text-white hover:bg-[#262626] shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',

    // Authentic WhatsApp pill
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20BA5A] shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',

    // Crisp minimal outline
    outline:
      'border border-[#E8E8E8] bg-white text-[#111111] hover:bg-[#FAFAFA] hover:border-[#D1D5DB] active:scale-[0.98]',

    // Link style
    text:
      'p-0 bg-transparent text-[#111111] hover:text-[#F06445] font-semibold gap-1 rounded-none'
  };

  const IconComponent = iconType === 'diagonal' ? ArrowUpRight : ArrowRight;

  const renderIcon = () => {
    if (customIcon) return customIcon;
    if (!icon) return null;

    return (
      <IconComponent
        className={`w-3.5 h-3.5 transition-transform duration-200 ${
          iconType === 'diagonal'
            ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            : 'group-hover:translate-x-0.5'
        }`}
      />
    );
  };

  const content = (
    <>
      <span>{children}</span>
      {renderIcon()}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
