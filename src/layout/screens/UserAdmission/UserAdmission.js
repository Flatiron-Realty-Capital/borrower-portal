import React from "react";
import BackgroundShape from "./components/backgroundShape/backgroundShape";
import SignInForm from "./components/SignInForm/SignInForm";
import Stats from "./components/stats/stats";

const UserAdmission = (props) => {
  return (
    <>
      <BackgroundShape />
      <div className="main-inner-wrapper">
        <section id="form">
          <SignInForm />
        </section>
        <section id="stats">
          <Stats />
        </section>
      </div>
    </>
  );
};

export default UserAdmission;
