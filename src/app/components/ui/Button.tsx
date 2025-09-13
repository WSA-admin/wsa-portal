"use client";

import { brandColors, typography } from "@/lib/branding";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick, 
  disabled = false,
  type = "button"
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm min-h-[40px] touch-manipulation",
    md: "px-4 py-2.5 text-sm min-h-[44px] touch-manipulation",
    lg: "px-6 py-3 text-base min-h-[48px] touch-manipulation"
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: brandColors.blue,
          color: "#ffffff",
          border: "none"
        };
      case "secondary":
        return {
          backgroundColor: brandColors.navy,
          color: "#ffffff", 
          border: "none"
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: brandColors.navy,
          border: `1px solid ${brandColors.navy}`
        };
      default:
        return {
          backgroundColor: brandColors.blue,
          color: "#ffffff",
          border: "none"
        };
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    switch (variant) {
      case "primary":
        target.style.backgroundColor = "#1a7bb8";
        break;
      case "secondary":
        target.style.backgroundColor = "#001a3d";
        break;
      case "outline":
        target.style.backgroundColor = brandColors.navy;
        target.style.color = "#ffffff";
        break;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const styles = getVariantStyles();
    target.style.backgroundColor = styles.backgroundColor;
    target.style.color = styles.color;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${sizeClasses[size]} font-medium rounded-lg transition-colors duration-200 active:scale-95 flex items-center justify-center ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{
        ...getVariantStyles(),
        fontFamily: typography.fontFamily.primary,
        fontWeight: typography.fontWeight.medium
      }}
      onMouseEnter={!disabled ? handleMouseEnter : undefined}
      onMouseLeave={!disabled ? handleMouseLeave : undefined}
    >
      {children}
    </button>
  );
}
