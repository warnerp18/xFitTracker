import React, {Component} from 'react';

import SingleWodInput from './SingleWodInput.jsx';

export default class WodForm extends Component {

  addWod(e) {
    e.preventDefault();
    console.log(this);
    let wodName = this.refs.wodName.value.trim();
    let wodMovement = this.refs.wodMovement.refs.wodinput.value.trim();
    Meteor.call('addWod', wodName, wodMovement, ()=> {
      this.refs.wodName.value='';
      this.refs.wodMovement.refs.wodinput.value='';
    });
  }

  addField(e){
    e.preventDefault();
    return(
      <SingleWodInput />
    )
  }

  render() {
    return (
      <form>
        <p>Enter the Wod Name or Rep/Time Scheme</p>
        <input
          type='text'
          ref='wodName'
          placeholder='Wod Name' />
          <SingleWodInput ref='wodMovement'/>
        <button onClick={this.addField.bind(this)}>Add Movement</button><br />
        <button type='submit' onClick={this.addWod.bind(this)}>Submit WOD</button>
      </form>
    )
  }
}
