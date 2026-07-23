import React from "react";

export const SqlServer = ({ className }: { className?: string }) => (
  <img 
    src="/sqlserver-icon.png" 
    alt="SQL Server" 
    className={className} 
    style={{ width: '1em', height: '1em', objectFit: 'contain' }} 
  />
);
