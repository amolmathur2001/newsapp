import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            NewsMan
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/home" className="nav-link">
                Introduction
              </Link>
              <Link to="/business" className="nav-link">
                Business
              </Link>
              <Link to="/entertainment" className="nav-link">
                entertainment
              </Link>
              <Link to="/science" className="nav-link">
                Science
              </Link>
              <Link to="/health" className="nav-link">
                health
              </Link>
              <Link to="/sports" className="nav-link">
                sports
              </Link>
              <Link to="/technology" className="nav-link">
                techno
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
/*


*/
