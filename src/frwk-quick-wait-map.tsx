import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import FrwkMap from "./components/map";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: FrwkMap,
  errorBoundary(err, info, props) {
    return <div>{err.message}</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
