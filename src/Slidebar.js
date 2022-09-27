import React from 'react';
//import { slide as Menu } from 'react-burger-menu';
import './Slidebar.css';
 import { elastic as Menu } from 'react-burger-menu';
 //import Home from "./Components/Home"
export default props => {
  return (
    <Menu right='true' >
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="#Aboutus">
        About Us
      </a>
      <a className="menu-item" href="#Services">
        Work
      </a>
      <a className="menu-item" href="#Contactus">
        Contact Us
      </a>
    </Menu>
  );
};