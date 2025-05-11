import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withBorder?: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
};

const FileIcon = () => (
  <svg 
    className="w-1/2 h-1/2 text-white/70" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  className = '',
  withBorder = false,
}) => {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div
      className={`
        ${sizeClasses[size]}
        relative rounded-full overflow-hidden flex items-center justify-center
        bg-primary/20 text-white
        ${withBorder ? 'border-2 border-primary' : ''}
        ${className}
      `}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <FileIcon />
      )}
    </div>
  );
};