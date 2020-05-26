import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    quotes: {
        margin: "5rem 0",
    },
    quotesItem: {
        border: "1px solid #808787", 
        padding: '2rem',
    },
    quotesItemQuote: {
        color: '#fff', 
        fontSize: '1.2rem',
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    quotesItemAthor: {
        color: '#B8B8B8', 
        textAlign: 'end', 
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
}));

const Quotes = () => {
    const classes = useStyles()
    return(
        <Box className={classes.quotes}>
            <Box className={classes.quotesItem}>
                <Typography className={classes.quotesItemQuote} variant="body1">“Don’t worry about failure you only have to be right once.”</Typography>
                <Typography className={classes.quotesItemAthor} variant="body2">Drew Huston - Dropbox Co-Funder</Typography>
            </Box>
        </Box>
    )
}

export default Quotes