import React, { useState } from "react";
import sc from "./Content.module.css";
import Baner from "./Baner/Baner";
import About from "./About/About";

const Content = () => {
  return (
    <div className={sc.main}>
      <Baner className={sc.contentblock} />
      <About className={sc.contentblock} />
    </div>
  );
};

export default Content;
