import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {girls} from '../../girls.js';

import FormSelection from './FormSelection.jsx';
import SingleWodResult from './SingleWodResult.jsx';


export default class WodWrapper extends TrackerReact(Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        wods: Meteor.subscribe('userWods')
      }
    }
  }

  componnentWillUnmount() {
    this.state.subscription.wods.stop();
  }

  wods() {
    return Wods.find().fetch();
  }

  render() {
    return(
      <div>
        <FormSelection />
        <ul>
          {this.wods().map( (wod)=>{
            return <SingleWodResult key={wod._id} wod={wod} />
          })}
        </ul>
      </div>
    )
  }
}
