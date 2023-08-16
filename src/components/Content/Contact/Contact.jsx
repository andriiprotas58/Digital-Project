import React, { useState } from "react";
import sc from "./Contact.module.css";
import Link from "./../../UI/Link/Link";
import img from "./../../../assets/image 12.png";
import FormInput from "../../UI/FormInput/FormInput";
import FormTextarea from "../../UI/FormTextarea/FormTextarea";
const Contact = ({ className }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [goods, setGoods] = useState("");
  const [message, setMessage] = useState("");

  const [attention, setAttention] = useState(false);

  const checkInputformat = () => {
    if (email == "" || phone == "" || message == "") {
      return {
        email: false,
        message: "email, phone and message must be filled ",
      };
    }

    if (
      !/^(\+?\d{1,3})?[\s-]*\d{3}[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}$/.test(phone)
    ) {
      return {
        email: false,
        message: "Enter a valid phone",
      };
    }

    if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)) {
      return {
        email: false,
        message: "Enter a valid email",
      };
    }

    if (!/^.{1,255}$/.test(message)) {
      return {
        email: false,
        message: "Message must be no more than 255 characters",
      };
    }

    return { res: true, message: "Successful" };
  };

  const sendForm = (e) => {
    e.preventDefault();

    if (checkInputformat().res) {
      setAttention(false);
      console.log(checkInputformat());
      setName("");
      setPhone("");
      setEmail("");
      setGoods("");
      setMessage("");
    } else {
      setAttention(true);
      console.log(checkInputformat());
    }
  };

  return (
    <div className={[sc.main, className].join(" ")}>
      <h1>Связатся с нами</h1>
      <div className={sc.contactCon}>
        <div className={sc.inputCon}>
          <FormInput
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={sc.input}
            type="text"
            placeholder="Имя"
          />
          <FormInput
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className={sc.input}
            type="text"
            placeholder="Номер телефона"
            star={attention}
          />
          <FormInput
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={sc.input}
            type="text"
            placeholder="E-mail"
            star={attention}
          />
          <FormInput
            value={goods}
            onChange={(e) => {
              setGoods(e.target.value);
            }}
            className={sc.input}
            type="text"
            placeholder="Интересуещий товар/услуга"
          />
          <FormTextarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className={sc.textarea}
            placeholder="Сообщение"
            star={attention}
          />
        </div>

        <img src={img} alt="" />
      </div>
      <div className={sc.checkboxCon}>
        <input className={sc.checkbox} type="checkbox" id="" />
        <p>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</p>
      </div>

      <Link
        onClick={sendForm}
        className={sc.Link}
        text={"Отправить"}
        style={1}
      />
    </div>
  );
};

export default Contact;
