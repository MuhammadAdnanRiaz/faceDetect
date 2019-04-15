/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import Brain from './brain.png'
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner"><img style={{paddingTop:'20px',paddingLeft:'20px'}} src={Brain} alt='brain' /> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
