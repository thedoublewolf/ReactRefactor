import Backbone from 'backbone';

let Model = Backbone.Model.extend({
  urlRoot: 'https://api.parse.com/1/classes/Todo',
  idAttribute: 'objectId'
});

let Collection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/Todo',
  model: Model,
  parse(data) {
    return data.results;
  }
});

export {Model};
export {Collection};

export default {Model, Collection};
