import React, { Component, PropTypes } from 'react';

const Lift = (props) => {
  const { deleteLift, id, liftName, pr, confirmDelete, liftResult, createdAt } = props;
  const liftPR = pr ?  "PR" : "";
  const day = createdAt.getDate();
  const month = createdAt.getMonth() +1;
  const year = parseInt(createdAt.getFullYear().toString().substr(2,2));
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
      <button>...</button>
    </div>
  )
}

Lift.propTypes = {
  liftName: PropTypes.string.isRequired,
  liftResult: PropTypes.string.isRequired,
  liftPR: PropTypes.bool,
}

export default Lift;
