import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { DateRangeOutlined } from '@material-ui/icons';
import { Chip } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/ErrorOutlineOutlined';

const useStyles = makeStyles((theme) => ({
    
    chipModule: {
        marginLeft: '10px',
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    list: {
        paddingTop: '8px',
        paddingBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
}));

const GeneralInformation = ({ curso }) => {
    
    const classes = useStyles();

    const algo = curso.temario.find(item => item.contenido.length > 0)

    const information = curso.destinatarios || algo
    
    return (
        <>
            {information
                ?
                <article className="cntArticle">
                    {curso.destinatarios &&
                        <div className="center">
                            <h3>Destinatarios:</h3>
                            <p className="centerText">{curso.destinatarios}</p>
                        </div>}
                    {algo &&
                        <div className="center">
                            <h3>Temario del curso:</h3>
                            <div className="temary">
                                {curso.temario.map((modulo, key) =>
                                    modulo.contenido?.length > 0
                                        ?
                                        <div className="module" key={key}>
                                            {modulo.titulo &&
                                                <h4 className="sizeMedium moduleTitle">
                                                    {modulo.titulo}
                                                </h4>}
                                            {modulo.contenido &&
                                                <ul>
                                                    <li><p>{modulo.contenido}</p></li>
                                                </ul>}
                                            {modulo.actividad && <Chip
                                                className={classes.chipModule}
                                                icon={<DateRangeOutlined />}
                                                label={modulo.actividad}
                                            />}
                                        </div>
                                        : null
                                )}
                            </div>
                        </div>}
                </article>
                :
                <article className="cntArticle">
                    <div className="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: '100%'}}>
                        <Chip
                            className={classes.chipModule}
                            icon={<ErrorIcon />}
                            label='Información no disponible'
                        />
                    </div>
                </article>}
        </>
    )
}
export default GeneralInformation;