import React, {Component} from 'react';

export default class SingleWodResult extends Component {

  render() {
    const isGirl = this.props.wod.girl ? <span>Is one of the 'Girls'</span> : '';
    const isHero = this.props.wod.hero ? <span>Hero Wod</span> : '';
    return (
      <li>
       {this.props.wod.wodname}<br />
       {this.props.wod.wodmovement}<br />
       {isGirl}
       {isHero}
      </li>
    )
  }
}
