import React from 'react';
import './style.css';

function FormButton({ primary, onClick, disabled, children }) {
  const buttonType = primary ? 'submit' : 'button'
  return (
    <button className="form-btn" disabled= {disabled} onClick={onClick} type={buttonType}>
      {children}
    </button>
  )
}

export default FormButton
