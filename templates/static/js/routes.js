import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
// import more components

export class Routes extends React.Component{
    render() {
        return(
            <HashRouter>
            <div>
            <Route path='/' component={Home} />
            <Route path='/main' component={Main} />
            <Route path='/profile' component={Profile} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/login' component={Login} />
            <p>This is in the routes.js file. This should be in the HashRouters and in the Routes Class.</p>
            </div>
            </HashRouter>
        )
    };
};