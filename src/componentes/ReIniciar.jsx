import styled from "styled-components";

const BotonReiniciar = styled.button`
    height: 40px;
    width: 100px;
    margin: 10px;
    border: 3px solid black;
    border-radius: 12px;
    background-color: #cccccc;
    color: black;
    
    transition: all .05s;

    &:active {
        color: #009578;
        border-color:  #2d0095;
    }
`

export default function ReIniciar({
    mostrarReiniciar,
    setMostrarReiniciar,
    setNombre,
    setPuntosUsuario,
    setPuntosComputadora,
    setMostrarGanador,
    setMostrarPuntajes,
    setMostrarResultados,
    setMostrarSaludo,
    setShowButton
    }){
    function ReIniciarJuego(){
        setMostrarReiniciar(false);
        setNombre("");
        setPuntosUsuario(0);
        setPuntosComputadora(0);
        setMostrarGanador(false);
        setMostrarPuntajes(false);
        setMostrarResultados(false);
        setMostrarSaludo(true);
        setShowButton(true);
    }
    
    return (
        <div>
            {mostrarReiniciar === true && <BotonReiniciar onClick={ReIniciarJuego}>REINICIAR JUEGO</BotonReiniciar>}
        </div>
    )
}