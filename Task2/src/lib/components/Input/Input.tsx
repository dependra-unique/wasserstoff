import React, { useState } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  helperText?: string;
}

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2',
  lg: 'px-5 py-3 text-lg',
};

export const Input: React.FC<InputProps> = ({
  label,
  error,
  size = 'md',
  fullWidth = true,
  leftIcon,
  rightIcon,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-text-secondary mb-1"
        >
          {label}
        </label>
      )}
      
      <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {leftIcon}
          </div>
        )}
        
        <input
          id={inputId}
          className={`
            ${sizeClasses[size]}
            ${leftIcon ? 'pl-10' : ''}
            ${rightIcon ? 'pr-10' : ''}
            rounded-md border
            bg-background/50
            ${error ? 'border-error focus:ring-error/30' : 'border-primary/30 focus:ring-primary/30'}
            ${focused ? (error ? 'border-error' : 'border-primary') : ''}
            text-white
            w-full
            focus:outline-none focus:ring-2 transition-all duration-200
            disabled:opacity-60 disabled:cursor-not-allowed
            animate-fadeIn
            ${className}
          `}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <p className={`mt-1 text-sm ${error ? 'text-error' : 'text-text-secondary'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};