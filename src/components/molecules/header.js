import React from 'react';
import { Typography, makeStyles, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
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
        position: "absolute",
        height: "3rem",
        top: "3rem",
        left: "3rem",
        right: "3rem",
        zIndex: "1200",
        color: "white",
    }, 
    headerNavListWrapper: {
        display: "flex",
        padding: "0",
        "& li": {
            listStyle: "none",
            padding: "0 1rem",
            fontWeight: "bold",
        },
    },
    headerNavHamburgerMenu: {
        display: "none",
        color: "white",
    },
    [theme.breakpoints.down('sm')]: {
        header: {
            top: "2rem",
            left: "2rem",
            right: "2rem",
        }, 
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


const Main = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => (
        <div role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
          <List>
            {['Home', 'Resume', 'Works', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={{color: "white"}}>{index === 0 ? <HomeIcon /> : index === 1 ? <BusinessCenterIcon /> : index === 2 ? <BallotIcon /> : <ContactMailIcon />}</ListItemIcon>
                <ListItemText style={{color: "white"}} primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
    )

    return (
        <header className={classes.header}>
            <Typography style={{fontWeight: '900'}} variant="subtitle1">Juan Ponce</Typography>
            <nav>
                <ul className={classes.headerNavListWrapper}>
                    <li><Typography style={{fontWeight: 'bold'}} variant="subtitle1">Home</Typography></li>
                    <li><Typography style={{fontWeight: 'bold'}} variant="subtitle1">Resume</Typography></li>
                    <li><Typography style={{fontWeight: 'bold'}} variant="subtitle1">Works</Typography></li>
                    <li><Typography style={{fontWeight: 'bold'}} variant="subtitle1">Contact</Typography></li>
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

export default Main