import React from "react";
import sc from "./Contact.module.css";
import Link from "./../../UI/Link/Link";
import img from "./../../../assets/image 12.png";

const Contact = ({ className }) => {
  return (
    <div className={[sc.main, className].join(" ")}>
      <h1>Связатся с нами</h1>
      <div className={sc.contactCon}>
        <div className={sc.inputCon}>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Номер телефона" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Интересуещий товар/услуга" />
          <textarea placeholder="Сообщение"></textarea>
        </div>

        <img src={img} alt="" />
      </div>
      <div className={sc.checkboxCon}>
        <input className={sc.checkbox} type="checkbox" id="" />
        <p>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</p>
      </div>

      <Link className={sc.Link} text={"Отправить"} style={1} />
    </div>
  );
};

export default Contact;
