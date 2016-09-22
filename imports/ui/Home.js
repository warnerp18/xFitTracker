import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div className='button-container'>
        <span>
          <Link to='/wodform' className='waves-effect waves-light btn'>Add New WOD</Link>
        </span>
        <span>
          <Link to='liftsform' className='btn waves-effect waves-light blue lighten-1'>Add New Lift</Link>
        </span>
        <span className='orDivider'>or</span>
      </div>
    )
  }
}
