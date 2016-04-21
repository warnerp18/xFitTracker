import React, { Component } from 'react';
import {girls} from '../../girls.js';

export default class FormSelection extends Component {
  constructor(props){
    super(props);
    this.state = {
      girls: {girls}
    }
    console.log(this);
  }
  render(){
    return(
      <p>This is The Girls Form</p>
    )
  }
}
