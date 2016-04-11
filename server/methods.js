Meteor.methods({
  addWod(wodName, wodMovement){
  //If not signed in User will not be allowed to insert to database
  if(!Meteor.userId()){
    throw new Meteor.Error('not authorized')
  }
    Wods.insert({
      wodname: wodName,
      wodmovement: wodMovement,
      createdAt: new Date(),
      user: Meteor.userId(),
    });
  }
});

