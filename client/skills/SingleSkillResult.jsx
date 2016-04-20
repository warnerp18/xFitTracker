import React, {Component} from 'react';

import ListItem from 'material-ui/lib/lists/list-item';
import Colors from 'material-ui/lib/styles/colors';

export default class SingleSkillResult extends Component {

  render() {
    const pr = this.props.skill.pr ? <div>I PRed</div> : '';
    return (
       <ListItem
          primaryText={this.props.skill.skillname}
          secondaryText={
            <p>
            {pr}
              {this.props.skill.skillresult}
            </p>
          }
        />
    )
  }
}

