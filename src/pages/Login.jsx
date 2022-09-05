import React from "react";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <LoginForm />
        <a
          className="button test__btn"
          href="#"
        >
          Тестовый режим
        </a>
      </div>
    </div>
  )
}


export default Login;
