import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    margin: 40px;
`

const StyledInput = styled.input`
    height: 30px;
    width: 50%;
    margin: 10px;
    border: 3px solid;
    border-radius: 12px;
`

const BotonComenzar = styled.button`
    height: 40px;
    width: 70px;
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

function Saludo({setMostrarSaludo, mostrarSaludo, nombre, setNombre, showButton, setShowButton, setMostrarPuntajes, setMostrarReiniciar }) {
    const [inputValue, setInputValue] = useState("")
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        if(inputValue === "" || !(isNaN(inputValue))){
            alert("EL NOMBRE NO PUEDE ESTAR VACIO")
        } else {
            setNombre(inputValue);
            setMostrarSaludo(false)
            setShowButton(!showButton);
            setMostrarPuntajes(true);
            setMostrarReiniciar(true);
        }
    };

    return(
        <div>
            {mostrarSaludo && <p>Para iniciar el juego ingresa tu nombre y haz click en iniciar</p>}
            <StyledDiv>
                {mostrarSaludo && <StyledInput onChange={handleInputChange}></StyledInput>}
                {mostrarSaludo && <BotonComenzar onClick={handleSubmit}>INICIAR JUEGO</BotonComenzar>}
            </StyledDiv>
            {!mostrarSaludo && <p>Hola {nombre}, bienvenido a este juego!</p>}
        </div>
    )
}

export default Saludo;