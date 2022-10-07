import React from "react";

const ProjectCard = ({ name, img, createdAt, updatedAt }) => {

  return (
    <li className="project__item">
      <img src={img || '#'} alt="" className="project__image"/>
      <div className="project__text">
        <h2 className="project__name">{name}</h2>
        <div className="project__date">
          <p className="project__time">
            Створено: <time>{createdAt}</time>
          </p>
          <p className="project__time">
            Змінено: <time>{updatedAt}</time>
          </p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
