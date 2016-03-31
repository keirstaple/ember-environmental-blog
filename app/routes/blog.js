import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog', params.blog_id);
  },

  actions: {
    update(blog, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          blog.set(key, params[key]);
        }
      });
      blog.save();
      this.transitionTo('index');
    },
    destroyPost(blog) {
      blog.destroyPost();
      this.transitionTo('index');
    },

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var blog = params.blog;
      blog.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return blog.save();
      });
      this.transitionTo('blog', params.blog);
    }
  }
});
