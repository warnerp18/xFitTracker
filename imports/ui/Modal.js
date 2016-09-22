import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
  console.log(this.props.targetId);
    return (
      <div id="confirmDelete" className={this.props.modalclass}>
        <div className='container'>
          <p>{this.props.confirmMessage}</p>
          <button
            className='delete'
            onClick={ () => this.props.action(this.props.targetId) }
            ref='yesDelete'>
              YES
          </button>
          <button>NO</button>
        </div>
      </div>
    )
  }
}
