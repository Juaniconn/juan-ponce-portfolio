import React from 'react';

import { Box, makeStyles } from '@material-ui/core'

import Breadcrumbs from './../molecules/breadcrumbs'
import Biography from './../molecules/biography'
import Services from './../molecules/services'
import PricingTable from './../molecules/pracingTable'
import ExpAndEdu from './../molecules/experience&Education'
import Lenguage from './../molecules/lenguageSkills'
import Knowledge from './../molecules/knowledge';

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
                <Services />
                <PricingTable />
                <ExpAndEdu />
                <Lenguage />
                <Knowledge />
            </Box>
        </>
    )
}

export default Resume