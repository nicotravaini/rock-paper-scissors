import styled from "styled-components"

const GanadorP = styled.p`
    color: rgb(240, 0, 0, 0.8);
`

export default function Ganador({ganador, mostrarGanador}){
    
    return(
        <div>
            {(mostrarGanador === true) && <GanadorP>El ganador es {ganador}</GanadorP>}
        </div>
    )
}