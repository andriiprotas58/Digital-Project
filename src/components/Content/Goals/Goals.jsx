import React from "react";

import sc from "./Goals.module.css";

const Goals = ({ className }) => {
  return (
    <div className={[className, sc.main].join(" ")}>
      <h2>Основные задачи</h2>
      <div>
        <div className={sc.goal}>
          <p className={sc.num}>1</p>
          <p className={sc.text}>
            Создание комфортных условий и повышение качества обслуживания
            клиентов
          </p>
        </div>
        <div className={[sc.goal, sc.un].join(" ")}>
          <p className={sc.num}>2</p>
          <p className={sc.text}>
            Постоянно совершенствовать качество предоставляемых услуг путем
            обучения персонала, закупки нового оборудования и усиленной рекламы
            на рынке
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
