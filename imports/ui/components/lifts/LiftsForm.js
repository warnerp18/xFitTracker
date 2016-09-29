import React from 'react';
import ReactDOM from 'react-dom';

import { Lifts } from '/imports/api/lifts.js';
import LiftList from './LiftsList';

export default class LiftsForm extends React.Component {

  handleSubmit(e){
    e.preventDefault();

    const liftName =  this.refs.liftName.value.trim();
    const liftPR = this.refs.liftPR.checked;
    const liftResult = this.refs.liftResult.value.trim();

    Meteor.call('lifts.insert', liftName, liftPR, liftResult)
    //Clear Form
    ReactDOM.findDOMNode(this.refs.liftName).value='';
    this.refs.liftResult.value = '';
    this.refs.liftPR.checked= false;
  }
  render() {
    return (
      <div>
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
            type='liftResult'
            ref='liftResult'
            placeholder='Lift Result'
          />
          <input
            type='submit'
            ref='liftSubmit'
            placeholder='Submit'
            onSubmit={this.handleSubmit.bind(this)}
          />

        </form>
        <LiftList />
      </div>
    )
  }
}
