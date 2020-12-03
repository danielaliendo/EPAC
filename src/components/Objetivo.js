import React from 'react';



const Objetivo = ({ imgObjetivo }) => {
    return (
        <div className="value">
            <div className="valueDescription">
                <p><strong>Objetivo: </strong><br />
                Contribuir a la capacitación técnica y científica de los asociados posibilitando un mayor conocimiento del desarrollo y técnicas aplicadas mediante las comisiones creadas ad hoc. <br/>
                Gestionar la registración y/o habilitación de sus socios para ser presentados y reconocidos por los organismos pertinentes vigentes oficiales y privados.<br/>
                Procurar el nucleamiento de todos los profesionales electricistas y afines de los distintos niveles de la actividad que desempeñen tareas técnicas y de servicios derivadas de la misma en la provincia de Córdoba, para contribuir al desarrollo, prosperidad e intercambio de sus asociados.<br/>
                Brindar asesoramiento y/o asistencia a sus asociados en el orden técnico propiamente dicho, administrativo contable, jurídica, y de seguridad en el ejercicio de la profesión.<br/>
                Operar en todo el territorio nacional e internacional, vinculándose a tales fines con las autoridades publicas y/o instituciones privadas que correspondan.<br/>
                </p>
            </div>
            <div className="valueImg">
                <img className="imgValues" src={imgObjetivo} />
            </div>
        </div>
    );
}

export default Objetivo;
