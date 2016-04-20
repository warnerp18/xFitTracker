import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SkillsForm from './SkillsForm.jsx'
import SingleSkillResult from './SingleSkillResult.jsx';

export default class SkillsWrapper extends TrackerReact(Component) {
  constructor(){
    super();
    this.state = {
      subscription: {
        skills: Meteor.subscribe('userResults')
      }
    }
  }
  componentWillUnmount(){
    this.state.subscription.skills.stop();
  }
  getSkillz(){
    return Skills.find().fetch();
  }
  render() {
    return (
      <div>
        <SkillsForm />
        <ul>
          {this.getSkillz().map((skill)=>{
             return<SingleSkillResult key={skill._id} skill={skill} />
          })}
        </ul>
      </div>
    )
  }
}
