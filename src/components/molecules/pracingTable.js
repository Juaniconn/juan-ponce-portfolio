import React from 'react'
import { Box, makeStyles, Typography, List, ListItem, ListItemText, Button } from '@material-ui/core'
import WebIcon from '@material-ui/icons/Web';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
    pricingTable: {
        margin: "5rem 0",
    },
    pricingTableTypography: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    pricingTableWrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "2rem",
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
        },
    },
    pricingTableItem: {
        display: "flex",
        textAlign: "center",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid #808787", 
        padding: '2rem',
    },
    pricingTableContent: {
        "& span": {
            color: '#fff', 
            textAlign: 'center', 
        },
        "&.b":{
            "& span": {
                textDecoration: 'line-through',
                color: '#808787',
            },
        },
    },
    pricingTableButton: {
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


const PricingTable = () => {
    const classes = useStyles()
    return(
        <Box className={classes.pricingTable}>
            <Typography style={{color: '#fff', marginBottom: "2rem", fontWeight: 'bolder', fontSize: '1.2rem'}} variant="h6">Pricing Table</Typography>
            <Box className={classes.pricingTableWrapper}>
                <Box className={classes.pricingTableItem}>
                    <WebIcon style={{color: '#fff', fontSize: '2rem'}}></WebIcon>
                    <Typography style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'}} variant="subtitle1">Landing Page (Basic)</Typography>
                    <Typography style={{color: '#fff', fontSize: '1.6rem', margin: '1rem 0', fontWeight: 'bold'}} variant="body1"><span style={{color: '#999', fontSize: '0.8rem', verticalAlign: "super", marginRight: ".25rem"}}>$</span>10<span style={{color: '#999', fontSize: '0.8rem', verticalAlign: "baseline", marginLeft: '.25rem'}}>hour</span></Typography>
                    <List style={{padding: '0'}}>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ Web Development"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ WPO"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ Responsive Design"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ Web Animation"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={`${classes.pricingTableContent} b`} primary="◽ 1 Product Stack"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={`${classes.pricingTableContent} b`} primary="◽ Payment Card Method"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={`${classes.pricingTableContent} b`} primary="◽ 1 Main Section"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ 2 Secoundary Section"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ 1 Gallery Stack (10 images max)"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ Caontact Section (Social Networks and Email Form)"/></ListItem>
                    </List>
                    <Button className={classes.pricingTableButton} variant="contained">Buy now</Button>
                </Box>
                <Box className={classes.pricingTableItem}>
                    <LanguageIcon style={{color: '#fff', fontSize: '2rem'}}></LanguageIcon>
                    <Typography style={{color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'}} variant="subtitle1">E-Commerce (Premium)</Typography>
                    <Typography style={{color: '#fff', fontSize: '1.6rem', margin: '1rem 0', fontWeight: 'bold'}} variant="body1"><span style={{color: '#999', fontSize: '0.8rem', verticalAlign: "super", marginRight: ".25rem"}}>$</span>20<span style={{color: '#999', fontSize: '0.8rem', verticalAlign: "baseline", marginLeft: ".25rem"}}>hour</span></Typography>
                    <List style={{padding: '0'}}>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ Web Development"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ WPO"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ Responsive Design"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ Web Animation"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ 1 Product Stack"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ Payment Card Method"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ 1 Main Section"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ 2 Secoundary Section"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ 1 Gallery Stack (10 images max)"/></ListItem>
                        <ListItem style={{padding: '0'}}><ListItemText className={classes.pricingTableContent} primary="◽ Caontact Section (Social Networks and Email Form)"/></ListItem>
                    </List>
                    <Button className={classes.pricingTableButton} variant="contained">Buy now</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default PricingTable