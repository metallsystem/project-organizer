import React from "react";
import './projects.scss';
import sprite from '../../assets/images/symbol/sprite.svg';
import ProjectCard from "../UI/ProjectCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/action-creators/progect";

const Projects = () => {

  const dispatch = useDispatch();
  const { id } = useSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(getAll(id, 3, 2));
  }, []);

  const { projects } = useSelector(state => state.project);

  return (
    <div className="project">
      <ul className="project__list">
        <li className="project__item">
          <button className="project__btn" type="button">
            <svg className="sidebar__icon icon" width="48" height="48">
              <use href={ sprite + "#plus" }></use>
            </svg>
            <span>Створити новий проект</span>
          </button>
        </li>
        {projects.map(item => (
          <ProjectCard
            key={item._id}
            name={item.name}
            img={item.imgUrl}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
