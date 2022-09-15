import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        { children }
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout;
