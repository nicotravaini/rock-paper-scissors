import styled from "styled-components"

const ResultadoP = styled.p`
    color: rgb(240, 0, 0, 0.8);
`

export default function Resultados({
    nombre,
    eleccionUsuario,  
    eleccionComputadora,
    ganadorRonda,
    mostrarResultados}){

    return (
        <div>
            {(mostrarResultados === true) && <p>{nombre} elige {eleccionUsuario} y la computadora elige {eleccionComputadora}</p>}
            {(mostrarResultados === true) && <ResultadoP>{ganadorRonda}</ResultadoP>}
        </div>
    )
}