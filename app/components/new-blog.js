import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },

    save() {
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          date: this.get('date'),
          image: this.get('image'),
          content: this.get('content')
        }
      this.set('addNewBlog', false),
      this.sendAction('save', params)
    }
  }
});
