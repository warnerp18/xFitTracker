import React, { Component, PropTypes } from 'react';

const Lift = (props) => {
  const { deleteLift, id, liftName, pr, confirmDelete, liftResult, createdAt, updateLift, editable } = props;
  const liftPR = pr ?  "PR" : "";
  const day = createdAt.getDate();
  const month = createdAt.getMonth() +1;
  const year = createdAt.getYear();
//console.log(props);
  const contentEdit = editable ? 'true' : 'false';
  return (
    <div className="pr-table-cell w-clearfix">
      <div className="exercise">
        <div>{liftPR}</div>
        <div>
          <span contentEditable={contentEdit} >{liftName} -</span>
          <span contentEditable={contentEdit}> {liftResult}</span>
        </div>
      </div>
      <div className="date">
        <div>{month}/{day}/{year}</div>
      </div>
      <button className='delete' onClick={ confirmDelete }>
        &times;
      </button>
      <div >
      <button onClick={updateLift} >Edit</button>
      </div>
    </div>
  )
}

Lift.propTypes = {
  liftName: PropTypes.string.isRequired,
  liftResult: PropTypes.string.isRequired,
  liftPR: PropTypes.bool,
}

export default Lift;
