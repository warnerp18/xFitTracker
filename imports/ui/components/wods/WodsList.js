import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Wods } from '../../../api/wods/wods.js';

class WodsList extends Component {
  renderWodsList(){
   const wodsSubmission =  this.props.wods;
   //Map over all WODS and call getMovements helper from  WODS Collection
   return wodsSubmission.map( (wod, i)=> <li key={i}>{ wod.wodName } { wod.getMovements() }</li> )

  }
  render() {
    return (
      <div>
        <ul>
          { this.renderWodsList() }
        </ul>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('wods');
  return {
    wods: Wods.find({}).fetch()
  }
}, WodsList);
