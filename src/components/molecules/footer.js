import React from 'react';
import { Box, Typography, makeStyles, IconButton, Link } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useRouteMatch } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    footer: {
        height: "0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        position: "fixed",
        bottom: "3rem",
        left: "3rem",
        right: "3rem",
        zIndex: "1000",
        color: "#fff",
        [theme.breakpoints.down('md')]: {
            position: "absolute",
        },
    }, 
    footerNav: {
        display: "flex",
        flexDirection: "column",
    },
    footerNavListWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: '0',
        marginBottom: '-0.75rem',
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
    footerNavListItemIcon: {
        color: '#fff',
        transition: "450ms all",
        "&:hover": {
            color: '#56d8b7',
        },
    },
    [theme.breakpoints.down('md')]: {
        footerEMail: {
            display: "none",
        },
        footerNavListItemLabel: {
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
    const classes = useStyles()
    let match = useRouteMatch()
    return (
        <Box className={classes.footer}>
            <Typography className={classes.footerEMail} variant="body2">E: me.juanponce@gmail.com</Typography>
            <nav className={match.isExact ? classes.footerNav : classes.disable}>
                <Typography className={classes.footerNavListItemLabel} variant="body2">Follow Me</Typography>
                <ul className={classes.footerNavListWrapper}>
                    <li><Link href="https://www.linkedin.com/in/eljuanii00/"><IconButton className={classes.footerNavListItemIcon}><LinkedInIcon/></IconButton></Link></li>
                    <li><Link href="https://www.instagram.com/eljuanii00/"><IconButton className={classes.footerNavListItemIcon}><InstagramIcon/></IconButton></Link></li>
                    <li><Link href="https://twitter.com/ElJuanii00/"><IconButton className={classes.footerNavListItemIcon}><TwitterIcon/></IconButton></Link></li>
                    <li><Link href="https://www.youtube.com/channel/UCOdGLEz1OWAHdEFdLb0lk9Q"><IconButton className={classes.footerNavListItemIcon}><YouTubeIcon/></IconButton></Link></li>
                </ul>
            </nav>
        </Box>
    )
}

export default Footer