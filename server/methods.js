import { Meteor } from 'meteor/meteor';

Meteor.methods({
  addResolution(resolution){
  if(!Meteor.userId()){
    throw new Meteor.Error('not-authorized');
  }
    Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId(),
    });
  },

  //Toggles the completed checkbox on Form
  //resolution parameter is acutal resolution object
  toggleResolution(resolution){
  if(Meteor.userId() !== resolution.user){
    throw new Meteor.Error('not-authorized');
  }
    //Resolutions is the database collection
    Resolutions.update(resolution._id, {
      //this will set the checkbox to the opposite of its current status
      //true/false
      $set: {complete: !resolution.complete}
    });
  },

  //Deletes the resolution-ResulutionSingle.jsx
  deleteResolution(resolution){
  if(Meteor.userId() !== resolution.user){
    throw new Meteor.Error('not-authorized');
  }
    Resolutions.remove(resolution._id);
  },
});

Meteor.startup(() => {
  // code to run on server at startup
});
