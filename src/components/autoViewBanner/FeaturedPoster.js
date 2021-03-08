import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        '& .MuiAlert-icon': {
            paddingRight: 5,
        }
        
    },
}));

export const FeaturedPoster = () => {

    const classes = useStyles();

    return (
        <Alert className={classes.root} severity="info">
            Nuevos cursos presenciales comienzan en Marzo
        </Alert>

    )
}
