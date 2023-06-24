import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonCLear';
import Pantalla from './components/Pantalla';
import freecodecamp from './img/freecodecamp.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarValor = (valor) => {
    const lastInput = input.slice(-1);
    if((isNaN(lastInput) && (isNaN(valor))) || (lastInput === '.' && valor === '.')) {
      return;
    }
    setInput(input + valor);
  }

  const clearInput = () => {
    setInput('');
  }

  const calcularResultado = () => {
    try {
      const resultado = evaluate(input);
      if (isNaN(resultado)) {
        throw new Error('Resultado no válido');
      }
      setInput(String(resultado));
    } catch (error) {
      alert('Entrada no válida');
    }
  }

  const deleteLastInput = () => {
    setInput(input.slice(0, -1));
  }
  


  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freecodecamp}
          alt='logo de freecodecamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarValor}>1</Boton>
          <Boton manejarClick={agregarValor}>2</Boton>
          <Boton manejarClick={agregarValor}>3</Boton>
          <Boton manejarClick={agregarValor}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarValor}>4</Boton>
          <Boton manejarClick={agregarValor}>5</Boton>
          <Boton manejarClick={agregarValor}>6</Boton>
          <Boton manejarClick={agregarValor}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarValor}>7</Boton>
          <Boton manejarClick={agregarValor}>8</Boton>
          <Boton manejarClick={agregarValor}>9</Boton>
          <Boton manejarClick={agregarValor}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarValor}>0</Boton>
          <Boton manejarClick={agregarValor}>.</Boton>
          <Boton manejarClick={deleteLastInput}>DEL</Boton>
          <Boton manejarClick={agregarValor}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClick={clearInput}>C</BotonClear>
          <Boton manejarClick={calcularResultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}


export default App;
