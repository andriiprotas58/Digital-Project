import React, { useState, useEffect } from "react";
import sc from "./FormTextarea.module.css";
import { useRef } from "react";
const FormTextarea = (props) => {
  const [placeholderStatus, setPlaceholderStatus] = useState(true);
  const originalOnChange = props.onChange;
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.value) {
      setPlaceholderStatus(false);
    } else {
      setPlaceholderStatus(true);
    }
  }, [props.value]);

  return (
    <div className={sc.inputCon}>
      <textarea
        ref={inputRef}
        {...props}
        placeholder=""
        className={[sc.textarea, props.className].join(" ")}
        onChange={(e) => {
          // вызов изначального обработчика
          if (originalOnChange) {
            originalOnChange(e);
          }

          // дополнительный код
          if (e.target.value.length) {
            setPlaceholderStatus(false);
          } else {
            setPlaceholderStatus(true);
          }
        }}
      />

      <div
        className={[sc.placeholderCon, placeholderStatus ? "" : sc.hide].join(
          " "
        )}
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        <div className={sc.placeholder}>{props.placeholder}</div>
        <div className={[sc.star, props.star ? "" : sc.hide].join(" ")}>*</div>
      </div>
    </div>
  );
};
export default FormTextarea;
