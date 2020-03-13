import React from "react";
import ReactDOM from "react-dom";
// import App from "../../App";
// import { Auth0Provider } from "../../react-auth0-spa";
import { Auth0Provider } from 'simple-auth0-react';
import config from "./auth_config";
import history from "./history";

// if ngro gets rowdy with webpack, fix this in node_modules/react-dev-utils/webpackHotDevClient.js
// https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/webpackHotDevClient.js#L62


// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <p>Test 1234</p>,
  document.getElementById("content")
);
