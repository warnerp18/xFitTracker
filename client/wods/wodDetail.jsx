import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class WodDetail extends TrackerReact(Component) {
  constructor(){
    super();
    this.state = {
      subscription: {
        wods: Meteor.subscribe('userWods')
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.wods.stop();
  }

  wod(){
    return Wods.findOne(this.props.id);
  }

  render(){
    let wodName = this.wod();
    if(!wodName){
       return (<div>Loading...</div>)
    }
    return(
      <div>
        <p>{wodName.wodname}</p>
        <p>{wodName.wodmovement}</p>
      </div>
    )
  }
}
