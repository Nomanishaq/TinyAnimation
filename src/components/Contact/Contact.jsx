import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import webAnimationApi from '@wellyshen/use-web-animations';
import { Container, Grid } from '@material-ui/core';
import classes from './Contact.module.css';
import EmailIcon from '@material-ui/icons/Email';

const Contact = () => {

    const animation = webAnimationApi({
        keyframes: {
            transform: "translateY(30px)",
        },
        timing: {
            duration: 2500,
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out",
        }
    });


    return (
        <div className={classes.container}>
            <Container>
                <Grid container spacing={5}>

                    <Grid item xs={12} sm={12}>
                        <ScrollAnimation animateIn="fadeUp">
                            <h1 className={classes.title}>Pick my brain/cortex and let's get</h1>
                            <h1 className={classes.title}>started on your project</h1>
                        </ScrollAnimation>
                    </Grid>

                    <Grid item xs={12} sm={12} className={classes.content}>
                        <EmailIcon className={classes.icon} ref={animation.ref} />
                        <p>nomanishaq251@gmail.com</p>
                    </Grid>


                </Grid>

            </Container>
        </div>
    );
}

export default Contact;
