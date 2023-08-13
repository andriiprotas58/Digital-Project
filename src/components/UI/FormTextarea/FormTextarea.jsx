import React, { useState } from "react";
import sc from "./FormTextarea.module.css";

const FormTextarea = (props) => {
  const [placeholderStatus, setPlaceholderStatus] = useState(true);
  const originalOnChange = props.onChange;

  return (
    <div className={sc.inputCon}>
      <textarea
        {...props}
        placeholder=""
        className={[sc.textarea, props.className].join(" ")}
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
      >
        <div className={sc.placeholder}>{props.placeholder}</div>
        <div className={[sc.star, props.star ? "" : sc.hide].join(" ")}>*</div>
      </div>
    </div>
  );
};
export default FormTextarea;
