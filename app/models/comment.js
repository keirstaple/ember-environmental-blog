import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  comment: DS.attr(),
  blog: DS.belongsTo('blog', {async: true})
});
