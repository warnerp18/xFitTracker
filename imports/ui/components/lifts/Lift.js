import React, { Component, PropTypes } from 'react';

export default class Lift extends Component {

  render() {
    const { deleteLift, id, lift, checked, pr, confirmDelete, liftResult, createdAt } = this.props;
    const liftClassName = checked ? 'checked' : '';
    const liftPR = pr ?  "PR" : "";
    const day = createdAt.getDate();
    const month = createdAt.getMonth() +1;
    const year = createdAt.getYear();
    return (
      <li className={liftClassName}>
        <button className='delete' onClick={ confirmDelete }>
          &times;
        </button>
        <span> {liftPR} </span>
        <span className='text'>{lift}</span>
        <span>{liftResult} </span>
        <span className="date">{month}/{day}/{year}</span>
      </li>
    )
  }
}

Lift.propTypes = {
  //lift: PropTypes.string.isRequired,
}
