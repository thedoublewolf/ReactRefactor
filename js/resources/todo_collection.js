import Backbone from 'backbone';
import TodoModel from './todo_model';

const TodoCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/Todo',
  model: TodoModel,
  parse(data) {
    return data.results;
  }
});

export default TodoCollection;
