import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import { Lifts } from '/imports/api/lifts/lifts.js';
import LiftList from './LiftsList';

export default class LiftsForm extends React.Component {

  handleSubmit(e){
    e.preventDefault();
    const liftName =  this.refs.liftName.value.trim();
    const liftPR = this.refs.liftPR.checked;
    const liftResult = this.refs.liftResult.value.trim();

    Meteor.call('lifts.insert', liftName, liftPR, liftResult, (error, data)=> {
      if(error) {
        Bert.alert('You Must Login to Submit a Lift', 'danger' )
      }  else {
        //Clear Form
        this.refs.liftName.value='';
        this.refs.liftResult.value = '';
        this.refs.liftPR.checked= false;
      }
    })
  }
  render() {
    return (
    <div>
        <Link className="back-arrow w-inline-block" to="/">
        <img src="images/left-arrow.png" width="27" />
        </Link>
        <div className="container">
            <h1>Add New lift</h1>
            <div className="w-form">
                <form
                  onSubmit={this.handleSubmit.bind(this)}
                  className="form-wrapper"
                  id="email-form"
                  name="email-form"
                >
                    <label className="field-label">Lift Name</label>
                    <input
                      type="text"
                      ref='liftName'
                      placeholder='Lift Name'
                      className="form-field w-input"
                      id="node"
                      maxLength="256"
                    />
                    <div className="checkbox-field w-checkbox w-clearfix">
                        <input
                          className="display-none w-checkbox-input"
                          id="Lift-PR"
                          name="Lift-PR"
                          type="checkbox"
                          ref="liftPR"
                        />
                        <label className="checkbox-label w-form-label" htmlFor="Lift-PR">
                            Lift PR
                        </label>
                    </div>
                    <label className="field-label" htmlFor="Lift-Result">
                        Lift Result
                    </label>
                    <input
                      className="form-field italic w-input"
                      id="Lift-Result"
                      maxLength="256"
                      name="Lift-Result"
                      type="text"
                      ref='liftResult'
                    />
                    <button
                      className="button w-button"
                      ref='liftSubmit'
                      placeholder='Submit'
                      onSubmit={this.handleSubmit.bind(this)}
                    >
                      Submit
                    </button>
                </form>
            </div>
        </div>
        <LiftList />
    </div>
    )
  }
}
