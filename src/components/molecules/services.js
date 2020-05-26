import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import WebIcon from '@material-ui/icons/Web';
import LanguageIcon from '@material-ui/icons/Language';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import DevicesIcon from '@material-ui/icons/Devices';

const useStyles = makeStyles((theme) => ({
    services: {
        margin: "5rem 0",
    },
    servicesTypography: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    servicesWrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "2rem",
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
        },
    },
    servicesItem: {
        display: "flex",
        textAlign: "center",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid #808787", 
        padding: '2rem',
    },
}));


const Services = () => {
    const classes = useStyles()
    return(
        <Box className={classes.services}>
            <Typography style={{color: '#fff', marginBottom: "2rem", fontWeight: 'bolder', fontSize: '1.2rem'}} variant="h6">Services</Typography>
            <Box className={classes.servicesWrapper}>
                <Box className={classes.servicesItem}>
                    <WebIcon style={{color: '#fff', fontSize: '2rem'}}></WebIcon>
                    <Typography style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'}} variant="subtitle1">Web Development</Typography>
                    <Typography style={{color: '#fff'}} variant="body1">Modern and smooth websites will help you reach all of your marketing strategies and beyond.</Typography>
                </Box>
                <Box className={classes.servicesItem}>
                    <LanguageIcon style={{color: '#fff', fontSize: '2rem'}}></LanguageIcon>
                    <Typography style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'}} variant="subtitle1">WPO (Web Page Optimization)</Typography>
                    <Typography style={{color: '#fff'}} variant="body1">I´m implementing interesting stuff that optimize the load process in any browser that helps you posicionate on top search result.</Typography>
                </Box>
                <Box className={classes.servicesItem}>
                    <ViewQuiltIcon style={{color: '#fff', fontSize: '2rem'}}></ViewQuiltIcon>
                    <Typography style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'}} variant="subtitle1">Prototypes</Typography>
                    <Typography style={{color: '#fff'}} variant="body1">Generating unique ideas from scratch. Creating the wireframes from pencil and paper. Renderice it with Adobe XD program to make it alive.</Typography>
                </Box>
                <Box className={classes.servicesItem}>
                    <DevicesIcon style={{color: '#fff', fontSize: '2rem'}}></DevicesIcon>
                    <Typography style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'}} variant="subtitle1">Responsive Design</Typography>
                    <Typography style={{color: '#fff'}} variant="body1">Developing an incredible website that runs in any device screen will increase the number of opportunities to reach you in contact.</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Services