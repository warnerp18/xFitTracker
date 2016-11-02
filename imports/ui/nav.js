import React, { Component } from 'react';

import Accounts from './Accounts.js';

const Nav = (props) => {
  return (
    <div>
      <Accounts />
      <a href='#'>Add Skill</a>
      <a href='#'>See Skills</a>
    </div>
  )
}

export default Nav;
