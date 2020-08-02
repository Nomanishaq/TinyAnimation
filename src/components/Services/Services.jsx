import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Grid } from '@material-ui/core';
import classes from './Services.module.css';
import services from '.././img/services.svg';
import services7 from '.././img/services-7.svg';
import services5 from '.././img/services-5.svg';

const Services = () => {
    const writingAnimation = useWebAnimations({
        keyframes:{
            transform: "translateX(40px)",
    },
    timing:{
        duration: 1500,
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", 
    }
})

const copyRightSection = useWebAnimations({
    keyframes:{
        transform: "translateY(100px)",
},
timing:{
    duration: 1500,
    iterations: Infinity, // Repeat once
    direction: "alternate", // Run the animation forwards and then backwards
    easing: "ease-in-out", 
}

})

const contentRightingSection = useWebAnimations({
    keyframes:{
        transform: "translateX(40px)",
},
timing:{
    duration: 1500,
    iterations: Infinity, // Repeat once
    direction: "alternate", // Run the animation forwards and then backwards
    easing: "ease-in-out", 
}
})

return (
        <div className={classes.container}>
            <Container className={classes.back}>
                <Grid container spacing={5} className={classes.containerBorder}>

                    <Grid item xs={12} sm={6}>
                        <img src={services} alt="" ref={writingAnimation.ref} />
                    </Grid>

                    <Grid item xs={12} sm={6} className={classes.content}>
                    
                    <ScrollAnimation animateIn="fadeup" delay="100">
                        <h1 className={classes.contentTitle}>Content Writing</h1>
                        <p className={classes.contentP}>Transform your apps and digital interfaces with user friendly microcopy for notifications, error messages, empty states, CTAs, sign-up forms, and more. I am also responsible for conducting research, user documentation, style guides, and newsletters for customers.</p>
                        </ScrollAnimation>
                    
                    </Grid>
                </Grid>

                <Grid container spacing={5} className={classes.containerBorder}>
                    
                    <Grid item xs={12} sm={6} className={classes.content}>
                    <ScrollAnimation animateIn="fadein" delay="100">
                        <h1 className={classes.contentTitle}>Website Copywriting</h1>
                        <p className={classes.contentP}>Through a genuine, consultative relationship, I will take the time to learn your brand philosophy and develop original website content that achieves your business objectives. A solid content strategy will provide the foundation for search engine optimization (SEO), improving your customers' online experience, and driving traffic to your website.</p>
                        </ScrollAnimation>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <img src={services7} alt="" ref={copyRightSection.ref} />
                    </Grid>
                </Grid>


                <Grid container spacing={5} className={classes.containerBorder}>

                    <Grid item xs={12} sm={6}>
                        <img src={services5} ref={contentRightingSection.ref} alt="" />
                    </Grid>

                    <Grid item xs={12} sm={6} className={classes.content}>
                    <ScrollAnimation animateIn="fadeup" delay="100">

                        <h1 className={classes.contentTitle}>Content Writing</h1>
                        <p className={classes.contentP}>You may not have the time or resources to create content that offers valuable information and solves your customers' problems. I specialize in writing functional content with the elements of lasting dialog – what your business stands for and what it contributes to the world – that will grow your audience and increase sales.</p>
                        </ScrollAnimation>

                    </Grid>

                </Grid>


            </Container>
        </div>
    );
}
export default Services; 