import React, { useState } from "react";
import sc from "./Footer.module.css";
import logo from "../../assets/logofull_invert.svg";

const Footer = () => {
  const [headbarbuttons, setHeadbarbutton] = useState([
    { name: "Главная", url: "https://www.google.com" },
    { name: "Галерея", url: "https://www.google.com" },
    { name: "Проекты", url: "https://www.google.com" },
    { name: "Сертификаты", url: "https://www.google.com" },
    { name: "Контакты", url: "https://www.google.com" },
  ]);
  return (
    <div className={sc.main}>
      <img className={sc.logo} src={logo} alt="Didgital Project" />
      <div className={sc.textblock}>
        <h4>Информация</h4>
        {headbarbuttons.map((e) => {
          return (
            <a className={sc.mainlink} href={e.url}>
              {e.name}
            </a>
          );
        })}
      </div>
      <div>
        <h4>Контакты</h4>
      </div>
      <div>
        <h4>Социальное</h4>
      </div>
    </div>
  );
};

export default Footer;
