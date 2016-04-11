Meteor.publish('allWods', function() {
  return Wods.find();
});

Meteor.publish('userWods', function() {
  return Wods.find({user: this.userId})
});
