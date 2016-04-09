import React, {Component} from 'react';

import SingleWodInput from './SingleWodInput.jsx';

export default class WodForm extends Component {

  addField(e){
    e.preventDefault();
    console.log(<SingleWodInput />);
    return(
      <SingleWodInput />
    )
  }

  render() {
    return (
      <form>
        <p>Enter the Wod Name or Rep/Time Scheme</p>
        <input
          type='text'
          ref='wodTitle'
          placeholder='Wod Name' />
          <SingleWodInput />
        <button onClick={this.addField.bind(this)}>Add Movement</button>
      </form>
    )
  }
}
