import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Title: React.FC<TypographyProps> = ({
  children,
  className = '',
  as: Component = 'h1',
}) => {
  return (
    <Component
      className={`text-3xl font-bold text-text-primary ${className}`}
    >
      {children}
    </Component>
  );
};

export const Subtitle: React.FC<TypographyProps> = ({
  children,
  className = '',
  as: Component = 'h2',
}) => {
  return (
    <Component
      className={`text-xl font-medium text-text-secondary ${className}`}
    >
      {children}
    </Component>
  );
};

export const Heading: React.FC<TypographyProps> = ({
  children,
  className = '',
  as: Component = 'h3',
}) => {
  return (
    <Component
      className={`text-lg font-medium text-text-primary ${className}`}
    >
      {children}
    </Component>
  );
};

export const Text: React.FC<TypographyProps> = ({
  children,
  className = '',
  as: Component = 'p',
}) => {
  return (
    <Component
      className={`text-base text-text-secondary ${className}`}
    >
      {children}
    </Component>
  );
};

export const AccentText: React.FC<TypographyProps> = ({
  children,
  className = '',
  as: Component = 'span',
}) => {
  return (
    <Component
      className={`text-accent font-medium ${className}`}
    >
      {children}
    </Component>
  );
};