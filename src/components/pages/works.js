import React from 'react';

import { Box, makeStyles } from '@material-ui/core'
import Breadcrumbs from './../molecules/breadcrumbs'

import ProjectGallery from './../molecules/projectGallery'

const useStyles = makeStyles((theme) => ({
  works: {
      margin: "0 20%",
      [theme.breakpoints.down("md")]: {
          margin: "0 2rem",
      }
  },
}));

const Works = () => {
  const classes = useStyles()
  return (
    <>
        <Breadcrumbs />
        <Box className={classes.works}>
          <ProjectGallery/>
        </Box>
    </>
  )
}

export default Works