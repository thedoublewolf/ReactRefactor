import React from 'react';
import _ from 'underscore';
import ListItem from './list_item';

let TodoList = React.createClass({

  getListItem(task) {
    let items = [];
    _.each(task, (value, key) => {
      if (key === 'task') {
        items.push(<ListItem key={key} field={value}/>);
      }
    });
    console.log(items);
    return items;
  },

  render() {
    return (
      <ul className='todo-list'>
        {this.getListItem(this.props.task)}
      </ul>
    );
  }

});

export default TodoList;