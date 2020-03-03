import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from "reactstrap";
import { NavLink } from "react-router-dom";

import CurrentDate from "../../commons/Date";
import "./navbar.scss";

const AppNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-section">
      <div className="navbar">
        <div className="top-navbar">
          <div className="top-navbar-text" id="top-navbar-text">
            Today:{" "}
            <span className="date" id="date">
              <CurrentDate />
            </span>
          </div>
          <div className="social-media">
            {" "}
            <a
              href="http://facebook.com/sirsuccess"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="http:/twitter.com/AmaniKanu" target="_blank">
              <i className="fa fa-twitter-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="top-navbar-dropdown" id="top-navbar-dropdown">
            <select name="lang" className="dropdown">
              <option value="Eng">Eng</option>
              <option value="Fr">Fr</option>
              <option value="Spn">Spn</option>
            </select>
          </div>
          {/* <!-- end of top navbar --> */}
        </div>
      </div>
      <div className="stick-top">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="navbar-brand">
            <span>React</span> API
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="mt-4">
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/cats">Cats</NavLink>
              </NavItem>
              <NavItem className="ml-3">
                <NavLink to="/lotr">LOTR</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="mr-3">
              <NavLink to="/login">Login</NavLink>
            </NavbarText>
            <NavbarText>
              <NavLink to="/register">Sign up</NavLink>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default AppNavbar;
