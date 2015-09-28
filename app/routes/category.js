import Ember from 'ember';

export default Ember.Route.extend({
  model(category) {
    return this.store.findRecord('category', category.category_id);
  }
});
