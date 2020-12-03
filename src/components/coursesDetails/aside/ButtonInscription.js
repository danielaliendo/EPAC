import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        width: '100%',
        padding: '15px 78px',
        marginBottom: '20px',
    },
}));
const ButtonInscription = ({ handleClickOpen, curso }) => {
    console.log(curso)
    const classes = useStyles();
    
    return (
        <>
            {curso.estado === 'Próximo lanzamiento'
                ? <Button className={classes.button} size="large" variant="contained" color="primary" onClick={handleClickOpen}>
                    Inscribirme
                </Button>
                : <Button className={classes.button} size="large" variant="contained" color="primary" onClick={handleClickOpen} disabled>
                    Inscribirme
                </Button>
            }
        </>
    )
}

export default ButtonInscription;