import React from 'react';
import {Container,Grid } from '@material-ui/core';
import classes from './Services.module.css';
import services from '.././img/services.svg';
import services7 from '.././img/services-7.svg';
import services5 from '.././img/services-5.svg';

const Services=()=> {

  return (
 <div className={classes.container}>
<Container className={classes.back}>
    <Grid container spacing={5} className={classes.containerBorder}>
      
        <Grid item xs={12} sm={6}>
        <img src={services} alt=""/>
        </Grid>
      
        <Grid item xs={12} sm={6} className={classes.content}>
        <h1 className={classes.contentTitle}>Content Writing</h1>
        <p className={classes.contentP}>Transform your apps and digital interfaces with user friendly microcopy for notifications, error messages, empty states, CTAs, sign-up forms, and more. I am also responsible for conducting research, user documentation, style guides, and newsletters for customers.</p>
        </Grid>
    </Grid>

    <Grid container spacing={5} className={classes.containerBorder}>
        
        <Grid item xs={12} sm={6} className={classes.content}>
        <h1 className={classes.contentTitle}>Website Copywriting</h1>
        <p className={classes.contentP}>Through a genuine, consultative relationship, I will take the time to learn your brand philosophy and develop original website content that achieves your business objectives. A solid content strategy will provide the foundation for search engine optimization (SEO), improving your customers' online experience, and driving traffic to your website.</p>
        </Grid>

        <Grid item xs={12} sm={6}>
        <img src={services7} alt=""/>
        </Grid>     
    </Grid>


    <Grid container spacing={5} className={classes.containerBorder}>

        <Grid item xs={12} sm={6}>
        <img src={services5} alt=""/>
        </Grid>    

        <Grid item xs={12} sm={6} className={classes.content}>
        <h1 className={classes.contentTitle}>Content Writing</h1>
        <p className={classes.contentP}>You may not have the time or resources to create content that offers valuable information and solves your customers' problems. I specialize in writing functional content with the elements of lasting dialog – what your business stands for and what it contributes to the world – that will grow your audience and increase sales.</p>
        </Grid>
 
    </Grid>


</Container>
 </div>
  );
}
export default Services; 