import React, {Component} from 'react';

export default class SingleWodInput extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          ref='wodinput'
          placeholder='Enter Movement' />
      </div>
    )
  }
}
