import React from 'react';
import navStyle from './Navbar.module.css';
import logo from '../logo.png';
import MenuIcon from '@material-ui/icons/Menu'


export default function Navbar() {
const toggle = ()=>{
  console.log("test");
}
  return (
    <div className={navStyle.navContainer}>

    <div className={navStyle.logoContainer}>
        <img src={logo} className={navStyle.logo} alt="logo"/>
        <h1 className={navStyle.title}>Animation</h1>
    </div>
    <div className={navStyle.toggleContainer} onClick={toggle}>
    <MenuIcon className={navStyle.toggle}/>
    </div>
    <div className={navStyle.navbar}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
      </ul>
    </div>      
    </div>
  );
}



