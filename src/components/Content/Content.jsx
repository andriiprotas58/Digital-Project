import React, { useState } from "react";
import sc from "./Content.module.css";
import Baner from "./Baner/Baner";
import About from "./About/About";
import Goals from "./Goals/Goals";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Content = () => {
  return (
    <div className={sc.main}>
      <Baner className={sc.contentblock} />
      <About className={sc.contentblock} />
      <Goals className={sc.contentblock} />
      <Projects className={sc.contentblock} />
      <Contact className={sc.contentblock} />
    </div>
  );
};

export default Content;
