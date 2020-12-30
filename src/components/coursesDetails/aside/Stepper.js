import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';
import InscriptionFrom from './InscriptionForm';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepper: {
    padding: 0,
  }
}));

function getSteps() {
  return ['Transferencia bancaria', 'Enviar datos para el registro'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <p>
          Deberás realizar una trasferencia por el monto de la inscripción al CBU EPAC N° 2850306430094119151291. <br />
          Recordá descargar el comprobante de transferencia.
        </p>
      );
    case 1:
      return (
        <div>
          <p>
            Completa el siguiente formulario de inscripción adjuntando el comprobante de transferencia del punto anterior:
            </p>

          <InscriptionFrom />
        </div>
      );
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper({ handleClose }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  
  const { state } = useLocation()
  const { curso } = state;
  
  const courseCost = curso.precio_del_curso.regular.valor_inscripcion !== '' && curso.precio_del_curso.regular.saldo.cuotas.cantidad_de_cuotas !== '' && curso.precio_del_curso.regular.saldo.cuotas.valor_de_cuotas !== '' 

  return (
    <div className={classes.root}>
      <div className="subtitleCursosCards" style={{ marginLeft: 0 }}>
        <h2>Inscripión al curso</h2>
        <div className="border"></div>
      </div>
      <div style={{ padding: '0 5px 10px 10px' }}>
        {courseCost 
        ?
        <>
          <Alert severity="info">
            Información importante
          </Alert>
          <div>            
          <h4>Costo del curso</h4>
          <p>
            <ul>
              <li style={{ listStyleType: 'disc' }}>Inscripión: ${curso.precio_del_curso.regular.valor_inscripcion}</li>
              <li style={{ listStyleType: 'disc' }}>Saldo: {curso.precio_del_curso.regular.saldo.cuotas.cantidad_de_cuotas} cuota/s de ${curso.precio_del_curso.regular.saldo.cuotas.valor_de_cuotas}</li>
            </ul>
          </p>
          </div>
        </>
        :
        <Alert severity="warning">Información no disponible</Alert>
        }
      </div>
      <Stepper className={classes.stepper} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Atrás
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1
                      ? handleClose
                      : handleNext}
                    className={classes.button}
                    type="submit"
                  >
                    {activeStep === steps.length - 1
                      ? 'Salir'
                      : 'Siguiente'}

                  </Button>
                  {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? 'Salir' : 'Siguiente'}
                    
                  </Button> */}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>
            <p><strong>¡Felicitaciones, ya sos parte de nuestro equipo!</strong> <br />
                     Recibiras un mail confirmando tu inscripción junto con toda la info de este curso
                  </p>
          </Typography>
        </Paper>
      )}
    </div>
  );
}