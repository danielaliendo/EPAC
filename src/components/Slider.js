import React from 'react';
import "../styles/Slider.css"
import ImgBanner from "./../images/tesla banner slider.jpg"

const Slider = () => {
    return(
        <div className="container-slider">
            <img className="img-slider" src={ImgBanner}></img>
            <div className="transparent">
                <h1>Electricistas Profesionales Asociados de Córdoba</h1>
                <h2>"Res non verba"</h2>
            </div>
        </div>
    );
}

export default Slider;