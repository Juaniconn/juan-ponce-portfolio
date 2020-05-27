import React, { useState } from 'react';
import { Typography, makeStyles, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import useDocumentScrollThrottled from './../tools/useDocumentScrollThrottled'
import { withRouter } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';

import HomeIcon from '@material-ui/icons/Home'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import BallotIcon from '@material-ui/icons/Ballot'
import ContactMailIcon from '@material-ui/icons/ContactMail'

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        padding: "3rem",
        height: "3rem",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "1200",
        color: "white",
        transform: "translateY(0)",
        transition: "transform 0.3s ease"
    }, 
    headerBackgroundShow: {
        backgroundColor: "#111",
    },
    headerNavListWrapper: {
        display: "flex",
        padding: "0",
        "& li": {
            listStyle: "none",
            margin: "0 1rem",
            padding: "0",
            fontWeight: "bold",
            cursor: "pointer",
        },
    },
    headerNavListItem: {
        fontWeight: 'bold',
        color: '#fff',
        transition: "450ms all",
        "&:hover": {
            color: '#56d8b7',
        },
    },
    headerNavHamburgerMenu: {
        display: "none",
        color: "white",
    },
    shadow: {
        boxShadow: '0 9px 9px -9px rgba(0, 0, 0, 1)',
    },
    hidden: {
        transform: 'translateY(-100%)',
    },
    [theme.breakpoints.down('md')]: {
        header: {
            padding: "3rem 2rem"
        }, 
    },
    [theme.breakpoints.down('xs')]: {
        headerNavListWrapper: {
            display: "none",
        },
        headerNavHamburgerMenu: {
            display: "block",
        },

        headerNavDrawerMenu: {
            position: "relative",
            "& .MuiDrawer-paperAnchorLeft": {
                width: "100%",
                backgroundColor: "#111",
            },
            "& .MuiList-padding": {
                padding: "0",
                margin: "4rem 0",
            },
            "& .MuiListItem-gutters": {
                padding: "1rem 2rem"
            },
        },
    },
}));


const Header = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const shadowStyle = shouldShowShadow ? classes.shadow : null;
    const hiddenStyle = shouldHideHeader ? classes.hidden : null;

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => (
        <div role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
          <List>
            {['Home', 'Resume', 'Works', 'Contact'].map((text, index) => (
              <ListItem onClick={() => props.history.push(text !== 'Home' ? text.toLowerCase() : '/')} button key={text}>
                <ListItemIcon style={{color: "white"}}>{index === 0 ? <HomeIcon /> : index === 1 ? <BusinessCenterIcon /> : index === 2 ? <BallotIcon /> : <ContactMailIcon />}</ListItemIcon>
                <ListItemText style={{color: "white"}} primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
    )
    return (
        <header className={`${classes.header} ${shadowStyle} ${hiddenStyle} ${(props.location.pathname).substr(1) === '' ? null : classes.headerBackgroundShow}`}>
        {/* {console.log(match)} */}
            <Typography className={classes.headerNavListItem} onClick={() => props.history.push('/')} style={{fontWeight: '900', cursor: 'pointer'}} variant="subtitle1">Juan Ponce</Typography>
            <nav>
                <ul className={classes.headerNavListWrapper}>
                    <li onClick={() => props.history.push('/')}><Typography className={classes.headerNavListItem} variant="subtitle1">Home</Typography></li>
                    <li onClick={() => props.history.push('/resume')}><Typography className={classes.headerNavListItem} variant="subtitle1">Resume</Typography></li>
                    <li onClick={() => props.history.push('/works')}><Typography className={classes.headerNavListItem} variant="subtitle1">Works</Typography></li>
                    <li onClick={() => props.history.push('/contact')}><Typography className={classes.headerNavListItem} variant="subtitle1">Contact</Typography></li>
                </ul>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <IconButton className={classes.headerNavHamburgerMenu} onClick={toggleDrawer(anchor, true)}><MenuIcon style={{color: 'white'}}/></IconButton>
                        <Drawer className={classes.headerNavDrawerMenu} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            <IconButton onClick={toggleDrawer(anchor, false)} style={{color: 'white', position: 'absolute', right: '0', margin: "1rem 1rem 0 0"}}><CloseIcon /></IconButton>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </nav>
        </header>
    )
}

export default withRouter(Header)