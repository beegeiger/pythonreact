import React from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';
import Home from './components/Home';
// import more components

export default (
    <HashRouter history={hashHistory}>
     <div>
      <Route path='/' component={Home} />
      <Route path='/main' component={Main} />
      <Route path='/profile' component={Profile} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/login' component={Login} />
     </div>
    </HashRouter>
);