import React, { useState, useEffect } from 'react';
import { Box, CardMedia, Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    hero: {
        height: "100vh",
        position: "relative",
        zIndex: "0",
    }, 
    heroImage: {
        position: "absolute",
        backgroundSize: "cover",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        transition: "1000ms all",
        "&::before": {
            position: "absolute",
            content: "''",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            // background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 90%, rgba(0,0,0,1) 100%);",
            backgroundColor: "rgba(0,0,0,0.20)",
            // background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,1))",
            transition: "1000ms all",
        },
    },
    heroPolygonDisabled: {
        clipPath: "polygon(0 0,20% 0,20% 0,40% 0,40% 0,60% 0,60% 0,80% 0,80% 0,100% 0,100% 0,100% 100%,100% 100%,80% 100%,80% 100%,60% 100%,60% 100%,40% 100%,40% 100%,20% 100%,20% 100%,0 100%)",
    },
    heroPolygonActive: {
        clipPath: "polygon(0 0,20% 0,20% 100%,40% 100%,40% 0,60% 0,60% 100%,80% 100%,80% 0,100% 0,100% 0,100% 100%,100% 0,80% 0,80% 100%,60% 100%,60% 0,40% 0,40% 100%,20% 100%,20% 0,0 0)",
    }
}));

const CarouselCard = ({classes, imageURL, setTime}) => {
    const [counter, setCounter] = useState(0);
    const [loop, setLoop] = useState(0);
    const DELAY = 30

    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {
        const looper = loop > 0 && setInterval(() => setLoop(loop - 1), 1000);
        return () => clearInterval(looper);
    }, [loop]);

    const checkLoop = () => {
        setCounter(setTime)
        setLoop(DELAY)
    }
    return (
        <>
            {loop <= 0 ? checkLoop() : null}
            <CardMedia className={`${classes.heroImage} ${counter <= 0 ? classes.heroPolygonActive : classes.heroPolygonDisabled}`} image={imageURL}/>
        </>
    )
}

const CarouselWrapper = ({classes}) => {
    return(
        <>
            <CarouselCard classes={classes} setTime={30} imageURL="https://images.pexels.com/photos/3527778/pexels-photo-3527778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            <CarouselCard classes={classes} setTime={25} imageURL="https://images.pexels.com/photos/698319/pexels-photo-698319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            <CarouselCard classes={classes} setTime={20} imageURL="https://images.pexels.com/photos/1436127/pexels-photo-1436127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            <CarouselCard classes={classes} setTime={15} imageURL="https://images.pexels.com/photos/1510659/pexels-photo-1510659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            <CarouselCard classes={classes} setTime={10} imageURL="https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            <CarouselCard classes={classes} setTime={5} imageURL="https://images.pexels.com/photos/1050734/pexels-photo-1050734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
        </>
    )
}

const Hero = () => {
    const classes = useStyles();

    return (
        <Box className={classes.hero}>
            <Container fixed>
                <CarouselWrapper classes={classes} />
                {/* <ImagesCarousel/> */}
            </Container>
        </Box>
    )
}

export default Hero