import React from 'react';


const Mision = ({ imgMission }) => {
    return(
        <div className="value">
            <div className="valueDescription">
                <p><strong>Misión: </strong><br/>
                Desarrollar actividades directamente relacionadas con el
                área eléctrica y complementarias con áreas afines como
                electrónica, electromecánica, informática, robótica, domótica,
                industrial, telecomunicaciones, electromédicas, etc., en los
                aspectos culturales, asistenciales, educativos, de formación
                técnica y seguridad de personas, animales, bienes y medio
                ambiente, conforme a las normativas, reglamentaciones, y
                disposiciones técnicas legales vigentes municipales,
                provinciales, nacionales e internacionales en caso de existir
                omisión en las mencionadas normativas locales.</p>
            </div>
            <div className="valueImg">
                <img className="imgValues" src={imgMission}/>
            </div>
        </div>
    );
}

export default Mision;
