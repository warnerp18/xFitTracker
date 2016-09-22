import React, { Component, PropTypes } from 'react';

export default class Lift extends Component {

  render() {
    const { deleteLift, id, lift, checked, pr, confirmDelete, liftResult, createdAt } = this.props;
    const liftClassName = checked ? 'checked' : '';
    const liftPR = pr ?  "PR" : "";
    console.log(this.props);
        //<button className='delete' onClick={ deleteLift }>
    return (
      <li className={liftClassName}>
        <button className='delete' onClick={ confirmDelete }>
          &times;
        </button>
        <span className='text'>{lift}</span>
        <span> {liftPR} </span>
        <span>{liftResult} </span>
        <span>{createdAt.toString()}</span>
      </li>
    )
  }
}

Lift.propTypes = {
  lift: PropTypes.string.isRequired,
}
