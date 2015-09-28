import DS from 'ember-data';

export default DS.Model.extend({
  post_name: DS.attr(),
  post_body: DS.attr(),
  post_images: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  created_at: DS.attr()
});
