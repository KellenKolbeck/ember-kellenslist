import Ember from 'ember';

export default Ember.Component.extend({
  categoryRecord: "",
  actions: {
    setCategoryInput(category) {
      var categoryName = category.get('category_name');
      this.set("categoryRecord", category);
      $("input.category-input").val(categoryName);
    },
    addPost() {
      var params = {
        category: this.categoryRecord,
        post_name: this.get('post-name'),
        post_body: this.get('post-body'),
        post_images: this.get('post-image'),
        created_at: new Date()
      };
      this.sendAction("addPost", params);
    }
  }
});
