import React from 'react';

export const Input = ({ placeholder, value, onChange, type = "text", className = "" }) => (
  <input 
    type={type}
    className={`custom-input ${className}`} 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange} 
  />
);

export default Input;
