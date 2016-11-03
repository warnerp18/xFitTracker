import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Lifts } from '/imports/api/lifts/lifts.js';

import Lift from './Lift.js';
import Modal from '/imports//ui/Modal.js';

class LiftsList extends Component {

  constructor(props){
    super(props);
    this.state = {
      showPRS: false,
      showModal: false,
      liftId: '',
      editable: false,
    }

    this.deleteLift = this.deleteLift.bind(this);
  }

  deleteLift(id) {
    //removes lift form collection
    Meteor.call('lifts.remove', id);
    this.setState({
      showModal: false,
    });
  }
  updateLift(id, name, pr, result){
    console.log(this);
    this.setState({
      id,
    });
    if (id = this.state.id ){
      this.setState({
        editable: !this.state.editable,
      });
        //console.log('updateLift: testing update Lift');
        //console.log(name, ' ', pr, ' ', result, id);
        //Meteor.call('lift.update', id, name, pr, result);
    }
  }

  cancelDelete(){
    //On Alert when users doesn't want to delete lift
    //removes alert and does nothing to "Lift"
    this.setState({
      showModal: false,
    });
  }

  confirmDelete(id){
    //creates modal asking to confirm deletion
    let showModal = !this.state.showModal;
    this.setState({
      showModal: !this.state.showModal,
      liftId: id,
    });
  }

  togglePRs(){
    //show or hide lifts that are not PRS
    this.setState({
      showPRS: !this.state.showPRS,
    });
  }

  renderLifts () {
    let filterLifts = this.props.lifts;
    if (this.state.showPRS){
      filterLifts = filterLifts.filter((lift) => lift.liftPR);
    }
    console.log(this.state.id);
    if(this.state.editable){
      //console.log(filterLifts)
    }
    return filterLifts.map((lift) => {
     const editOption =  lift._id == this.state.id ? this.state.editable : false;
      return <Lift
        key={lift._id}
        liftName={lift.liftName}
        id={lift._id}
        pr={lift.liftPR}
        liftResult={lift.liftResult}
        createdAt={lift.createdAt}
        confirmDelete={ () => this.confirmDelete(lift._id)}
        updateLift={ () => this.updateLift(lift._id, lift.liftName, lift.liftResult, lift.liftPR)}
        editable={editOption}
      />
    });
  }



  render() {
    let modal = this.state.showModal ?
        <Modal
          action={ this.deleteLift }
          noAction={ this.cancelDelete.bind(this) }
          confirmMessage={'Are you sure you want to Delete this lift?'}
          targetId={this.state.liftId}
        /> :
        false;
    return (
      <div className='fullWidth'>
         <label className='show-prs'>
           <input
             type='checkbox'
             readOnly
             checked={this.state.showPRS}
             onClick={this.togglePRs.bind(this)}
          />
          Show PRs
         </label>
          { this.renderLifts() }
        { modal }
      </div>
    )
  }
};

export default createContainer(() => {
Meteor.subscribe('lifts');
  return {
    lifts: Lifts.find({}).fetch()
  }
}, LiftsList);
