import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="nav-bar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container w-75">
        <div className="row justify-content-between">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My Contacts"
};

Header.propTypes = {
  branding: propTypes.string.isRequired
};

export default Header;
