import React, { useState } from "react";
import Project from "../Project";

export default function Portfolio() {

  const [projects] = useState([
    {
      name: "steam-achievement-picker",
      description: "TailwindCSS/Steam API",
      link: "https://vapour-for-gamers.herokuapp.com/",
      repo: "https://github.com/crzn24/Steam-Achievement-Picker.git",
    },
    {
      name: "funny_movie_gif",
      description: "JavaScript/BulmaCSS/OMDB API",
      link: "https://maksimrazuvaev.github.io/funny_movie_gif/",
      repo: "https://github.com/crzn24/funny_movie_gif.git",
    },
    {
      name: "daily-planner-app",
      description: "HTML/CSS/JavaScript",
      link: "https://crzn24.github.io/daily-planner-app/",
      repo: "https://github.com/crzn24/daily-planner-app.git",
    },
    {
      name: "5day-weather-dashboard",
      description: "JavaScript/API/Bootstrap",
      link: "https://crzn24.github.io/5day-weather-dashboard/",
      repo: "https://github.com/crzn24/5day-weather-dashboard.git",
    },
    {
      name: "note-taker-expressjs",
      description: "Node/Express/Bootstrap",
      link: "https://note-taker-expressjs-crzn24.herokuapp.com/",
      repo: "https://github.com/crzn24/note-taker-expressjs.git",
    },
    {
      name: "password-generator-javascript-application",
      description: "HTML/CSS/JavaScript",
      link: "https://crzn24.github.io/password-generator-javascript-application/",
      repo: "https://github.com/crzn24/password-generator-javascript-application.git",
    },
  ]);

  return (
    <section className="bg-dark">
      <div className="container-fluid p-0">
        <div className="portfolio col-lg-10 mx-auto text-white mb-4 pt-4">
          <h1 className="text-center">Portfolio</h1>
          <hr className="light my-4" />
          <div className="row">
            {/* TODO: PROJECTS GO HERE */}
            {projects.map((project) => (
              <Project project={project} key={"project"}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
//TODO: ADD IN PROJECTS COMPONENT
