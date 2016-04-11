import React, {Component} from 'react';

export default class SingleWodResult extends Component {

  render() {
    console.log(this);
    return (
      <li>
       {this.props.wod.wodname}<br />
       {this.props.wod.wodmovement}
      </li>
    )
  }
}
