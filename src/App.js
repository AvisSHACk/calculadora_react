import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Botones from './components/Botones';

function App () {
    const [pantalla, cambiarPantalla] = useState('');
    return (
        <div className="contenedor">
            <Header pantalla={pantalla}/>
            <Botones pantalla={pantalla} cambiarPantalla={cambiarPantalla}/>           
        </div>
    )
}

export default App;
