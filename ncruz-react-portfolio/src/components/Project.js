import React from "react";

export default function Project({ project }) {
  const { name, description, repo, link } = project;

  return (
    <div className="col-lg-4 col-sm-6">
      <div className="portfolio-box">
        {/* <image
            src={require(`../../assets/images/portfolio/${name}.jpg`)}
            className=""
        /> */}

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
