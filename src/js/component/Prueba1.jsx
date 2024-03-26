import React, {useState} from 'react';

const Prueba1 = () => {

    const [count, setCount] = useState(0)
    const [track, setTrack] = useState(0)
    let contador = 0;
    function agregar () {
        console.log('Agregar')
        setCount(count + 1)
        setTrack(track + 1 )
    }
    function restar () {
        console.log('restar')
        setCount(count - 1)
        setTrack(track + 1 )
    }
    return(
        <div>
            <h1>Counter Check!</h1>
            <h1>{count}</h1>
            <button onClick={agregar}>Agrego</button>
            <button onClick={restar}>Resto</button>
            <h1>Número de veces utilizado = {track} </h1>

        </div>
    )
}

export default Prueba1