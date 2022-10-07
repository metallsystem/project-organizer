import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, authRoutes } from "../routes";

const AppRouter = () => {

  const { isAuth } = useSelector(state => state.auth)

  return (

    <Routes>
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={Component} />
      )}
      {isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={Component} />
      )}
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  );
};

export default AppRouter;
