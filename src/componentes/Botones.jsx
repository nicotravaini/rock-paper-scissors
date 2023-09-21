import piedra from "../Img/piedra.png";
import papel from "../Img/papel.png";
import tijera from "../Img/tijera.png";
import styled from "styled-components";

const Imagenes = styled.img`
    height: 150px;
    width: 150px;
`


const BotonJugada = styled.button`
    height:150px;
    width: 150px;
    border: none;
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
    margin: 10px;
    background-color: #00957885;

    &:hover{
        animation: shake 1s;
    }

    @keyframes shake {


0%,
60%
{
    transform: translateY(10px);
}


30%,
90%
{
    transform: translateY(-5px);
}
}
`


export default function Botones({
    nombre,
    setEleccionUsuario,
    setEleccionComputadora,
    eleccionComputadora,
    setGanadorRonda,
    setPuntosComputadora,
    puntosComputadora,
    setMostrarResultados,
    setPuntosUsuario,
    puntosUsuario,
    setGanador,
    setMostrarSaludo,
    setShowButton,
    showButton,
    setMostrarGanador
    }) {

    function jugadaComputadora() {
        let opciones = ["piedra", "papel", "tijera"];
        return opciones[Math.floor(Math.random() * 3)].toLowerCase();
    }

    function jugarRonda(event){
        setEleccionUsuario(event.currentTarget.id);

        eleccionComputadora = jugadaComputadora();
        setEleccionComputadora(eleccionComputadora);

        if (eleccionComputadora === event.currentTarget.id) {
            setGanadorRonda("ES UN EMPATE");
            setMostrarResultados(true);
        } else if ((eleccionComputadora === "piedra" && event.currentTarget.id === "tijera") 
            || (eleccionComputadora === "papel" && event.currentTarget.id === "piedra") 
            || (eleccionComputadora === "tijera" && event.currentTarget.id === "papel")) {
            setGanadorRonda("GANA LA COMPUTADORA");
            setPuntosComputadora(puntosComputadora += 1);
            setMostrarResultados(true);
        } else {
            setGanadorRonda(`GANA ${nombre}`);
            setPuntosUsuario(puntosUsuario += 1);
            setMostrarResultados(true);
        }
        determinarGanador();
    }

    function determinarGanador(){
        if(puntosUsuario === 3){
            setGanador(nombre)
            setMostrarSaludo(false);
            setShowButton(true);
            setMostrarGanador(true);
        } else if(puntosComputadora === 3){
            setGanador("COMPUTADORA");
            setMostrarSaludo(false);
            setShowButton(true);
            setMostrarGanador(true);
        }
    }
    return (
        <div>
            {!showButton && <BotonJugada id="piedra" onClick={jugarRonda}>
                <Imagenes src={piedra} alt="Piedra"></Imagenes>
            </BotonJugada>}
            {!showButton && <BotonJugada id="papel" onClick={jugarRonda}>
                <Imagenes src={papel} alt="Papel"></Imagenes>
            </BotonJugada>}
            {!showButton && <BotonJugada id="tijera" onClick={jugarRonda}>
                <Imagenes src={tijera} alt="Tijera"></Imagenes>
            </BotonJugada>}
        </div>
    )
}