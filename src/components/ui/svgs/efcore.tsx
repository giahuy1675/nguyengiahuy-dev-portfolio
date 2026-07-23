import React from "react";

export const EfCore = ({ className }: { className?: string }) => (
  <img 
    src="/efcore-icon.png" 
    alt="Entity Framework Core" 
    className={className} 
    style={{ width: '1em', height: '1em', objectFit: 'contain' }} 
  />
);
