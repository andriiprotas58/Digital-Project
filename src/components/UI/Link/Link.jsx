import React from "react";
import sc from "./Link.module.css";
import arrow from "../../../assets/ico-shape.svg";

const Link = ({ className, text, href = "", style = 0 }) => {
  return (
    <a
      className={[style ? sc.blackLink : sc.Link, className].join(" ")}
      href={href}
    >
      {(text + " ").toUpperCase()}
      <img
        style={{
          MozTransform: "scaleX(-1)",
          OTransform: "scaleX(-1)",
          WebkitTransform: "scaleX(-1)",
          transform: "scaleX(-1)",
          filter: "flipH",
        }}
        src={arrow}
        alt=""
      />
    </a>
  );
};

export default Link;
