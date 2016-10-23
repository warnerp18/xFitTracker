import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (

      <div>
        <Link
          to='/wodform'
          className="select-bg w-inline-block"
        >
          <h1>Add New WOD</h1>
          <img src="images/left-arrow.png" width="27" />
        </Link>
        <Link
          to='liftsform'
          className="bottom select-bg w-inline-block"
        >
          <h1>Add New lift</h1>
          <img src="images/right-arrow.png" width="27" />
        </Link>
      </div>
    )
  }
}
