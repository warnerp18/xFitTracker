import React, { Component, PropTypes } from 'react';

export default class Lift extends Component {

  render() {
    const { deleteLift, id, liftName, pr, confirmDelete, liftResult, createdAt } = this.props;
    const liftPR = pr ?  "PR" : "";
    const day = createdAt.getDate();
    const month = createdAt.getMonth() +1;
    const year = createdAt.getYear();
    return (
      <li>
        <button className='delete' onClick={ confirmDelete }>
          &times;
        </button>
        <span> {liftPR} </span>
        <span className='text'>{liftName} - </span>
        <span>{liftResult} </span>
        <span className="date">{month}/{day}/{year}</span>
      </li>
    )
  }
}

Lift.propTypes = {
  liftName: PropTypes.string.isRequired,
  liftResult: PropTypes.string.isRequired,
  liftPR: PropTypes.bool,
}
