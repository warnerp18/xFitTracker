import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import  { createContainer } from 'meteor/react-meteor-data';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import { Lifts } from '../api/lifts/lifts.js';

import Nav from './nav.js';
import LiftsForm from './components/lifts/LiftsForm';
import Home from './Home.js';
import LiftsList from './components/lifts/LiftsList.js';

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  //lifts: PropTypes.array.isRequired,
  //currentUser: PropTypes.object,
}

export default createContainer(() => {
  //Meteor.subscribe('lifts');
  return {
    //lifts: Lifts.find({}, {sort: { createdAt: -1  } }).fetch(),
    //currentUser: Meteor.user(),
  };
}, App);
