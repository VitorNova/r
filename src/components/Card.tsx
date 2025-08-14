import React from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'glass-strong';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hover = false,
  padding = 'md'
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white shadow-lg border border-silver-200',
    glass: 'glass-card',
    'glass-strong': 'glass-strong'
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const hoverClasses = hover ? 'card-hover' : '';

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  );
};