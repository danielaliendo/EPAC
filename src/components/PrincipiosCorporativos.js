import React from 'react';

import Mision from "./Mision";
import Vision from "./Vision";
import Objetivo from "./Objetivo";
import "../styles/principios-corporativos.css"
import imgObjetivo from "./../images/values/objetive.jpg"
import imgMission from "./../images/values/mission.jpg"
import imgView from "./../images/values/view.jpg"

const PrincipiosCorporativos = () => {
    return (
        <div className="cnt flxBxClumn">
            <div class="cnt-title">
                <h2 className="title">Principios corporativos</h2>
                <div class="border">
                </div>
            </div>
            <div className="cnt-content flxBxClumn">
                <Mision imgMission={imgMission}/>
                <Vision imgView={imgView} />
                <Objetivo imgObjetivo={imgObjetivo}/>
            </div>
        </div>
    );
}

export default PrincipiosCorporativos;