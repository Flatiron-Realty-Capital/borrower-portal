import React from "react";
import "./PortalSideNav.css";
import Logo from "../../../../../assets/images/white-logo.png";
import City from "../../../../../assets/images/city.png";
const PortalSideNav = (props) => {
  return (
    <nav id="portal-side-nav">
      <div className="logo-wrapper">
        <img src={Logo} alt="" srcset="" />
      </div>

      <nav>
        <ul>
          <li>
            <button id="dashboard" className={`nav-link-item active`}>
              <div className="icon-wrapper">{home}</div>
              <span className="link-item-title">Dashboard</span>
            </button>
          </li>
        </ul>
      </nav>

      <div className="city-image-wrapper">
        <img src={City} alt="" srcset="" />
      </div>
    </nav>
  );
};

export default PortalSideNav;
const home = (
  <svg viewBox="0 0 24 24">
    <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
  </svg>
);
