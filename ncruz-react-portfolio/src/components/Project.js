import React from "react";
import {
  // GitHub:
  AiFillGithub
} from "react-icons/ai";

export default function Project({ project }) {
  const { name, description, repo, link } = project;

  return (
    <div className="col-lg-4 col-sm-6">
      <div className="portfolio-box" key={name}>
        <img
            src={require(`../assets/images/${name}.jpeg`)}
            alt=""
            className="img-fluid"
        />

        <div className="portfolio-box-caption">
          <div className="portfolio-box-caption-content">
            <a href={link} className="project-category text-faded text-decoration">{name}</a>
            <a href={repo} className="project-category text-faded"><i className=""><AiFillGithub /></i></a>
            <p className="project-name">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//   TODO: FIGURE OUT PROJECT COMPONENT
