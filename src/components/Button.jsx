import React from 'react';

export const Button = ({ children, onClick, variant = 'primary', className = "" }) => (
  <button 
    className={`btn btn-${variant} ${className}`} 
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
