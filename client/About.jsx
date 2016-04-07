import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component{

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return(
        <ReactCSSTransitionGroup
          component='div'
          transitionName='route'
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionLeaveTimeout={400}
          transitionAppear={true}>
          <h1>About Us</h1>
          <p>Immediately regret falling into bathtub scream at teh bath cat is love, cat is life so walk on car leaving trail of paw prints on hood and windshield. Scratch at the door then walk away poop in the plant pot. Plan steps for world domination refuse to leave cardboard box hide when guests come over, stare at the wall, play with food and get confused by dust hide at bottom of staircase to trip human. Curl into a furry donut thinking longingly about tuna brine meow, or cough furball pee in human's bed until he cleans the litter box yet hack up furballs tuxedo cats always looking dapper. Please stop looking at your phone and pet me chirp at birds for meow. Use lap as chair run outside as soon as door open human give me attention meow sit on the laptop. Scratch the furniture stare at the wall, play with food and get confused by dust intently stare at the same spot damn that dog.</p>
          <button onClick={this.setVar}>Sign Up</button>
      </ReactCSSTransitionGroup>
    )
  }
}
