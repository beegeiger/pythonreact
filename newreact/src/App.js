import React, { useEffect, useState } from 'react';
import './semantic/dist/semantic.min.css';
import {Auth0Provider, useAuth0, onRedirectCallback } from 'simple-auth0-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Menu } from './Menu';
import { ContactsHandler } from './components/contacts/ContactsHandler';

const Content = () => {
    const { loginWithRedirect, user, logout } = useAuth0()
    const [loggedIn, setLoggedIn] = useState(false)

    function loggingout() {
        console.log('Log Out Called')
        const response = fetch(('http://127.0.0.1:5000/logout'), {
            method: 'GET',
        })
        console.log(response)
        logout();
        while(!user) {
          setLoggedIn(false);
          break; 
        }     
    }

    function loginWithRedirecting() {
        loginWithRedirect();
        while(user) {
            console.log('User: ', user)
            const response = fetch(('http://127.0.0.1:5000/login'), {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user}, null, '  '),
            })
            setLoggedIn(true)
            console.log(response)
            console.log('Server Login Called');
            console.log('User: ', {user});
            break;
        }
      }
    console.log('Logged In?', loggedIn)
    return (
        <div className="App">
            
            {loggedIn && <div>
                {/* <ContactsHandler /> */}
                <div onClick={() => loggingout()}>Logout</div>

            </div>}
            {!loggedIn && <div> 
                <h1>BeSafe Homepage</h1>
                <a className="App-link"
                  href="javascript:void(0)"
                  onClick={() => { loginWithRedirecting()}} >
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