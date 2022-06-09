import React from "react";
import "./PortalVerticalNav.css";
import Logo from "../../../../../assets/images/white-logo.png";
import City from "../../../../../assets/images/city.png";
const PortalVerticalNav = (props) => {
  return (
    <nav id="portal-vertical-nav">
      <div className="vertical-nav__header">
        <div className="logo-wrapper">
          <img src={Logo} alt="" srcset="" />
          <p className="logo-title">Borrow Portal</p>
        </div>
        <div className="mobile-nav-wrapper">
          <button onClick={props.handleMobileNavToggle} id="mobile-nav">
            {hamburger}
          </button>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button id="dashboard" className={`nav-link-item active`}>
              <div className="icon-wrapper">{home}</div>
              <span className="link-item-title">Dashboard</span>
            </button>
          </li>
          <li>
            <button id="dashboard" className={`nav-link-item`}>
              <div className="icon-wrapper">{credit}</div>
              <span className="link-item-title">Credit Authorizations</span>
            </button>
          </li>
          <li>
            <button id="dashboard" className={`nav-link-item`}>
              <div className="icon-wrapper">{building}</div>
              <span className="link-item-title">Deal Submissions</span>
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

export default PortalVerticalNav;

const home = (
  <svg viewBox="0 0 24 24">
    <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
  </svg>
);
const hamburger = (
  <svg viewBox="0 0 24 24">
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
  </svg>
);

const credit = (
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.001 12H4z"></path>
    <path d="M6.5 11h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5zM6 14h6v2.001H6zm7 0h5v2.001h-5z"></path>
  </svg>
);

const building = (
  <svg viewBox="0 0 24 24">
    <path d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 0 0 3 16v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3 3 3V20zm8 0h-6v-4a.999.999 0 0 0 .707-1.707L9 9.586V4h10v16z"></path>
    <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z"></path>
  </svg>
);
