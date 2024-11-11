import React from 'react';

interface Deformity2Props {
  isActive: boolean;  // This will control whether the gradient is applied
}

export const Deformity2: React.FC<Deformity2Props> = ({ isActive }) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0BBE95" /> {/* Green */}
          <stop offset="100%" stopColor="#EE1433" /> {/* Red */}
        </linearGradient>
      </defs>
      <mask id="mask0_604_3398" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="4" y="4" width="32" height="32">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.3185 28.4519L27.1006 33.4147V19.943C32.542 16.2487 34.5409 12.8367 33.0972 9.70826C30.931 5.01491 27.4246 5.32477 24.9762 6.47205C23.3432 7.23643 22.1598 9.37287 21.4259 12.8807C19.2717 8.29579 16.2461 6.00265 12.3497 6.00265C6.50556 6.00265 6.03473 12.8977 6.87215 14.586C7.70956 16.2743 8.5016 17.1854 12.2086 19.9423C12.1555 28.1413 12.4958 32.551 13.2311 33.1708C14.5784 34.2145 16.6077 32.6425 19.3185 28.4519Z" fill="white" stroke="white" strokeWidth="3.40355" strokeLinejoin="round"/>
        <path d="M22.1348 20.6523V24.9068" stroke="black" strokeWidth="3.40355" strokeLinecap="round"/>
      </mask>
      <g mask="url(#mask0_604_3398)">
        <path d="M2.98975 2.9248H37.0252V36.9603H2.98975V2.9248Z" fill={isActive ? "url(#gradientFill)" : "#90949E"} />
      </g>
    </svg>
  );
};
