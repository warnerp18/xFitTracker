import React, { Component, PropTypes } from 'react';
import  { createContainer } from 'meteor/react-meteor-data';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import { Lifts } from '../api/lifts.js';

import Nav from './nav.js';
import LiftsForm from './components/lifts/LiftsForm';
import Home from './Home.js';
//import Lift from './Lift.js';
import LiftsList from './components/lifts/LiftsList.js';

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

//App.propTypes = {
  //lifts: PropTypes.array.isRequired,
//}

export default createContainer(() => {
  return {
    lifts: Lifts.find({}, {sort: { createdAt: -1  } }).fetch(),
  };
}, App);
