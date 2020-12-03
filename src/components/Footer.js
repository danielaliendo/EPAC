import React from 'react';

import "../styles/Footer.css";
import { Instagram, Facebook, Twitter } from '@material-ui/icons';
const Footer = () => {
    return (
        <>
            <div className="containerFooter">
                <div className="cardsFooter">
                    <div className="columnFooter">
                        <h5 className="ns">Asociación</h5>
                        <p className="ns">
                            Historia <br />
                            Comisión directiva <br />
                            Principios corporativos <br />
                        </p>
                    </div>
                    <div className="columnFooter">
                        <h5 className="ns">Contactanos</h5>
                        <p className="ns">
                                Teléfono: (0351) 153-911-160 <br />
                                Email: info@epac.com.ar<br />
                                Ubicación: Diagonal Ica 1538, Córdoba<br />
                            </p>
                    </div>
                    <div className="columnFooter">
                        <div className="prueba">
                            <h5 className="ns">Seguinos en nuestras redes sociales</h5>
                            <div className="iconsFooter">
                                <Facebook />
                                <Instagram />
                                <Twitter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p className="ns">Copyright © 2020, todos los derechos reservados | Electricistas profesionales asociados de Córdoba
                    </p>
                </div>
            </div>

        </>
    );
}

export default Footer;