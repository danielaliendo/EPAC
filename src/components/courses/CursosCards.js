import React from 'react';
import "./../../styles/CursosCards.css";
import SliderCoursesCards from './../SliderCoursesCards';
import Carrousel from './Carrousel';

const CursosCards = () => {

    return (
        <div className="cnt flxBxClumn">
            <div class="cnt-title">
                <h2 className="title">Cursos</h2>
                <div class="border">
                </div>
            </div>
            <div className="cnt-content">
                <div class="cnt-subtitle">
                    <h3 class="title">Próximos lanzamientos</h3>
                    <div class="border" />
                </div>
                <div className="cntCarrousel">
                    <Carrousel />
                </div>
                <div class="cnt-subtitle">
                    <h3 class="title">Otros</h3>
                    <div class="border" />
                </div>
                <SliderCoursesCards />
            </div>
        </div>
    );
}

export default CursosCards;