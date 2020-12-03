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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // paper: {
    //     marginRight: theme.spacing(2),
    // },
    popper: {
        top: '10px !important',
        zIndex: 1000,
        // width: 300,
        // backgroundColor: 'red',
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
        <header>
            <Link className="container-logo" to="/">
                <img src="https://i.ibb.co/Vvwk6Dw/logo.png" />
            </Link>
            <nav>
                <ul className="containerNav">
                    <li>
                        <MenuItem>
                            <Link className="itemMenu" to="/">Inicio</Link>
                        </MenuItem>
                    </li>
                    <li>
                        <MenuItem
                            className="itemMenu"
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            Institucional
                        </MenuItem>
                    </li>
                    <li>
                        <MenuItem>
                            <Link className="itemMenu" to="/contact">Contacto</Link>
                        </MenuItem>
                    </li>
                    <li>
                    </li>
                </ul>
                {/* <div className={classes.root}> */}
                <div>
                    <Popper className={classes.popper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose}>
                                                <Link className="itemSubMenu" to="/historia">Historia</Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link className="itemSubMenu" to="/comision">Comisión</Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link className="itemSubMenu" to="/principios">Principios</Link>
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
                {/* </div> */}
            </nav>


        </header>
    );
}

export default Header;