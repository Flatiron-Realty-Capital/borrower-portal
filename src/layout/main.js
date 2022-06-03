import React from "react";
import BackgroundShape from "./backgroundShape";
import Form from "./form/form";
import Stats from "./stats";
import "./styles/main.css";

const Main = (props) => {
  return (
    <main>
      <BackgroundShape />
      <div className="main-inner-wrapper">
        <section id="form">
          <Form />
        </section>
        <section id="stats">
          <Stats />
        </section>
      </div>
    </main>
  );
};

export default Main;
