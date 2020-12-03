import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip';
import { Input } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import "./../../../styles/InscriptionModal.css";


const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    fontSize: "14px",
    backgroundColor: theme.palette.common.black,
  },

}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    display: "flex",
    alignItems: "center"
  },
  input: {
    display: 'none'
  },
  userName: {
    marginBottom: '10px',
    width: "100%",
  },
  containerButtonAddTicket: {
    marginTop: '10px',
    width: '90%',
    marginBottom: '10px',
  },
  chipFileName: {
    overflow: 'hidden',
    maxWidth: '250px !important',
    margin: '10px 0',
    "MuiChip-label": {
    width: '100% !important',
    }
  },
  buttonSend: {
    width: '90%',
    marginBottom: '25px'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '25px 5px 5px',
    margin: '10px 0',
    borderRadius: 4,
    border: '1px solid #949494'
  },
  inputForm: {
    width: '90%',
    marginBottom: '10px'
  }
}))

export default function UploadButtons() {
  const classes = useStyles()
  const [pdfState, setPdfState] = useState({
    file: null,
    error: null
  })

  const handleFiles = file => {
    const myFile = file?.target?.files[0]

    myFile.type === 'application/pdf'
      ? setPdfState({ ...pdfState, file: myFile, error: null })
      : setPdfState({ ...pdfState, error: 'Error: Debe ser un archivo .pdf' })
      console.log(myFile)
  }

  const handleDeleteFile = () => {
    setPdfState({ ...pdfState, file: null })
  }

  const { state } = useLocation()
  const { curso } = state;

  return (
    <form className={classes.form} id="myForm" action="https://formsubmit.co/danielaliendo98@gmail.com" method = "POST" enctype="multipart/form-data" >

      <BootstrapTooltip title="Ingresa tu nombre completo (como figura en tu documento nacional de identidad)" placement="right">
        <Input className={classes.inputForm} name="Nombre" type="text" placeholder="Nombre" required inputProps={{ 'aria-label': 'description' }} />
      </BootstrapTooltip>

      <BootstrapTooltip title="Ingresa tu apellido/s (como figura en tu documento nacional de identidad)" placement="right">
        <Input className={classes.inputForm} name="Apellido" type="text" placeholder="Apellido" required inputProps={{ 'aria-label': 'description' }} />
      </BootstrapTooltip>

      <BootstrapTooltip title="Ingresa tu nro. de DNI sin puntos ni guiones" placement="right">
        <Input className={classes.inputForm} name="N° DNI" type="number" placeholder="DNI" required inputProps={{ 'aria-label': 'description' }} />
      </BootstrapTooltip>

      <BootstrapTooltip title="Ingresa tu dirección de correo electrónico" placement="right">
        <Input className={classes.inputForm} name="Correo electrónico" type="email" placeholder="Email" required inputProps={{ 'aria-label': 'description' }} />
      </BootstrapTooltip>

      <input className="inputFile" type="file" name="Archivo" accept="application/pdf" required/>

      <input type="hidden" name="_subject" value={`Inscripción al curso: ${curso.titulo}`} />
      <input type="hidden" name="_next" value="http://localhost:3000/epac-App?inscripcionOk" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      
      <Button
        id="buttonSubmit"
        className={classes.buttonSend}
        variant="contained"
        color="primary"
        type="submit"
        // onClick=""
      >Enviar</Button>
    </form>
  )
}