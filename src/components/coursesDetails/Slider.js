import React from 'react';

const Slider = ({ curso }) => {
    return (
        <div className="detailsSlider">
            <img className="img-slider" src={curso.img} />
            <div className="transparent-slider">
                <h1>{curso.titulo}</h1>
            </div>
        </div>
    )
}

export default Slider;