import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

export const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        border: '1px solid red',
        Height: "fit-content",
    },
    imgModal: {
        width: "100%",
        Height: "100%",
        borderRadius: "4px"
    },
    dialogContent: {
        width: "fit-content",
        Height: "fit-content",
    }
}));

export default function AlertDialog({ open, handleClose, image }) {
    const classes = useStyles();

    return (

        <div>
            <Dialog
                className={classes.root}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className={classes.dialogContent}>
                    <img src={image} className={classes.imgModal}/>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Salir
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}