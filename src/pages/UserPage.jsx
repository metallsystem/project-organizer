import React from "react";
import Projects from "../components/desk/Projects";
import Sidebar from "../components/sidebar/Sidebar";

const UserPage = () => {

  return (
    <section className="desk">
      <div className="container">
        <div className="desk__wrapper">
          <Sidebar/>
          <Projects/>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
