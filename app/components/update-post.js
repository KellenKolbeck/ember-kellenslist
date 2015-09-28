import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    showUpdateForm() {
      this.set('updateForm', true);
    },

    update(post) {
      var params = {
        post_name: this.get('post-name'),
        post_body: this.get('post-body')
      };
      this.set('updateForm', false);
      this.sendAction('update', post, params);
    },

    delete(post) {
      this.sendAction('delete', post);
    }
  }
});
