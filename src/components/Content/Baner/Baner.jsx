import React, { useEffect, useLayoutEffect, useState } from "react";
import sc from "./Baner.module.css";
import photo1 from "../../../assets/Rectangle 6.png";
import photo2 from "../../../assets/1.jpg";
import arrow from "../../../assets/ico-shape.svg";
import Link from "../../UI/Link/Link";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const Baner = ({ className }) => {
  const [baners, setBaner] = useState([
    { img: photo1, herf: "", text: "Project Home" },
    { img: photo2, herf: "", text: "Project Room" },
  ]);

  const [activeBaner, setActiveBaner] = useState(0);

  const [activeData, setActiveData] = useState(baners[activeBaner]);

  const [tumbler, setTumbler] = useState(false);

  const [firstRander, setFirstRander] = useState(true);

  useEffect(() => {
    if (!firstRander) {
      console.log("переключение");
      setTumbler(!tumbler);
    }
  }, [activeBaner]);

  return (
    <div className={[className, sc.main].join(" ")}>
      <div className={sc.banerText}>
        <div className={sc.heading}>
          <h1>{activeData.text.split(" ")[0].toUpperCase()}</h1>
          <SwitchTransition>
            <CSSTransition
              key={tumbler}
              timeout={250}
              classNames={{
                enterActive: sc.banerShow,
                exitActive: sc.banerHide,
              }}
              onExited={() => {
                setActiveData(baners[activeBaner]);
              }}
            >
              <h2>{activeData.text.split(" ")[1].toUpperCase()}</h2>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className={sc.buttandcount}>
          <div className={sc.buttonBlock}>
            <button
              onClick={() => {
                setFirstRander(false);
                if (activeBaner - 1 < 0) {
                  setActiveBaner(baners.length - 1);
                } else {
                  setActiveBaner(activeBaner - 1);
                }
              }}
            >
              <img src={arrow} alt="" />
            </button>
            <button
              onClick={() => {
                setFirstRander(false);
                if (activeBaner + 1 >= baners.length) {
                  setActiveBaner(0);
                } else {
                  setActiveBaner(activeBaner + 1);
                }
              }}
            >
              <img
                style={{
                  MozTransform: "scaleX(-1)",
                  OTransform: "scaleX(-1)",
                  WebkitTransform: "scaleX(-1)",
                  transform: "scaleX(-1)",
                  filter: "flipH",
                }}
                src={arrow}
              />
            </button>
          </div>

          <div className={sc.counter}>
            <p>
              {activeBaner + 1 < 10 ? "0" + (activeBaner + 1) : activeBaner + 1}{" "}
            </p>
            <div className={sc.line}></div>
            <p>{baners.length < 10 ? "0" + baners.length : baners.length}</p>
          </div>
        </div>
      </div>

      <div className={sc.baner}>
        <SwitchTransition>
          <CSSTransition
            key={tumbler}
            timeout={250}
            classNames={{
              enterActive: sc.banerShow,
              exitActive: sc.banerHide,
            }}
            onExited={() => {
              setActiveData(baners[activeBaner]);
            }}
          >
            <div>
              <img src={activeData.img} alt="" />

              <Link
                className={sc.banerLink}
                text={"Взглянуть"}
                href={activeData.herf}
              />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default Baner;
