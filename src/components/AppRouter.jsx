import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, authRoutes } from "../routes";

const AppRouter = () => {

  return (

    <Routes>
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={Component} />
      )}
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  );
};

export default AppRouter;
