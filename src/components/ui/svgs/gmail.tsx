import React from "react";

export const Gmail = ({ className }: { className?: string }) => (
  <img 
    src="/gmail-icon.png" 
    alt="Gmail" 
    className={className} 
    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
  />
);
