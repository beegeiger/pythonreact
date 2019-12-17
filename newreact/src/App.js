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
        <div onClick={() => logout()}>Logout</div>
      </div>}
      {!user && <div>
        
        <a
          className="App-link"
          href="javascript:void(0)"
          onClick={() => {
            loginWithRedirect()
          }}
        >
          Login
        </a>
      </div>}
      <header className="App-header">
      <pre><code>{JSON.stringify({user}, null, '  ')}</code></pre>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        
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
        </Router>
      </Auth0Provider>
    </>
  )
}