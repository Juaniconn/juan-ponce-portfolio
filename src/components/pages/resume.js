import React from 'react';

import { Box, makeStyles } from '@material-ui/core'

import Breadcrumbs from './../molecules/breadcrumbs'
import Biography from './../molecules/biography'

const useStyles = makeStyles((theme) => ({
    resume: {
        margin: "0 20%",
        [theme.breakpoints.down("md")]: {
            margin: "0 2rem",
        }
    },
}));

const Resume = () => {
    const classes = useStyles()
    return (
        <>
            <Breadcrumbs />
            <Box className={classes.resume}>
                <Biography />
            </Box>
        </>
    )
}

export default Resume