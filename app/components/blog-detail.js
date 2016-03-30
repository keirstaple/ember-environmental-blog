import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(blog) {
      if (confirm("are you sure you want to delete?")) {
        this.sendAction('destroyPost', blog);
      }
    }
  }
});
