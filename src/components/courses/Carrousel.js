import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, ButtonLast, DotGroup, ImageWithZoom, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';
import Zoom from '@material-ui/core/Zoom';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { courses } from "./../Courses";

const windowWidth = window.innerWidth

const useStyles = makeStyles((theme) => ({
    root: {

        maxHeight: '225px',
        width: '290px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    media: {
        height: 140,
    },
    carousel: {
        width: '100%',
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            marginBottom: 20,
        },
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
        [theme.breakpoints.down('sm')]: {
            top: 'initial',
            bottom: '-35px',
            right: '33px',
        },
        [theme.breakpoints.up('sm')]: {
            right: '-50px',
        },
    },
    buttonSliderLeft: {
        margin: '5px',
        position: 'absolute',
        left: '15px',
        top: '73px',
        transform: 'rotate(180deg)',
        [theme.breakpoints.down('sm')]: {
            top: 'initial',
            bottom: '-35px',
            left: '33px',
        },
        [theme.breakpoints.up('sm')]: {
            left: '-50px',
        },
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
        [theme.breakpoints.down('sm')]: {
            width: '76%',
        },
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
        },
        [theme.breakpoints.up('sm')]: {
            width: '100%',

        },
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
    dots: {
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            bottom: '-10px',
        },
    },
    'carousel__slider-tray-wrapper': {
        padding: '15px 0'
    }
}));

const Carrousel = () => {
    const classes = useStyles();

    const history = useHistory()

    const historyPush = (id, curso) => {
        history.push(`/cursos/${id}`, { curso: curso })
    }

    const listProximoLanzamiento = courses.filter(item => item.estado === "Próximo lanzamiento")

    const visibleSlider = () => {
        if (windowWidth > 0 && windowWidth <= 600) {
            return 1
        } else if (windowWidth > 600 && windowWidth <= 960) {
            return 3
        }
        return 4
    }

    return (

        <CarouselProvider
            className={`${classes.carousel} ${classes.flexBoxCenter}`}
            visibleSlides={visibleSlider()}
            totalSlides={listProximoLanzamiento.length}
            step={1}
            naturalSlideWidth={400}
            naturalSlideHeight={500}

        >
            <Slider className={classes.slider}>
                {listProximoLanzamiento.map((curso, key) =>
                    <>
                        <Slide index={key} className="slide">
                            <Card className={classes.root}>
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
                        </Slide>
                        {curso.titulo === "Instalador electricista categoría III" && <Chip className={`${classes.chipState} ${classes.chipOtherAuthor}`} size="small" label="Autorizado por Ersep" />}
                    </>

                )}
            </Slider>

            <DotGroup className={classes.dots} />

            <ButtonNext>
                <IconButton className={classes.buttonSliderRight} aria-label="delete">
                    <ArrowForwardIos />
                </IconButton>
            </ButtonNext>

            <ButtonFirst>
                <IconButton className={classes.buttonSliderLeft} aria-label="delete">
                    <ArrowForwardIos />
                </IconButton>
            </ButtonFirst>

        </CarouselProvider>
    );
}

export default Carrousel;