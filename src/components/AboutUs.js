import React from 'react';
import PrincipiosCorporativos from "./PrincipiosCorporativos";
import AportandoALaSociedad from "./AportandoALaSociedad";
import "../styles/about-us.css";

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="intro-container">

            </div>
            <PrincipiosCorporativos />
            <AportandoALaSociedad />
        </div>
    );
}

export default AboutUs;