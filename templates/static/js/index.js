import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";
import { Auth0Provider } from "../../react-auth0-spa";
import config from "./auth_config";
import history from "./history";


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
