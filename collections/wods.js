Wods = new Mongo.Collection('wods');

Wods.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Wods.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
})


