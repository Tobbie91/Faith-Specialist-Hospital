import React from 'react';

interface Deformity4Props {
  isActive: boolean;  // This will control whether the gradient is applied
}

export const Deformity4: React.FC<Deformity4Props> = ({ isActive }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0BBE95" /> {/* Green */}
          <stop offset="100%" stopColor="#EE1433" /> {/* Red */}
        </linearGradient>
      </defs>
      <path 
        d="M26.6667 0H3.33333C1.5 0 0.0166667 1.5 0.0166667 3.33333L0 26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0ZM25 18.3333H18.3333V25H11.6667V18.3333H5V11.6667H11.6667V5H18.3333V11.6667H25V18.3333Z" 
        fill={isActive ? "url(#gradientFill)" : "#90949E"}
      />
    </svg>
  );
};
