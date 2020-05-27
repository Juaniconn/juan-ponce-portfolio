import React from 'react'
import { Box, makeStyles, Typography, Button, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    expAndEdu: {
        margin: "5rem 0",
        display: "grid",
        gap: '2rem',
        gridTemplateColumns: "1fr 1fr",
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
        },
    },
    expAndEduTypography: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    expAndEduWrapper: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "2rem",
    },
    expAndEduItem: {
        display: 'grid',
        gridGap: '0.25rem',
        border: "1px solid #808787", 
        padding: '2rem',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
    },
    expAndEduButtonWrapper: {
        justifySelf: 'end',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    expAndEduButton: {
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


const ExpAndEdu = () => {
    const classes = useStyles()
    return(
        <Box className={classes.expAndEdu}>
            <Box>
                <Typography style={{color: '#fff', fontWeight: 'bolder', fontSize: '1.2rem', marginBottom: '2rem'}} variant="h6">Experience</Typography>
                <Box className={classes.expAndEduWrapper}>
                    <Box className={classes.expAndEduItem}>
                        <Typography style={{color: '#56D8B7', fontWeight: 'bold', fontSize: '1rem'}} variant="subtitle1">2019 - Present</Typography>
                        <Typography style={{color: '#fff', fontSize: '1.2rem', fontWeight: 'bold'}} variant="h6">Frontend Developer - Primal Technologies</Typography>
                        <Typography style={{color: '#fff'}} variant="body1">Monitored in technical aspects of the front-end from the beginning of process to delivery terms.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography style={{color: '#fff', fontWeight: 'bolder', fontSize: '1.2rem', marginBottom: '2rem'}} variant="h6">Education</Typography>
                <Box className={classes.expAndEduWrapper}>
                    <Box className={classes.expAndEduItem}>
                        <Typography style={{color: '#56D8B7', fontWeight: 'bold', fontSize: '1rem'}} variant="subtitle1">2018-2022 (Present)</Typography>
                        <Typography style={{color: '#fff', fontSize: '1.2rem', fontWeight: 'bold'}} variant="h6">Software Engineer - Guadalajara </Typography>
                        <Typography style={{color: '#fff'}} variant="body1">Currently studying Software Engineer for a Degree in Universidad Autónoma de Guadalajara.</Typography>
                    </Box>
                    <Box className={classes.expAndEduItem}>
                        <Typography style={{color: '#56D8B7', fontWeight: 'bold', fontSize: '1rem'}} variant="subtitle1">2018-2019</Typography>
                        <Typography style={{color: '#fff', fontSize: '1.2rem', fontWeight: 'bold'}} variant="h6">Frontend Developer - Platzi</Typography>
                        <Typography style={{color: '#fff'}} variant="body1">Career - Git & GitHub, HTML5, CSS, JavaScript, React, Design System,  PostCSS preprocessor.</Typography>
                        <Box className={classes.expAndEduButtonWrapper}>
                            <Link href="https://platzi.com/@ElJuanii00/carrera/arquitecto/diploma/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}><Button className={classes.expAndEduButton} variant="contained">Certificate</Button></Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ExpAndEdu