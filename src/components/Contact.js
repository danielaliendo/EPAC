import React, { useState } from 'react';
import { PhoneInTalk } from "@material-ui/icons";
import { Home } from "@material-ui/icons";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import "./../styles/Contact.css";
import ContactForm from "./ContactForm";

const useStyles = makeStyles((theme) => ({
    progress: {
        // background: 'blue'
    }
}));

export const Contact = () => {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        console.log(loading)
        setLoading(false);
    };

    return (
        <div className="cnt flxBxClumn">
            <div class="cnt-title">
                <h2 className="title">Contacto</h2>
                <div class="border">
                </div>
            </div>
            <div className="cnt-content flxBxCntr flxWrp" style={{ alignItems: 'stretch' }}>
                <div className="column">
                    <div className="cnt-form">
                        <div class="cnt-subtitle">
                            <h3 className="title">¡Envíanos un mail!</h3>
                            <div className="border" />
                        </div>
                        <ContactForm />
                    </div>
                </div>
                <div className="column">
                    <div className="container-query">
                        <div className="query">
                            <div className="query-title">
                                <PhoneInTalk />
                                <h3>Consulta <span>telefónica</span></h3>
                            </div>
                            <p>(0351) 153-911-160</p>
                        </div>
                        <div className="query">
                            <div className="query-title">
                                <Home />
                                <h3>Administración <span>central</span></h3>
                            </div>
                            <p>Diagonal Ica 1538, Córdoba</p>
                        </div>
                        {loading && <div className="map">
                            <CircularProgress className={classes.progress} disableShrink />
                        </div>}
                        <div className="map">
                            <iframe onLoad={handleLoad} id="iframeMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.0559049284225!2d-64.Facebook15758368515917!3d-31.385022001875335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299a6eb484fe9%3A0xf4f3af00c9a9ee05!2sEPAC%20-%20Electricistas%20Profesionales%20Asociados%20de%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1603220927657!5m2!1ses!2sar" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;