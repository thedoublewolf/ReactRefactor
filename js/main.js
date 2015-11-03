import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import parse from './parse_auth';
import {TodoCollection} from './resources';
// import {TodoView} from './views';

import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './react_views/todo_list';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': parse.APP_ID,
    'X-Parse-REST-API-Key': parse.API_KEY
  }
});

let todos = new TodoCollection();

todos.fetch().then(function() {
  
  $('.wrapper').html(new TodoList(todos).render().$el);

});


console.log('Hello, World');
