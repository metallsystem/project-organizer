import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { publicRoutes, authRoutes } from "../routes";

const AppRouter = () => {

  return (

    <Switch>
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} component={Component} exact />
      )}
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;
