import React from "react";
import PortalMain from "./components/PortalMain/PortalMain";

import PortalSideNav from "./components/PortalSideNav/PortalSideNav";

import "./PortalDashboard.css";

const PortalDashboard = (props) => {
  return (
    <div id="portal-dashboard">
      <PortalSideNav />
      <PortalMain />
    </div>
  );
};

export default PortalDashboard;
