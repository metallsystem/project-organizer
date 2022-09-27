import React from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Start from "./pages/Start";
import UserPage from "./pages/UserPage";
import { INDEX_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTRATION_PAGE_ROUTE, USER_PAGE_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_PAGE_ROUTE,
    Component: <Login/>
  },
  {
    path: REGISTRATION_PAGE_ROUTE,
    Component: <Registration/>
  },
  {
    path: INDEX_PAGE_ROUTE,
    Component: <Start/>
  }
];

export const authRoutes = [
  {
    path: USER_PAGE_ROUTE + '/:id',
    Component: <UserPage/>
  }
];
