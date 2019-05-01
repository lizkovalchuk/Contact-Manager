import React from "react";
import propTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="nav-bar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <div className="row justify-content-between">
          <a href="/" className="navbar-brand">{branding}</a>                    
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
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
