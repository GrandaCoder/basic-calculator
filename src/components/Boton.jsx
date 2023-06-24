import React, { useState } from 'react'
import '../styles/Boton.css'
function Boton(props) {

  const [isPressed, setIsPressed] = useState(false);
  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }

  const handleClick = (event) => {
    props.manejarClick(props.children); 
    removeAnimation(event);
    setIsPressed(true);

  }

  const removeAnimation = (event) => {
    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  }

  return (
    <div
      onClick={handleClick}
      className={`btn-container ${isPressed ? 'btn-pushed' : ''} ${esOperador(props.children) ? 'operador ': ''}`.trimEnd()}
    >
      {props.children}
    </div>
  )
}

export default Boton