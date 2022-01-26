import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import FrwkMap from "./components/map";
// import "./index.css";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: FrwkMap,
  errorBoundary(err, info, props) {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
