import React, { Component } from 'react';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Checkbox from 'material-ui/lib/checkbox';

export default class SkillsForm extends Component {
  constructor(props){
    super(props);
  }
  submitSkill(e){
    e.preventDefault();
    let SkillName = this.refs.SkillName.refs.input.value.trim();
    let SkillResult = this.refs.SkillResult.refs.input.value.trim();
    let pr = this.refs.pr.refs.enhancedSwitch.refs.checkbox.checked;
    Meteor.call('addSkill', SkillName, SkillResult, pr, ()=> {
      this.refs.SkillName.refs.input.value = '';
      this.refs.SkillResult.refs.input.value = '';
      this.refs.pr.refs.enhancedSwitch.refs.checkbox.checked = false;
      console.log(this.refs.pr.refs.enhancedSwitch.refs.checkbox.checked);
    });
  }
  render() {
    return (
      <form>
        <div>
          <TextField
            ref='SkillName'
            hintText='Lift/Skill Name'
            floatingLabelText='Add Name of the Skill or Lift'
            className='input skillform skillname'
          />
        </div>
        <div>
          <TextField
            ref='SkillResult'
            hintText='Result'
            floatingLabelText='Result'
            className='input skillform skillresult'
          />
        </div>
        <Checkbox
          label="PR?"
          ref='pr'
        />
        <RaisedButton
          label="Submit Skill/Lift"
          primary={true}
          style ={{ margin: 12 }}
          onClick={this.submitSkill.bind(this)}
        />
      </form>
    )
  }
}
