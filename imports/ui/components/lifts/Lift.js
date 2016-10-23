import React, { Component, PropTypes } from 'react';

export default class Lift extends Component {

  render() {
    const { deleteLift, id, liftName, pr, confirmDelete, liftResult, createdAt } = this.props;
    const liftPR = pr ?  "PR" : "";
    const day = createdAt.getDate();
    const month = createdAt.getMonth() +1;
    const year = createdAt.getYear();
    return (
      <div className="pr-table-cell w-clearfix">
        <div className="exercise">
          <div>{liftPR} </div>
          <div>{liftName}</div>
          <div>{liftResult}</div>
        </div>
        <div className="date">
          <div>{month}/{day}/{year}</div>
        </div>
        <button className='delete' onClick={ confirmDelete }>
          &times;
        </button>
      </div>
    )
  }
}

Lift.propTypes = {
  liftName: PropTypes.string.isRequired,
  liftResult: PropTypes.string.isRequired,
  liftPR: PropTypes.bool,
}
