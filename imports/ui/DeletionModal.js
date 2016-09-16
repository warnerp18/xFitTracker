import React, { Component } from 'react';

export default class DeletionModal extends Component {
  render() {
    console.log(this);
    return (
      <div id="confirmDelete" className={this.props.modalclass}>
        <div className='container'>
          <p>Are you sure you want to delete?</p>
          <button
            className='delete'
            onClick={ this.props.deleteLift }
            ref='yesDelete'>
              YES
          </button>
          <button>NO</button>
        </div>
      </div>
    )
  }
}
