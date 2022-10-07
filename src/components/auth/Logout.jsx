import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/action-creators/auth";
import FormButton from "../UI/FormButton";
import { toast } from "react-toastify";
import { GoogleLogout } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../../utils/consts";
import { LOGOUT_SUCCESS } from "../../store/actions/auth";

const Logout = () => {
    const dispatch = useDispatch()
    const { message, user, authWith } = useSelector(state => state.auth);

    useEffect(() => {
      if (message) {
        toast(message)
      }
    }, [message]);

    const logOut = () => {
      dispatch({ type: LOGOUT_SUCCESS })
    };

    const logoutHandler = (e) => {
      e.preventDefault();
      dispatch(logout(user.userId));
    }

      return (
        <ul className="menu__list">
          <li className="menu__item">
            { (authWith === 'default') ?
                <FormButton
                  className={ {button: "menu__link button form__button"} }
                  onClick={logoutHandler}
                  text = "Вийти"
                  type = "submit"
                />
              :
                <GoogleLogout clientId={GOOGLE_CLIENT_ID} buttonText="Log out!!!" onLogoutSuccess={logOut} />
            }
          </li>
        </ul>
      );
};

export default Logout;
