import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(comment, params) {
      this.sendAction('saveComment', comment, params);
    }
  }
});
