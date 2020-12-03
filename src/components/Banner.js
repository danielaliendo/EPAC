import React from 'react';
import Button from '@material-ui/core/Button';
import imgBanner from './../images/bannerTorre.jpg'
import './../styles/Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <img className="bannerImg" src={imgBanner} />
                <div className="transparentBanner" />
                <div className="bannerCard">
                    <h3 className="bcTitle">10 años bindando formación</h3>
                    <p className="bcText">
                        Desde hace diez años hemos tenido un crecimiento permanente, hemos incorporado nuevas especialidades acordes a la demanda del mercado laboral de la región. También logramos que nuestras certificaciones sean avaladas por el Gobierno de la Provincia de Córdoba, y el ERSeP. Estos logros nos permiten garantizar el aprendizaje técnico de acuerdo a las exigencias de los organismos que regulan la práctica técnica independiente.
                        </p>
                    <Button
                    href="./historia"
                    variant="contained"
                    color="primary"
                    size="large"
                    disableElevation>
                        Más información
                    </Button>
                </div>
            </div>

        </>
    );
}
export default Banner;