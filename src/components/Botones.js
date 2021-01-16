import {useState} from 'react';
const Botones = ({pantalla, cambiarPantalla}) => {
        
    const [operacion, cambiarOperacion] = useState('');

    const escribirNumero = (e) => {
        cambiarPantalla(pantalla + e.target.textContent);

        console.log(e.target.textContent);
        if (e.target.textContent === '+') {
            console.log("dasd")
            cambiarOperacion('suma');
        } else if (e.target.textContent === '-') {
            cambiarOperacion('resta');
        } else if(e.target.textContent === 'x') {
            cambiarOperacion('multiplicacion');
        } else if(e.target.textContent === '/') {
            cambiarOperacion('division')
        }

    }

    const mostrarResultado = () => {
        let suma_var = 0;

        if(operacion === 'suma') {
            let operandos = pantalla.split('+');
            suma_var = parseInt(operandos[0]) + parseInt(operandos[1]);
        } else if(operacion === 'resta') {
            let operandos = pantalla.split('-');
            suma_var = parseInt(operandos[0]) -  parseInt(operandos[1]);
        } else if(operacion === 'multiplicacion') {
            let operandos = pantalla.split('x');
            suma_var = parseInt(operandos[0]) *  parseInt(operandos[1]);
        } else if(operacion === 'division') {
            let operandos = pantalla.split('/');
            suma_var = parseInt(operandos[0]) *  parseInt(operandos[1]);
        }

        cambiarPantalla(suma_var);
        //cambiarValorAnterior(suma_var);


    }
    
    return (
        <div className="botones">
            <button onClick={escribirNumero}>1</button>
            <button onClick={escribirNumero}>2</button>
            <button onClick={escribirNumero}>3</button>
            <button onClick={escribirNumero}>+</button>
            <button onClick={escribirNumero}>4</button>
            <button onClick={escribirNumero}>5</button>
            <button onClick={escribirNumero}>6</button>
            <button onClick={escribirNumero}>-</button>
            <button onClick={escribirNumero}>7</button>
            <button onClick={escribirNumero}>8</button>
            <button onClick={escribirNumero}>9</button>
            <button onClick={escribirNumero}>x</button>
            <button onClick={escribirNumero}>0</button>
            <button onClick={escribirNumero}>-</button>
            <button onClick={mostrarResultado}>=</button>

        </div>
    )
}

export default Botones;
