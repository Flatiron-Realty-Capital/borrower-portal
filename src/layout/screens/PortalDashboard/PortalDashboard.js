import React from "react";
import PortalBody from "./components/PortalBody/PortalBody";
import PortalHeader from "./components/PortalHeader/PortalHeader";

import "./PortalDashboard.css";

const PortalDashboard = (props) => {
  return (
    <div className="portal-dashboard-outer-wrapper">
      <PortalHeader />
      <PortalBody />
    </div>
  );
};

export default PortalDashboard;
