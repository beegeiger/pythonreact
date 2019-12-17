import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Auth0Provider, useAuth0, onRedirectCallback, PrivateRoute} from 'simple-auth0-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Content = () => {
  const { loginWithRedirect, user, logout } = useAuth0()
  return (
    <div className="App">
      {user && <div>
        The user is logged in
      </div>}
      {!user && <div>
        you're not logged in sucker
      </div>}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre><code>{JSON.stringify({user}, null, '  ')}</code></pre>
        <a
          className="App-link"
          href="javascript:void(0)"
          onClick={() => {
            loginWithRedirect()
          }}
        >
          Learn Awesome React
        </a>
        <div onClick={() => logout()}>Logout</div>
      </header>
    </div>
  );
}

export const App = () => {
  return (
    <>
      <Auth0Provider
        domain="dev-54k5g1jc.auth0.com"
        client_id="78rUTjeVusqU3vYXyvNpOQiF8jEacf55"
        redirect_uri="https://besafe.ngrok.io"
        onRedirectCallback={onRedirectCallback}
        loading={<div>yoyoyo</div>}
      >
        <Router>
          <Route path="/" exact component={Content}/>
          {/* <PrivateRoute path="/private" exact component={() => <div>Boo</div>} /> */}
        </Router>
      </Auth0Provider>
    </>
  )
}