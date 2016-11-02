import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Wods } from '../../../api/wods/wods.js';
import Modal from '../../Modal.js';

class WodsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      wodID: '',
    }
  }

  confirmDelete(id){
    //creates modal asking to confirm deletion
    let showModal = !this.state.showModal;
    this.setState({
      showModal: !this.state.showModal,
      wodId: id,
    });
  }

  deleteWOD(id){
    console.log(this);
     Meteor.call('wod.remove', id);
     this.setState({
       showModal: false,
     })
     console.log(this.state.showModal);

  }

  renderWodsList(){
   const wodsSubmission =  this.props.wods;
   //Map over all WODS and call getMovements helper from  WODS Collection
   return wodsSubmission.map( (wod, i)=> (
     <li key={i}>
      { wod.wodName }
      { wod.getMovements() }
      <button
        className='delete'
        onClick={ ()=> this.confirmDelete(wod._id) }
      >
        &times;
      </button>
    </li>
   ))
  }
  render() {
    let modal = this.state.showModal ?
      <Modal
        action={ this.deleteWOD }
        confirmMessage={`Are you sure you want to delete this WOD submission`}
        targetId={this.state.wodId}
      /> :
      false;
    return (
      <div className='tempTextWhite'>
        <ul>
          { this.renderWodsList() }
        </ul>
        {modal}
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('wods');
  return {
    wods: Wods.find({}).fetch()
  }
}, WodsList);
