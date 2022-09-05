import React from "react";
import { NavLink, Link } from "react-router-dom";
import './header.scss';


const Header = () => {
  const path = window.location.pathname;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="logo" to="/">
            Логотип
            {/* <img className="logo__img" src="" alt="Логотип" /> */}
          </Link>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink className="menu__link button" to='/login'>Войти</NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__link button" to='/registration'>Регистрация</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
