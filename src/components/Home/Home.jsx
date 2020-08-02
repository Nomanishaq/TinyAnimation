import React from 'react'
import {
  Container,
  Box,
  Grid,
  makeStyles
} from '@material-ui/core'
import useWebAnimations, {
  backInLeft,
  backInRight
} from
  '@wellyshen/use-web-animations';
import Intro_Featured_Image from '.././img/Intro_Featured_Image_Empty.svg'
import brain from '.././img/Intro_Brain.svg';
import home from './Home.module.css';
import {Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const Home = () => {
  const classes = useStyles();

  const header = useWebAnimations({
    keyframes: {
      transform: "translateY(70px)",
    },
    timing: {
      duration: 1500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  const left = useWebAnimations({ ...backInLeft }); //left animation
  const right = useWebAnimations({ ...backInRight }); //right

  return (
    <>
      <div className={home.HomeContainer}>
        <div className={classes.root}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <div ref={left.ref} className={home.content}>
                  <h1 className={home.heading}>Your web presence just got so much better</h1>
                      <div className={home.paragraph}>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in magni mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in magni mollitia</p>
                      </div>
                        <div className={home.button}>
                                <Button variant="contained" className={home.btn}>Send a Message</Button>
                        </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box component="section">
                  <div ref={right.ref} className={home.animation}>
                    <Box component="div">
                      <img
                        src={brain}
                        className={home.brain}
                        alt="brain"
                        ref={header.ref}
                      />
                      <img
                        src={Intro_Featured_Image}
                        alt="flash"
                        className={home.flash}
                        height="500px"
                      />
                    </Box>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
<div>
  
</div>





    </>
  )
}
export default Home;