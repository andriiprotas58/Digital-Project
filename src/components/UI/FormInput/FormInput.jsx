import React, { useState } from "react";
import sc from "./Forminput.module.css";
import { useRef } from "react";
// { placeholder = "", star = false }
const FormInput = (props) => {
  const [placeholderStatus, setPlaceholderStatus] = useState(true);
  const originalOnChange = props.onChange;
  const inputRef = useRef(null);
  return (
    <div className={sc.inputCon}>
      <input
        ref={inputRef}
        {...props}
        placeholder=""
        className={[sc.input, props.className].join(" ")}
        type="text"
        onChange={(e) => {
          // вызов изначального обработчика
          if (originalOnChange) {
            originalOnChange(e);
          }

          // дополнительный код
          if (e.target.value.length > 0) {
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

export default FormInput;
