import React from "react";
import profilePhoto from "../../assets/images/ncruz-photo.PNG";

export default function AboutMe() {
  return (
    <div>
      <div className="aboutMe d-flex text-center">
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-center">About Me</h1>
              <hr />
              <p className="mb-5">
                I am an elementary school educator that mainly works with
                students with special needs. I graduated from the University of
                Washington in 2014 with a BA degree in American Ethnic Studies
                and minors in Diversity and Education, Learning, & Society. I am
                currently enrolled in a full stack web developer bootcamp at the
                University of Washington. I enjoy sports, fitness, hiking, Star
                Wars, gaming, and all forms of art and creative expression. I
                also enjoy solving problems by thinking outside the box.
              </p>
              <img className="circular_image" src={profilePhoto} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
