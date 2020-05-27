import React from 'react';
import { Box, makeStyles, Link, Typography } from '@material-ui/core'
import ProjectOne from './../../img/amd-automation-project.png'

const useStyles = makeStyles((theme) => ({
    projectGallery: {
        margin: "5rem 0",
    },
    projectGalleryWrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '2rem',
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: '1fr',
        },
    },
    projectGalleryItem: {
        transition: "450ms all",
        position: "relative",
        "&:hover": {
            transform: 'scale(1.05)',
        },
        "&:before": {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            content: "''",
            backgroundColor: "rgba(255,255,255,0)",
            transition: '450ms all',
        },
        "&:hover:before": {
            backgroundColor: "rgba(255,255,255,0.1)",
        },
    },
}));

const ProjectGallery = () => {
  const classes = useStyles()
  return (
    <Box className={classes.projectGallery}>
        <Typography style={{color: '#fff', marginBottom: "2rem", fontWeight: 'bolder', fontSize: '1.2rem'}} variant="h6">Projects</Typography>
        <Box className={classes.projectGalleryWrapper}>
            <Link className={classes.projectGalleryItem} href="https://eljuanii00.github.io/amd-automation"><img src={ProjectOne} alt="" width="100%"/></Link>
        </Box>
    </Box>
  )
}

export default ProjectGallery