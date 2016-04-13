import React, {Component} from 'react';

import SingleWodInput from './SingleWodInput.jsx';

export default class WodForm extends Component {

  addWod(e) {
    e.preventDefault();
    let wodName = this.refs.wodName.value.trim();
    let wodMovement = this.refs.wodMovement.refs.wodinput.value.trim();
    let girl = this.refs.girl.checked;
    Meteor.call('addWod', wodName, wodMovement, girl, ()=> {
      this.refs.wodName.value='';
      this.refs.wodMovement.refs.wodinput.value='';
      this.refs.girl.checked = false;
    });
  }

  addField(e){
    e.preventDefault();
    return(
      <SingleWodInput />
    )
  }

  render() {
    console.log(this.p);
    return (
      <form>
        <p>Enter the Wod Name or Rep/Time Scheme</p>
        <section>
          <input
            type='checkbox'
            ref='girl'
            checked={this.props.checked}/>Is this one of the girls?
        </section>
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
