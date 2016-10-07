import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import App from './App.js';
import Home from './Home';
import LiftsForm from './components/lifts/LiftsForm';
import WodForm from './components/wods/WodForm.js';

export default class Routes extends Component {
  render() {

    return (
      <Router history={browserHistory}>
        <Route path='/' component={App} >
          <IndexRoute component={Home} />
          <Route path='liftsform' component={LiftsForm} />
          <Route path='wodform' component={WodForm} />
        </Route>
      </Router>
    )
  }
}
