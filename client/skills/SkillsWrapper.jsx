import React, { Component } from 'react';

import SkillsForm from './SkillsForm.jsx'

export default class SkillsWrapper extends Component {

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
  skills(){
    return Skills.find().fetch();
  }
  render() {
    return (
      <div>
      <SkillsForm />
      <ul>
      {this.skills().map((skill)=>{
         return<li>{skill}</li>
      })}
      </ul>
      </div>
    )
  }
}
