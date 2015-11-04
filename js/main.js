import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import parse from './parse_auth';
// import {TodoCollection} from './resources';
// import {TodoView} from './views';

import React from 'react';
import ReactDom from 'react-dom';

import Wrapper from './react_views/wrapper';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': parse.APP_ID,
    'X-Parse-REST-API-Key': parse.API_KEY
  }
});

// let todos = new TodoCollection();

// todos.fetch().then(function() {
  
//   $('.wrapper').html(new TodoView(todos).render().$el);

// });
let wrapper = document.querySelector('.wrapper');

ReactDom.render(
  <Wrapper/>,
  wrapper
);

console.log('Hello, World');
