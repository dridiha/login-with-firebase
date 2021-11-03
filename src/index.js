import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './login';
import Register from './register'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path = '/register'>
        <Register />
      </Route>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);


