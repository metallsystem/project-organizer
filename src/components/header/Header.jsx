import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import './header.scss';
import { logout } from "../../store/action-creators/user";
import FormButton from "../forms/FormButton";
import { toast } from "react-toastify";


const Header = () => {
  const dispatch = useDispatch()
  const { isAuth, message, user } = useSelector(state => state.user);

  useEffect(() => {
    if (message) {
      toast(message)
    }
  }, [message]);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout(user.userId));
  }

    return (
      <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="logo" to="/">
            Логотип
            {/* <img className="logo__img" src="" alt="Логотип" /> */}
          </Link>
          <nav className="menu">
              { (!isAuth) ?
                (
                  <ul className="menu__list">
                    <li className="menu__item">
                      <NavLink className="menu__link button" to='/login'>Войти</NavLink>
                    </li>
                    <li className="menu__item">
                      <NavLink className="menu__link button" to='/registration'>Регистрация</NavLink>
                    </li>
                  </ul>
                )
              :
                (
                  <ul className="menu__list">
                    <li className="menu__item">
                      <FormButton
                        className={ {button: "menu__link button form__button"} }
                        onClick={logoutHandler}
                        text = "Выйти"
                        type = "submit"
                      />
                    </li>
                  </ul>
                )
              }
          </nav>
        </div>
      </div>
    </header>
    );
};

export default Header;
