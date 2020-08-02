import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {Container,Grid} from '@material-ui/core';
import classes from './Contact.module.css';
import EmailIcon from '@material-ui/icons/Email';

const Contact = () => {
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
         <EmailIcon className={classes.icon}/>
         <p>nathan@cortexcopywriter.com</p>
        </Grid>


    </Grid>

</Container>
        </div>
    );
}

export default Contact;
