import React from "react";
import PortalMain from "./components/PortalMain/PortalMain";
import FormOverlaylay from "./components/FormOverlay/FormOverlay";
import PortalVerticalNav from "./components/PortalVerticalNav/PortalVerticalNav";

import "./PortalDashboard.css";

import MobileNav from "./components/MobileNav/MobileNav";

const PortalDashboard = (props) => {
  const [formIsActive, setFormIsActive] = React.useState(false);
  const [mobileNavIsActive, setmobileNavIsActive] = React.useState(false);
  const [formType, setFormType] = React.useState("credit");
  const toggleForm = (title) => {
    // setFormType(title);
    setFormIsActive((s) => !s);
  };

  const handleMobileNavToggle = () => {
    console.log("toggle");
    setmobileNavIsActive(true);
  };
  return (
    <div id="portal-dashboard">
      <MobileNav
        onCancel={() => setmobileNavIsActive(false)}
        show={mobileNavIsActive}
      />
      {/* {formIsActive && (
        <FormOverlaylay toggleForm={toggleForm} formType={formType} />
      )} */}
      <PortalVerticalNav handleMobileNavToggle={handleMobileNavToggle} />
      <PortalMain toggleForm={toggleForm} />
      {/* Comment Section */}
    </div>
  );
};

export default PortalDashboard;
