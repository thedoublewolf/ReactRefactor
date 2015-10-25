import Backbone from 'backbone';

const TodoModel = Backbone.Model.extend({
  urlRoot: 'https://api.parse.com/1/classes/Todo',
  idAttribute: 'objectId'
});

export default TodoModel;
