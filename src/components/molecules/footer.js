import React from 'react';
import { Box, Typography, makeStyles, IconButton } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
    header: {
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
    headerNav: {
        display: "flex",
        flexDirection: "column",
    },
    headerNavListWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: '0',
        padding: "0",
        position: "relative",
        "& li": {
            listStyle: "none",
        }
    }, 
    headerNavListItemLabel: {
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
        header: {
            bottom: "2rem",
            left: "2rem",
            right: "2rem",
        }, 
    },
}));

const Main = () => {
    const classes = useStyles();
    return (
        <Box className={classes.header}>
            <Typography variant="body2">E: me.juanponce@gmail.com</Typography>
            <nav className={classes.headerNav}>
                <Typography className={classes.headerNavListItemLabel} variant="body2">Follow Me</Typography>
                <ul className={classes.headerNavListWrapper}>
                    <li><IconButton style={{color: '#fff'}}><LinkedInIcon/></IconButton></li>
                    <li><IconButton style={{color: '#fff'}}><InstagramIcon/></IconButton></li>
                    <li><IconButton style={{color: '#fff'}}><TwitterIcon/></IconButton></li>
                    <li><IconButton style={{color: '#fff'}}><YouTubeIcon/></IconButton></li>
                </ul>
            </nav>
        </Box>
    )
}

export default Main