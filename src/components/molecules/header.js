import React from 'react';
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        height: "3rem",
        top: "3rem",
        left: "3rem",
        right: "3rem",
        zIndex: "1200",
        color: "white",
    }, 
    headerNavListWrapper: {
        display: "flex",
        padding: "0",
        "& li": {
            listStyle: "none",
            padding: "0 1rem",
            fontWeight: "bold",
        }
    }
}));

const Main = () => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Typography style={{fontWeight: '900'}} variant="subtitle1">Juan Ponce</Typography>
            <nav>
                <ul className={classes.headerNavListWrapper}>
                    <li><Typography style={{fontWeight: 'bold'}} variant="subtitle1">Home</Typography></li>
                    <li><Typography style={{fontWeight: 'bold'}} variant="subtitle1">Resume</Typography></li>
                    <li><Typography style={{fontWeight: 'bold'}} variant="subtitle1">Works</Typography></li>
                    <li><Typography style={{fontWeight: 'bold'}} variant="subtitle1">Contact</Typography></li>
                </ul>
            </nav>
        </header>
    )
}

export default Main