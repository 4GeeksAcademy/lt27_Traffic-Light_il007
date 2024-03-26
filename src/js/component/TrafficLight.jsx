import React, { useState } from 'react';

function TrafficLight() {
    const [colorRojo, setColorRojo] = useState('redlight');
    const [colorAmarillo, setColorAmarillo] = useState('yellowlight');
    const [colorVerde, setColorVerde] = useState('greenlight');
    const [colorActual, setColorActual] = useState(0);
    const [colorMorado, setColorMorado] = useState(false);

    const handleClick = (color) => {
        setColorRojo('redlight');
        setColorAmarillo('yellowlight');
        setColorVerde('greenlight');

        if (color === 'Rojo') {
            setColorRojo('redlightselected');
        } else if (color === 'Amarillo') {
            setColorAmarillo('yellowlightselected');
        } else if (color === 'Verde') {
            setColorVerde('greenlightselected');
        }
    }

    const handleClickButton = () => {
        setColorRojo('redlight');
        setColorAmarillo('yellowlight');
        setColorVerde('greenlight');

        if (colorActual === 0) {
            setColorRojo('redlightselected');
            setColorActual(1);
        } else if (colorActual === 1) {
            setColorAmarillo('yellowlightselected');
            setColorActual(2);
        } else if (colorActual === 2) {
            setColorVerde('greenlightselected');
            setColorActual(0);
        }
    }

    const addNewColor = () => {
        setColorMorado(true);
    }

    const subtractNewColor = () => {
        setColorMorado(false);
    }


    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
                <div className="traffictop"></div>
            </div>
            <div className="d-flex justify-content-center">
                <div onClick={() => handleClick('Rojo')} className={colorRojo}></div>
            </div>
            <div className="d-flex justify-content-center">
                <div onClick={() => handleClick('Amarillo')} className={colorAmarillo}></div>
            </div>
            <div className="d-flex justify-content-center">
                <div onClick={() => handleClick('Verde')} className={colorVerde}></div>
            </div>
            {colorMorado && 
                <div className="d-flex justify-content-center">
                    <div className="purplelight"></div>
                </div>
            }
            <div className="d-flex justify-content-center">
                <button onClick={handleClickButton}>Cambiar color</button>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={addNewColor}>Agrega color morado</button>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={subtractNewColor}>Quitar color morado</button>
            </div>                                                        
        </div>
    );
}

export default TrafficLight;