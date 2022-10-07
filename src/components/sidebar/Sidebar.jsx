import React from "react";
import './sidebar.scss';
import sprite from '../../assets/images/symbol/sprite.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item sidebar__item--active">
          <svg className="sidebar__icon icon" width="24" height="24">
            <use href={ sprite + "#recent" }></use>
          </svg>
          <span className="sidebar__item-text">Нещодавні</span>
        </li>
        <li className="sidebar__item">
          <svg className="sidebar__icon icon" width="24" height="24">
            <use href={ sprite + "#task" }></use>
          </svg>
          <span className="sidebar__item-text">Всі проекти</span>
        </li>
        <li className="sidebar__item">
          <svg className="sidebar__icon icon" width="24" height="24">
            <use href={ sprite + "#team" }></use>
          </svg>
          <span className="sidebar__item-text">Команда</span>
        </li>
        <li className="sidebar__item">
          <svg className="sidebar__icon icon" width="24" height="24">
            <use href={ sprite + "#activity" }></use>
          </svg>
          <span className="sidebar__item-text">Активність</span>
        </li>
      </ul>
    </aside>
  )
};

export default Sidebar;
