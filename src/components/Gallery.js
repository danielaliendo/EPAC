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
        // backgroundColor: 'white',
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
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Año 2012</ListSubheader>
                </GridListTile>
                {photoGallery[2012].map((photo, key) =>

                    <GridListTile key={key} className={classes.gridCard}>
                        <img className="imgGridList" src={photo.img} alt={photo.title} />

                        {
                            <GridListTileBar
                                title={photo.title && photo.title}
                                subtitle={photo.author && <span>{photo.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${photo.title}`} className={classes.icon} onClick={() => handleClickOpen(photo.img)} photo={photo.img}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />}
                    </GridListTile>
                )}
            </GridList>
            <GalleryModal handleClose={handleClose} open={open} image={image} />

            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Año 2013</ListSubheader>
                </GridListTile>
                {photoGallery[2013].map((photo, key) =>
                    <GridListTile key={key} className={classes.gridCard}>
                        <img className="imgGridList" src={photo.img} alt={photo.title} />

                        {
                            <GridListTileBar
                                title={photo.title && photo.title}
                                subtitle={photo.author && <span>{photo.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${photo.title}`} className={classes.icon} onClick={() => handleClickOpen(photo.img)} photo={photo.img}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />}
                    </GridListTile>
                )}
            </GridList>

            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Año 2014</ListSubheader>
                </GridListTile>
                {photoGallery[2014].map((photo, key) =>
                    <GridListTile key={key} className={classes.gridCard}>
                        <img className="imgGridList" src={photo.img} alt={photo.title} />

                        {
                            <GridListTileBar
                                title={photo.title && photo.title}
                                subtitle={photo.author && <span>{photo.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${photo.title}`} className={classes.icon} onClick={() => handleClickOpen(photo.img)} photo={photo.img}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />}
                    </GridListTile>
                )}
            </GridList>

            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Año 2015</ListSubheader>
                </GridListTile>
                {photoGallery[2015].map((photo, key) =>
                    <GridListTile key={key} className={classes.gridCard}>
                        <img className="imgGridList" src={photo.img} alt={photo.title} />

                        {
                            <GridListTileBar
                                title={photo.title && photo.title}
                                subtitle={photo.author && <span>{photo.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${photo.title}`} className={classes.icon} onClick={() => handleClickOpen(photo.img)} photo={photo.img}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />}
                    </GridListTile>
                )}
            </GridList>

            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Año 2016</ListSubheader>
                </GridListTile>
                {photoGallery[2016].map((photo, key) =>
                    <GridListTile key={key} className={classes.gridCard}>
                        <img className="imgGridList" src={photo.img} alt={photo.title} />

                        {
                            <GridListTileBar
                                title={photo.title && photo.title}
                                subtitle={photo.author && <span>{photo.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${photo.title}`} className={classes.icon} onClick={() => handleClickOpen(photo.img)} photo={photo.img}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />}
                    </GridListTile>
                )}
            </GridList>

            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Año 2017</ListSubheader>
                </GridListTile>
                {photoGallery[2017].map((photo, key) =>
                    <GridListTile key={key} className={classes.gridCard}>
                        <img className="imgGridList" src={photo.img} alt={photo.title} />

                        {
                            <GridListTileBar
                                title={photo.title && photo.title}
                                subtitle={photo.author && <span>{photo.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${photo.title}`} className={classes.icon} onClick={() => handleClickOpen(photo.img)} photo={photo.img}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />}
                    </GridListTile>
                )}
            </GridList>

            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Año 2018</ListSubheader>
                </GridListTile>
                {photoGallery[2018].map((photo, key) =>
                    <GridListTile key={key} className={classes.gridCard}>
                        <img className="imgGridList" src={photo.img} alt={photo.title} />

                        {
                            <GridListTileBar
                                title={photo.title && photo.title}
                                subtitle={photo.author && <span>{photo.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${photo.title}`} className={classes.icon} onClick={() => handleClickOpen(photo.img)} photo={photo.img}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />}
                    </GridListTile>
                )}
            </GridList>

            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Año 2019</ListSubheader>
                </GridListTile>
                {photoGallery[2019].map((photo, key) =>
                    <GridListTile key={key} className={classes.gridCard}>
                        <img className="imgGridList" src={photo.img} alt={photo.title} />

                        {
                            <GridListTileBar
                                title={photo.title && photo.title}
                                subtitle={photo.author && <span>{photo.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${photo.title}`} className={classes.icon} onClick={() => handleClickOpen(photo.img)} photo={photo.img}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />}
                    </GridListTile>
                )}
            </GridList>
        </div>
    );
}