import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  votes: DS.attr(),
  answers: DS.hasMany('answers', {async:true})

});
