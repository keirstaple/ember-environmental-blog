import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    delete(blog) {
      if(confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', blog);
      }
    },
    update(blog, params) {
      this.sendAction('update', blog, params);
    }
  }
});
