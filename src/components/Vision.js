import React from 'react';


const Vision = ({ imgView }) => {
    return(
        <div className="value">
            <div className="valueImg">
                <img className="imgValues" src={imgView}/>
            </div>
            <div className="valueDescription">
                <p><strong>Visión: </strong><br/>Ser reconocidos como una organización líder y consolidada en materia eléctrica y
                afines, comprometida con la seguridad eléctrica, la calidad de vida de la población y el
                manejo sostenible de los recursos naturales renovables y su eficiencia, en un mundo
                donde las necesidades energéticas van en aumento.
                Para ello, pone a disposición las mejores capacidades profesionales para garantizar altos
                niveles de capacitación técnico científica y eficiencia en sus actuaciones a la vez que
                adquiere un fuerte compromiso con todos sus grupos de interés para el cumplimiento de
                su misión.</p>
            </div>
        </div>
    );
}

export default Vision;
