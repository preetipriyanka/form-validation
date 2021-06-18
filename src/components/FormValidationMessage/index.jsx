import React from 'react';
import './style.css';

function FormValidationMessage({children}) {
  return (
    <div className="form-validation-message">
      {children}
    </div>
  )
}

export default FormValidationMessage
