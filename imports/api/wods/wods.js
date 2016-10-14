import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Check } from 'meteor/check';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export const Wods = new Mongo.Collection('wods');

Meteor.methods({
  'wod.insert'(wodName, ...movements){
  console.log(movements);
    Wods.insert({
      wodName,
      movements: movements,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  }
})

if(Meteor.isServer){
  Meteor.publish('wods', function wodsPublication(){
    return Wods.find({owner: this.userId});
  });
}


Wods.helpers ({
  //helper function. Maps over individial wods and returns the movement
  getMovements: function() {
    return this.movements.map( (movement, i)=> <p key={i}>{movement}</p>);
  }
})
