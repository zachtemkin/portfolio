import React from "react";
import AuthProvider from "./src/context/auth";
import "./src/global-styles/global-classes.scss";

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
);
