import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import parse from './parse_auth';
import Todo from './todo_model';
import TodoView from './todo_view';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': parse.APP_ID,
    'X-Parse-REST-API-Key': parse.API_KEY
  }
});

let todos = new Todo.Collection();

todos.fetch().then(function() {
  
  $('body').append(new TodoView(todos).render().$el);

});


console.log('Hello, World');
