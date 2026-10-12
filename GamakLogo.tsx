import React, { useState, useEffect } from 'react';

interface GamakLogoProps {
  className?: string;
  size?: number | string;
  color?: 'white' | 'crimson' | 'dark' | 'currentColor';
  showSubtitle?: boolean;
  inRoundFrame?: boolean;
}

export function GamakLogo({
  className = '',
  size = 48,
  color = 'crimson',
  showSubtitle = true,
  inRoundFrame = false,
}: GamakLogoProps) {
  const [whiteLogo, setWhiteLogo] = useState<string | null>(() => {
    try {
      return localStorage.getItem('gamak_custom_logo_white') || localStorage.getItem('gamak_custom_brand_logo');
    } catch {
      return null;
    }
  });

  const [redLogo, setRedLogo] = useState<string | null>(() => {
    try {
      return localStorage.getItem('gamak_custom_logo_red') || localStorage.getItem('gamak_custom_brand_logo');
    } catch {
      return null;
    }
  });

  const [zoomLevel, setZoomLevel] = useState<number>(() => {
    try {
      const stored = localStorage.getItem('gamak_logo_zoom');
      return stored ? parseFloat(stored) : 1.25;
    } catch {
      return 1.25;
    }
  });

  useEffect(() => {
    const handleUpdate = () => {
      try {
        setWhiteLogo(localStorage.getItem('gamak_custom_logo_white') || localStorage.getItem('gamak_custom_brand_logo'));
        setRedLogo(localStorage.getItem('gamak_custom_logo_red') || localStorage.getItem('gamak_custom_brand_logo'));
        const storedZoom = localStorage.getItem('gamak_logo_zoom');
        if (storedZoom) setZoomLevel(parseFloat(storedZoom));
      } catch {
        // ignore
      }
    };
    window.addEventListener('gamak_logo_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('gamak_logo_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Pick the right logo based on color intent
  const isWhiteIntended = color === 'white';
  const customLogo = isWhiteIntended
    ? (whiteLogo || redLogo)
    : (redLogo || whiteLogo);

  // If user uploaded authentic logo files, render directly adjusted for the round frame
  if (customLogo) {
    const numericSize = typeof size === 'number' ? size : parseInt(size as string, 10) || 48;
    const finalScale = inRoundFrame ? zoomLevel : 1.0;

    return (
      <div
        style={{
          width: typeof size === 'string' ? size : `${numericSize}px`,
          height: typeof size === 'string' ? size : `${numericSize}px`,
        }}
        className={`relative overflow-hidden flex items-center justify-center shrink-0 select-none ${
          inRoundFrame ? 'rounded-full' : ''
        } ${className}`}
      >
        <img
          src={customLogo}
          alt="Gamak Brand Logo"
          style={{
            transform: `scale(${finalScale})`,
            transformOrigin: 'center center',
          }}
          className="w-full h-full object-cover transition-transform"
        />
      </div>
    );
  }

  // Official Gamak Brand Red #CA3232
  const mainColor =
    color === 'white'
      ? '#FFFFFF'
      : color === 'crimson'
      ? '#CA3232'
      : color === 'dark'
      ? '#261D1A'
      : 'currentColor';

  const subColor =
    color === 'white'
      ? 'rgba(255, 255, 255, 0.95)'
      : color === 'crimson'
      ? '#CA3232'
      : color === 'dark'
      ? '#3E2F2A'
      : 'currentColor';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`shrink-0 select-none ${className}`}
      aria-label="Gamak Bihar Chapter Logo"
    >
      {/* 4 Rising Steam Wisps (matching official logo) */}
      <g stroke={mainColor} strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.95">
        <path d="M 88 44 C 86 38, 90 32, 87 26" />
        <path d="M 96 42 C 94 35, 98 29, 95 22" />
        <path d="M 104 42 C 102 35, 106 29, 103 22" />
        <path d="M 112 44 C 110 38, 114 32, 111 26" />
      </g>

      {/* Top Outer Crescent Arc */}
      <path
        d="M 46 86 C 58 54, 142 54, 154 86"
        fill="none"
        stroke={mainColor}
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      {/* Top Inner Subtle Crescent Arc */}
      <path
        d="M 54 80 C 66 62, 134 62, 146 80"
        fill="none"
        stroke={mainColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Main Stylized Gothic Wordmark: GAMAK */}
      <g fill={mainColor}>
        <text
          x="100"
          y="114"
          textAnchor="middle"
          fontFamily="'Cinzel Decorative', 'UnifrakturMaguntia', 'Cormorant Garamond', Georgia, serif"
          fontWeight="900"
          fontSize="36"
          letterSpacing="2.8"
          style={{ textTransform: 'uppercase' }}
        >
          GAMAK
        </text>
      </g>

      {/* Subtitle: BIHAR CHAPTER */}
      {showSubtitle && (
        <text
          x="100"
          y="132"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', 'Plus Jakarta Sans', Georgia, serif"
          fontWeight="800"
          fontSize="11"
          letterSpacing="3.5"
          fill={subColor}
          style={{ textTransform: 'uppercase' }}
        >
          BIHAR CHAPTER
        </text>
      )}

      {/* Bottom Inner Crescent Arc */}
      <path
        d="M 56 142 C 70 158, 130 158, 144 142"
        fill="none"
        stroke={mainColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Bottom Outer Crescent Arc */}
      <path
        d="M 48 136 C 64 166, 136 166, 152 136"
        fill="none"
        stroke={mainColor}
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default GamakLogo;
