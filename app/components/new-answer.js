import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    answerSave1() {
      var params = {
        user:this.get('author') ? this.get('author') : "",
        content:this.get('content') ? this.get('content') : "",
        question:this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('answerSave2', params);
    }
  }
});
