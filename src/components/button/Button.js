import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div>
      <input
        type={props.type}
        className={`LoginRegister-form-button ${props.class}`}
        value={props.value}
      />
    </div>
  );
}
