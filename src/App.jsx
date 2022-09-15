import React from "react";
import AppRouter from "./components/AppRouter";
import './app.scss';
import Layout from "./components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {

  const { loading } = useSelector(state => state.user)

  useEffect(() => {
    if (loading) {
      return <div>Loading...</div>

    }
  }, [loading])

  return (
    <Layout>
      <AppRouter />
      <ToastContainer position="bottom-right"/>
    </Layout>
  );
};

export default App;
