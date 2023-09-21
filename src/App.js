import './App.css';
import { useState } from 'react';
import Saludo from './componentes/Saludo';
import Puntajes from './componentes/Puntajes';
import Resultados from './componentes/Resultados';
import Ganador from './componentes/Ganador';
import ReIniciar from './componentes/ReIniciar';
import Botones from './componentes/Botones';

function App() {
  const [nombre, setNombre] = useState("");
  const [puntosUsuario, setPuntosUsuario] = useState(0);
  const [eleccionUsuario, setEleccionUsuario] = useState("");
  const [puntosComputadora, setPuntosComputadora] = useState(0);
  const [eleccionComputadora, setEleccionComputadora] = useState("");
  const [ganadorRonda, setGanadorRonda] = useState("");
  const [ganador, setGanador] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [mostrarSaludo, setMostrarSaludo] = useState(true);
  const [mostrarGanador, setMostrarGanador] = useState(false);
  const [mostrarPuntajes, setMostrarPuntajes] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [mostrarReiniciar, setMostrarReiniciar] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Saludo setMostrarSaludo={setMostrarSaludo} mostrarSaludo={mostrarSaludo} nombre={nombre} setNombre={setNombre} showButton={showButton} setShowButton={setShowButton} setMostrarPuntajes={setMostrarPuntajes} setMostrarReiniciar={setMostrarReiniciar}/>
        
        {/* 1. Boton podria retornar 3 botones en vez de ser llamado tres veces en app  
            2. En vez de generar todos los usestate de mostrar cosas o setear puntos los podria pasar como un objecto */}

        <Botones nombre={nombre} setEleccionUsuario={setEleccionUsuario} eleccionUsuario={eleccionUsuario} setEleccionComputadora={setEleccionComputadora} eleccionComputadora={eleccionComputadora} setGanadorRonda={setGanadorRonda} setPuntosComputadora={setPuntosComputadora} puntosComputadora={puntosComputadora} setMostrarResultados={setMostrarResultados} setPuntosUsuario={setPuntosUsuario} puntosUsuario={puntosUsuario} setGanador={setGanador} setMostrarSaludo={setMostrarSaludo} setShowButton={setShowButton} showButton={showButton} setMostrarGanador={setMostrarGanador}/>        
        
        
        <Puntajes nombre={nombre} puntosUsuario={puntosUsuario} puntosComputadora={puntosComputadora} mostrarPuntajes={mostrarPuntajes}/>
        <Resultados nombre={nombre} eleccionUsuario={eleccionUsuario} eleccionComputadora={eleccionComputadora} ganadorRonda={ganadorRonda} mostrarResultados={mostrarResultados}/>
        <Ganador ganador={ganador} mostrarGanador={mostrarGanador}/>
        <ReIniciar mostrarReiniciar={mostrarReiniciar} setMostrarReiniciar={setMostrarReiniciar} setNombre={setNombre} setPuntosUsuario={setPuntosUsuario} setPuntosComputadora={setPuntosComputadora} mostrarGanador={mostrarGanador} setMostrarGanador={setMostrarGanador} setMostrarPuntajes={setMostrarPuntajes} setMostrarResultados={setMostrarResultados} setMostrarSaludo={setMostrarSaludo} setShowButton={setShowButton}/>
      </header>
    </div>
  );
}

export default App;
