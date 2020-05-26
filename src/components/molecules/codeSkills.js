import React from 'react'
import { Box, makeStyles, Typography, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    codeSkills: {
        margin: "5rem 0",
    },
    codeSkillsWrapper: {
        border: "1px solid #808787", 
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('xs')]: {
            display: 'grid',
            gridGap: '1rem',
            textAlign: "center",
        },
    },
    codeSkillsItem: {
        textAlign: "center",
    },
    codeSkillsItemCircularProgress: {
        width: "10rem",
        color: "#56D8B7",
        position: "relative",
        "&:before": {
            position: "absolute",
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: '#fff', 
            transform: 'rotate(90deg)'
        },
        "&.a:before": {
            content: "'95%'",
        },
        "&.b:before": {
            content: "'90%'",
        },
        "&.c:before": {
            content: "'85%'",
        },
        "&.d:before": {
            content: "'80%'",
        },
        "& .MuiCircularProgress-circleStatic": {
            strokeWidth: '2',
        }
    },
}));

const CodeSkills = () => {
    const classes = useStyles()
    return(
        <Box className={classes.codeSkills}>
            <Typography style={{color: '#fff', marginBottom: "2rem", fontWeight: 'bolder', fontSize: '1.2rem'}} variant="h6">Code Skills</Typography>
            <Box className={classes.codeSkillsWrapper}>
                <Box className={classes.codeSkillsItem}>
                    <CircularProgress className={`${classes.codeSkillsItemCircularProgress} a`} style={{width: "5rem", height: "5rem"}} variant="static" value={95} />
                    <Typography style={{color: '#fff', textAlign: 'center'}} variant="body1">HTML5 / CSS / JS</Typography>
                </Box>
                <Box className={classes.codeSkillsItem}>
                    <CircularProgress className={`${classes.codeSkillsItemCircularProgress} b`} style={{width: "5rem", height: "5rem"}} variant="static" value={90} />
                    <Typography style={{color: '#fff', textAlign: 'center'}} variant="body1">React JS</Typography>
                </Box>
                <Box className={classes.codeSkillsItem}>
                    <CircularProgress className={`${classes.codeSkillsItemCircularProgress} c`} style={{width: "5rem", height: "5rem"}} variant="static" value={85} />
                    <Typography style={{color: '#fff', textAlign: 'center'}} variant="body1">Python</Typography>
                </Box>
                <Box className={classes.codeSkillsItem}>
                    <CircularProgress className={`${classes.codeSkillsItemCircularProgress} d`} style={{width: "5rem", height: "5rem"}} variant="static" value={80} />
                    <Typography style={{color: '#fff', textAlign: 'center'}} variant="body1">MYSQL</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CodeSkills