'use client';

import { useState, useEffect } from 'react';

interface SectionProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  positioning?: 'start' | 'center' | 'end';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  fill?: boolean;
  responsive?: boolean;
  animated?: boolean;
  animationType?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'fadeIn';
  delay?: number;
  // Layout props
  layout?: 'flex' | 'grid' | 'block';
  gridCols?: '1' | '2' | '3' | '4' | '1-sm-2' | '1-sm-3' | '1-sm-2-lg-3' | '1-lg-2';
  gap?: 'none' | 'sm' | 'md' | 'lg';
  // Utility props
  center?: boolean;
  relative?: boolean;
  overflow?: 'visible' | 'hidden' | 'scroll';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  borderColor?: string;
  rounded?: boolean;
  shadow?: boolean;
  // State props
  collapsible?: boolean;
  collapsed?: boolean;
  maxHeight?: string;
  className?: string;
}

export default function Section({
  children,
  orientation = 'vertical',
  positioning = 'start',
  spacing = 'md',
  fill = false,
  responsive = true,
  animated = true,
  animationType = 'fadeUp',
  delay = 0,
  // Layout props
  layout,
  gridCols,
  gap,
  // Utility props
  center = false,
  relative = false,
  overflow = 'visible',
  padding = 'none',
  border = false,
  borderColor = '#e5e7eb',
  rounded = false,
  shadow = false,
  // State props
  collapsible = false,
  collapsed = false,
  maxHeight,
  className = ''
}: SectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, [animated]);
  const orientationClasses = {
    horizontal: responsive ? 'flex flex-col sm:flex-row' : 'flex flex-row',
    vertical: 'flex flex-col'
  };

  const positioningClasses = {
    horizontal: {
      start: 'justify-start items-start',
      center: 'justify-center items-center', 
      end: 'justify-end items-end'
    },
    vertical: {
      start: 'justify-start items-start',
      center: 'justify-center items-center',
      end: 'justify-end items-end'
    }
  };

  const spacingClasses = {
    horizontal: {
      none: '',
      sm: responsive ? 'gap-2 sm:gap-x-2' : 'gap-x-2',
      md: responsive ? 'gap-3 sm:gap-x-4' : 'gap-x-4',
      lg: responsive ? 'gap-4 sm:gap-x-8' : 'gap-x-8'
    },
    vertical: {
      none: '',
      sm: 'gap-y-2',
      md: 'gap-y-4', 
      lg: 'gap-y-6'
    }
  };

  const fillClass = fill ? 'flex-1' : '';

  // Animation classes
  const animationClasses = animated ? {
    fadeUp: isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
    slideLeft: isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4',
    slideRight: isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4',
    fadeIn: isLoaded ? 'opacity-100' : 'opacity-0'
  } : {};

  const animationClass = animated ? `transition-all duration-700 ${animationClasses[animationType]}` : '';
  const delayClass = animated && delay > 0 ? `delay-[${delay}ms]` : '';

  // Layout classes
  const layoutClasses = {
    flex: layout === 'flex' ? (orientation === 'horizontal' ? 'flex' : 'flex flex-col') : '',
    grid: layout === 'grid' ? 'grid' : '',
    block: layout === 'block' ? 'block' : ''
  };

  const gridColsClasses = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-2',
    '3': 'grid-cols-3',
    '4': 'grid-cols-4',
    '1-sm-2': 'grid-cols-1 sm:grid-cols-2',
    '1-sm-3': 'grid-cols-1 sm:grid-cols-3',
    '1-sm-2-lg-3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '1-lg-2': 'grid-cols-1 lg:grid-cols-2'
  };

  const gapClasses = {
    none: '',
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4'
  };

  const overflowClasses = {
    visible: '',
    hidden: 'overflow-hidden',
    scroll: 'overflow-scroll'
  };

  // Utility classes
  const centerClass = center ? 'text-center' : '';
  const relativeClass = relative ? 'relative' : '';
  const borderClass = border ? 'border' : '';
  const roundedClass = rounded ? 'rounded-lg' : '';
  const shadowClass = shadow ? 'shadow-sm hover:shadow-md transition-shadow duration-300' : '';

  // Collapsible classes
  const collapsibleClass = collapsible ?
    `transition-all duration-500 ease-in-out ${collapsed ? `max-h-0 opacity-0 overflow-hidden` : `${maxHeight || 'max-h-96'} opacity-100`}` : '';

  const classes = [
    // Base layout
    layout ? layoutClasses[layout] : orientationClasses[orientation],
    layout === 'grid' && gridCols ? gridColsClasses[gridCols] : '',
    gap ? gapClasses[gap] : (layout === 'grid' ? '' : spacingClasses[orientation][spacing]),
    layout === 'flex' ? positioningClasses[orientation][positioning] : '',
    // Core classes
    'w-full',
    fillClass,
    // Utility classes
    centerClass,
    relativeClass,
    overflowClasses[overflow],
    paddingClasses[padding],
    borderClass,
    roundedClass,
    shadowClass,
    collapsibleClass,
    // Animation
    animationClass,
    delayClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={border && borderColor !== '#e5e7eb' ? { borderColor } : undefined}
    >
      {children}
    </div>
  );
}