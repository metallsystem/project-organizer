import React from "react";

const defaultClasses = {
  input: "form__input",
  label: "form__label",
  wrapper: "form__item"
};

const FormInput = ({ text, id, type, className = defaultClasses, ...props }) => {
  return (
    <div className={className.wrapper}>
      <label className={className.label} htmlFor={id}>{text}</label>
      <input
        className={className.input}
        type={type}
        id={id}
        {...props}
      />
    </div>
  );
};

export default FormInput;
