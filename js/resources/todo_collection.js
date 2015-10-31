import Backbone from 'backbone';
import TodoModel from './todo_model';
import {APP_URL} from '../parse_auth';

const TodoCollection = Backbone.Collection.extend({
  url: APP_URL,
  model: TodoModel,
  parse(data) {
    return data.results;
  }
});

export default TodoCollection;
