import React from 'react';
import ReactDOM from 'react-dom';

import { Lifts } from '../api/lifts.js';
export default class SkillsForm extends React.Component {

  handleSubmit(e){
    e.preventDefault();
    console.log('submit');

    const liftName =  ReactDOM.findDOMNode(this.refs.liftName).value.trim();
    const liftPR = this.refs.liftPR.checked;

    Lifts.insert({
      text: liftName,
      liftPR,
      checked: false,
      createdAt: new Date(),
    });
    ReactDOM.findDOMNode(this.refs.liftName).value='';
    this.refs.liftPR.checked= false;
  }
  render() {
    return (
      <form className='new-lift' onSubmit={this.handleSubmit.bind(this)}>
        <input
          type='text'
          ref='liftName'
          placeholder='Lift Name'
        />
        <label>Lift PR?</label>
        <input
          type="checkbox"
          ref="liftPR"
          placeholder='Lift PR'
        />
        <input
          type='submit'
          ref='liftSubmit'
          placeholder='Submit'
          onSubmit={this.handleSubmit.bind(this)}
        />

      </form>
    )
  }
}
