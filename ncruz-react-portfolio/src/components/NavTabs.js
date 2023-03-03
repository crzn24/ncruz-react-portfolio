import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav"> 
    {/* TODO: put fixed-top of class */}
      <div className="container navBg">
        <h1 className="navbar-brand">Nathan Cruz</h1>

        <div>
          <ul className="nav nav-tabs navbar-nav ml-auto">
            <li className="nav-item">
              <a
                href="#aboutme"
                onClick={() => handlePageChange("About Me")}
                // Check to see if the currentPage is `About Me`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "About Me" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")} // TODO: Change to projects?
                // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
