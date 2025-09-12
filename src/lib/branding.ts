import { Lexend } from "next/font/google";

// Font configurations
export const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Official WorkSource Alliance Brand Colors
export const brandColors = {
  // Primary colors
  blue: "#2592D0",     // RGB 37, 146, 208
  purple: "#702083",   // RGB 112, 32, 131
  gold: "#FBBB02",     // RGB 251, 187, 2
  navy: "#012E55",     // RGB 1, 46, 85
  orange: "#EF7B02",   // RGB 239, 123, 2
  
  // Semantic color assignments
  primary: "#2592D0",   // Blue
  secondary: "#702083", // Purple
  accent: "#FBBB02",    // Gold
  
  // Additional shades (70%, 50%, 30% as mentioned in brand guide)
  blue70: "#4AA5D8",    // 70% opacity blue
  blue50: "#7ABEE4",    // 50% opacity blue
  blue30: "#AAD7F0",    // 30% opacity blue
  
  purple70: "#8A4A9C",  // 70% opacity purple
  purple50: "#A474B5",  // 50% opacity purple
  purple30: "#BE9ECE",  // 30% opacity purple
  
  gold70: "#FCC935",    // 70% opacity gold
  gold50: "#FDD768",    // 50% opacity gold
  gold30: "#FEE59B",    // 30% opacity gold
  
  navy70: "#345577",    // 70% opacity navy
  navy50: "#677C99",    // 50% opacity navy
  navy30: "#9AA3BB",    // 30% opacity navy
  
  orange70: "#F29535",  // 70% opacity orange
  orange50: "#F5AF68",  // 50% opacity orange
  orange30: "#F8C99B",  // 30% opacity orange
} as const;

// Official WorkSource Alliance Typography (Lexend)
export const typography = {
  fontFamily: {
    primary: "var(--font-lexend)",
  },
  // Lexend font weights available (as per brand guide)
  fontWeight: {
    thin: "100",        // Thin
    extralight: "200",  // Extra Light  
    light: "300",       // Light
    regular: "400",     // Regular
    medium: "500",      // Medium
    semibold: "600",    // Semi Bold
    bold: "700",        // Bold (recommended for headlines)
    extrabold: "800",   // Extra Bold
    black: "900",       // Black
  },
  // Font size scale
  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
  },
} as const;

// Spacing scale (emphasizing clean white space as per brand guide)
export const spacing = {
  xs: "0.25rem",    // 4px
  sm: "0.5rem",     // 8px
  md: "1rem",       // 16px
  lg: "1.5rem",     // 24px
  xl: "2rem",       // 32px
  "2xl": "2.5rem",  // 40px
  "3xl": "3rem",    // 48px
  "4xl": "4rem",    // 64px
  "5xl": "5rem",    // 80px
} as const;

// Responsive breakpoints
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Logo specifications (as per brand guide)
export const logo = {
  minHeight: {
    digital: "35px",  // Minimum 35px tall in digital form
    print: "1in",     // 1" wide in print
  },
  clearSpace: {
    // Clear space is equal to half of the logo's height
    ratio: 0.5,
  },
} as const;

// Brand guidelines (from WorkSource Alliance Brand Guide 2024)
export const brandGuidelines = {
  // Primary focus: balance of clean white space with bold brand colors
  designPrinciples: [
    "Focus on clean white space",
    "Bold usage of primary brand colours",
    "Avoid gradients and visual treatments",
    "Images should use primary brand colour overlays when possible",
  ],
  // Color usage rules
  colorUsage: {
    do: [
      "Use colours from the WorkSource Alliance palette",
      "Use shades of the WorkSource Alliance palette", 
      "Mix WorkSource Alliance colours",
      "Make sure there is sufficient contrast",
      "Mix WorkSource Alliance colours in text and background",
    ],
    dont: [
      "Deviate from the WorkSource Alliance palette",
    ],
  },
  // Typography rules
  typographyRules: {
    headlineFont: "Lexend Bold", // Headline font should typically be Lexend Bold
    primaryTypeface: "Lexend",   // Primary typeface for all text
  },
} as const;

// Export all branding variables
export const branding = {
  colors: brandColors,
  typography,
  spacing,
  breakpoints,
  logo,
  guidelines: brandGuidelines,
} as const;
