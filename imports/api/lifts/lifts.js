import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Lifts = new Mongo.Collection('lifts');

var Schemas = {};

Schemas.Lifts = new SimpleSchema({
  liftName: {
    type: String,
    label: "Lift Name",
    max: 200,
  },
  liftPR: {
    type: Boolean,
    label: "Lift PR?",
    optional: true,
  },
  liftResult: {
    type: String,
    label: "Lift Result",
    max: 200,
  },
  createdAt: {
    type: Date,
    label: 'Date this document was created',
    optional: false,
  },
  owner: {
    type: String,
    label: 'The Meteor User ID',
  },
  username: {
    type: String,
  },
});
Lifts.attachSchema(Schemas.Lifts);

if (Meteor.isServer) {
  Meteor.publish('lifts', function listsPublication() {
    return Lifts.find({owner: this.userId});
  });
}

Meteor.methods({
  'lifts.insert'(liftName, liftPR, liftResult){
    check(liftName, String);
    check(liftResult, String);
    check(liftPR, Boolean);

    if( !this.userId ){
      throw new Meteor.Error('not-authorized');
    }

    Lifts.insert({
      createdAt: new Date(),
      liftName,
      liftPR,
      liftResult,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },

  'lift.update'(liftId, liftName, liftPR, liftResult){
    console.log('lift.update: liftId- ', liftId);
    console.log(`${liftName} ${liftPR} ${liftResult}`)
  },

  'lifts.remove'(liftId){
    check(liftId, String);

    Lifts.remove(liftId);
  },

  //'lifts.setChecked'(liftId, setChecked){
     //check(liftId, String);
     //check(setChecked, Boolean);

     //Lifts.update(liftId, { $set: {checked: setChecked } });
  //},
});
