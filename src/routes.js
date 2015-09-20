// react-router routes that link client and server

import React from "react";
import { Route } from "react-router";

import {
  App,
  Home
} from './containers';
// import Application from "./shared/components/Application";

// export default (
//   <Route handler={ Application } paht="/" />
// )
export default function(store) {
  return (
    <Route component={ App } >
      <Route path="/" component={ Home } />
    </Route>
  );
}
