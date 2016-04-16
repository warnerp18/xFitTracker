import React, {Component} from 'react';

import TextField from 'material-ui/lib/text-field';

export default class SingleWodInput extends Component {
  render() {
    return (
      <div>
        <TextField
          ref='WodMovement'
          hintText="Movement"
          floatingLabelText="Movement"
          className='input wodform movement'
        />
      </div>
    )
  }
}
