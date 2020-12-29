import React from 'react';

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import {
    Link
} from "react-router-dom";
import "../styles/header.css";

import MenuDrawer from "./MenuDrawer"
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    popper: {
        top: '10px !important',
        zIndex: 1000,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolBar: {
        height: '200%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    toolBarItems: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuItem: {
        fontFamily: "'Raleway', sans-serif",
        borderRadius: 4,
        margin: 5,
        color: 'white',
    },
    menuSubItem: {
        fontFamily: "'Raleway', sans-serif",
        borderRadius: 4,
        margin: 5,
        color: '#da251c',
    }
}));

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className="cnt-header">
            <div className="normal">
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
                        <div className={classes.toolBarItems}>
                            <Link className="itemMenu" to="/">
                                <MenuItem className={classes.menuItem}>
                                    Inicio
                            </MenuItem>
                            </Link>

                            <Link
                                className="itemMenu"
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                            >
                                <MenuItem className={classes.menuItem}>
                                    Institucional
                            </MenuItem>
                            </Link>

                            <Link className="itemMenu" to="/contacto">
                                <MenuItem className={classes.menuItem}>
                                    Contacto
                            </MenuItem>
                            </Link>

                        </div>
                    </Toolbar>
                </AppBar>
                <div className="cnt-popper">
                    <Popper className={classes.popper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <div className={classes.toolBarItems}>
                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                <Link onClick={handleClose} className="itemSubMenu" to="/historia">
                                                    <MenuItem className={classes.menuSubItem}>
                                                        Historia
                                            </MenuItem>
                                                </Link>
                                                <Link onClick={handleClose} className="itemSubMenu" to="/comision">
                                                    <MenuItem className={classes.menuSubItem}>
                                                        Comisión
                                            </MenuItem>
                                                </Link>
                                                <Link onClick={handleClose} className="itemSubMenu" to="/principios">
                                                    <MenuItem className={classes.menuSubItem}>
                                                        Principios
                                            </MenuItem>
                                                </Link>
                                            </MenuList>
                                        </div>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
            <div className="anormal">
                <MenuItem className="menuDrawer" style={{ display: "none" }}>
                    <MenuDrawer />
                </MenuItem>
            </div>

        </div>
    );
}

export default Header;