import React from 'react';
import "../styles/Footer.css";
import IconButton from '@material-ui/core/IconButton';
import { Instagram, Facebook, Twitter } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import {
    Link
} from "react-router-dom";

const useStyles = makeStyles(() => ({
  buttonIcon: {
      padding: 5,
      color: 'white'
  }
}));
const Footer = () => {
  const classes = useStyles();
  
    return (
        <>
            <div className="containerFooter">
                <div className="cardsFooter">
                    <div className="columnFooter">
                        <h5 className="ns">Asociación</h5>
                            <ul className="ns">
                                <Link className="footerLink" to="historia"><li>Historia</li></Link>
                                <Link className="footerLink" to="comision"><li>Comisión directiva</li></Link>
                                <Link className="footerLink" to="principios"><li>Principios corporativos</li></Link>
                            </ul>
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
                                <IconButton className={classes.buttonIcon} target="_blank" href="https://www.facebook.com/pages/category/Organization/EPAC-610815765659588/" aria-label="Ir a Facebook">
                                    <Facebook />
                                </IconButton>
                                <IconButton className={classes.buttonIcon} target="_blank" href="https://www.instagram.com/epacsocios/" aria-label="Ir a Instagram">
                                    <Instagram />
                                </IconButton>
                                <IconButton className={classes.buttonIcon} target="_blank" href="https://mobile.twitter.com/?lang=es" aria-label="Ir a Twitter">
                                    <Twitter />
                                </IconButton>
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