import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import './app.scss';
import Layout from "./components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "./store/action-creators/auth";
import { USER_PAGE_ROUTE } from "./utils/consts";

const App = () => {

  const { isAuth, user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.loading)

  useEffect(() => {
    if (isLoading) {
      return <div>Loading...</div>
    }
  }, [isLoading])

  useEffect(() => {

    if (isAuth) {
      navigate(USER_PAGE_ROUTE + `/${user.id || user.googleId}`);
    }

  }, [navigate, isAuth]);

  useEffect( () => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [])

  return (
    <Layout>
      <AppRouter />
      <ToastContainer position="bottom-right"/>
    </Layout>
  );
};

export default App;
