import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      comment: this.store.findAll('comment'),
      blog: this.store.findAll('blog')
    })
  },

  actions: {
    destroyPost(blog) {
      blog.destroyRecord();
      this.transitionTo('index');
    },

    save(params) {
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('index');
    },

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transitionTo('index');
    },

    update(blog, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          blog.set(key,params[key]);
        }
      });
      blog.save();
      this.transitionTo('index');
    }
  }
});
