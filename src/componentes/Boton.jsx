import styled from "styled-components";

const BotonJuego = styled.button`
    border: none;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    cursor: pointer;
    margin: 10px;
    color: white;
    background-color: #00957885;
    
    &:hover{
        background-color: #009578FF;
        color: #2d0095;
    }
    `

function Boton({ 
    tipo, 
    name, 
    puntosUsuario, 
    setPuntosUsuario, 
    puntosComputadora, 
    setPuntosComputadora, 
    setGanador, 
    setEleccionComputadora,
    setEleccionUsuario,
    setGanadorRonda,
    showButton,
    setShowButton,
    setMostrarGanador,
    setMostrarResultados,
    setMostrarSaludo 
}){
    function jugadaComputadora() {
        let opciones = ["piedra", "papel", "tijera"];
        return opciones[Math.floor(Math.random() * 3)].toLowerCase();
    }

    function determinarGanador() {
        let eleccionComputadora = jugadaComputadora();
        setEleccionComputadora(eleccionComputadora);
        setEleccionUsuario(tipo);
        if (eleccionComputadora === tipo) {
            setGanadorRonda("es un EMPATE");
            setMostrarResultados(true);
        } else if ((eleccionComputadora === "piedra" && tipo === "tijera") 
            || (eleccionComputadora === "papel" && tipo === "piedra") 
            || (eleccionComputadora === "tijera" && tipo === "papel")) {
            setGanadorRonda("GANA LA COMPUTADORA");
            setPuntosComputadora(puntosComputadora += 1);
            setMostrarResultados(true);
        } else {
            setGanadorRonda(`GANA ${name}`);
            setPuntosUsuario(puntosUsuario += 1);
            setMostrarResultados(true);
        }
    }


    function jugar(){
        let computadora = jugadaComputadora();
        determinarGanador(tipo, computadora);
        if(puntosUsuario === 3){
            setGanador(name)
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
            {!showButton && <BotonJuego onClick={jugar}>{ tipo }</BotonJuego>}
        </div>
    )
}

export default Boton;