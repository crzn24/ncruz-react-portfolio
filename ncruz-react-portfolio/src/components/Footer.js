import React from "react";
// ICONS FOR FOOTER
import {
  // GitHub:
  AiFillGithub,
  // LinkedIn:
  AiFillLinkedin,
} from "react-icons/ai";

import {
  // Stack Overflow
  BsStackOverflow,
} from "react-icons/bs";


export default function Footer() {
  return (
    <div id="footer-contact">
      <div className="contact-icons">
        <a href="https://github.com/crzn24" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>

      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/nathancruz-/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>

      <div className="contact-icons">
        <a
          href="https://stackexchange.com/users/27874497/crzn24"
          target="_blank"
          rel="noreferrer"
        >
          <BsStackOverflow />
        </a>
      </div>
    </div>
  );
}
