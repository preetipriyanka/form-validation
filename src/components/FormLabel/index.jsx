import React from 'react';
import './style.css';

function FormLabel({htmlFor, children}) {
  return (
    <div className="form-label">
      <label htmlFor={htmlFor}>{children}</label>
    </div>
  )
}

export default FormLabel
