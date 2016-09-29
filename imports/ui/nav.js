import React, { Component } from 'react';

import Accounts from './Accounts.js';

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <Accounts />
        <a href='#'>Add Skill</a>
        <a href='#'>See Skills</a>
      </div>
    )
  }
}
