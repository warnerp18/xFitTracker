import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>XFit Tracker</h1>
        <h3>Select what you're recording</h3>
        <a href='/wodform'>Wod</a>
        <br />
        <a href='/skill-lift-form'>Skill/Lift</a>
      </div>
    )
  }
}