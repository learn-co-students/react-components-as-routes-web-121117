import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home'
import About from './About';
import Login from './Login';

import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
    >About</NavLink>
    <NavLink
      to="/login"
      exact
    >Login</NavLink>
  </div>;

ReactDOM.render(
  (<Router>
    <div>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
