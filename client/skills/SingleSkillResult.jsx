import React, {Component} from 'react';

import ListItem from 'material-ui/lib/lists/list-item';
import Colors from 'material-ui/lib/styles/colors';

export default class SingleSkillResult extends Component {

  render() {
    const pr = this.props.skill.pr ? <span><img src="/images/pr-icon.png" className='icon pr' data-tip="PR"/></span> : '';
    return (
      <a href={`/skill/${this.props.skill._id}`}>
       <ListItem
          primaryText={
            <p>
              {this.props.skill.skillname}
              {pr}
            </p>
          }
          secondaryText={
            <p>
              {this.props.skill.skillresult}
            </p>
          }
        />
        </a>
    )
  }
}

