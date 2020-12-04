import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Mail, HomeRounded } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
    Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        height: '65px',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    toolBar: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuItem: {
        fontFamily: "'Raleway', sans-serif",
        width: ' 95%',
        borderRadius: 4,
        margin: 5,
        // marginLeft: 10,
        color: '#212121',
        "&:hover": {
            background: "none"
        },
        "&:focuss": {
            background: "none"
        }
    },
    details: {
        // margin: 5,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        "& a": {
            width: "100%"
        }
    }
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.toolBar}>
                    <Link className="container-logo" to="/">
                        <img src="https://i.ibb.co/Vvwk6Dw/logo.png" />
                    </Link>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {[{ name: 'Inicio', to: '/' }, { name: 'Institucional' }, { name: 'Contacto', to: '/Contacto' }].map((item, index) => (
                        <Link className="itemMenu" to={item.to} key={index}>
                            {item.name !== "Institucional" &&
                                <Link onClick={handleClose} className="itemMenu" to={item.to}>
                                    <MenuItem className={classes.menuItem}>
                                        {item.name}
                                    </MenuItem>
                                </Link>}
                            {item.name === "Institucional" &&
                                <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                        style={{ margin: 5 }}
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        {item.name}
                                    </AccordionSummary>
                                    <AccordionDetails className={classes.details}>
                                        <Link onClick={handleClose} className="itemMenu" to="/historia">
                                            <MenuItem className={classes.menuItem}>
                                                Historia
                                            </MenuItem>
                                        </Link>
                                        <Link onClick={handleClose} className="itemMenu" to="/comision">
                                            <MenuItem className={classes.menuItem}>
                                                Comisión
                                            </MenuItem>
                                        </Link>
                                        <Link onClick={handleClose} className="itemMenu" to="/principios">
                                            <MenuItem className={classes.menuItem}>
                                                Principios
                                            </MenuItem>
                                        </Link>
                                    </AccordionDetails>
                                </Accordion>
                            }
                        </Link>
                    ))}
                </List>

            </Drawer>
        </div>
    );
}