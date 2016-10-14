import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class WodInput extends Component {
  render() {
    console.log("Wod Input");
    console.log(this.props);
    return (
      <div className='form-input'>
        <input
          type='text'
          ref='wodMovement'
          placeholder='Movement ex:Clean & Jerk, Muscle Up, Burpee'
        />
        //<button onClick={ this.props.removeInput(e, this.props.id) }>-</button>
      </div>
    )
  }
}
