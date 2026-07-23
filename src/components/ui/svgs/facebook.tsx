import React from "react";

export const Facebook = ({ className }: { className?: string }) => (
  <img 
    src="/facebook-icon.png" 
    alt="Facebook" 
    className={className} 
    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
  />
);
