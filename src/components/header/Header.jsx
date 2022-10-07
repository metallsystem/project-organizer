import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import './header.scss';
import logo from '../../assets/images/content/logo.png';
import Logout from "../auth/Logout";
import UserPanel from "../user-panel/UserPanel";


const Header = () => {
  const { isAuth } = useSelector(state => state.auth);

    return (
      <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="logo" to="/">
            <img className="logo__img" src={logo} alt="Логотип" />
          </Link>
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
                  <UserPanel/>
                )
              }
        </div>
      </div>
    </header>
    );
};

export default Header;
