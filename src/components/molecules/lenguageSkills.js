import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
    lenguage: {
        margin: "5rem 0",
    },
    lenguageItemWrapper: {
        border: "1px solid #808787", 
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))",
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "initial",
            gridGap: '1rem',
            textAlign: "center",
        },
    },
    lenguageRating: {
        color: "#56D8B7",
        marginLeft: '-0.8rem',
        [theme.breakpoints.down('xs')]:{
            marginLeft: '0',
        },
        "& .MuiRating-decimal": {
            margin: '0 0.25rem',
        },
        "& .MuiRating-icon": {
            margin: "0 0.5rem",
            [theme.breakpoints.down('xs')]: {
                margin: '0',   
            }
        },
        "& .MuiRating-iconEmpty": {
            color: '#808787',
        },
    },
}));


const Lenguage = (props) => {
    const classes = useStyles()
    console.log(props.width)
    return(
        <Box className={classes.lenguage}>
            <Typography style={{color: '#fff', fontWeight: 'bolder', fontSize: '1.2rem', marginBottom: '2rem'}} variant="h6">Lenguage (Spanish - Native)</Typography>
            <Box className={classes.lenguageItemWrapper} borderColor="transparent">
                <Box>
                    <Typography style={{color: '#fff', fontSize: '1rem', fontWeight: 'bold', margin: '0 0 0.5rem', padding: '0', border: '0'}}>English</Typography>
                    <Rating className={classes.lenguageRating} icon={<FiberManualRecordIcon fontSize="inherit"/>} name={props.width !== 'xs' ? 'read-only' : 'half-read-only'} precision={props.width !== 'xs' ? 1 : 0.5} readOnly value={props.width !== 'xs' ? 9 : 4.5} max={props.width !== 'xs' ? 10 : 5} />
                </Box>
                <Box>
                    <Typography style={{color: '#fff', fontSize: '1rem', fontWeight: 'bold', margin: '0 0 0.5rem', padding: '0', border: '0'}}>Deutsch (Still Learning)</Typography>
                    <Rating className={classes.lenguageRating} icon={<FiberManualRecordIcon fontSize="inherit"/>} name={props.width !== 'xs' ? 'read-only' : 'half-read-only'} precision={props.width !== 'xs' ? 1 : 0.5} readOnly value={props.width !== 'xs' ? 5 : 2.5} max={props.width !== 'xs' ? 10 : 5} />
                </Box>
            </Box>
        </Box>
    )
}

export default withWidth()(Lenguage)