import React from 'react';

const Modal = (props) => {
  return (
    <div id="confirmDelete" className={props.modalclass}>
      <div className='container'>
        <p>{props.confirmMessage}</p>
        <button
          className='delete'
          onClick={ () => props.action(props.targetId) }>
          {/* ref='yesDelete'> */}
            YES
        </button>
        <button
          className='deleteNo'
          onClick={ props.noAction }>
            NO
        </button>
      </div>
    </div>
  )
}

export default Modal;
