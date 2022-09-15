import React from "react";

const defaultClasses = {
  button: "button form__button",
  wrapper: "form__item"
}

const FormButton = ({ text, type, className = defaultClasses, ...props }) => {
  return (
    <div className={className.wrapper}>
      <button
        className={className.button}
        type={type}
        {...props}
      >
        {text}
      </button>
    </div>
  );
};

export default FormButton;
