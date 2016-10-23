import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    console.log(this);
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
          <button
            className='deleteNo'
            onClick={ this.props.noAction }
            >NO</button>
        </div>
      </div>
    )
  }
}
