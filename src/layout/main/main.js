import React from "react";
import { useSelector } from "react-redux";
import PortalDashboard from "../screens/PortalDashboard/PortalDashboard";

import UserAdmissionScreen from "../screens/UserAdmission/UserAdmission";

import "./main.css";

const Main = (props) => {
  const state = useSelector((state) => state);
  return (
    <main>
      {state.isLoggedIn ? <PortalDashboard /> : <UserAdmissionScreen />}
    </main>
  );
};

export default Main;
