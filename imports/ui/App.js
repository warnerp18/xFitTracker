import React, { Component, PropTypes } from 'react';
import  { createContainer } from 'meteor/react-meteor-data';

import { Lifts } from '../api/lifts.js';

import Nav from './nav.js';
import SkillsForm from './skillsform';
//import Lift from './Lift.js';
import LiftsList from './LiftsList.js';

class App extends Component {

  //renderLifts() {
    //return this.props.lifts.map((lift) => (
      //<Lift key={lift._id} lift={lift} />
    //));
  //}
            //{this.renderLifts()}

  render() {
    return (
      <div>
        <Nav />
        <SkillsForm />
        <div className='container'>
        <LiftsList />
          <ul>
          </ul>
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
