import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class Accounts extends Component {
  componentDidMount() {
    //Meteor Blaze o Render login Buttons
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnMount() {
    Blaze.remove(this.view);
  }
  render() {
    return <span ref='container' />;
  }
}
