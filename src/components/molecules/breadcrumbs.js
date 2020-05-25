import React from 'react';
import { Box, makeStyles, Typography, Breadcrumbs, Link } from '@material-ui/core'
import { useRouteMatch, withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    breadcrumbs: {
        width: '100%',
        height: '100vh',
    },
    breadcrumbsTitle: {
        color: "white", 
        fontWeight: "bold", 
        textTransform: "capitalize",
        position: "absolute",
        top: '0',
        bottom: '0',
        left: "0",
        right: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]:{
            fontSize: "3rem",
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: "2rem",
        },
    },
    breadcrumbsWrapper: {
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: '3rem',
        [theme.breakpoints.down('md')]: {
            bottom: '2rem',
            left: "2rem",
            justifyContent: 'flex-start'
        },
        "& li": {
            color: 'rgba(255,255,255,.5)',
        },
    },
}));

const BreadcrumbsComponent = (props) => {
    const classes = useStyles()
    let match = useRouteMatch()
    return (
        <>
            <Box className={classes.breadcrumbs}>
                <Typography className={classes.breadcrumbsTitle} variant="h2">{(match.url).substr(1)}</Typography>
                <Breadcrumbs className={classes.breadcrumbsWrapper} aria-label="breadcrumb">
                    <Link style={{color: 'white', cursor: 'pointer', fontWeight: 'bold'}} href="" onClick={() => props.history.push('/')}>Home</Link>
                    <Typography style={{textTransform: 'capitalize', fontWeight: 'bold'}} color="inherit">{(match.url).substr(1)}</Typography>
                </Breadcrumbs>
            </Box>
        </>
    )
}

export default withRouter(BreadcrumbsComponent)