import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { createContainer } from 'meteor/react-meteor-data';

import { Lifts } from '/imports/api/lifts.js';

import Lift from './Lift.js';
import Modal from '/imports//ui/Modal.js';

class LiftsList extends Component {

  constructor(props){
    super(props);
    this.state = {
      showPRS: false,
      showModal: false,
      liftId: '',
    }

    this.deleteLift = this.deleteLift.bind(this);
  }

  deleteLift(id) {
    Lifts.remove(id);
    this.setState({
      showModal: false,
    });
  }
  confirmDelete(id){
    let showModal = !this.state.showModal;
    this.setState({
      showModal: !this.state.showModal,
      liftId: id,
    });
  }

  deletionConfirmed(id){
    deleteLift(id)
  }

  togglePRs(){
    this.setState({
      showPRS: !this.state.showPRS,
    });
  }

  renderLifts () {
    let filterLifts = this.props.lifts;
    if (this.state.showPRS){
      filterLifts = filterLifts.filter((lift) => lift.liftPR);
    }
    return filterLifts.map((lift) => {
      return <Lift
        key={lift._id}
        lift={lift.text}
        id={lift._id}
        checked={lift.checked}
        pr={lift.liftPR}
        liftResult={lift.liftResult}
        createdAt={lift.createdAt}
        confirmDelete={ () => this.confirmDelete(lift._id)}
      />
    });
  }



  render() {
    let modal = this.state.showModal ?
        <Modal
          action={ this.deleteLift }
          confirmMessage={'Are you sure you want to Delete this lift?'}
          targetId={this.state.liftId}
        /> :
        false;
    return (
      <div>
         <label className='show-prs'>
           <input
             type='checkbox'
             readOnly
             checked={this.state.showPRS}
             onClick={this.togglePRs.bind(this)}
          />
          Show PRs
        </label>
        <ul>
          { this.renderLifts() }
        </ul>
        { modal }
      </div>
    )
  }
};

export default createContainer(() => {
  return {
    lifts: Lifts.find({}).fetch()
  }
}, LiftsList);
