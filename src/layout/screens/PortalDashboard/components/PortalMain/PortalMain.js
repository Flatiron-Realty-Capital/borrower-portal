import React from "react";
import "./PortalMain.css";
import PortalMainHeader from "./layout/PortalMainHeader/PortalMainHeader";
import PortalMainBody from "./layout/PortalMainBody/PortalMainBody";

const PortalMain = (props) => {
  return (
    <section id="portal-main">
      <PortalMainHeader />
      <PortalMainBody toggleForm={props.toggleForm} />
    </section>
  );
};

export default PortalMain;
