"use client";

import { brandColors, typography } from "@/lib/branding";

interface NavLinkProps {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

export default function NavLink({ children, href = "#", active = false, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.opacity = "0.8";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.opacity = "1";
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-sm font-medium transition-all duration-200 hover:opacity-80 ${active ? 'border-b-2' : ''}`}
      style={{ 
        color: active ? brandColors.blue : brandColors.navy,
        fontFamily: typography.fontFamily.primary,
        fontWeight: typography.fontWeight.medium,
        borderBottomColor: active ? brandColors.blue : 'transparent',
        textDecoration: 'none'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}
