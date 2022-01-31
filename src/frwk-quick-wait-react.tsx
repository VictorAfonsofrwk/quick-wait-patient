import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import "./index.css";
import App from "./App";

function domElementGetter() {
  return document.getElementById("single-spa-application:@frwk/patient");
}
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
  errorBoundary(err, info, props) {
    return <div>{err.message}</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
