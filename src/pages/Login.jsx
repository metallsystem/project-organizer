import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <LoginForm />
        <Link
          className="button test__btn"
          to="/"
        >
          Тестовый режим
        </Link>
      </div>
    </div>
  )
}


export default Login;
