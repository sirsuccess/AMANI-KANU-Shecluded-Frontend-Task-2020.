// import React from "react";
// import { Link } from "react-router-dom";

import "./navbar.scss";
// export default function Navbar() {
//   return (
//     <>
//       <div class="navbar">
//         <div class="top-navbar">
//           <div class="top-navbar-text" id="top-navbar-text">
//             Today:{" "}
//             <span class="date" id="date">
//               ( Local time 12: 00 )
//             </span>
//           </div>
//           <div class="social-media">
//             {" "}
//             <a
//               href="http://facebook.com/sirsuccess"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i class="fa fa-facebook-square"></i>
//             </a>
//             <a href="http:/twitter.com/AmaniKanu" target="_blank">
//               <i class="fa fa-twitter-square"></i>
//             </a>
//             <a href="#">
//               <i class="fa fa-instagram"></i>
//             </a>
//           </div>
//           <div class="top-navbar-dropdown" id="top-navbar-dropdown">
//             {/* <!-- Eng <i class="fas fa-angle-down"></i> --> */}
//             <select name="lang" class="dropdown">
//               <option value="Eng">Eng</option>
//               <option value="Fr">Fr</option>
//               <option value="Spn">Spn</option>
//             </select>
//           </div>
//           {/* <!-- end of top navbar --> */}
//         </div>
//       </div>
//       <nav class="navbar navbar-expand-md bg-white navbar-dark">
//         {/* <!-- Toggler/collapsibe Button --> */}
//         <button
//           class="navbar-toggler bg-dark"
//           type="button"
//           data-toggle="collapse"
//           data-target="#collapsibleNavbar"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         {/* <!-- Navbar links --> */}
//         <div class="collapse navbar-collapse" id="collapsibleNavbar">
//           <div class="navbar-link">
//             <ul class="navbar-nav">
//               <li>
//                 <Link to="/">HOME</Link>
//               </li>
//               <li>
//                 <Link to="/cats">Cats</Link>
//               </li>

//               <li>
//                 {/* <!-- Brand --> */}

//                 <Link to="/index.html">
//                   <div class="logo second"> REACT API</div>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/lotr">LOTR</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//             </ul>
//             {/* <!-- end of navbar-link --> */}
//           </div>
//           {/* <!-- end of navbar --> */}
//         </div>
//       </nav>
//     </>
//   );
// }

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div class="navbar">
        <div class="top-navbar">
          <div class="top-navbar-text" id="top-navbar-text">
            Today:{" "}
            <span class="date" id="date">
              ( Local time 12: 00 )
            </span>
          </div>
          <div class="social-media">
            {" "}
            <a
              href="http://facebook.com/sirsuccess"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-facebook-square"></i>
            </a>
            <a href="http:/twitter.com/AmaniKanu" target="_blank">
              <i class="fa fa-twitter-square"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
          <div class="top-navbar-dropdown" id="top-navbar-dropdown">
            {/* <!-- Eng <i class="fas fa-angle-down"></i> --> */}
            <select name="lang" class="dropdown">
              <option value="Eng">Eng</option>
              <option value="Fr">Fr</option>
              <option value="Spn">Spn</option>
            </select>
          </div>
          {/* <!-- end of top navbar --> */}
        </div>
      </div>
      <Navbar   color="light" light expand="md" >
        <NavbarBrand href="/">
          <div class="logo second"> REACT API</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/cats/">Cats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/lotr">LOTR</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="mr-3">Login</NavbarText>
          <NavbarText>Register</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
