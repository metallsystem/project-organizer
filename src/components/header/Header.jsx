import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import './header.scss';
import Logout from "../auth/Logout";


const Header = () => {
  const { isAuth } = useSelector(state => state.user);

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
                      <NavLink className="menu__link button" to='/login'>Увійти</NavLink>
                    </li>
                    <li className="menu__item">
                      <NavLink className="menu__link button" to='/registration'>Реєстрація</NavLink>
                    </li>
                  </ul>
                )
              :
                (
                  <Logout/>
                )
              }
          </nav>
        </div>
      </div>
    </header>
    );
};

export default Header;
