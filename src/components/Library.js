import React from 'react';
import "./../styles/Library.css";
import { books } from "./dbLibrary";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const Library = () => {

    const classes = useStyles();
    return (
        <div className="cnt flxBxClumn containerLibrary">
            <div className="flxBxCntr">
                <div class="cnt-title">
                    <h2 className="title">Biblioteca</h2>
                    <div class="border">
                    </div>
                </div>
            </div>
            <div className="cnt-content libraryBody">

                {
                    books.map((book, key) =>
                        <div className="book" key={key}>
                            <img className="bookImage" src={book.srcImg} width="104" height="142" />
                            <div
                            style={{padding: 10}}
                            >
                                <h4 className="bookTitle">Libro: "{book.title}"</h4>
                                <Button href={book.href} variant="outlined" color="primary" download>
                                    Descargar
                                </Button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Library;