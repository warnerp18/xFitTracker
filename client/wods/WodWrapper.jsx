import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import WodForm from './WodForm.jsx';
import SingleWodResult from './SingleWodResult.jsx';

export default class WodWrapper extends TrackerReact(React.Component) {
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
    let wodResults = this.wods();
    return(
      <div>
        <WodForm />
        <ul>
          {this.wods().map( (wod)=>{
            return <SingleWodResult wod={wod} />
          })}
        </ul>
      </div>
    )
  }
}
