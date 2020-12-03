import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Chip } from '@material-ui/core';
import { EventOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '10px',
        width: '90%',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: 'rgba(59, 6, 6, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Temary({ curso }) {
    const classes = useStyles();

    return (
        <div
        className={classes.root}>
        <h4 className="subTitileDetails">Temario</h4>
            {curso.temario.map((temario, key) =>
                <Accordion
                className={classes.acordion}
                elevation={0}
                key={key}>
                    {temario.titulo &&
                        <AccordionSummary
                            className={classes.summary}
                            elevation={0}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography className={classes.heading}>
                                {temario.titulo}
                            </Typography>
                        </AccordionSummary>
                    }
                    {temario.contenido &&
                        <AccordionDetails>
                            <Typography>
                                {temario.contenido}
                            </Typography>
                        </AccordionDetails>
                    }
                    {temario.actividad &&
                        <Chip
                            icon={<EventOutlined />}
                            label={temario.actividad}
                        />
                    }
                </Accordion>
            )}
        </div>
    );
}