import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  withGlow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  withGlow = false,
}) => {
  return (
    <div
      className={`
        bg-card rounded-lg p-6 backdrop-blur-sm
        border border-primary/20
        ${withGlow ? 'glow' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`mt-6 ${className}`}>
      {children}
    </div>
  );
};