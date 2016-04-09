import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import WodForm from './WodForm.jsx';

export default class WodWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        wods: Meteor.subscribe('allWods')
      }
    }
  }
  wods() {
    return Wods.find().fetch();
  }
  render() {
    let wodResults = this.wods();
    console.log(wodResults[0]);
    return(
      <div>
      <WodForm />
      {wodResults[1]}
      </div>
    )
  }
}
