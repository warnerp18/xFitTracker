import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Lifts = new Mongo.Collection('lifts');

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
      liftName,
      liftPR,
      liftResult,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
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
