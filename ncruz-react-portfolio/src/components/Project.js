import React from "react";
import Project1 from "../assets/images/steam-achievement-picker.jpeg" // TODO: Do i need to import each picture individually or is there an easier way?
export default function Project({ project }) {
  const { name, description, repo, link } = project;

  return (
    <div className="col-lg-4 col-sm-6">
      <div className="portfolio-box">
        {/* <image
            src={require(`../assets/images/${name}.jpg`)}
            className=""
        /> */}
        <image src={Project1}/>

        <div className="portfolio-box-caption">
          <div className="portfolio-box-caption-content">
            <a href={repo}>Repository</a>
            <a href={link}>Deployed App</a>
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//   TODO: FIGURE OUT PROJECT COMPONENT
