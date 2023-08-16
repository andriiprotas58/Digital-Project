import React, { useState } from "react";
import sc from "./Headbar.module.css";
import logo from "../../assets/logofull.svg";

const Headbar = () => {
  const [headbarbuttons, setHeadbarbutton] = useState([
    { name: "Главная", url: "https://www.google.com" },
    { name: "Галерея", url: "https://www.google.com" },
    { name: "Проекты", url: "https://www.google.com" },
    { name: "Сертификаты", url: "https://www.google.com" },
    { name: "Контакты", url: "https://www.google.com" },
  ]);

  return (
    <div className={sc.main}>
      <img className={sc.conLogo} src={logo} alt="Digital project" />
      <div className={sc.conLinks}>
        {headbarbuttons.map((e, i) => {
          return (
            <a key={i} className={sc.mainlink} href={e.url}>
              {e.name.toUpperCase()}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Headbar;
