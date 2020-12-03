import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import imagen from './../../images/bannerNovedades-01.png';
import imgNotes from './../../images/bannerNovedades-02.png';
import imgLegislation from './../../images/bannerNovedades-03.png'
import { Link } from "react-router-dom";

import { Button, StepLabel } from '@material-ui/core';

import './../../styles/AutoViewBanner.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: imagen,
    id: 'courses',
  },
  {
    imgPath: imgNotes,
    id: 'notes',
  },
  {
    id: 'legislation',
    imgPath: imgLegislation,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
  },
  img: {
    height: 422,
    maxWidth: 400,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
  },
  cntSlider: {
    position: 'relative'
  },
  info: {
    color: 'white',
    fontFamily: "'Raleway', sans-serif",
    position: 'absolute',
    top: 50,
    left: 10,
  },
  button: {
    letterSpacing: '1px',
    fontFamily: "'Raleway', sans-serif",
    textTransform: 'inherit',
    fontSize: 'larger',
    marginTop: 30,
    width: '300px',
    height: '50px',
    margin: '20px',
  },
  p: {
    maxWidth: 475,
    margin: 15,
    fontSize: 'xx-large',
    fontWeight: '400',
  },
  title: {
    fontSize: 'xx-large',
    fontWeight: 600,
    maxWidth: '80%',
  },
  bxCard: {
    width: "250px",
    height: 0,
    borderRight: "60px solid transparent",
    borderBottom: "100px solid #428bca",
  },
  link: {
    textDecoration: 'none'
  }
}));

const AutoViewBanner = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        className={classes.autoPlay}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div className={classes.cntSlider} key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <img className={classes.img} src={step.imgPath} alt={step.label} />

                {step.id === 'courses' &&
                  <div className={classes.info}>
                    <h3 className={classes.title}>INSCRIBITE HOY
                    A NUESTROS CURSOS</h3>
                    <p className={classes.p}>
                      Aprende un oficio de la mano de nuestros mejores profesionales <br />
                    </p>
                    <Link className={classes.link} to="./Cursos">
                      <Button
                        className={classes.button}
                        variant="outlined"
                        color='secondary'
                      >
                        Conocé nuestros cursos
                      </Button>
                    </Link>
                  </div>}
                {step.id === 'notes' &&
                  <div className={classes.info} style={{ top: 65 }}>
                    <h3 className={classes.title}>ARTÍCULOS</h3>
                    <p className={classes.p}>
                      En nuestra sección de artículos podrás encontrar información elaborada por nuestro equipo <br />
                    </p>
                    <Link className={classes.link} to="./Articulos">
                      <Button
                        className={classes.button}
                        variant="outlined"
                        color='secondary'
                      >
                        Ver más
                      </Button>
                    </Link>
                  </div>
                }
                {step.id === 'legislation' &&
                  <div className={classes.info} style={{ top: 30 }}>
                    <h3 className={classes.title}>LEGISLACIÓN Y REGLAMENTACIONES</h3>
                    <p className={classes.p}>
                      En esta sección podrás ver y descargar las leyes y reglamentaciones vigentes en Córdoba<br />
                    </p>
                    <Link className={classes.link} to="./Legislación-y-reglamentaciones">
                      <Button
                        className={classes.button}
                        variant="outlined"
                        color='secondary'
                      >
                        Ver más
                      </Button>
                    </Link>
                  </div>
                }
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default AutoViewBanner;