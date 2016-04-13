import React, {Component} from 'react';

import Home from './Home.jsx';
import SignIn from './SignIn.jsx';


export default class App extends Component {
  render() {
    let layout;
    if (Meteor.userId()){
      layout = <Home />
    } else {
      layout = <SignIn />;
    }
    return (
      layout
    )
  }
}
