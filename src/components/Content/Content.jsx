import React, { useState } from "react";
import sc from "./Content.module.css";
import Baner from "./Baner/Baner";

const Content = () => {
  return (
    <div className={sc.main}>
      <Baner className={sc.contentblock} />
    </div>
  );
};

export default Content;
