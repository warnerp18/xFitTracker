import React, {Component} from 'react';

export default class SingleWodResult extends Component {

  render() {
    const isGirl = this.props.wod.girl ? <span>Is a 'Girl'</span> : '';
    return (
      <li>
       {this.props.wod.wodname}<br />
       {this.props.wod.wodmovement}<br />
       {isGirl}
      </li>
    )
  }
}
