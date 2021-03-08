import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import imagen from './../../images/bannerNovedades-01-01.jpg';
import imgNotes from './../../images/bannerNovedades-02.jpg';
import imgLegislation from './../../images/bannerNovedades-03.jpg'
import { Link } from "react-router-dom";

import { Button } from '@material-ui/core';

import './../../styles/AutoViewBanner.css';
import { FeaturedPoster } from './FeaturedPoster';

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
          <div className="cntSlider" key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <img className="img" src={step.imgPath} alt={step.label} />

                {step.id === 'courses' &&
                  <div className="info">
                    <div>
                      <h3 className="infoTitle">INSCRIBITE HOY
                      A NUESTROS CURSOS</h3>
                      <p className="p">
                        Aprende un oficio de la mano de nuestros mejores profesionales <br />
                      </p>
                    </div>
                    <div className="animate__animated animate__rubberBand buttonsAlert">
                      <Link className={classes.link} to="./Cursos">
                        <Button
                          className={classes.button}
                          variant="outlined"
                          color='secondary'
                        >
                          Conocé nuestros cursos
                        </Button>
                      </Link>
                      <FeaturedPoster />
                    </div>
                  </div>}

                {step.id === 'notes' &&

                  <div className="info">
                    <div>
                      <h3 className="infoTitle">ARTÍCULOS</h3>
                      <p className="p">
                        En nuestra sección de artículos podrás encontrar información elaborada por nuestro equipo <br />
                      </p>
                    </div>
                    <div className="animate__animated animate__rubberBand">
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
                  </div>
                }
                {step.id === 'legislation' &&
                  <div className="info">
                    <div>
                      <h3 className="infoTitle">LEGISLACIÓN VIGENTE</h3>
                      <p className="p">
                        En esta sección podrás ver y descargar las leyes y reglamentaciones vigentes en Córdoba<br />
                      </p>
                    </div>
                    <div className="animate__animated animate__rubberBand">
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