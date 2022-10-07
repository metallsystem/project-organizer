import React from "react";
import bell from '../../assets/images/symbol/sprite.svg';

const UserNotification = () => {
  return (
    <li className="user-panel__item">
      <div className="user-panel__notification user-panel__notification--active">
        <svg className="sidebar__icon icon" width="24" height="24">
          <use href={bell + '#notification'}></use>
        </svg>
      </div>
    </li>
  );
};

export default UserNotification;
