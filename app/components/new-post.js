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
      var error = "";
      if(this.categoryRecord=== "") {
        error += '<div class="alert alert-danger">You must select a category</div>'
      };
      if(this.get('post-name') === "" || this.get('post-name') === undefined) {
        error += '<div class="alert alert-danger">You must enter a title for your post</div>'
      }
      if(this.get('post-body') === "" || this.get('post-body') === undefined) {
        error += '<div class="alert alert-danger">You must enter a body for your post</div>'
      }
      if(error!=="") {
        $(".main-container").prepend(error);
        $(".alert.alert-danger").delay(3000).fadeOut(1000, function() {$(this).remove();});
      } else {
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
  }
});
