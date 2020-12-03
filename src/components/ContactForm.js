import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '10px 0',
    '& .MuiTextField-root': {
      width: '95%',
      marginBottom: "10px"
    },
    '& button': {
      textTransform: "capitalize",
      width: '95%',
    },
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} autoComplete="off" action="https://formsubmit.co/danielaliendo98@gmail.com" method="POST">
        <TextField className={classes.input} name="Nombre" type="text" size="small" label="Nombre" variant="outlined" required/>
        <TextField className={classes.input} name="Apellido" type="text" size="small" label="Apellido" variant="outlined" required/>
        <TextField className={classes.input} name="Email" type="email" size="small" label="Email" variant="outlined" required/>
        <TextField className={classes.input} name="Celular" type="number" size="small" label="Celular" variant="outlined" required/>
        <TextField
          name="Mensaje"
          type="text"
          size="small"
          className={classes.input}
          id="outlined-multiline-static"
          label="Mensaje"
          multiline
          rows={4}
          variant="outlined"
          required
        />
        <input type="hidden" name="_subject" value={`Consulta`} />
        <input type="hidden" name="_next" value="https://danielaliendo.github.io/EPAC/?inscripcionOk" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        <Button variant="contained" size="large" color="primary" className={classes.button} type="submit">
          Enviar
        </Button>
      </form>
    </>
  );
}