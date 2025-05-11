import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
}

const variantClasses = {
  primary: 'bg-primary/20 text-primary-light',
  secondary: 'bg-secondary/20 text-secondary',
  accent: 'bg-accent/20 text-accent',
  success: 'bg-success/20 text-success',
  error: 'bg-error/20 text-error',
  warning: 'bg-warning/20 text-warning',
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className = '',
}) => {
  return (
    <span
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        inline-flex items-center rounded-full
        font-medium
        ${className}
      `}
    >
      {children}
    </span>
  );
};