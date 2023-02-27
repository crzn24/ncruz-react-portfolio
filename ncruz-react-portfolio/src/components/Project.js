import React from "react";

export default function Project({project}) {
    const {name, description, repo, link,  } = project;

    return (
      <div className="">
        <image
            src={require(`../../assets/images/portfolio/${name}.jpg`)}
            className=""
        />
        
        <div>
            <a href={repo}>Repository</a>
            <a href={link}>Deployed App</a>
            <p className="">{description}</p>
        </div>
        
      </div>
    );
  }

//   TODO: FIGURE OUT PROJECT COMPONENT