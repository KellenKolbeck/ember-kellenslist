import Ember from 'ember';

export default Ember.Route.extend({
  model(post) {
  return this.store.findRecord('post', post.post_id);
  } 
});
