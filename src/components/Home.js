import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../styles/home.css";
import Buttons from './Buttons';
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
        <div className="cnt">
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
            <AutoViewBanner />
            <Buttons />
        </div>
    );
}

export default Home;