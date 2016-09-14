import Ember from 'ember';

export default Ember.Component.extend({
  editAnswerForm: false,
  actions: {
    editAnswerForm() {
      this.set('editAnswerForm', true);
    },
    editAnswer(answer) {
      var params = {
        author:this.get('author'),
        text:this.get('text'),
        question:this.get('question')
      };
      this.set('editAnswerForm', false);
      this.sendAction('editAnswer', answer, params);
    }
  }
});
