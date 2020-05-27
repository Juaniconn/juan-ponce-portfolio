import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme) => ({
    contactInfo: {
        margin: "5rem 0",
    },
    contactInfoTypography: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    contactInfoWrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "2rem",
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
        },
    },
    contactInfoItem: {
        display: "flex",
        textAlign: "center",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid #808787", 
        padding: '2rem',
    },
}));


const ContactInfo = () => {
    const classes = useStyles()
    return(
        <Box className={classes.contactInfo}>
            <Typography style={{color: '#fff', marginBottom: "2rem", fontWeight: 'bolder', fontSize: '1.2rem'}} variant="h6">Contact Info</Typography>
            <Box className={classes.contactInfoWrapper}>
                <Box className={classes.contactInfoItem}>
                    <EmailIcon style={{color: '#fff', fontSize: '2rem'}}></EmailIcon>
                    <Typography style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'}} variant="subtitle1">Email</Typography>
                    <Typography style={{color: '#fff'}} variant="body1">me.juanponce@gmail.com</Typography>
                </Box>
                <Box className={classes.contactInfoItem}>
                    <LocationOnIcon style={{color: '#fff', fontSize: '2rem'}}></LocationOnIcon>
                    <Typography style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'}} variant="subtitle1">Address</Typography>
                    <Typography style={{color: '#fff'}} variant="body1">Guadalajara, México</Typography>
                </Box>
                <Box className={classes.contactInfoItem}>
                    <WorkIcon style={{color: '#fff', fontSize: '2rem'}}></WorkIcon>
                    <Typography style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'}} variant="subtitle1">Freelance</Typography>
                    <Typography style={{color: '#fff'}} variant="body1">I am available for Freelance hire</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactInfo