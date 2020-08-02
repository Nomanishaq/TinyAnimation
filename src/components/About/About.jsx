import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {Container,Grid,Button } from '@material-ui/core';
import classes from './About.module.css';
import about from '.././img/profile.svg';

const Services=()=> {

  return (
 <div className={classes.container}>
<Container>
    <Grid container spacing={5} className={classes.containerBorder}>

     
        <Grid item xs={12} sm={6}>
        <img src={about} alt="" className={classes.img} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.content}>
        <ScrollAnimation animateIn="fadeIn">
        <Button  variant="contained" className={classes.button}>About Us</Button>
        <p className={classes.contentP}>My copywriting and UX writing draws on abilities developed in the psychological sciences. Expertise in visual perception, behavioral motivation, and decision-making allows me to engineer words that convert customers and guide users</p>
        </ScrollAnimation>
        </Grid>


      
    </Grid>

</Container>
 </div>
  );
}
export default Services;