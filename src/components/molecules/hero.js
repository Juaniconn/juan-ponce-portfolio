import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core'
import HeroImage from './../../img/background.jpg'

const useStyles = makeStyles((theme) => ({
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
            backgroundColor: "rgba(0,0,0,0.20)",
            transition: "1000ms all",
        },
    },
    imageFigure: {
        position: "absolute",
        margin: '0', 
        top: '0', 
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: "#111",

        "& img": {
            clipPath: "polygon(30% 0, 100% 25%, 60% 100%, 0 90%)",
            marginTop: "-2rem",
            marginLeft: "3rem",
            width: "56vw",
            height: "80vh",
            objectFit: "cover",
        },
    },
    heroPolygonDisabled: {
        clipPath: "polygon(0 0,20% 0,20% 0,40% 0,40% 0,60% 0,60% 0,80% 0,80% 0,100% 0,100% 0,100% 100%,100% 100%,80% 100%,80% 100%,60% 100%,60% 100%,40% 100%,40% 100%,20% 100%,20% 100%,0 100%)",
    },
    heroPolygonActive: {
        clipPath: "polygon(0 0,20% 0,20% 100%,40% 100%,40% 0,60% 0,60% 100%,80% 100%,80% 0,100% 0,100% 0,100% 100%,100% 0,80% 0,80% 100%,60% 100%,60% 0,40% 0,40% 100%,20% 100%,20% 0,0 0)",
    },
    heroHeader: {
        // display: "none",
        position: "absolute",
        top: "60vh",
        left: "50vw",
        color: '#fff', 
        wordBreak: "break-word",
        wordWrap: "break-word",
        fontSize: "1.2rem",
        maxWidth: "27rem"
    },
    heroDetail: {
        color: '#fff',
        position: "absolute",
        left: "22%",
        bottom: "3rem",
        fontSize: "5rem",
        lineHeight: "4.5rem",
        textAlign: "center",
    },
    [theme.breakpoints.down('sm')]: {
        heroDetail: {
            display: "none",
        },
        imageFigure: {
            "& img": {
                clipPath: "none",
                marginTop: "0",
                marginLeft: "0",
                width: "100%",
                height: "100%",
                position: "relative",
            },

            "&:after": {
                content: "''",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",
                position: "absolute",
                background: "linear-gradient(to top,rgba(0,0,0,0.75) 5%, rgba(0,0,0,0))",
            },
        },
        heroHeader: {
            left: "3rem",
            top: "initial",
            bottom: "3rem",
            right: "6rem",
            display: "block",
            fontWeight: "normal",
        },
        heroPolygonDisabled: {
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 100% 50%, 100% 100%, 0 100%, 0 50%, 0 50%)",
        },
        heroPolygonActive: {
            clipPath: "polygon(100% 0, 100% 0, 100% 50%, 0 50%, 0 100%, 0 100%, 0 50%, 100% 50%)",
        },
    },
    [theme.breakpoints.down('xs')]: {
        heroHeader: {
            left: "2rem",
            top: "65vh",
            fontSize: "1rem",
            bottom: "2rem",
        },
        heroDetail: {
            display: "block",
            left: "2rem",
            bottom: "2rem",
            fontSize: "1.2rem",
            fontWeight: "bolder",
            lineHeight: "initial",
        },
        imageFigure: {
            overflow: "hidden",
            "& img": {
                clipPath: "polygon(25% 0,100% 25%,80% 100%,0 85%)",
                marginTop: "0",
                marginLeft: "-1rem",
                width: "110vw",
                height: "62vh",
            },
        },
    },
}));

// const CarouselCard = ({classes, imageURL, setTime}) => {
//     const [counter, setCounter] = useState(0);
//     const [loop, setLoop] = useState(0);
//     const DELAY = 30

//     useEffect(() => {
//         const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//         return () => clearInterval(timer);
//     }, [counter]);

//     useEffect(() => {
//         const looper = loop > 0 && setInterval(() => setLoop(loop - 1), 1000);
//         return () => clearInterval(looper);
//     }, [loop]);

//     const checkLoop = () => {
//         setCounter(setTime)
//         setLoop(DELAY)
//     }
//     return (
//         <>
//             {loop <= 0 ? checkLoop() : null}
//             <CardMedia className={`${classes.heroImage} ${counter <= 0 ? classes.heroPolygonActive : classes.heroPolygonDisabled}`} image={imageURL}/>
//         </>
//     )
// }

// const CarouselWrapper = ({classes}) => {
//     return(
//         <>
//             <CarouselCard classes={classes} setTime={30} imageURL="https://images.pexels.com/photos/3527778/pexels-photo-3527778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
//             <CarouselCard classes={classes} setTime={25} imageURL="https://images.pexels.com/photos/698319/pexels-photo-698319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
//             <CarouselCard classes={classes} setTime={20} imageURL="https://images.pexels.com/photos/1436127/pexels-photo-1436127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
//             <CarouselCard classes={classes} setTime={15} imageURL="https://images.pexels.com/photos/1510659/pexels-photo-1510659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
//             <CarouselCard classes={classes} setTime={10} imageURL="https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
//             <CarouselCard classes={classes} setTime={5} imageURL="https://images.pexels.com/photos/1050734/pexels-photo-1050734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
//         </>
//     )
// }

const Hero = () => {
    const classes = useStyles();

    return (
        <>
            <Box position="absolute" top={0} left={0} right={0} bottom={0}>
                {/* <CarouselWrapper classes={classes} /> */}
                <figure className={classes.imageFigure}>
                    <img src={HeroImage} alt=""/>
                </figure>
            </Box>
            <Box>
                <Typography className={classes.heroHeader} variant="h1">Hello, I'm <strong style={{color: "#56D8B7"}}>Juan Ponce</strong>, UX/UI Designer and Frontend Developer from GDL, MEX.</Typography>
                <Typography className={classes.heroDetail} variant="body1">I code cool <strong style={{color: "#56D8B7"}}>websites</strong></Typography>
            </Box>
        </>
    )
}

export default Hero