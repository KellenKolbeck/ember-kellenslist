import Ember from 'ember';

export default Ember.Route.extend({
  model(post) {
    return this.store.findAll('category');
  },
  actions: {
    addPost(params) {
      var newPost = this.store.createRecord('post', params);
      var postCategory = params.category;
      postCategory.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return postCategory.save()
      });
      this.transitionTo('admin');
      $("input").val("");
      $(".main-container").prepend('<div class="alert alert-success">Your post has been added</div>');
      $(".alert.alert-success").delay(3000).fadeOut(1000, function() {$(this).remove();});
    }
  }
});
