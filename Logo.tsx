import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full overflow-visible drop-shadow-md select-none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Vibrant warm orange gradient matching the reference image */}
          <radialGradient id="sunDiscFill" cx="48%" cy="40%" r="58%">
            <stop offset="0%" stopColor="#f86d2a" />
            <stop offset="65%" stopColor="#eb581e" />
            <stop offset="100%" stopColor="#d74610" />
          </radialGradient>

          {/* Soft outer sun aura */}
          <filter id="sunOuterGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dark rounded container with warm border (matching the exact thumbnail badge) */}
        <rect 
          x="3" 
          y="3" 
          width="94" 
          height="94" 
          rx="24" 
          fill="#0c0704" 
          stroke="rgba(255, 90, 31, 0.35)" 
          strokeWidth="1.8" 
        />

        {/* Ambient warm glow behind the sun */}
        <circle 
          cx="50" 
          cy="50" 
          r="34" 
          fill="#ff5a1f" 
          opacity="0.25" 
          filter="url(#sunOuterGlow)" 
        />

        {/* The Orange Sun Circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="32.5" 
          fill="url(#sunDiscFill)" 
        />

        {/* Top edge subtle highlight rim on the sun */}
        <path 
          d="M 22 43 C 25 28 36 20 50 20 C 64 20 75 28 78 43" 
          stroke="rgba(255, 230, 200, 0.55)" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
        />

        {/* 
          Black Bird Silhouette (exact recreation from reference image):
          - Distinctive crested raptor head at the top
          - Broad horizontal wing bar with straight bottom horizontal edge and stepped shoulders
          - Vertical torso column
          - Flared stepped tail with 3 bottom feather lobes
        */}
        <path 
          d="
            M 50 19
            C 51.5 20 53 21.5 53 23.5
            C 53 24.8 52 25.8 51.2 26.5
            C 52.8 26.8 54.8 27.5 55 29
            C 55.2 30.5 53.5 31.5 52 32
            C 52.5 32.8 53 33.5 54 34
            C 60 33.2 68 33.8 81 35.5
            C 82 35.8 82.5 36.5 82.5 37.5
            C 82.5 38.8 82 40.5 81 41.5
            L 55 41.5
            L 55 53
            C 55 54.5 56.5 57 58 60
            C 59.5 63 61 66.5 61.5 70
            C 61.8 72 61 73.5 59.5 74
            C 57.5 74.5 55.8 73 54.5 71.5
            C 53.5 72.8 51.8 74.5 50 74.5
            C 48.2 74.5 46.5 72.8 45.5 71.5
            C 44.2 73 42.5 74.5 40.5 74
            C 39 73.5 38.2 72 38.5 70
            C 39 66.5 40.5 63 42 60
            C 43.5 57 45 54.5 45 53
            L 45 41.5
            L 19 41.5
            C 18 40.5 17.5 38.8 17.5 37.5
            C 17.5 36.5 18 35.8 19 35.5
            C 32 33.8 40 33.2 46 34
            C 47 33.5 47.5 32.8 48 32
            C 46.5 31.5 44.8 30.5 45 29
            C 45.2 27.5 47.2 26.8 48.8 26.5
            C 48 25.8 47 24.8 47 23.5
            C 47 21.5 48.5 20 50 19 Z
          " 
          fill="#070402" 
        />
      </svg>
    </div>
  );
};
