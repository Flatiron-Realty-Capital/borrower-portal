import React from "react";
import BackgroundShape from "./components/backgroundShape/backgroundShape";
import FormSection from "./sections/FormSection/FormSection";
import StatsSection from "./sections/StatsSection/StatsSection";
import "./UserAdmission.css";

const UserAdmission = (props) => {
  return (
    <>
      <BackgroundShape />
      <div className="main-inner-wrapper">
        <FormSection />
        <StatsSection />
      </div>
    </>
  );
};

export default UserAdmission;
