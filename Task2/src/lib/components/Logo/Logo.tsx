import React from 'react';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
}) => {
  return (
    <div className={`flex items-center font-bold ${sizeClasses[size]} ${className}`}>
      <span className="text-white">Coding</span>
      <span className="text-accent ml-1">Conf</span>
    </div>
  );
};