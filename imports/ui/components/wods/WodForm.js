import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class WodForm extends Component {
  render(){
    return (
      <div>
        <form className='newWod'>
          <input
            type='text'
            ref='wodName'
            placeholder='Wod Name'
          />
          <input
            type='text'
            ref='wodMovement'
            placeholder='Movement ex:Clean & Jerk, Muscle Up, Burpee'
          />
        </form>
      </div>
    )
  }
}
