import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Lifts = new Mongo.Collection('lifts');

Meteor.methods({
  'lifts.insert'(liftName, liftPR, liftResult){
    check(liftName, String);

    if( !this.userId ){
      throw new Meteor.Error('not-authorized');
    }

    Lifts.insert({
      liftName,
      liftPR,
      checked: false,
      liftResult,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },

  'lifts.remove'(liftId){
    console.log('liftid: ', liftId);
    check(liftId, String);

    Lifts.remove(liftId);
  },

  'lifts.setChecked'(liftId, setChecked){
     check(liftId, String);
     check(setChecked, Boolean);

     Lifts.update(liftId, { $set: {checked: setChecked } });
  },
});
