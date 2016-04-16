import React, {Component} from 'react';

import SingleWodInput from './SingleWodInput.jsx';

import Checkbox from 'material-ui/lib/checkbox';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
import TextField from 'material-ui/lib/text-field';

import ReactToolTip from 'react-tooltip';

export default class WodForm extends Component {

  constructor(props){
    super(props);
    this.state= {
      movements: [null]
    }
  }
  addWod(e) {
    e.preventDefault();
    console.log(this.refs.girl.isChecked());
    let wodName = this.refs.wodName.value.trim();
    let wodMovement = this.refs.wodMovement.refs.wodinput.value.trim();
    let girl = this.refs.girl.isChecked();
    let hero = this.refs.hero.checked;
    Meteor.call('addWod', wodName, wodMovement, girl, hero, ()=> {
      this.refs.wodName.value='';
      this.refs.wodMovement.refs.wodinput.value='';
      this.refs.girl.isChecked = false;
      this.refs.hero.checked=false;
    });
  }
  addField(e){
    e.preventDefault();
    const movements = this.state.movements;
    movements.push(null)
    this.setState({movements})
  }
  styles(){
    const styles = {
      block: {
        maxWidth: 250,
      },
    };
  }
  render() {
    return (
      <form>
        <p>Enter the Wod Name or Rep/Time Scheme</p>
        <div>
          <a href=''>
            <img src="/images/TheGirls.png" className='icon wodType theGirls' data-tip="The Girls"/>
            <ReactToolTip effect='solid' place='bottom' />
          </a>
          <a href=''>
            <img src="/images/TheHeros.png" className='icon wodType theHeros' data-tip="The Heros"/>
            <ReactToolTip effect='solid' place='bottom' />
          </a>
          <a href=''>
            <img src="/images/Custom.png" className='icon wodType custom' data-tip="Custom"/>
            <ReactToolTip effect='solid' place='bottom' />
          </a>
        </div>
        <TextField
          hintText="WOD Name"
          floatingLabelText="WOD Name"
        />
        <input
          type='text'
          ref='wodName'
          placeholder='Wod Name' />

          {this.state.movements.map(function(movement, index){
             return <SingleWodInput key={index} ref='wodMovement' />
          })}

        <button onClick={this.addField.bind(this)}>Add Movement</button><br />



        <button type='submit' onClick={this.addWod.bind(this)}>Submit WOD</button>
      </form>
    )
  }
}
