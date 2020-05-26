import React from 'react'
import { Box, makeStyles, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
    knowledge: {
        margin: "5rem 0",
    },
    knowledgeTypography: {
    },
    knowledgeItem: {
        border: "1px solid #808787", 
        padding: '2rem',
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    knowledgeContent: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        "& span": {
            color: '#fff', 
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
            "& span": {
                textAlign: 'center', 
            },
        },
    },

    knowledgeWrapper: {
        padding: '0',
    },
    knowledgeItemIcon: {
        color: '#56D8B7', 
        fontWeight: 'bolder', 
        marginRight:'0.5rem',
        [theme.breakpoints.down('xs')]: {
            marginRight: '0.25rem',
        },
    }
}));

const Knowledge = () => {
    const classes = useStyles()
    return(
        <Box className={classes.knowledge}>
            <Typography style={{color: '#fff', marginBottom: "2rem", fontWeight: 'bolder', fontSize: '1.2rem'}} variant="h6">Knowledge</Typography>
                <Box className={classes.knowledgeItem}>
                    <List className={classes.knowledgeContent} style={{padding: '0'}}>
                        <ListItem className={classes.knowledgeWrapper}><CheckIcon className={classes.knowledgeItemIcon}/><ListItemText primary="Responsive design"/></ListItem>
                        <ListItem className={classes.knowledgeWrapper}><CheckIcon className={classes.knowledgeItemIcon}/><ListItemText primary="Web design prototype"/></ListItem>
                        <ListItem className={classes.knowledgeWrapper}><CheckIcon className={classes.knowledgeItemIcon}/><ListItemText primary="Website hosting"/></ListItem>
                        <ListItem className={classes.knowledgeWrapper}><CheckIcon className={classes.knowledgeItemIcon}/><ListItemText primary="Web Animation"/></ListItem>
                        <ListItem className={classes.knowledgeWrapper}><CheckIcon className={classes.knowledgeItemIcon}/><ListItemText primary="WPO (Web page optimization)"/></ListItem>
                        <ListItem className={classes.knowledgeWrapper}><CheckIcon className={classes.knowledgeItemIcon}/><ListItemText primary="Git & GitHub "/></ListItem>
                        <ListItem className={classes.knowledgeWrapper}><CheckIcon className={classes.knowledgeItemIcon}/><ListItemText primary="System Design"/></ListItem>
                        <ListItem className={classes.knowledgeWrapper}><CheckIcon className={classes.knowledgeItemIcon}/><ListItemText primary="React JS"/></ListItem>
                        <ListItem className={classes.knowledgeWrapper}><CheckIcon className={classes.knowledgeItemIcon}/><ListItemText primary="HTML, CSS & JS"/></ListItem>
                    </List>
                </Box>
        </Box>
    )
}

export default Knowledge