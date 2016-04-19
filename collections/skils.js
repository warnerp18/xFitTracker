Skills = new Mongo.Collection('skills');

Skills.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Skills.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
