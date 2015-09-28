import Ember from 'ember';

export default Ember.Route.extend({
  model(post) {
    return this.store.findRecord('post', post.post_id);
  },

  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined && params[key]!=="") {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('post');
    },

    delete(post) {
      var category = post.category;
      post.destroyRecord().then(function() {
        category.save()
      });
      this.transitionTo('category', category.category_id);
      $(".main-container").prepend('<div class="alert alert-success">Your post has been deleted</div>');
      $(".alert.alert-success").delay(3000).fadeOut(1000, function() {$(this).remove();});
    }

  }
});
