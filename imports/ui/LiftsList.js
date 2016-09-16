import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { createContainer } from 'meteor/react-meteor-data';

import { Lifts } from '../api/lifts.js';

import Lift from './Lift.js';
import DeletionModal from './DeletionModal.js';

class LiftsList extends Component {

  constructor(props){
    super(props);
    this.state = {
      showPRS: false,
      showModal: false,
    }
  }

  deleteLift(id) {
    console.log(Lifts);
    console.log(this.props.lifts._id);

    Lifts.remove(id);
  }
  confirmDelete(id){
    let showModal = !this.state.showModal;
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  toggleChecked(id, checked) {
    //set the checked property to the opposite of its current value
    Lifts.update( id , {
      $set: { checked: !checked },
    });
  }

  togglePRs(){
    this.setState({
      showPRS: !this.state.showPRS,
    });
  }

  renderLifts () {
    let filterLifts = this.props.lifts;
    if (this.state.showPRS){
      console.log(this.state.showPRS);
      filterLifts = filterLifts.filter((lift) => lift.liftPR);
    }
    return filterLifts.map((lift) => {
      return <Lift
        key={lift._id}
        lift={lift.text}
        id={lift._id}
        checked={lift.checked}
        pr={lift.liftPR}
        //deleteLift={ () => this.deleteLift(lift._id)}
        confirmDelete={ () => this.confirmDelete(lift._id)}

        toggleChecked={ this.toggleChecked }
      />
    });
  }



  render() {
    console.log(this.props.lifts._id);
    let modal = this.state.showModal ? <DeletionModal deleteLift={ (e) => { this.deleteLift(this.props.lifts._id); } }/> : false;
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
