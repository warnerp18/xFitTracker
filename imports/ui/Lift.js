import React, { Component, PropTypes } from 'react';

export default class Lift extends Component {

  render() {
    const { deleteLift, id, lift, checked, toggleChecked, pr, confirmDelete } = this.props;
    const liftClassName = checked ? 'checked' : '';
    const liftPR = pr ?  "PR" : "";
        //<button className='delete' onClick={ deleteLift }>
    return (
      <li className={liftClassName}>
        <button className='delete' onClick={ confirmDelete }>
          &times;
        </button>
        <input
          type='checkbox'
          readOnly
          checked={checked}
          onClick={() => toggleChecked(id, checked) }
        />
        <span className='text'>{lift}</span>
        <span> {liftPR} </span>
      </li>
    )
  }
}

Lift.propTypes = {
  lift: PropTypes.string.isRequired,
}
