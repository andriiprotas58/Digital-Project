import React, { useState } from "react";
import sc from "./Footer.module.css";
import logo from "../../assets/logofull_invert.svg";
import mpoint from "../../assets/Maps_point.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/Phone.svg";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import pininterest from "../../assets/pininterest.svg";
import Linked_In from "../../assets/Linked In.svg";

const Footer = () => {
  const [headbarbuttons, setHeadbarbutton] = useState([
    { name: "Главная", href: "https://www.google.com" },
    { name: "Галерея", href: "https://www.google.com" },
    { name: "Проекты", href: "https://www.google.com" },
    { name: "Сертификаты", href: "https://www.google.com" },
    { name: "Контакты", href: "https://www.google.com" },
  ]);

  const [contacts, setContact] = useState([
    {
      text: "100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10",
      icon: mpoint,
      href: "https://www.google.com",
    },
    {
      text: "+38 (000) 000 00 00",
      icon: phone,
      href: "https://www.google.com",
    },
    { text: "mail@gmail.com", icon: mail, href: "https://www.google.com" },
  ]);

  const [social, setSocial] = useState([
    { icon: facebook, href: "https://uk-ua.facebook.com" },
    { icon: twitter, href: "https://twitter.com/?lang=uk" },
    { icon: Linked_In, href: "https://www.linkedin.com" },
    { icon: pininterest, href: "https://www.pinterest.com" },
  ]);

  return (
    <div className={sc.main}>
      <div className={sc.maincontent}>
        <img className={sc.logo} src={logo} alt="Didgital Project" />
        <div className={sc.textblock}>
          <h4>Информация</h4>
          {headbarbuttons.map((e, i) => {
            return (
              <a key={i} className={sc.mainlink} href={e.href}>
                {e.name}
              </a>
            );
          })}
        </div>
        <div className={sc.textblock}>
          <h4>Контакты</h4>
          {contacts.map((e, i) => {
            return (
              <div key={i} className={sc.mainlink}>
                <img className={sc.icon} src={e.icon} alt="" />
                <a className={sc.contact} href={e.href}>
                  {e.text}
                </a>
              </div>
            );
          })}
        </div>
        <div className={sc.textblock}>
          <h4>Социальное</h4>
          <div className={sc.mainlink}>
            {social.map((e, i) => {
              return (
                <a
                  key={i}
                  className={[sc.icon, sc.social].join(" ")}
                  href={e.href}
                >
                  <img src={e.icon} alt="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className={sc.copyright}>
        <p>© 2019 Digital Project. Все права защищены.</p>
      </div>
    </div>
  );
};

export default Footer;
