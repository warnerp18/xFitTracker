import React, {Component} from 'react';

import ListItem from 'material-ui/lib/lists/list-item';
import Colors from 'material-ui/lib/styles/colors';

export default class SingleWodResult extends Component {

  render() {
    const isGirl = this.props.wod.girl ? <span>Is one of the 'Girls'</span> : '';
    const isHero = this.props.wod.hero ? <span>Hero Wod</span> : '';
    return (
        <a href={`/wod/${this.props.wod._id}`}>
      <ListItem
      primaryText={this.props.wod.wodname}
      secondaryText={
        <p>
        <span style={{color: Colors.darkBlack}}>
        {isGirl}
        {isHero}
        </span>
        {this.props.wod.wodmovement}
        </p>
      }
      />
      </a>
    )
  }
}
