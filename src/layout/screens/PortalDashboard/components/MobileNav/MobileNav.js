import React from "react";
import Modal from "../../../../../components/shared/Modal/Modal";
import Logo from "../../../../../assets/images/logo.png";
import "./MobileNav.css";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../../../redux/actions/isLoggedInActions";

const MobileNav = (props) => {
  const dispatch = useDispatch();
  return (
    <Modal id="mobile-nav" onCancel={props.onCancel} show={props.show}>
      <div className="mobile-nav__header">
        <div className="logo-wrapper">
          <img src={Logo} alt="" srcset="" />
        </div>
        <button onClick={props.onCancel} className="close">
          {cross}
        </button>
      </div>
      <div className="mobile-nav__body">
        <div className="username-wrapper">
          <span className="title">Logged in as:</span>
          <span className="username">example@gmail.com</span>
        </div>
        <div className="logout-button-wrapper">
          <button
            id="logout"
            className="dropdown-link-item"
            d
            onClick={() => dispatch(logOutUser())}
          >
            <span>Logout</span>
            <div className="icon-wrapper">{rightArrow}</div>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MobileNav;
const cross = (
  <svg viewBox="0 0 24 24">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
  </svg>
);
const rightArrow = (
  <svg viewBox="0 0 24 24">
    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
  </svg>
);
