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
    { name: "Досуговый центр", href: "", img: img1 },
    { name: "Театр", href: "", img: img2 },
    { name: "Спорткомплекс", href: "", img: img3 },
    { name: "Жилые дома", href: "", img: img4 },
    { name: "Культура", href: "", img: img5 },
  ]);

  return (
    <div className={sc.main}>
      <h1>Наши проекты</h1>
      <div className={sc.projects}>
        {projects.map((e) => {
          return (
            <div>
              <img src={e.img} alt="" />
              <Link text="Подробнее" />
            </div>
          );
        })}
      </div>
      <Link text={"Все продукты"} />
    </div>
  );
};

export default Projects;
