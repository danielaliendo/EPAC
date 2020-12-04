import React from 'react';

import { courses } from "./Courses";
import "./../styles/SliderCoursesCards.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: '225px',
        width: '290px',
        borderRadius: '8px',
        margin: '5px 5px 20px 5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    media: {
        height: 140,
    },
    carousel: {
        position: "relative"
    },
    description: {
        height: '100%',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        textAlign: 'center',
        wordBreak: 'break-word',
        maxHeight: 'inherit',
    },
    title: {
        maxHeight: '44px',
        padding: '5px 10px',
        width: '100%',
        lineHeight: '65px',
        textAlign: 'center',
        overflow: 'hidden',
        margin: 0,

        fontSize: 'initial',
        fontWeight: '600',
        color: '#434343',
    },
    cardArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%',
        padding: 0,
        height: '90%'
    },
    cardActions: {
        width: '100%',
        height: '71px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
    buttonAction: {
        width: '100%',
    },
    buttonSliderRight: {
        margin: '5px',
        position: 'absolute',
        right: '15px',
        top: '73px',
    },
    buttonSliderLeft: {
        margin: '5px',
        position: 'absolute',
        left: '15px',
        top: '73px',
    },
    extendedIcon: {
        marginRight: '5px',
    },
    chipState: {
        position: "absolute",
        top: "-10px",
        left: "20px",
    },
    chipFinished: {
        backgroundColor: theme.palette.error.dark,
        color: 'white'
    },
    chipInCurse: {
        backgroundColor: theme.palette.warning.dark,
        color: 'white'
    },
    chipNext: {
        backgroundColor: theme.palette.info.dark,
        color: 'white'
    },
    slider: {
        // background: 'red',
        padding: '15px 0',
        margin: '0 75px',
        height: '242px',
        width: '90%',
        '& div': {
            height: "100%",
            // background: "red",
            "& ul": {
                height: '100%',
                // backgroundColor: 'yellow',
                "& li": {
                    padding: '0 !important',
                    // border: '1px solid red',
                    height: '100%',
                }
            }
        }
    },
    flexBoxCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    chipOtherAuthor: {
        backgroundColor: theme.palette.success.dark,
        color: 'white',
        height: '24px !important',
    },
    'carousel__slider-tray-wrapper': {
        padding: '15px 0'
    }
}));

export default function SliderCoursesCards() {

    const listEnCurso = courses.filter(item => item.estado === "En curso")
    const listFinalizado = courses.filter(item => item.estado === "Finalizado")

    const classes = useStyles();
    const history = useHistory()

    const historyPush = (id, curso) => {
        history.push(`/Cursos/${id}`, { curso: curso })
    }
    return (
        <div className="anotherCourses">

            {listEnCurso.map((curso, key) =>
                <div className="containerCard">

                    <Card key={key} className={classes.root}>
                        <CardContent className={classes.cardArea}>
                            <div className="containerTitle">

                                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                    {curso.titulo}
                                </Typography>
                            </div>

                            <div className="containerDescription">
                                <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                                    {curso.destinatarios}
                                </Typography>
                            </div>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <button className="button-footer" onClick={() => historyPush(curso.id, curso)}>
                                <span>Ver mas</span>
                            </button>
                        </CardActions>
                    </Card>
                    <Chip className={`${classes.chipState} ${classes.chipInCurse}`} size="small" label="En curso" />
                </div>
            )}
            {listFinalizado.map((curso, key) =>
                <div className="containerCard">

                    <Card key={key} className={classes.root}>
                        <CardContent className={classes.cardArea}>
                            <div className="containerTitle">
                                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                    {curso.titulo}
                                </Typography>
                            </div>

                            <div className="containerDescription">
                                <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                                    {curso.destinatarios}
                                </Typography>
                            </div>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <button className="button-footer" onClick={() => historyPush(curso.id, curso)}>
                                <span>Ver mas</span>
                            </button>
                        </CardActions>
                    </Card>
                    <Chip className={`${classes.chipState} ${classes.chipFinished}`} size="small" label="Finalizado" />
                </div>
            )}
        </div>
    );
}