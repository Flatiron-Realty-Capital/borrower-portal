import React from "react";
import PortalMain from "./components/PortalMain/PortalMain";
import FormOverlay from "./components/FormOverlay/FormOverlay";
import PortalSideNav from "./components/PortalSideNav/PortalSideNav";

import "./PortalDashboard.css";

const PortalDashboard = (props) => {
  const [formIsActive, setFormIsActive] = React.useState(false);
  const [formType, setFormType] = React.useState("Credit Authorization Form");
  const toggleForm = (title) => {
    setFormType(title);
    setFormIsActive((s) => !s);
  };
  return (
    <div id="portal-dashboard">
      {formIsActive && <FormOverlay toggleForm={toggleForm} title={formType} />}
      <PortalSideNav />
      <PortalMain toggleForm={toggleForm} />
    </div>
  );
};

export default PortalDashboard;
