import React from 'react'
import { Box, makeStyles, Typography, Button } from '@material-ui/core'
import Avatar from './../../img/avatar.jpg'

const useStyles = makeStyles((theme) => ({
    biography: {
        border: "1px solid #808787",
        padding: "2rem",
        margin: "2rem 0",
        display: "grid",
        gridTemplateColumns: '10rem 1fr',
        gridGap: '2rem',
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: '1fr',
        }
    },
    biographyTypography: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    biographyItemContent: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        "& span": {
            color: '#fff', 
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
            "& span": {
                textAlign: 'center', 
            },
        },
    },
    biographyButtonWrapper: {
        justifySelf: 'end',
        [theme.breakpoints.down('xs')]: {
            justifySelf: 'initial',
        }
    },
    biographyButtonItem: {
        marginTop: '1rem',
        backgroundColor: "transparent",
        color: '#56D8B7',
        border: '1px solid #56D8B7',
        "&:hover": {
            backgroundColor: "#56D8B7",
            color: 'white',
            border: '1px solid transparent',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
}));


const Biography = () => {
    const classes = useStyles()
    return(
        <Box className={classes.biography}>
            <Box>
                <img src={Avatar} width="100%" alt=""/>
            </Box>
            <Box display='grid'>
                <Typography className={classes.biographyTypography} style={{color: '#fff', marginBottom: '1rem'}} variant="body1">Hello! I'm Juan Ponce. Frontend Developer and UX/UI from Guadalajara, Mexico. My passion is to create web pages that runs in any device and platform. I use modern tools that helps me optimize my code to satisfice the client needs. I love learning new abilities in order to enrich my knowledge and performance skills.</Typography>
                <Box className={classes.biographyItemContent}>
                    <Typography className={classes.biographyTypography} variant="subtitle1" style={{color: '#fff'}}><span style={{color: "#56D8B7"}}>Age: </span>19</Typography>
                    <Typography className={classes.biographyTypography} variant="subtitle1" style={{color: '#fff'}}><span style={{color: "#56D8B7"}}>Freelance: </span>Available</Typography>
                    <Typography className={classes.biographyTypography} variant="subtitle1" style={{color: '#fff'}}><span style={{color: "#56D8B7"}}>Email: </span>me.juanponce@gmail.com</Typography>
                    <Typography className={classes.biographyTypography} variant="subtitle1" style={{color: '#fff'}}><span style={{color: "#56D8B7"}}>Residence: </span>Mexico</Typography>
                    <Typography className={classes.biographyTypography} variant="subtitle1" style={{color: '#fff'}}><span style={{color: "#56D8B7"}}>Address: </span>Guadalajara</Typography>
                </Box>
                <Box className={classes.biographyButtonWrapper}><Button className={classes.biographyButtonItem} variant="contained">Download CV</Button></Box>
            </Box>
        </Box>
    )
}

export default Biography