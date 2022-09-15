import React from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Start from "./pages/Start";
import { INDEX_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Login/>
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Registration/>
  },
  {
    path: INDEX_ROUTE,
    Component: <Start/>
  }
];
