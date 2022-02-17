import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import ViewReminders from "./components/ViewReminders";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ViewReminders,
  errorBoundary(err, info, props) {
    return <div>{err.message}</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
