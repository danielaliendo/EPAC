import React from 'react';
import { Link } from "react-router-dom";
import { LibraryBooks, CollectionsBookmark, LibraryAdd, SportsRugbySharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import './../styles/Buttons.css'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: 4,
        width: '360px',
        height: '120px',
        fontSize: 'x-large',
        fontFamily: "'Raleway', sans-serif",
        textTransform: 'capitalize',
        color: 'white'
    },
    buttonIcon: {
        marginRight: 8,
        fontSize: '35px !important',
    },
    link: {
        borderRadius: 4,
    }
}));

const Buttons = () => {

    const classes = useStyles();

    return (
        <div className="buttons">
            <Link
                className={classes.link}
                style={{ backgroundColor: '#3737d1' }}
                to="/cursos"
            >
                <Button className={classes.button}
                    case="Sentence case">
                    <CollectionsBookmark className={classes.buttonIcon} />
                    Cursos
                </Button>
            </Link>


            <Link
                className={classes.link}
                style={{ backgroundColor: '#fb4f4f' }}
                to="/biblioteca"
            >
                <Button className={classes.button}
                case="Sentence case">
                    <LibraryBooks className={classes.buttonIcon} />
                    Biblioteca
                </Button>
            </Link>

            <Link
                className={classes.link}
                style={{ backgroundColor: '#3bc29a' }}
                to="/conferencias"
            >
                <Button className={classes.button}
                case="Sentence case">
                    <LibraryAdd className={classes.buttonIcon} />
                    Conferencias
                </Button>
            </Link>


        </div>
    )
}

export default Buttons;