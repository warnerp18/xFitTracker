Meteor.methods({

  addWod(wodName, wodMovement){
    Wods.insert({
      wodname: wodName,
      wodmovement: wodMovement,
      createdAt: new Date(),
    });
  }
});

