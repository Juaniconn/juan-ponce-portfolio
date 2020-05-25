import React from 'react'
import { Box, makeStyles, Typography, Grid } from '@material-ui/core'
import Avatar from './../../img/avatar.jpg'

const useStyles = makeStyles((theme) => ({
    biography: {
        border: "1px solid #808787",
        padding: "2rem",
        margin: "2rem 0",
    },
    briographyTypography: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
}));


const Biography = () => {
    const classes = useStyles()
    return(
        <Box className={classes.biography}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <img src={Avatar} width="100%" alt=""/>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Typography className={classes.briographyTypography} style={{color: '#fff', marginBottom: '1rem'}} variant="body1">Hello! I'm Juan Ponce. Frontend Developer and UX/UI from Guadalajara, Mexico. My passion is to create web pages that runs in any device and platform. I use modern tools that helps me optimize my code to satisfice the client needs. I love learning new abilities in order to enrich my knowledge and performance skills.</Typography>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Typography className={classes.briographyTypography} variant="subtitle1" style={{color: '#fff'}}><span style={{color: "#56D8B7"}}>Age: </span>19</Typography>
                            <Typography className={classes.briographyTypography} variant="subtitle1" style={{color: '#fff'}}><span style={{color: "#56D8B7"}}>Freelance: </span>Available</Typography>
                            <Typography className={classes.briographyTypography} variant="subtitle1" style={{color: '#fff'}}><span style={{color: "#56D8B7"}}>Email: </span>me.juanponce@gmail.com</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography className={classes.briographyTypography} variant="subtitle1" style={{color: '#fff'}}><span style={{color: "#56D8B7"}}>Residence: </span>Mexico</Typography>
                            <Typography className={classes.briographyTypography} variant="subtitle1" style={{color: '#fff'}}><span style={{color: "#56D8B7"}}>Address: </span>Guadalajara</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Biography