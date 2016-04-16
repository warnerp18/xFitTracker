import React, {Component} from 'react';

import SingleWodInput from './SingleWodInput.jsx';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

export default class WodForm extends Component {

  constructor(props){
    super(props);
    this.state= {
      movements: [null]
    }
  }
  addWod(e) {
    e.preventDefault();
    let WodName = this.refs.WodName.refs.input.value.trim();
    let wodMovement = this.refs.wodMovement.refs.WodMovement.refs.input.value.trim();
    Meteor.call('addWod', WodName, wodMovement, ()=> {
      this.refs.WodName.refs.input.value='';
      this.refs.wodMovement.refs.WodMovement.refs.input.value='';
    });
  }

  addField(e){
    e.preventDefault();
    const movements = this.state.movements;
    movements.push(null)
    this.setState({movements})
  }

  render() {
    return (
      <form>
        <TextField
          ref='WodName'
          hintText="WOD Name"
          floatingLabelText="WOD Name"
          className='input wodform wodname'
        />
        {this.state.movements.map(function(movement, index){
           return <SingleWodInput key={index} ref='wodMovement' />
        })}
        <RaisedButton
          label="Add Movement"
          secondary={true}
          style ={{ margin: 12 }}
          onClick={this.addField.bind(this)}
        />
        <RaisedButton
          label="Submit WOD"
          primary={true}
          style ={{ margin: 12 }}
          onClick={this.addWod.bind(this)}
        />
      </form>
    )
  }
}
