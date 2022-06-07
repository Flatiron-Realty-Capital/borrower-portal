import React, { useState } from "react";

import "./PortalHeader.css";
import Logo from "../../../../../assets/images/logo.png";
import Header from "../../../../header/header";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../../../redux/actions/isLoggedInActions";

const PortalHeader = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const dispatch = useDispatch();

  return (
    <Header id={"portal-header"}>
      <div className="logo-wrapper">
        <img src={Logo} alt="" srcset="" />
      </div>
      <nav>
        <ul>
          <li>
            <div className="icon-wrapper">{bell}</div>
          </li>
          <li className="profile">
            <button onClick={() => setDropdownActive((s) => !s)} id="profile">
              <div className="icon-wrapper">{userIcon}</div>
              <span id="profile__name">Example@gmail.com</span>
              <div id="drowdown-arrow" className="icon-wrapper">
                {dropdownArrow}
              </div>
            </button>
            {dropdownActive && (
              <div className="profile-dropdown">
                <button onClick={() => dispatch(logOutUser())}>Logout</button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default PortalHeader;

const bell = (
  <svg viewBox="0 0 24 24">
    <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
  </svg>
);
const dropdownArrow = (
  <svg viewBox="0 0 24 24">
    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
  </svg>
);
const userIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path>
    <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path>
  </svg>
);
