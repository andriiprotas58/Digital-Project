import React, { useState } from "react";
import sc from "./Headbar.module.css";
import logo from "../../assets/logofull.svg";
import menu from "../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg";
import close from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";

const Headbar = () => {
  const [headbarbuttons, setHeadbarbutton] = useState([
    { name: "Главная", url: "https://www.google.com" },
    { name: "Галерея", url: "https://www.google.com" },
    { name: "Проекты", url: "https://www.google.com" },
    { name: "Сертификаты", url: "https://www.google.com" },
    { name: "Контакты", url: "https://www.google.com" },
  ]);

  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <div className={sc.main}>
      <img
        className={sc.limksButton}
        style={menuDisplay ? { position: "fixed" } : {}}
        src={menuDisplay ? close : menu}
        alt=""
        onClick={() => {
          setMenuDisplay(!menuDisplay);
        }}
      />

      <div
        className={[sc.miniConLinks, menuDisplay ? sc.active : ""].join(" ")}
      >
        {headbarbuttons.map((e, i) => {
          return (
            <a
              key={i}
              className={[sc.mainlink, sc.active].join(" ")}
              href={e.url}
            >
              {e.name.toUpperCase()}
              <div>
                <br />
              </div>
            </a>
          );
        })}
      </div>

      <img className={sc.conLogo} src={logo} alt="Digital project" />
      <div className={sc.conLinks}>
        {headbarbuttons.map((e, i) => {
          return (
            <a key={i} className={sc.mainlink} href={e.url}>
              {e.name.toUpperCase()}
              <div>
                <br />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Headbar;
