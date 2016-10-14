import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Fuse from 'fuse.js'

import { Wods } from '../../../api/wods/wods.js';

import WodInput from './WodInput';
import WodsList from './WodsList.js';



export default class WodForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputs: [],
      inputKey : '',
    }
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      inputKey: e.target.value,
    });
  }

  addInput(e){
    if(e.key === "Enter"){
      this.setState({
        inputKey:'',
        inputs: this.state.inputs.concat(this.state.inputKey),
      });
    }else if (e.target.type == "submit"){
      this.setState({
        inputKey:'',
        inputs: this.state.inputs.concat(this.state.inputKey),
      });
    }
  }

  submitWod(e){
    e.preventDefault();

    const wodName = this.refs.wodName.value.trim();
    Meteor.call('wod.insert', wodName, ...this.state.inputs);
    this.setState({
      inputs: [],
    })
  }

  searchWods(e){
    console.log(e.target.value)
    //console.log(Wods.find({}).fetch());
    //var fuse = new Fuse(Wods.find({}).fetch(), { keys: "wodName" })
    var fuse = new Fuse([{"wodName": "Phil"},], { keys:["wodName"] })
    console.log(fuse.search(e.target.value));
  }

  render(){
    let AddInput = this.state.addInput ?
      <WodInput /> :
      null;
      return (
      <div>
          <input
            type='text'
            ref='wodName'
            placeholder='Wod Name'
            onKeyPress={ (e)=> this.searchWods(e) }
          />
          <div className="form-field">
          <input
            type='text'
            value={this.state.inputKey}
            placeholder='Movement ex:Clean & Jerk, Muscle Up, Burpee'
            onKeyPress={ this.addInput.bind(this) }
            onChange={ this.handleInputChange.bind(this) }
          />
          <button onClick={ this.addInput.bind(this) }>+</button>
          </div>
          {AddInput}
        {this.state.inputs.map((input, i)=> <div key={i}>{input}</div> )}
        <button onClick={this.submitWod.bind(this)}>SUBMIT</button>


     <div className="background blurred">
        <div className="container">
          <h1>Add New WOD</h1>
          <div className="w-form">
            <form className="form-wrapper" data-name="Email Form" data-redirect="add" id="email-form" method="get" name="email-form" redirect="add">
              <label className="field-label" for="node">WOD Name</label>
              <input
                className="form-field w-input"
                id="node" maxlength="256"
                required="required"
                type='text'
                ref='wodName'
                onKeyPress={ (e)=> this.searchWods(e) }
            />
              <label className="field-label" for="Movement">Movement</label>
              <input
                className="form-field italic w-input"
                data-name="Movement"
                id="Movement" maxlength="256"
                name="Movement"
                placeholder="i.e. Clean &amp; Jerk, Muscle Up, Burpee"
                type='text'
                value={this.state.inputKey}
                placeholder='Movement ex:Clean & Jerk, Muscle Up, Burpee'
                onKeyPress={ this.addInput.bind(this) }
                onChange={ this.handleInputChange.bind(this) }
              />
              <a className="movement-link w-inline-block" href="#">
                <div className="movement-button"></div>
                <div onClick={ this.addInput.bind(this) }>Add Movement</div>
              </a>
            </form>
          </div>
        </div>
        <a className="back-arrow w-inline-block" href="add.html"><img src="images/left-arrow.png" width="27" />
        </a>
      </div>

        <WodsList />



      </div>
    )
  }
}
