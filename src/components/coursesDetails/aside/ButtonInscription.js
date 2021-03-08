import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    
    button: {
        width: '100%',
        padding: '15px 78px',
        marginBottom: '20px',
        fontFamily: "'Raleway', sans-serif",
        textTransform: 'capitalize',
        fontSize: 'large'
    },
}));
const ButtonInscription = ({ handleClickOpen, curso }) => {
    const classes = useStyles();

    // const consulta = curso.duracion_del_curso.inicio_del_curso && curso.duracion_del_curso.fin_del_curso && curso.duracion_del_curso.fin_inscripciones && curso.docente && curso.clases.lugar_de_cursado

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