import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>XFit Tracker</h1>
        <h3>Select what you're recording</h3>
        <section>
          <a href='/wodform' className='btn btn-teal wave-effect float-left'>Add A New Wod</a>
        <div className='or or-lg'>

        </div>
          <a href='/skill-lift-form' className='btn btn-blue float-left'>Add a New Skill/Lift</a>
          </section>
      </div>
    )
  }
}
