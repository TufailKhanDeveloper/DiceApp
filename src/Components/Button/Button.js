import React from 'react'
import './Button.css'

function Button(props) {
    const{text, isOutline, onClick} = props;

  return (
    <button className={isOutline? 'outline-btn': 'primary-btn'} onClick={onClick} >
    {text}
    </button>
  )
}

export default Button