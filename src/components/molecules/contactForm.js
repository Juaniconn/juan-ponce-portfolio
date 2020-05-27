import React from 'react'
import { Box, makeStyles, Typography, FormControl, InputLabel, Input, TextareaAutosize, Button } from '@material-ui/core'

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
        border: "1px solid #808787", 
        padding: '2rem',
        display: 'grid',
        gridGap: '1rem',
    },
    contactInfoItem: {

    },
    contactInfoInput: {
        color: 'white',
        backgroundColor: "transparent",
        outline: 'none',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderColor: '#808787',
        fontSize: "1rem",
        "&::placeholder": {
            color: '#808787',
            fontSize: "1rem",
        },
        "&:before": {
            borderBottom: "1px solid #808787",
        },
        "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid #808787 !important",
        },
        "&:after": {
            borderBottom: "1px solid #808787",
        },
    },
    contactFormButtonWrapper: {
        justifySelf: 'end',
        [theme.breakpoints.down('xs')]: {
            justifySelf: 'initial',
        }
    },
    contactFormButtonItem: {
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


const ContactInfo = () => {
    const classes = useStyles()
    return(
        <Box className={classes.contactInfo}>
            <Typography style={{color: '#fff', marginBottom: "2rem", fontWeight: 'bolder', fontSize: '1.2rem'}} variant="h6">Contact Form</Typography>
            <Box className={classes.contactInfoWrapper}>
                <FormControl className={classes.contactInfoItem}>
                    <InputLabel style={{color: '#808787'}} htmlFor="name">Name</InputLabel>
                    <Input className={classes.contactInfoInput} id="name" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.contactInfoItem}>
                    <InputLabel style={{color: '#808787'}} htmlFor="email">Email address</InputLabel>
                    <Input className={classes.contactInfoInput} id="email" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.contactInfoItem}>
                    <TextareaAutosize className={classes.contactInfoInput} rowsMin={10} id="message" aria-label="empty textarea" placeholder="Message" />
                </FormControl>
                <FormControl className={classes.contactFormButtonWrapper}>
                    <Button className={classes.contactFormButtonItem} variant="contained">Send Message</Button>
                </FormControl>
            </Box>
        </Box>
    )
}

export default ContactInfo