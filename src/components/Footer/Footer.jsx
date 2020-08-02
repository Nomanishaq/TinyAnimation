import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.container}>
            <p> © Tiny Animation 2020 | Design by <a  href="https://www.github.com/Nomanishaq">Noman Ishaq</a></p>
        </div>
    );
}

export default Footer;
