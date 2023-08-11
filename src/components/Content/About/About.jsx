import React from "react";
import sc from "./About.module.css";

import img1 from "../../../assets/Rectangle 8.png";
import img2 from "../../../assets/Rectangle 9.png";
import img3 from "../../../assets/Rectangle 10.png";
import Link from "./../../UI/Link/Link";

const About = ({ className }) => {
  return (
    <div className={[className, sc.main].join(" ")}>
      <div className={sc.imgCon}>
        <div>
          <img className={sc.img1} src={img1} alt="" />
          <img className={sc.img3} src={img3} alt="" />
        </div>
        <div>
          <img className={sc.img2} src={img2} alt="" />
        </div>
      </div>
      <div className={sc.textCon}>
        <h2>О компании</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Link text={"Читать"} />
      </div>
    </div>
  );
};

export default About;
