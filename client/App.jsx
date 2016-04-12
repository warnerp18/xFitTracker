import React, {Component} from 'react';

import Home from './Home.jsx';


export default class App extends Component {
  render() {
    let layout;
    if (Meteor.userId()){
      layout = <Home />;
    } else {
      layout = <Home />

    }
    return (
      layout
    )
  }
}
