import React from "react";
import AppRouter from "./components/AppRouter";
import './app.scss';
import Header from "./components/header/Header";

const App = () => {

  return (
    <>
      <Header />
      <main className="main">
        <AppRouter />
      </main>
    </>
  );
};

export default App;
