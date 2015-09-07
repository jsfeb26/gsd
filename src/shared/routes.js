// react-router routes that link client and server

import { Route } from "react-router";
import React from "react";

import Application from "./components/Application";

export default (
  <Route handler={ Application } path="/">
    <Route path="/favicon.ico" />
  </Route>
);
