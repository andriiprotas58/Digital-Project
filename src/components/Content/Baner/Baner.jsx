import React, { useState } from "react";
import sc from "./Baner.module.css";
import photo1 from "../../../assets/Rectangle 6.png";
import photo2 from "../../../assets/1.jpg";
import arrow from "../../../assets/ico-shape.svg";
import Link from "../../UI/Link/Link";

const Baner = ({ className }) => {
  const [baners, setBaner] = useState([
    { img: photo1, herf: "", text: "Project Home" },
    { img: photo2, herf: "", text: "Project Room" },
  ]);

  const [activeBaner, setActiveBaner] = useState(0);
  return (
    <div className={className}>
      <div className={sc.banerText}>
        <h1>{baners[activeBaner].text.split(" ")[0].toUpperCase()}</h1>
        <h2>{baners[activeBaner].text.split(" ")[1].toUpperCase()}</h2>

        <div className={sc.buttonBlock}>
          <button
            onClick={() => {
              if (activeBaner - 1 < 0) {
                setActiveBaner(baners.length - 1);
              } else {
                setActiveBaner(activeBaner - 1);
              }
            }}
          >
            <img src={arrow} alt="" />
          </button>
          <button
            onClick={() => {
              if (activeBaner + 1 >= baners.length) {
                setActiveBaner(0);
              } else {
                setActiveBaner(activeBaner + 1);
              }
            }}
          >
            <img
              style={{
                MozTransform: "scaleX(-1)",
                OTransform: "scaleX(-1)",
                WebkitTransform: "scaleX(-1)",
                transform: "scaleX(-1)",
                filter: "flipH",
              }}
              src={arrow}
            />
          </button>
        </div>

        <div className={sc.counter}>
          <p>
            {activeBaner + 1 < 10 ? "0" + (activeBaner + 1) : activeBaner + 1}{" "}
          </p>
          <div className={sc.line}></div>
          <p>{baners.length < 10 ? "0" + baners.length : baners.length}</p>
        </div>
      </div>
      <div className={sc.baner}>
        <img src={baners[activeBaner].img} alt="" />

        <Link
          className={sc.banerLink}
          text={"Взглянуть"}
          href={baners[activeBaner].herf}
        />

        
      </div>
    </div>
  );
};

export default Baner;
