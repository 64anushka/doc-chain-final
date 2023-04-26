import React from "react";
import digilocker from "../assets/logo.jpg"

const Logo = () => {
  return (
    <img
      src={digilocker}
      className="img-fluid"
      alt="logo"
      height="50"
      width="50"
      style={{marginLeft:"5px"}}
    />
  );
};

export default Logo;