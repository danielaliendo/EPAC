import React, { useEffect } from 'react';

// COMPONENTES
import Slider from "./Slider";
import ContainerCards from "./ContainerCards";
import Contents from "./Contents";
import { useLocation, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../styles/home.css";

import Buttons from './Buttons';
import Banner from './Banner';
import AutoViewBanner from './../components/autoViewBanner/AutoViewBanner';

const Home = () => {
    const location = useLocation()
    const history = useHistory()

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        history.push("/")
    };

    useEffect(() => {
        if (location.search === "?inscripcionOk") {
            setOpen(true);
        }
    }, [location.search])

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Formulario"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        El formulario se envió correctamente.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
            {/* <Slider />
            <div>
                <h2>
                Impulsa tu carrera profesional
                con nuestros cursos
                </h2>
            </div>
            <div className="container-description-contents">
                <ContainerCards />
                <Contents />
            </div> */}
            <AutoViewBanner />
            {/* <img className="bannerImg" src={imagen}/> */}
            <Buttons />
            {/* <Banner /> */}
        </>
    );
}

export default Home;