import React from "react";
import { BrowserRouter } from "react-router-dom";
import UserRoutes from "./UserRoutes";

const MainRoutes = () => {
  return <UserRoutes />;
};

export default () => (
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);
