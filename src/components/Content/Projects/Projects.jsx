import React, { useState } from "react";
import sc from "./Projects.module.css";
import Link from "./../../UI/Link/Link";

import img1 from "../../../assets/Rectangle 12.png";
import img2 from "../../../assets/image 15.png";
import img3 from "../../../assets/image 16.png";
import img4 from "../../../assets/image 17.png";
import img5 from "../../../assets/image 18.png";

const Projects = () => {
  const [projects, setProjects] = useState([
    { name: "Досуговый центр", href: "", img: img1, font_size: "64px" },
    { name: "Театр", href: "", img: img2, font_size: "64px" },
    { name: "Спорт", href: "", img: img3, font_size: "50px" },
    { name: "Жилые дома", href: "", img: img4, font_size: "64px" },
    { name: "Культура", href: "", img: img5, font_size: "54px" },
  ]);

  return (
    <div className={sc.main}>
      <h1>Наши проекты</h1>
      <div className={sc.projects}>
        {projects.map((e) => {
          return (
            <div className={sc.project}>
              <img className={sc.img} src={e.img} alt="" />
              <div className={sc.blackwall}></div>
              <div className={sc.lincCon}>
                <h2 style={{ fontSize: e.font_size }}>
                  {e.name.toUpperCase()}
                </h2>
                <Link className={sc.link} text="Подробнее" style={1} />
              </div>
            </div>
          );
        })}
      </div>
      <Link className={sc.blackLink} text={"Все продукты"} style={1}/>
    </div>
  );
};

export default Projects;
