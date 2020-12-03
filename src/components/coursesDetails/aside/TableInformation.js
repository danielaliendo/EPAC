import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AssignmentTurnedInOutlined, AssignmentLateOutlined, EventOutlined, ScheduleOutlined } from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DurationIcon from '@material-ui/icons/AssignmentOutlined';

const useStyles = makeStyles((theme) => ({

    demo: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        paddingTop: '8px',
        paddingBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    listItemIcon: {
        minWidth: 0,
        margin: '15px'
    },
}));

const GeneralInfromarion = ( { curso }, dense) => {
    const classes = useStyles();

    const showAside = curso.duracion_del_curso.cantidad_de_clases && curso.duracion_del_curso.cantidad_de_clases != "" && curso.duracion_del_curso.inicio_del_curso && curso.duracion_del_curso.inicio_del_curso != "" && curso.duracion_del_curso.fin_del_curso && curso.duracion_del_curso.fin_del_curso != ""

 return(
     <>
    {showAside
        ? <div className={classes.demo}>
            <List className={classes.list} dense={dense}>
                {curso.duracion_del_curso.cantidad_de_clases && curso.duracion_del_curso.cantidad_de_clases != "" &&
                    <ListItem>
                        <ListItemIcon className={classes.listItemIcon}>
                            <DurationIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Duración del curso"
                            secondary={curso.duracion_del_curso.cantidad_de_clases}
                        />
                    </ListItem>}

                {curso.duracion_del_curso.inicio_del_curso && curso.duracion_del_curso.inicio_del_curso != "" &&
                    <ListItem>
                        <ListItemIcon className={classes.listItemIcon}>
                            <AssignmentLateOutlined />
                        </ListItemIcon>
                        <ListItemText
                            primary="Fecha de inicio"
                            secondary={curso.duracion_del_curso.inicio_del_curso}
                        />
                    </ListItem>}

                {curso.duracion_del_curso.fin_del_curso && curso.duracion_del_curso.fin_del_curso != "" &&
                    <ListItem>
                        <ListItemIcon className={classes.listItemIcon}>
                            <AssignmentTurnedInOutlined />
                        </ListItemIcon>
                        <ListItemText
                            primary="Fecha de finalización"
                            secondary={curso.duracion_del_curso.fin_del_curso}
                        />
                    </ListItem>}
                <div className="line">
                </div>
                <ListItem>
                    <ListItemIcon className={classes.listItemIcon}>
                        <EventOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary="Dia/s de cursado"
                        secondary={curso.clases.dias_y_horario.default.dias.map(dia => dia)}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon className={classes.listItemIcon}>
                        <ScheduleOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary="Horario/s"
                        secondary={curso.clases.dias_y_horario.default.horarios.map(horario => horario)}
                    />
                </ListItem>
            </List>
        </div>
        : null
    }
     </>
 );
}

export default GeneralInfromarion;