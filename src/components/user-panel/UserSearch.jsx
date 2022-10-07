import React from "react";
import search from '../../assets/images/symbol/sprite.svg';

const UserSearch = () => {
  return (
    <li className="user-panel__item">
      <div className="user-panel__search">
        <input className="user-panel__search-input" type="search" name="search" placeholder="Пошук..."/>
        <svg className="sidebar__icon icon" width="20" height="20">
          <use href={search + '#search'}></use>
        </svg>
      </div>
    </li>
  )
};

export default UserSearch;
