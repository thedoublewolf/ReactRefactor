import Backbone from 'backbone';

const TodoModel = Backbone.Model.extend({
  urlRoot: 'https://api.parse.com/1/classes/Todo',
  idAttribute: 'objectId',
  isComplete() {
    return !!this.get('completeAt');
  }
});

export default TodoModel;
