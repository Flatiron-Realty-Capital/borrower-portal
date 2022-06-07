import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <header id={props.id} className={props.className}>
      {props.children}
    </header>
  );
};

export default Header;
