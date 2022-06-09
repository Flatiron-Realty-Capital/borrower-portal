import React from "react";
import "./PortalMain.css";
import PortalMainHeader from "./PortalMainHeader/PortalMainHeader";
import PortalMainBody from "./PortalMainBody/PortalMainBody";

const PortalMain = (props) => {
  return (
    <section id="portal-main">
      <PortalMainHeader />
      <PortalMainBody toggleForm={props.toggleForm} />
    </section>
  );
};

export default PortalMain;
