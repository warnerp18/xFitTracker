import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import Fuse from 'fuse.js'

import { Wods } from '../../../api/wods/wods.js';

import WodInput from './WodInput';
import WodsList from './WodsList.js';



export default class WodForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      movements: [],
      input: '',
    }
  }

  handleInputChange(e) {
    e.preventDefault();

    this.setState({
      input: e.target.value,
    });

    console.log('this.state (handleInputChange): ', this.state);
  }

  addInput(e){

    if(e.type === "click"){
      this.setState({
        input:'',
        movements: this.state.movements.concat(this.state.input),
      });
      this.refs.wodMovement.value = '';
      e.preventDefault();
    }else if (e.key == "Enter"){
      this.setState({
        input:'',
        movements: this.state.movements.concat(this.state.input),
      });
      this.refs.wodMovement.value = '';
    }

    console.log('this.state: ', this.state);
  }

  submitWod(e){
    e.preventDefault();

    const wodName = this.refs.wodName.value.trim();
    if(this.state.movements.length == 0){
      alert("Please add a Movement");
    }else {
      Meteor.call('wod.insert', wodName, ...this.state.movements);
      this.refs.wodName.value='';
      this.refs.wodMovement.value='';
    }
    this.setState({
      movements: [],
    })
  }

  searchWods(e){
    var fuse = new Fuse(Wods.find({}).fetch(), { keys: ["wodName"] })
  }

  stopSubmission(e){
    e.preventDefault();
  }

  render(){
    return(
      <div>
       <div>
          <div className="container">
            <h1>Add New WOD</h1>
            <div className="w-form">
              <div className="form-wrapper" id="email-form" method="get" name="email-form">
                <label className="field-label">WOD Name</label>
                <input
                  className="form-field w-input"
                  id="node" maxLength="256"
                  required="required"
                  type='text'
                  ref='wodName'
                  onKeyPress={ (e)=> this.searchWods(e) }
              />
              <form onSubmit={ this.stopSubmission.bind(this) }>
                <label className="field-label" htmlFor="Movement">Movement</label>
                <input
                  className="form-field italic w-input"
                  id="Movement"
                  maxLength="256"
                  name="Movement"
                  placeholder="i.e. Clean &amp; Jerk, Muscle Up, Burpee"
                  type='text'
                  value={this.state.inputKey}
                  ref='wodMovement'
                  placeholder='Movement ex:Clean & Jerk, Muscle Up, Burpee'
                  onKeyPress={ this.addInput.bind(this) }
                  onChange={ this.handleInputChange.bind(this) }
                />
              </form>
                <a className="movement-link w-inline-block" href="#">
                  <div className="movement-button"></div>
                  <div onClick={ this.addInput.bind(this) }>Add Movement</div>
                </a>
                <div className='tempTextWhite'>
                  {this.state.movements.map((movement, i)=> <div key={i}>{movement}</div> )}
                </div>
                <button className='button w-button' onClick={ this.submitWod.bind(this) }>Submit Wod</button>
              </div>
            </div>
          </div>
          <Link className="back-arrow w-inline-block" to="/">
            <img src="images/left-arrow.png" width="27" />
          </Link>
          <WodsList />
        </div>
      </div>
    )
  }
}
