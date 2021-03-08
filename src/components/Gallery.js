import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GalleryModal from "./GalleryModal";
import { photoGallery } from "./dbGallery";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: 'flex-start',
        borderRadius: '4px'
    },
    gridList: {
        width: '100%',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        borderRadius: '4px'

    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    gridCard: {
        borderRadius: 8,
    }
}));

export default function TitlebarGridList() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState(null);

    const handleClickOpen = (photo) => {
        setOpen(true);
        setImage(photo);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <div className="subtitleCursosCards">
                <h2>EPAC a través del tiempo</h2>
                <div className="border" />
            </div>
            {
                photoGallery.sort((a, b) => b.year - a.year).map((date, key) => (
                    <GridList key={key} cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div">Año {date.year === 2020 || date.year === 2021 ? `${date.year} - Examen ERSeP` : date.year }</ListSubheader>
                        </GridListTile>
                        {
                            date.images.map((photo, key) =>

                                <GridListTile key={key} className={classes.gridCard}>
                                    <img className="imgGridList" src={photo} alt="img" />

                                    <GridListTileBar
                                        title={photo.title && photo.title}
                                        subtitle={photo.author && <span>{photo.author}</span>}
                                        actionIcon={
                                            <IconButton aria-label={`info about ${photo.title}`} className={classes.icon} onClick={() => handleClickOpen(photo)} photo={photo}>
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            )}
                    </GridList>
                ))

            }
            <GalleryModal handleClose={handleClose} open={open} image={image} />

        </div>
    );
}