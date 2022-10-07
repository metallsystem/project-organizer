import React from 'react';
import avatar from '../../assets/images/content/user.jpeg';
import arrowDown from '../../assets/images/symbol/sprite.svg'

const UserProfile = () => {
  return (
    <li className="user-panel__item">
      <div className="user-panel__account">
        <img className="user-panel__img" src={avatar} alt="Аватар"/>
        <span className="user-panel__name">Domin Viacheslav</span>
        <svg className="user-panel__icon" width="10" height="10">
          <use href={arrowDown + '#arrow-down'}></use>
        </svg>
      </div>
    </li>
  );
};

export default UserProfile;
