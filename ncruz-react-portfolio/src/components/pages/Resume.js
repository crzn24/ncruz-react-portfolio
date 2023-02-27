import React from "react";
import resumepdf from "../../assets/NCruzResume.pdf"; //TODO: Upload actual resume to replace placeholder.

export default function Resume() {
  return (
    <section className="bg-dark">
      <div className="container">
        <div className="col-lg-10 mx-auto text-white mb-4 pt-4">
          <h1 className="text-center">Resume</h1>
          <hr className="light my-4" />
          <h3>Front-End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
          <h3>Back-End</h3>
          <ul>
            <li>Node</li>
            <li>MongoDB, Mongoose</li>
            <li>MySQL, Sequelize</li>
            <li>APIs</li>
            <li>Express</li>
          </ul>
          <h3>Additional Skills</h3>
          <ul>
            <li>Photoshop</li>
            <li>Affinity Designer, Procreate</li>
            <li>Miro</li>
            <li>Figma</li>
          </ul>

          <p className="text-center">
            Download{" "}
            <a href={resumepdf} className="text-faded white-link" download>
              resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
