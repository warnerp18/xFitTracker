import React, {Component} from 'react';

import SingleWodInput from './SingleWodInput.jsx';

export default class WodForm extends Component {

  constructor(props){
    super(props);
    this.state= {
      movements: [null]
    }
  }
  addWod(e) {
    e.preventDefault();
    let wodName = this.refs.wodName.value.trim();
    let wodMovement = this.refs.wodMovement.refs.wodinput.value.trim();
    let girl = this.refs.girl.checked;
    let hero = this.refs.hero.checked;
    Meteor.call('addWod', wodName, wodMovement, girl, hero, ()=> {
      this.refs.wodName.value='';
      this.refs.wodMovement.refs.wodinput.value='';
      this.refs.girl.checked = false;
      this.refs.hero.checked=false;
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
        <p>Enter the Wod Name or Rep/Time Scheme</p>
        <section>
          <input
            type='checkbox'
            ref='girl'
            checked={this.props.checked}/><label>Is this one of the 'Girls'?</label>
          <input
            type='checkbox'
            ref='hero'
            checked={this.props.checked}/>Is a Hero Wod?
        </section>
        <input
          type='text'
          ref='wodName'
          placeholder='Wod Name' />
          {this.state.movements.map(function(movement, index){
             return <SingleWodInput key={index} />
          })}

        <button onClick={this.addField.bind(this)}>Add Movement</button><br />



        <button type='submit' onClick={this.addWod.bind(this)}>Submit WOD</button>
      </form>
    )
  }
}
