export default function Puntajes({nombre, puntosUsuario, puntosComputadora, mostrarPuntajes}){

    return (
        <div>
            {(mostrarPuntajes === true) &&  <p>{nombre} = {puntosUsuario}</p>}
            {(mostrarPuntajes === true) &&  <p>Computadora = {puntosComputadora}</p>}
        </div>
    )
}