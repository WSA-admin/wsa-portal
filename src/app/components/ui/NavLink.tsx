"use client";

import { brandColors, typography } from "@/lib/branding";

interface NavLinkProps {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  mobile?: boolean;
}

export default function NavLink({ children, href = "#", active = false, onClick, mobile = false }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only prevent default if we don't have a valid href for navigation
    if (onClick && (!href || href === "#")) {
      e.preventDefault();
      onClick();
    } else if (onClick && href && href !== "#") {
      // Allow navigation to proceed, then call onClick (for mobile menu close)
      setTimeout(() => onClick(), 0);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.opacity = "0.8";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.opacity = "1";
  };

  const baseClasses = "text-sm font-medium transition-all duration-200 hover:opacity-80";
  const desktopClasses = active ? 'border-b-2' : '';
  const mobileClasses = mobile ? 'block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100' : '';
  
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
      style={{ 
        color: active ? brandColors.blue : brandColors.navy,
        fontFamily: typography.fontFamily.primary,
        fontWeight: typography.fontWeight.medium,
        borderBottomColor: active && !mobile ? brandColors.blue : 'transparent',
        textDecoration: 'none'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}
