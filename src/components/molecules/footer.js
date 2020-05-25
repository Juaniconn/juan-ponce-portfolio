import React from 'react';
import { Box, Typography, makeStyles, IconButton, Link } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
    footer: {
        height: "0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        position: "absolute",
        bottom: "3rem",
        left: "3rem",
        right: "3rem",
        zIndex: "1000",
        color: "#fff",
    }, 
    footerNav: {
        display: "flex",
        flexDirection: "column",
    },
    footerNavListWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: '0',
        padding: "0",
        position: "relative",
        "& li": {
            listStyle: "none",
        }
    }, 
    footerNavListItemLabel: {
        display: 'flex', 
        alignItems: "center",
        transformOrigin: "100% 0",
        position: "absolute",
        right: "0",
        lineHeight: "3rem",
        transform: "rotate(90deg)",
        "&:after": {
            content: "''",
            right: "0",
            width: "50px",
            height: "1px",
            background: "#fff",
            margin: "0 0 0 1rem",
        }
    },
    [theme.breakpoints.down('sm')]: {
        footerNavListItemLabel: {
            display: "none",
        },
        footerEMail: {
            display: "none",
        },
        footer: {
            bottom: "2rem",
            left: "2rem",
            right: "2rem",
            justifyContent: "flex-end",
        }, 
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footer}>
            <Typography className={classes.footerEMail} variant="body2">E: me.juanponce@gmail.com</Typography>
            <nav className={classes.footerNav}>
                <Typography className={classes.footerNavListItemLabel} variant="body2">Follow Me</Typography>
                <ul className={classes.footerNavListWrapper}>
                    <li><Link href="https://www.linkedin.com/in/eljuanii00/"><IconButton style={{color: '#fff'}}><LinkedInIcon/></IconButton></Link></li>
                    <li><Link href="https://www.instagram.com/eljuanii00/"><IconButton style={{color: '#fff'}}><InstagramIcon/></IconButton></Link></li>
                    <li><Link href="https://twitter.com/ElJuanii00/"><IconButton style={{color: '#fff'}}><TwitterIcon/></IconButton></Link></li>
                    <li><Link href="https://www.youtube.com/channel/UCOdGLEz1OWAHdEFdLb0lk9Q"><IconButton style={{color: '#fff'}}><YouTubeIcon/></IconButton></Link></li>
                </ul>
            </nav>
        </Box>
    )
}

export default Footer