Meteor.publish('allWods', function() {
  return Wods.find();
});
