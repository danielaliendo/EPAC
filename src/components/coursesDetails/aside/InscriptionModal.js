import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import './../../../styles/InscriptionModal.css';
import Stepper from "./Stepper";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  containerModal: {
  },
  valueInsriptionInfo: {
    padding: '24px',
  },
});

export default function SimpleDialog({open,handleClose, curso}) {
  const classes = useStyles();
  // console.log('curso (Modal): ', curso)
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <div className="containerModal">
            <div className={classes.valueInsriptionInfo}>
              <p>
                  <strong>¡Inscribite ahora!</strong> <br/>
                  <br/>
                  Valor de la inscripción {curso.pago?.valor_inscripcion} <br/>
                  Saldo: {curso.pago?.cuotas.cantidad_de_cuotas} cuotas de {curso.pago?.cuotas.valor_de_cuotas} <br/>
              </p>
            </div>
            <Stepper curso={curso}/>
        </div>
    </Dialog>
  );
}