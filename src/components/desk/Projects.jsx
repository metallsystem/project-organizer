import React from "react";
import './projects.scss';
import sprite from '../../assets/images/symbol/sprite.svg';
import ProjectCard from "../UI/ProjectCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, getAll } from "../../store/action-creators/progect";
import FormInput from "../UI/FormInput";
import { useState } from "react";

const Projects = () => {
  const [popup, setPopup] = useState('')
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [privacy, setPrivacy] = useState('');

  const dispatch = useDispatch();
  const { id } = useSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(getAll(id, 99, 1));
  }, []);

  const { projects } = useSelector(state => state.project);

  const openPopup = () => {
    setPopup('popup--open');
  };

  const closePopup = (e) => {
    e.stopPropagation();
    if (e.target.className === 'popup__body') {
      setPopup('');
    };
  };

  const addProject = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('name', name);
    formData.append('privacy', privacy);
    formData.append('userId', id);
    formData.append('img', file);

    dispatch(createProject(formData));

    setFile('');
    setName('');
    setPrivacy('');
    setPopup('');
  };

  return (
    <div className="project">
      <ul className="project__list">
        <li className="project__item">
          <button className="project__btn" type="button" onClick={openPopup}>
            <svg className="sidebar__icon icon" width="48" height="48">
              <use href={ sprite + "#plus" }></use>
            </svg>
            <span>Створити новий проект</span>
          </button>
        </li>
        {
          !projects ?
          (<div>Ви ще не стоворили жодного проекту</div>) :
          (projects.map(item => (
            <ProjectCard
              key={item._id}
              name={item.name}
              img={item.imgUrl}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
            />
          )))
        }
      </ul>
      <article className={popup ? "popup popup--open" : "popup"} role="dialog">
          <div className="popup__body" onClick={closePopup}>
            <div className="popup__content">
              <h2 className="popup__title title">Створити новий проект</h2>
              <form className="form">
              <FormInput
                onChange={e => setName(e.target.value)}
                value={name}
                type="text"
                id="project-name"
                required
                text="Назва проекту"
              />
              <FormInput
                onChange={e => setFile(e.target.files[0])}
                // value={}
                type="file"
                id="img"
                required
                text="Зображення"
              />
              <div className="radio">
                <label className="radio__label">
                  <input className="radio__input sr-only" type="radio" name="privacy" value="privat" onChange={e => {setPrivacy(e.target.value); console.log(privacy)}}/>
                  <span className="radio__btn"></span>
                  Приватний
                </label>
                <label className="radio__label">
                  <input className="radio__input sr-only" type="radio" name="privacy" value="public" onChange={e => {setPrivacy(e.target.value); console.log(privacy)}}/>
                  <span className="radio__btn"></span>
                  Публічний
                </label>
              </div>
              <button type="submit" onClick={addProject}>a;lsdhjg;kf'sadl</button>
              </form>
            </div>
          </div>
      </article>
    </div>
  );
};

export default Projects;
