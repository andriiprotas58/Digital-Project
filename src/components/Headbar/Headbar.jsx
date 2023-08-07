import React from "react";
import sc from "./Headbar.module.css";
import logo from "../../assets/logofull.svg";

const Headbar = () => {
  return (
    <div className={sc.main}>
      <div className={sc.conLogo}>
        <img src={logo} alt="Digital project" />
      </div>
      <div></div>
    </div>
  );
};

export default Headbar;
