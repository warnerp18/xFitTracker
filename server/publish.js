Meteor.publish('allWods', function() {
  return Wods.find();
});

Meteor.publish('userWods', function() {
  return Wods.find({user: this.userId})
});

Meteor.publish('allResults', function(){
  return SKills.find();
});

Meteor.publish('userResults', function(){
  return Skills.find({user: this.userId})
});
