import React, { useEffect, useState } from 'react';
import './semantic/dist/semantic.min.css';
import {Auth0Provider, useAuth0, onRedirectCallback } from 'simple-auth0-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Menu } from './Menu';
import { ContactsHandler } from './components/contacts/ContactsHandler';

const Content = () => {
    const { isAuthenticated, loginWithRedirect, user, logout, loading } = useAuth0()
    const [isLoggedIn, setLoggedIn] = useState(false)
    let user_id = ""
    useEffect(() => {
      console.log('Server Login Called', {loading, isAuthenticated, isLoggedIn});
      if (loading) return
      if (isAuthenticated && !isLoggedIn) {
        console.log('should call me')
        const fn = async () => {
          console.log('should call me too')
          const response = await fetch(('http://127.0.0.1:5000/login'), {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user}, null, '  '),
          })
          console.log('checking response', {response})
          const data = await response.json()
          console.log('got a response', data);
          console.log('User: ', user)
          user_id = data.user_id;
          console.log('User_id: ', user_id)
          setLoggedIn(true)
          console.log('User: ', {user});
        }
        fn();
      }
    }, [isAuthenticated, loginWithRedirect, user, logout, loading]);

    const logoutHandler = async () => {
        console.log('Log Out Called')
        const response = await fetch(('http://127.0.0.1:5000/logout'), {
            method: 'GET',
        })
        console.log(response)
        logout();
    }

    console.log('Logged In?', isLoggedIn, isAuthenticated)
    return (
      <div className="App">
        {isLoggedIn && <div>
          <div onClick={() => logoutHandler()}>Logout</div>
          <ContactsHandler user_id={user_id} />
        </div>}
        {!isLoggedIn && <div> 
          <h1>BeSafe Homepage</h1>
          <a className="App-link"
            href="javascript:void(0)"
            onClick={() => loginWithRedirect()} >
            Login
          </a>
        </div>}
        <header className="App-header">            
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
        loading={<div>Loading Auth0 login...</div>}
      >
        <Router>
          <Route path="/" exact component={Content}/>
        </Router>
      </Auth0Provider>
    </>
  )
}