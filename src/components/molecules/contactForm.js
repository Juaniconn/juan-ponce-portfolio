import React, { Component } from 'react'
import { Box, makeStyles, Typography, FormControl, InputLabel, Input, TextareaAutosize, Button } from '@material-ui/core'
import Axios from 'axios';

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
        "&.Mui-disabled": {
            color: "rgba(86, 216, 183, 0.26)",
            border: "none",
            backgroundColor: "rgba(86, 216, 183, 0.12)",
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
}));


const ContactInfo = (props) => {
    const classes = useStyles()
    return(
        <>
            {/* {console.log(props.state)} */}
            <Box className={classes.contactInfo}>
                <Typography style={{color: '#fff', marginBottom: "2rem", fontWeight: 'bolder', fontSize: '1.2rem'}} variant="h6">Contact Form</Typography>
                <form onSubmit={props.handleSubmit} className={classes.contactInfoWrapper}>
                    <FormControl className={classes.contactInfoItem}>
                        <InputLabel style={{color: '#808787'}} htmlFor="full-name">Name</InputLabel>
                        <Input name="name" type="text" className={classes.contactInfoInput} id="full-name" aria-describedby="my-helper-text" value={props.state.name} onChange={props.handleChange} />
                    </FormControl>
                    <FormControl className={classes.contactInfoItem}>
                        <InputLabel style={{color: '#808787'}} htmlFor="email">Email address</InputLabel>
                        <Input name="email" type="email" className={classes.contactInfoInput} id="email"  aria-describedby="my-helper-text" value={props.state.email} onChange={props.handleChange} />
                    </FormControl>
                    <FormControl className={classes.contactInfoItem}>
                        <TextareaAutosize name="message" type="textarea" className={classes.contactInfoInput} rowsMin={10} id="message" aria-label="empty textarea" placeholder="Message" value={props.state.message} onChange={props.handleChange} />
                    </FormControl>
                    <FormControl className={classes.contactFormButtonWrapper}>
                        <Button className={classes.contactFormButtonItem} type="submit" variant="contained" disabled={true}>Send Message</Button>
                        {props.state.emailSent === true && <Typography variant="overline" style={{color: "#56D8B7", textAlign: "center"}}>Correo enviado</Typography>}
                        <Typography variant="overline" style={{color: "#56D8B7", textAlign: "center"}}>NOT AVAILABLE</Typography>
                    </FormControl>
                </form>
            </Box>
        </>
    )
}

class ContactSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }

    render(){
        return(
            <ContactInfo state={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        )
    }
}

export default ContactSection